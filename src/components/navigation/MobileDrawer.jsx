"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import Icon from "@/components/primitives/Icon";
import Logo from "@/components/primitives/Logo";
import Button from "@/components/primitives/Button";
import { localeHref } from "@/content";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

const CLOSE_ANIMATION_MS = 420;

/**
 * The mobile navigation drawer.
 *
 * Carries the complete navigation tree — the same source as the desktop mega
 * menus — because a phone user should not get a reduced site.
 *
 * Dialog behaviour is done properly: focus moves in on open and returns to the
 * trigger on close, Tab is trapped inside, Escape closes, the page behind is
 * scroll-locked, and `inert` keeps the closed drawer out of the tab order
 * while it is still translated off-screen.
 */
export default function MobileDrawer({ open, onClose, locale, content }) {
  const { primaryNav, utilityNav, ui } = content;
  const drawerRef = useRef(null);
  const previouslyFocused = useRef(null);
  const [openSection, setOpenSection] = useState(null);

  /* Scroll lock on the body while the drawer is open. */
  useEffect(() => {
    document.body.dataset.scrollLocked = open ? "true" : "false";
    return () => {
      document.body.dataset.scrollLocked = "false";
    };
  }, [open]);

  /* Move focus in on open, return it on close. */
  useEffect(() => {
    if (open) {
      previouslyFocused.current = document.activeElement;
      const first = drawerRef.current?.querySelector(FOCUSABLE);
      if (first) first.focus();
      return undefined;
    }

    const target = previouslyFocused.current;
    if (!target) return undefined;

    const timer = window.setTimeout(() => target.focus(), CLOSE_ANIMATION_MS);
    return () => window.clearTimeout(timer);
  }, [open]);

  /* Escape to close, Tab trapped inside. */
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;

      const items = Array.from(drawerRef.current.querySelectorAll(FOCUSABLE)).filter(
        (element) => element.offsetParent !== null
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  /* Growing past the mobile breakpoint with the drawer open would strand it. */
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1100px)");
    const onChange = (event) => {
      if (event.matches && open) onClose();
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [open, onClose]);

  return (
    <>
      <div
        className="drawer-overlay"
        data-open={open ? "true" : "false"}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="drawer"
        id="site-drawer"
        ref={drawerRef}
        data-open={open ? "true" : "false"}
        inert={!open}
        role="dialog"
        aria-modal="true"
        aria-label={ui.a11y.siteMenu}
      >
        <div className="drawer__head">
          <Logo variant="navy" height="1.875rem" href={localeHref(locale, "/")} label={ui.a11y.homeLink} />
          <button className="icon-btn" type="button" aria-label={ui.a11y.closeMenu} onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>

        <div className="drawer__body">
          <div className="acc">
            {primaryNav.map((item) => {
              if (!item.groups) {
                return (
                  <div className="acc__item" key={item.id}>
                    <Link className="acc__trigger" href={item.href}>
                      {item.label}
                    </Link>
                  </div>
                );
              }

              const expanded = openSection === item.id;

              return (
                <div className="acc__item" key={item.id}>
                  <button
                    className="acc__trigger"
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`acc-${item.id}`}
                    onClick={() => setOpenSection(expanded ? null : item.id)}
                  >
                    {item.label}
                    <Icon name="chevron-down" />
                  </button>

                  <div className="acc__panel" id={`acc-${item.id}`} data-open={expanded ? "true" : "false"}>
                    <div>
                      {item.groups.map((group) => (
                        <div key={group.title}>
                          <p className="acc__group-title">{group.title}</p>
                          <ul className="acc__list" role="list">
                            {group.links.map((link) => (
                              <li key={link.href + link.label}>
                                <Link href={link.href}>{link.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="acc__item">
              <p className="acc__group-title">{ui.sections.quickLinks}</p>
              <ul className="acc__list" role="list">
                {utilityNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="drawer__foot">
          <Button href={localeHref(locale, "/quote")} block arrow>
            {ui.common.getQuote}
          </Button>
          <Button href={localeHref(locale, "/contact")} variant="secondary" block>
            {ui.a11y.contactUs}
          </Button>
        </div>
      </div>
    </>
  );
}
