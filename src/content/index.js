import * as az from "./az";
import * as en from "./en";

/**
 * The language registry.
 *
 * Two rules make the whole site bilingual without a single `if (locale ===
 * "az")` anywhere in a component:
 *
 *   1. Both dictionaries export the same names. A page asks for `home` and
 *      gets the reader's `home`; it never learns that two exist.
 *   2. English has no URL prefix. `/services` is English, `/az/services` is
 *      Azerbaijani. That keeps every link already published pointing at the
 *      same page it always did — changing them would throw away the site's
 *      existing indexing for nothing.
 *
 * Adding Russian later is a folder, a barrel, and one entry in `locales`.
 */
export const locales = ["en", "az"];
export const defaultLocale = "en";

/** How each language names itself. A picker never labels a language in another. */
export const localeNames = {
  en: { code: "EN", name: "English", htmlLang: "en", hreflang: "en" },
  az: { code: "AZ", name: "Azərbaycan", htmlLang: "az", hreflang: "az" },
};

/**
 * Rewrite every internal `href` in a dictionary so it points inside that
 * language's tree.
 *
 * The language files carry unprefixed paths — `/services`, `/network#ports` —
 * exactly as English does. Prefixing them by hand would mean writing `/az` in
 * front of a hundred links in the Azerbaijani files and getting one of them
 * wrong, which is a link that silently drops the reader back into English.
 *
 * Done once here, at the point where a dictionary is chosen, it cannot be
 * forgotten and no component or page has to know about it. `tel:`, `mailto:`,
 * `#anchor` and absolute URLs are left alone.
 */
function prefixHrefs(value, prefix) {
  if (Array.isArray(value)) return value.map((item) => prefixHrefs(item, prefix));

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [
        key,
        key === "href" && typeof entry === "string" && entry.startsWith("/")
          ? `${prefix}${entry}`
          : prefixHrefs(entry, prefix),
      ])
    );
  }

  return value;
}

/**
 * Both dictionaries are PLAIN objects, never the module namespaces themselves.
 *
 * `import * as en` gives a Module object, and React refuses to serialise one
 * across the server/client boundary — "Only plain objects can be passed to
 * Client Components". The header is a Client Component, so the spread is not
 * cosmetic: without it the whole site renders a 500 in English and works in
 * Azerbaijani, because the Azerbaijani dictionary was already being rebuilt by
 * `prefixHrefs`.
 */
const dictionaries = {
  en: { ...en },
  az: prefixHrefs({ ...az }, "/az"),
};

export function isLocale(value) {
  return locales.includes(value);
}

/** The dictionary for a locale, falling back to the default for anything else. */
export function getContent(locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/**
 * A path in a given language.
 *
 *   localeHref("en", "/services")  → "/services"
 *   localeHref("az", "/services")  → "/az/services"
 *   localeHref("az", "/")          → "/az"
 *
 * Slugs are deliberately identical in both languages. Translating them would
 * mean a lookup table between every pair of URLs, and it would break the one
 * thing a language switcher must always do: land the reader on the same page
 * they were already reading.
 */
export function localeHref(locale, path = "/") {
  const clean = path === "/" ? "" : path;
  if (locale === defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}

/** Every language's URL for one path — used for hreflang and the switcher. */
export function localeAlternates(path = "/") {
  return Object.fromEntries(locales.map((locale) => [locale, localeHref(locale, path)]));
}
