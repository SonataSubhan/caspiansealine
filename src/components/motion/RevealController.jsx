"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * The scroll-reveal controller.
 *
 * Two IntersectionObservers for the whole site, mounted once in the root
 * layout.
 *
 *   ARRIVE — adds `data-revealed` when an element reaches the viewport,
 *            10% short of the bottom edge so it animates where the eye is.
 *   LEAVE  — removes it again, but only once the element is *completely* off
 *            screen. Re-hiding is instant (see motion.css) and invisible.
 *
 * The gap between the two margins is a 10% dead zone, which is what stops an
 * element parked at the boundary from flickering between the two states.
 *
 * The effect is that a section fades in every time it is scrolled to, not only
 * the first time — and never fades *out* in front of the reader.
 *
 * The animation itself is entirely in `app/styles/motion.css` — this file
 * decides *when*, never *how*. Nothing here reads a duration or a distance.
 *
 * Why not CSS scroll-driven animations (`animation-timeline: view()`)? They
 * need no JavaScript, but they scrub: progress is bound to scroll position
 * rather than to time, `animation-duration` is ignored, and the reveal is over
 * before the reader's eye arrives. This is about a kilobyte and gives a real
 * timed animation in every engine, Firefox included.
 *
 * Why not Framer Motion? It would turn every page that wanted a reveal into a
 * Client Component and add ~34 KB gzipped to a site whose entire point is that
 * it ships almost no JavaScript. The trade is not close.
 */

/* Mirrors the list at the top of `app/styles/motion.css`. The stylesheet hides
   these; this file un-hides them. Change one, change the other. */
const SELECTOR = [
  ".section > .container > *",
  ".split > *",
  ".grid > *",
  ".b-intro__grid > *",
  ".b-cta__inner > *",
].join(",");

/** An element counts as arrived once it is this far past the bottom edge. */
const ARRIVE_MARGIN = "0px 0px -10% 0px";

/** …and as gone only when it has left the viewport entirely. */
const LEAVE_MARGIN = "0px";

/** Siblings past this index all share the last delay step. */
const STAGGER_CAP = 5;

export default function RevealController() {
  const pathname = usePathname();
  const firstRun = useRef(true);

  useLayoutEffect(() => {
    const root = document.documentElement;

    /* The inline boot script hid the targets before first paint and armed a
       failsafe against React never mounting. Disarm it. */
    root.dataset.motionReady = "1";

    /* No `data-motion` means the boot script decided motion is off — reduced
       motion, no IntersectionObserver, or it never ran. Nothing is hidden, so
       there is nothing to reveal. */
    if (root.dataset.motion !== "on") return undefined;

    const arrive = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.dataset.revealed = "1";
        }
      },
      { rootMargin: ARRIVE_MARGIN, threshold: 0.01 }
    );

    const leave = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) delete entry.target.dataset.revealed;
        }
      },
      { rootMargin: LEAVE_MARGIN, threshold: 0 }
    );

    const candidates = document.querySelectorAll(SELECTOR);

    /* Siblings cascade. The index is counted here rather than written as
       nth-child rules so a row of any length stays correct. */
    const counters = new Map();

    /* On a route change the incoming page is already being cross-faded by the
       view transition; making its visible half fade in a second time on top of
       that reads as a stutter. So after the first load, anything on screen at
       arrival is simply shown. Below the fold still reveals on scroll. */
    const revealOnSight = !firstRun.current;
    firstRun.current = false;

    for (const element of candidates) {
      /* A container that holds other targets is not itself one — otherwise a
         grid would fade in while its cards fade in inside it, and the two
         opacities would multiply. Show it for good, unobserved, and let the
         children animate. */
      if (element.querySelector(SELECTOR)) {
        element.dataset.revealed = "1";
        continue;
      }

      const parent = element.parentElement;
      const index = counters.get(parent) ?? 0;
      counters.set(parent, index + 1);
      element.style.setProperty("--reveal-i", String(Math.min(index, STAGGER_CAP)));

      if (revealOnSight) {
        const box = element.getBoundingClientRect();
        if (box.top < window.innerHeight && box.bottom > 0) element.dataset.revealed = "1";
      }

      arrive.observe(element);
      leave.observe(element);
    }

    return () => {
      arrive.disconnect();
      leave.disconnect();
    };
  }, [pathname]);

  return null;
}
