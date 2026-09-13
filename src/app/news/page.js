import Section from "@/components/layout/Section";
import PageHero from "@/components/blocks/PageHero";
import NewsGrid from "@/components/blocks/NewsGrid";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";

import { newsPage, getArticles } from "@/content/en/news";
import { home } from "@/content/en/home";

const BREADCRUMB = [{ label: "News", href: "/news" }];

export const metadata = buildMetadata({
  title: newsPage.meta.title,
  description: newsPage.meta.description,
  path: "/news",
});

export default function NewsIndexPage() {
  const articles = getArticles();

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ path: "/news", name: newsPage.meta.title, description: newsPage.meta.description }),
          breadcrumbSchema(BREADCRUMB),
        ]}
      />

      <PageHero eyebrow={newsPage.eyebrow} title={newsPage.title} lead={newsPage.lead} breadcrumb={BREADCRUMB} />

      <NewsGrid content={{ eyebrow: "All releases", title: "Announcements and updates." }} articles={articles} />

      <Section spacing="tight">
        <div className="notice">
          <p className="notice__title">Content to supply</p>
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
