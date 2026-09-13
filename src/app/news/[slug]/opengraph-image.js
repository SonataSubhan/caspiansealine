import { ogCard, size, contentType } from "@/lib/og";
import { getArticles, getArticle } from "@/content/en/news";
import { site } from "@/content/en/site";

/* One card per article. */
export { size, contentType };
export const alt = `Caspian Sea Line news`;

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);

  return ogCard({ eyebrow: "News", title: article?.title ?? site.tagline });
}
