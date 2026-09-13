/**
 * The facts that are the same in every language.
 *
 * A phone number, an email address and a domain do not get translated, so they
 * are defined once here and composed into each language's `site` object. The
 * alternative — a copy in `en/site.js` and another in `az/site.js` — guarantees
 * that one day the office number is corrected in one of them and not the other.
 *
 * Everything that IS language-dependent (the tagline, the descriptor, the
 * labels on the facts, the city name) lives in the language files.
 *
 * TODO(content): every value marked TODO must be confirmed by the client
 * before launch. See prototype/CONTENT-TODO.md for the full checklist.
 */

/**
 * The origin every absolute URL on the site is built from: the canonical link,
 * `og:image`, the sitemap and the JSON-LD `@id`s.
 *
 * This must be the domain the site is ACTUALLY served from. A share card is
 * fetched by WhatsApp, Telegram or LinkedIn from the absolute URL in
 * `og:image` — point that at a domain that is not serving the site and the
 * card silently disappears, leaving only the title and description.
 *
 * Resolution order:
 *   1. `NEXT_PUBLIC_SITE_URL` — set this in Vercel → Settings → Environment
 *      Variables the moment the real domain is live. It wins over everything.
 *   2. `VERCEL_PROJECT_PRODUCTION_URL` — the project's production domain,
 *      injected by Vercel at build time. It becomes the custom domain by
 *      itself once one is attached, and it stays the production domain on
 *      preview deployments, which is what a canonical should point at.
 *   3. The current production domain, for local builds.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  // TODO(content): replace with https://www.caspiansealine.com once that
  // domain is attached — or just set NEXT_PUBLIC_SITE_URL and leave this.
  return "https://caspiansealine.vercel.app";
}

export const siteUrl = resolveSiteUrl();

/** The company's name is a proper noun: identical in both languages. */
export const brand = {
  name: "Caspian Sea Line",
  legalName: "Caspian Sea Line", // TODO(content): exact registered name
};

/** Numbers, mailboxes and the postal identifiers. Never translated. */
export const contact = {
  // TODO(content): real numbers, addresses and mailboxes
  phone: "+994 12 000 00 00",
  phoneHref: "tel:+994120000000",
  emergencyPhone: "+994 12 000 00 01",
  emergencyPhoneHref: "tel:+994120000001",
  operationsEmail: "ops@caspiansealine.com",
  generalEmail: "info@caspiansealine.com",
  street: "TODO — street address",
  postalCode: "TODO",
  countryCode: "AZ",
};

export const social = [
  // TODO(content): real profile URLs, or delete the entry
  { label: "LinkedIn", icon: "linkedin", href: "#" },
  { label: "Facebook", icon: "facebook", href: "#" },
  { label: "Instagram", icon: "instagram", href: "#" },
  { label: "YouTube", icon: "youtube", href: "#" },
];
