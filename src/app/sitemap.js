import { defaultLocale, getContent, localeAlternates, localeHref, locales } from "@/content";

/**
 * XML sitemap, generated from the content layer, in every language.
 *
 * Because the routes are derived rather than listed, a new service or port is
 * in the sitemap the moment it is in the content file — there is no second
 * list to forget to update, and no chance of one language having a page the
 * other's sitemap does not.
 *
 * Each entry carries the full `alternates.languages` set. That is the sitemap
 * half of the hreflang contract: the pages declare each other in their `<head>`
 * and the sitemap declares them again here, which is what Google's
 * documentation asks for and what stops one language being treated as a
 * duplicate of the other.
 */
export default function sitemap() {
  const now = new Date();
  const { services, ports, articles, legalDocuments } = getContent(defaultLocale);
  const { site } = getContent(defaultLocale);

  const entry = (path, priority, changeFrequency = "monthly", lastModified = now) => {
    const alternates = localeAlternates(path);

    return locales.map((locale) => ({
      url: `${site.url}${localeHref(locale, path)}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(alternates).map(([code, href]) => [code, `${site.url}${href}`])
        ),
      },
    }));
  };

  return [
    entry("/", 1, "weekly"),
    entry("/services", 0.9),
    ...services.map((service) => entry(`/services/${service.slug}`, 0.8)),
    entry("/network", 0.9),
    entry("/network/schedule", 0.8, "weekly"),
    entry("/network/agents", 0.7),
    ...ports.map((port) => entry(`/network/ports/${port.slug}`, 0.7)),
    entry("/fleet", 0.8),
    entry("/about", 0.7),
    entry("/about/leadership", 0.5),
    entry("/sustainability", 0.7),
    entry("/hsseq", 0.6),
    entry("/certifications", 0.6),
    entry("/careers", 0.6),
    entry("/news", 0.7, "weekly"),
    ...articles.map((article) =>
      entry(`/news/${article.slug}`, 0.6, "yearly", new Date(article.date))
    ),
    entry("/quote", 0.9),
    entry("/contact", 0.8),
    ...legalDocuments.map((doc) => entry(`/legal/${doc.slug}`, 0.3, "yearly")),
  ].flat();
}
