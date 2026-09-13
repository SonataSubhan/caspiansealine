import { site } from "@/content/en/site";
import { absoluteUrl } from "./seo";

/**
 * Structured data generators.
 *
 * Every graph node gets a stable @id so pages can reference the organisation
 * rather than redeclaring it — which is what lets Google treat the whole site
 * as one entity instead of forty unrelated ones.
 */

export const ORGANISATION_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;

export function organisationSchema() {
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
        availableLanguage: site.plannedLocales,
      },
    ],
    sameAs: site.social.filter((item) => item.href !== "#").map((item) => item.href),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: absoluteUrl("/"),
    name: site.name,
    publisher: { "@id": ORGANISATION_ID },
    inLanguage: site.locale,
  };
}

export function webPageSchema({ path, name, description }) {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANISATION_ID },
    inLanguage: site.locale,
  };
}

export function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", href: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label || item.name,
      item: item.href ? absoluteUrl(item.href) : undefined,
    })),
  };
}

export function serviceSchema(service) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.title,
    description: service.summary,
    serviceType: service.category,
    provider: { "@id": ORGANISATION_ID },
    areaServed: {
      "@type": "Place",
      name: "Caspian Sea",
    },
    url: absoluteUrl(`/services/${service.slug}`),
  };
}

export function newsArticleSchema(article) {
  return {
    "@type": "NewsArticle",
    "@id": `${absoluteUrl(`/news/${article.slug}`)}#article`,
    headline: article.title,
    description: article.summary,
    datePublished: article.date,
    dateModified: article.updated || article.date,
    author: { "@id": ORGANISATION_ID },
    publisher: { "@id": ORGANISATION_ID },
    mainEntityOfPage: absoluteUrl(`/news/${article.slug}`),
    inLanguage: site.locale,
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
