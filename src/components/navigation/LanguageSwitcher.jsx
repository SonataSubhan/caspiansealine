"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Icon from "@/components/primitives/Icon";
import { localeHref, localeNames, locales } from "@/content";

/**
 * The language switcher.
 *
 * The rule it exists to satisfy: switching language must land the reader on
 * the same page they were reading, never on the home page. Because both
 * languages use identical slugs, that is a matter of stripping the prefix off
 * the current path and putting the other one on — no lookup table between
 * translated URLs, and nothing to maintain when a page is added.
 *
 * It reads the path from the browser rather than from a prop because the
 * header is one component shared by every route; a prop would have to be
 * threaded through every page to say something the URL already says.
 *
 * The current language is a `<span>`, not a link: a link that goes nowhere is
 * a link a keyboard user has to tab past for nothing.
 */
export default function LanguageSwitcher({ locale, label }) {
  const pathname = usePathname() || "/";

  /* Strip whichever prefix is on the current URL to get the shared path.
     `/az/services` and `/services` both reduce to `/services`. */
  const bare =
    locales.reduce(
      (path, code) =>
        path === `/${code}` ? "/" : path.startsWith(`/${code}/`) ? path.slice(code.length + 1) : path,
      pathname
    ) || "/";

  return (
    <nav className="lang-switch" aria-label={label}>
      <Icon name="globe" className="header-utility__icon" />
      <ul className="lang-switch__list" role="list">
        {locales.map((code) => {
          const active = code === locale;
          const name = localeNames[code];

          return (
            <li key={code}>
              {active ? (
                <span className="lang-switch__item" aria-current="true" lang={name.htmlLang}>
                  {name.code}
                </span>
              ) : (
                <Link
                  className="lang-switch__item"
                  href={localeHref(code, bare)}
                  hrefLang={name.hreflang}
                  lang={name.htmlLang}
                  /* The other language is a different document, so the reader
                     should get it fresh rather than a client-side patch of the
                     current one. */
                  prefetch={false}
                >
                  {name.code}
                  <span className="visually-hidden"> — {name.name}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

