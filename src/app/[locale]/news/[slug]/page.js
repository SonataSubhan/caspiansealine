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
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema, newsArticleSchema } from "@/lib/schema";
import { getContent, locales, localeHref } from "@/content";
import { bySlug, formatDate, newestFirst } from "@/content/lookup";


export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).articles.map((article) => ({ locale, slug: article.slug }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const { articles, home, newsPage, ui } = getContent(locale);
  const article = bySlug(articles, slug);

  if (!article) return buildMetadata({ locale, title: ui.common.notFound, noIndex: true });

  return buildMetadata({
    locale,
    title: article.title,
    description: article.summary,
    path: `/news/${article.slug}`,
    type: "article",
    publishedTime: article.date,
  });
}

export default async function ArticlePage({ params }) {
  const { locale, slug } = await params;
  const { articles, home, newsPage, ui } = getContent(locale);
  const article = bySlug(articles, slug);

  if (!article) notFound();

  const others = newestFirst(articles)
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  const breadcrumb = crumbs(locale, [
    { label: newsPage.meta.title, href: "/news" },
    { label: article.title, href: `/news/${article.slug}` },
  ]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ locale, path: `/news/${article.slug}`, name: article.title, description: article.summary }),
          breadcrumbSchema(breadcrumb, locale),
          newsArticleSchema(article, locale),
        ]}
      />

      <PageHero locale={locale} eyebrow={article.category} title={article.title} lead={article.summary} breadcrumb={breadcrumb}>
        <p className="t-meta" style={{ color: "var(--text-inverse-mute)" }}>
          <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
        </p>
      </PageHero>

      <Section containerSize="narrow">
        <Stack gap="lg">
          <Media locale={locale} slot={`news-${article.slug}`} width={1200} height={675} ratio="wide" sizes="(max-width: 899px) 100vw, 60vw" />
          <Prose paragraphs={article.body} />
        </Stack>
      </Section>

      {others.length > 0 ? (
        <Section surface="subtle" aria-labelledby="more-news-title">
          <Stack gap="lg">
            <h2 className="t-h3" id="more-news-title">
              More from the newsroom
            </h2>
            <nav className="link-rows" aria-label={ui.a11y.moreNews}>
              {others.map((item) => (
                <Link href={localeHref(locale, `/news/${item.slug}`)} key={item.slug}>
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
