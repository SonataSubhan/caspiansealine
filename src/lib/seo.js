import { site } from "@/content/en/site";

/**
 * One metadata builder for every page.
 *
 * Pages describe themselves in three fields — title, description, path — and
 * this fills in the canonical URL, the Open Graph block, the Twitter card and
 * the robots directives. That is what stops page twelve from quietly shipping
 * without a canonical.
 *
 * `metadataBase` lives in the root layout, so every URL below can be relative.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  type = "website",
  image,
  noIndex = false,
  publishedTime,
  absoluteTitle = false,
} = {}) {
  const resolvedDescription = description || site.metaDescription;
  const ogImage = image || { url: "/og/default.jpg", width: 1200, height: 630, alt: site.name };

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
      canonical: path,
    },
    openGraph: {
      type,
      siteName: site.name,
      locale: "en",
      url: path,
      title: socialTitle,
      description: resolvedDescription,
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: resolvedDescription,
      images: [ogImage.url],
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

/** Absolute URL for structured data, which may not use relative paths. */
export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
