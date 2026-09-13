"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Icon from "@/components/primitives/Icon";
import Logo from "@/components/primitives/Logo";
import Button from "@/components/primitives/Button";
import Media from "@/components/primitives/Media";
import LinkArrow from "@/components/primitives/LinkArrow";
import Eyebrow from "@/components/primitives/Eyebrow";
import Container from "@/components/layout/Container";
import MobileDrawer from "./MobileDrawer";
import LanguageSwitcher from "./LanguageSwitcher";
import { localeHref } from "@/content";

const HOVER_OPEN_DELAY = 90;
const HOVER_CLOSE_DELAY = 180;

/**
 * The site header: utility bar, primary bar, three mega-menu panels and the
 * mobile drawer.
 *
 * It is a Client Component because the menus need state — but it is still
 * server-rendered into the static HTML at build time, so the navigation is in
 * the markup for crawlers and for anyone with JavaScript disabled: every
 * trigger has a real `href` counterpart in the drawer, and every mega-menu
 * link is a plain <Link>.
 *
 * The panels are hidden with `visibility`, not `display`, so they can animate;
 * `inert` keeps a closed panel out of the tab order regardless.
 */
export default function SiteHeader({ locale, content }) {
  const { primaryNav, utilityNav, site, ui } = content;
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const hoverTimer = useRef(null);
  const headerRef = useRef(null);
  const pathname = usePathname();

  /* Any navigation closes every panel.
     Adjusting state during render rather than in an effect: React re-runs the
     component immediately with the corrected state, so the menu never paints
     open on the new page. */
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenMenu(null);
    setDrawerOpen(false);
  }

  /* Sticky state — one rAF-throttled listener, no style writes from JS. */
  useEffect(() => {
    let ticking = false;

    const update = () => {
      setScrolled(window.scrollY > 8);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Escape closes the open panel and returns focus to its trigger. */
  useEffect(() => {
    if (!openMenu) return undefined;

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      const trigger = document.getElementById(`trigger-${openMenu}`);
      setOpenMenu(null);
      if (trigger) trigger.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openMenu]);

  /* Focus or a click outside the header closes the panel — a keyboard user is
     never stranded behind an invisible menu. */
  useEffect(() => {
    if (!openMenu) return undefined;

    const onOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setOpenMenu(null);
    };

    document.addEventListener("focusin", onOutside);
    document.addEventListener("click", onOutside);
    return () => {
      document.removeEventListener("focusin", onOutside);
      document.removeEventListener("click", onOutside);
    };
  }, [openMenu]);

  useEffect(() => () => window.clearTimeout(hoverTimer.current), []);

  const openOnHover = useCallback((id) => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpenMenu(id), HOVER_OPEN_DELAY);
  }, []);

  const closeOnHover = useCallback((id) => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      setOpenMenu((current) => (current === id ? null : current));
    }, HOVER_CLOSE_DELAY);
  }, []);

  const isCurrent = (href) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <>
      <header className="site-header" ref={headerRef} data-scrolled={scrolled ? "true" : "false"}>
        <div className="header-utility">
          <Container className="header-utility__inner">
            <ul className="header-utility__list header-utility__list--primary" role="list">
              {utilityNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <Icon name={item.icon} className="header-utility__icon" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="header-utility__list header-utility__list--secondary" role="list">
              <li>
                <a href={site.contact.phoneHref}>
                  <Icon name="phone" className="header-utility__icon" />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <LanguageSwitcher locale={locale} label={ui.a11y.languageLabel} />
              </li>
            </ul>
          </Container>
        </div>

        <div className="header-main">
          <Container className="header-main__inner">
            <Logo variant="navy" href={localeHref(locale, "/")} label={ui.a11y.homeLink} />

            <nav className="nav-primary" aria-label={ui.a11y.primaryNav}>
              <ul className="nav-primary__list" role="list">
                {primaryNav.map((item) =>
                  item.groups ? (
                    <li
                      className="nav-primary__item"
                      key={item.id}
                      data-open={openMenu === item.id ? "true" : "false"}
                      onMouseEnter={() => openOnHover(item.id)}
                      onMouseLeave={() => closeOnHover(item.id)}
                    >
                      <button
                        className="nav-primary__trigger"
                        id={`trigger-${item.id}`}
                        type="button"
                        aria-expanded={openMenu === item.id}
                        aria-controls={`mega-${item.id}`}
                        onClick={() => setOpenMenu((current) => (current === item.id ? null : item.id))}
                      >
                        {item.label}
                        <Icon name="chevron-down" className="nav-primary__chevron" />
                      </button>
                    </li>
                  ) : (
                    <li className="nav-primary__item" key={item.id}>
                      <Link
                        className="nav-primary__trigger"
                        href={item.href}
                        aria-current={isCurrent(item.href) ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <div className="header-actions">
              <Link
                className="icon-btn"
                href={localeHref(locale, "/contact")}
                aria-label={ui.a11y.contactUs}
              >
                <Icon name="mail" />
              </Link>
              <Button className="header-cta" href={localeHref(locale, "/quote")} arrow>
                {ui.common.getQuote}
              </Button>
              <button
                className="icon-btn header-burger"
                type="button"
                aria-label={ui.a11y.openMenu}
                aria-expanded={drawerOpen}
                aria-controls="site-drawer"
                onClick={() => setDrawerOpen(true)}
              >
                <Icon name="menu" />
              </button>
            </div>
          </Container>
        </div>

        {/* Panels sit outside the bars so they can span the full viewport
            width while staying inside the header's stacking context. */}
        {primaryNav
          .filter((item) => item.groups)
          .map((item) => {
            const open = openMenu === item.id;

            return (
              <div
                className="megamenu"
                id={`mega-${item.id}`}
                key={item.id}
                data-open={open ? "true" : "false"}
                inert={!open}
                onMouseEnter={() => openOnHover(item.id)}
                onMouseLeave={() => closeOnHover(item.id)}
              >
                <Container className="megamenu__inner">
                  <div className="megamenu__groups">
                    {item.groups.map((group) => (
                      <div key={group.title}>
                        <p className="megamenu__group-title">{group.title}</p>
                        <ul className="megamenu__list" role="list">
                          {group.links.map((link) => (
                            <li key={link.href + link.label}>
                              <Link className="megamenu__link" href={link.href}>
                                {link.strong ? <strong>{link.label}</strong> : link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {item.feature ? (
                    <div className="megamenu__feature">
                      <Media locale={locale}
                        slot={item.feature.image.slot}
                        width={item.feature.image.width}
                        height={item.feature.image.height}
                        ratio="wide"
                      />
                      <Eyebrow>{item.feature.eyebrow}</Eyebrow>
                      <p className="t-h5">{item.feature.title}</p>
                      <p className="t-body-s t-muted">{item.feature.text}</p>
                      <LinkArrow href={item.feature.href}>{item.feature.linkLabel}</LinkArrow>
                    </div>
                  ) : null}
                </Container>
              </div>
            );
          })}
      </header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        locale={locale}
        content={content}
      />
    </>
  );
}
