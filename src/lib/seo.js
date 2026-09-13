import { defaultLocale, getContent, localeAlternates, localeHref } from "@/content";

/**
 * One metadata builder for every page.
 *
 * Pages describe themselves in three fields — title, description, path — and
 * this fills in the canonical URL, the Open Graph block, the Twitter card and
 * the robots directives. That is what stops page twelve from quietly shipping
 * without a canonical.
 *
 * `metadataBase` lives in the root layout, so every URL below can be relative.
 *
 * `locale` decides three things at once: which language's fallback description
 * is used, where the canonical points, and the `hreflang` set that tells a
 * search engine these two pages are the same page in two languages rather than
 * two competing pages. Omitting the hreflang pair is the classic way a
 * bilingual site ends up with each language suppressing the other.
 *
 * The share IMAGE is deliberately not set here. Next adds the card produced by
 * the route's `opengraph-image.js` automatically — but only while this file
 * leaves `openGraph.images` alone, because an explicit value wins over the file
 * convention. Pass `image` only to override a route with a real photograph.
 */
export function buildMetadata({
  locale = defaultLocale,
  title,
  description,
  path = "/",
  type = "website",
  image,
  noIndex = false,
  publishedTime,
  absoluteTitle = false,
} = {}) {
  const { site } = getContent(locale);
  const resolvedDescription = description || site.metaDescription;
  const alternates = localeAlternates(path);

  /* Open Graph has no title template, so the brand is appended here — unless
     the page already carries it (the home page does), which would otherwise
     produce "Caspian Sea Line … | Caspian Sea Line". */
  const socialTitle = !title
    ? site.name
    : absoluteTitle || title.includes(site.name)
      ? title
      : `${title} | ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: resolvedDescription,
    alternates: {
      canonical: localeHref(locale, path),
      /* Both languages, plus x-default pointing at English for a reader whose
         language matches neither. */
      languages: { ...alternates, "x-default": alternates[defaultLocale] },
    },
    openGraph: {
      type,
      siteName: site.name,
      locale: locale === "az" ? "az_AZ" : "en_GB",
      alternateLocale: Object.keys(alternates)
        .filter((code) => code !== locale)
        .map((code) => (code === "az" ? "az_AZ" : "en_GB")),
      url: localeHref(locale, path),
      title: socialTitle,
      description: resolvedDescription,
      ...(image ? { images: [image] } : {}),
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: resolvedDescription,
      ...(image ? { images: [image.url ?? image] } : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

/**
 * Trim a description to the length a search result actually shows.
 *
 * Google renders roughly 155–160 characters on desktop. A hard `.slice()`
 * stops mid-word, which looks like a bug in the one piece of copy a searcher
 * reads before deciding to click. This cuts at the last full sentence when one
 * fits, and at a word boundary otherwise.
 */
export function trimDescription(text, max = 155) {
  const clean = String(text).replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;

  const window = clean.slice(0, max + 1);
  const sentenceEnd = Math.max(window.lastIndexOf(". "), window.lastIndexOf("? "), window.lastIndexOf("! "));

  /* A sentence break is only worth taking if it leaves a useful description
     behind; below about 60% of the budget the summary loses too much. */
  if (sentenceEnd > max * 0.6) return clean.slice(0, sentenceEnd + 1);

  const wordEnd = window.lastIndexOf(" ");
  const truncated = clean
    .slice(0, wordEnd > 0 ? wordEnd : max)
    /* A description that stops on "…and" or "…to the" reads as broken text
       rather than as a summary, so the dangling word goes too. */
    .replace(/[,;:—–-]$/, "")
    .replace(/\s+(?:and|or|but|with|to|for|of|the|a|an|in|on|at|by|from|as|that)$/i, "");

  return `${truncated}…`;
}

/**
 * Absolute URL for structured data, which may not use relative paths.
 *
 * The origin is the same in both languages — one site, one domain — so this
 * reads it from the default dictionary rather than taking a locale.
 */
export function absoluteUrl(path = "/") {
  return new URL(path, getContent(defaultLocale).site.url).toString();
}
