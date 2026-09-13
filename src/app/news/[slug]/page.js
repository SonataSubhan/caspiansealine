import { notFound } from "next/navigation";
import Link from "next/link";

import Icon from "@/components/primitives/Icon";
import Media from "@/components/primitives/Media";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Prose from "@/components/layout/Prose";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema, newsArticleSchema } from "@/lib/schema";

import { getArticles, getArticle, formatDate } from "@/content/en/news";
import { home } from "@/content/en/home";

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return buildMetadata({ title: "Not found", noIndex: true });

  return buildMetadata({
    title: article.title,
    description: article.summary,
    path: `/news/${article.slug}`,
    type: "article",
    publishedTime: article.date,
  });
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const others = getArticles()
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  const breadcrumb = [
    { label: "News", href: "/news" },
    { label: article.title, href: `/news/${article.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ path: `/news/${article.slug}`, name: article.title, description: article.summary }),
          breadcrumbSchema(breadcrumb),
          newsArticleSchema(article),
        ]}
      />

      <PageHero eyebrow={article.category} title={article.title} lead={article.summary} breadcrumb={breadcrumb}>
        <p className="t-meta" style={{ color: "var(--text-inverse-mute)" }}>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </p>
      </PageHero>

      <Section containerSize="narrow">
        <Stack gap="lg">
          <Media slot={`news-${article.slug}`} width={1200} height={675} ratio="wide" sizes="(max-width: 899px) 100vw, 60vw" />
          <Prose paragraphs={article.body} />
        </Stack>
      </Section>

      {others.length > 0 ? (
        <Section surface="subtle" aria-labelledby="more-news-title">
          <Stack gap="lg">
            <h2 className="t-h3" id="more-news-title">
              More from the newsroom
            </h2>
            <nav className="link-rows" aria-label="More news">
              {others.map((item) => (
                <Link href={`/news/${item.slug}`} key={item.slug}>
                  {item.title}
                  <Icon name="arrow-right" />
                </Link>
              ))}
            </nav>
          </Stack>
        </Section>
      ) : null}

      <CtaBand {...home.cta} />
    </>
  );
}
