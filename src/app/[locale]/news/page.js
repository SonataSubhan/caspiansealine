import Section from "@/components/layout/Section";
import PageHero from "@/components/blocks/PageHero";
import NewsGrid from "@/components/blocks/NewsGrid";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent } from "@/content";
import { newestFirst } from "@/content/lookup";



export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { articles, home, newsPage, ui } = getContent(locale);

  return buildMetadata({
    locale,
    title: newsPage.meta.title,
    description: newsPage.meta.description,
    path: "/news",
  });
}

export default async function NewsIndexPage({ params }) {
  const { locale } = await params;
  const { articles, home, newsPage, ui } = getContent(locale);

  const latest = newestFirst(articles);

  const breadcrumb = crumbs(locale, [{ label: newsPage.meta.title, href: "/news" }]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ locale, path: "/news", name: newsPage.meta.title, description: newsPage.meta.description }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero locale={locale} eyebrow={newsPage.eyebrow} title={newsPage.title} lead={newsPage.lead} breadcrumb={breadcrumb} />

      <NewsGrid
        content={{ eyebrow: ui.common.allReleases, title: ui.sections.news }}
        articles={latest}
        locale={locale}
        ui={ui}
        leading
      />

      <Section spacing="tight">
        <div className="notice">
          <p className="notice__title">{ui.notices.contentToSupply}</p>
          <p>
            TODO(content): these are placeholder articles. Replace them with real releases, or hide
            the newsroom from the navigation until there are at least three.
          </p>
        </div>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
