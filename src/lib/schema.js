import { defaultLocale, getContent, localeHref, localeNames, locales } from "@/content";
import { absoluteUrl } from "./seo";

/**
 * Structured data generators.
 *
 * Every graph node gets a stable @id so pages can reference the organisation
 * rather than redeclaring it — which is what lets Google treat the whole site
 * as one entity instead of forty unrelated ones.
 *
 * The company is ONE entity in both languages, so `@id` deliberately carries
 * no locale: the Azerbaijani pages point at the same organisation node the
 * English ones do. Only the page-level nodes are per-language, and they say so
 * with `inLanguage`.
 */
const { site: defaultSite } = getContent(defaultLocale);

export const ORGANISATION_ID = `${defaultSite.url}/#organization`;
export const WEBSITE_ID = `${defaultSite.url}/#website`;

export function organisationSchema(locale = defaultLocale) {
  const { site } = getContent(locale);

  return {
    "@type": "Organization",
    "@id": ORGANISATION_ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: `${site.name} ${site.descriptor}`,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/brand/logo-primary.png"),
      width: 1200,
      height: 419,
    },
    description: site.metaDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address.street,
      addressLocality: site.contact.address.locality,
      postalCode: site.contact.address.postalCode,
      addressCountry: site.contact.address.countryCode,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: site.contact.phone,
        email: site.contact.operationsEmail,
        availableLanguage: locales.map((code) => localeNames[code].name),
      },
    ],
    sameAs: site.social.filter((item) => item.href !== "#").map((item) => item.href),
  };
}

export function websiteSchema(locale = defaultLocale) {
  const { site } = getContent(locale);

  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: absoluteUrl("/"),
    name: site.name,
    publisher: { "@id": ORGANISATION_ID },
    inLanguage: locales,
  };
}

export function webPageSchema({ locale = defaultLocale, path, name, description }) {
  const url = absoluteUrl(localeHref(locale, path));

  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANISATION_ID },
    inLanguage: localeNames[locale]?.hreflang ?? defaultLocale,
  };
}

export function breadcrumbSchema(items, locale = defaultLocale) {
  const { ui } = getContent(locale);
  const trail = [{ name: ui.common.home, href: "/" }, ...items];

  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label || item.name,
      /* Breadcrumb hrefs from the content layer are already localised; the
         home entry above is not, so it is localised here. */
      item: item.href
        ? absoluteUrl(index === 0 ? localeHref(locale, item.href) : item.href)
        : undefined,
    })),
  };
}

export function serviceSchema(service, locale = defaultLocale) {
  const url = absoluteUrl(localeHref(locale, `/services/${service.slug}`));

  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    description: service.summary,
    serviceType: service.category,
    provider: { "@id": ORGANISATION_ID },
    areaServed: {
      "@type": "Place",
      name: "Caspian Sea",
    },
    url,
  };
}

export function newsArticleSchema(article, locale = defaultLocale) {
  const url = absoluteUrl(localeHref(locale, `/news/${article.slug}`));

  return {
    "@type": "NewsArticle",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.summary,
    datePublished: article.date,
    dateModified: article.updated || article.date,
    author: { "@id": ORGANISATION_ID },
    publisher: { "@id": ORGANISATION_ID },
    mainEntityOfPage: url,
    inLanguage: localeNames[locale]?.hreflang ?? defaultLocale,
  };
}

/**
 * Wraps nodes in a single @graph. One script tag per page, not five.
 * The `<` escape is the documented XSS scrub for inline JSON-LD.
 */
export function JsonLd({ schema }) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": Array.isArray(schema) ? schema : [schema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
