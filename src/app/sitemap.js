import { site } from "@/content/en/site";
import { services } from "@/content/en/services";
import { ports } from "@/content/en/network";
import { getArticles } from "@/content/en/news";
import { getLegalDocuments } from "@/content/en/legal";

/**
 * XML sitemap, generated from the content layer.
 *
 * Because the routes are derived rather than listed, a new service or port is
 * in the sitemap the moment it is in the content file — there is no second
 * list to forget to update.
 */
export default function sitemap() {
  const now = new Date();

  const entry = (path, priority, changeFrequency = "monthly", lastModified = now) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

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
    ...getArticles().map((article) =>
      entry(`/news/${article.slug}`, 0.6, "yearly", new Date(article.date))
    ),
    entry("/quote", 0.9),
    entry("/contact", 0.8),
    ...getLegalDocuments().map((doc) => entry(`/legal/${doc.slug}`, 0.3, "yearly")),
  ];
}
