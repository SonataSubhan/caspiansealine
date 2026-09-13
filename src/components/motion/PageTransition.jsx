"use client";

import { ViewTransition } from "react";
import { usePathname } from "next/navigation";

/**
 * The cross-fade between routes.
 *
 * React's `<ViewTransition>` drives the browser's View Transitions API: it
 * hands the browser a snapshot of the outgoing page and one of the incoming
 * page, and the two `::view-transition-*` pseudo-elements are then animated in
 * CSS. All of the timing lives in `app/styles/motion.css`; nothing here says
 * how the transition looks.
 *
 * `key={pathname}` is what makes it a transition rather than an in-place
 * update. This component sits in the root layout, and a layout persists across
 * navigations — without a changing key React would see the same element and
 * neither the exit nor the enter animation would ever fire.
 *
 * This is a Client Component only because it needs `usePathname()`. The pages
 * arrive as the `children` prop, already rendered on the server, so nothing
 * inside is converted to client rendering and no page JavaScript is shipped.
 *
 * In a browser without the View Transitions API the navigation simply happens,
 * instantly and without error. Nothing depends on it.
 *
 * It renders the `<main>` landmark itself because `<ViewTransition>` names a
 * single DOM element, and a page is a fragment of sections rather than one
 * element. Naming `<main>` also means the header, the footer and the page
 * background sit outside the transition and stay put while the content
 * changes — which is the point of the effect.
 */
export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <ViewTransition key={pathname} name="page">
      <main id="main">{children}</main>
    </ViewTransition>
  );
}
