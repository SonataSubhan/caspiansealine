import { notFound } from "next/navigation";
import Link from "next/link";

import Icon from "@/components/primitives/Icon";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import PageHero from "@/components/blocks/PageHero";

import { buildMetadata } from "@/lib/seo";
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent, locales, localeHref } from "@/content";
import { bySlug } from "@/content/lookup";


export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).legalDocuments.map((doc) => ({ locale, slug: doc.slug }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const { legalDocuments, ui } = getContent(locale);
  const doc = bySlug(legalDocuments, slug);

  if (!doc) return buildMetadata({ locale, title: ui.common.notFound, noIndex: true });

  return buildMetadata({
    locale,
    title: doc.title,
    description: doc.intro,
    path: `/legal/${doc.slug}`,
  });
}

/**
 * Legal documents.
 *
 * One template for privacy, cookies, legal notice, terms of carriage and the
 * accessibility statement. Section headings are generated from the content so
 * the heading hierarchy stays correct however long a document grows.
 */
export default async function LegalPage({ params }) {
  const { locale, slug } = await params;
  const { legalDocuments, ui } = getContent(locale);
  const doc = bySlug(legalDocuments, slug);

  if (!doc) notFound();

  const others = legalDocuments.filter((item) => item.slug !== doc.slug);
  const breadcrumb = crumbs(locale, [{ label: doc.title, href: `/legal/${doc.slug}` }]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ locale, path: `/legal/${doc.slug}`, name: doc.title, description: doc.intro }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero locale={locale} eyebrow="Legal" title={doc.title} lead={doc.intro} breadcrumb={breadcrumb}>
        <p className="t-meta" style={{ color: "var(--text-inverse-mute)" }}>
          Last updated <time dateTime={doc.updated}>{doc.updated}</time>
        </p>
      </PageHero>

      <Section containerSize="narrow">
        <Stack gap="xl" className="u-full-width">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="t-h4">{section.heading}</h2>
              <div className="prose">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </Stack>
      </Section>

      <Section surface="subtle" spacing="tight" aria-labelledby="other-legal">
        <Stack gap="md">
          <h2 className="t-h4" id="other-legal">
            Other documents
          </h2>
          <nav className="link-rows" aria-label={ui.a11y.otherLegalDocuments}>
            {others.map((item) => (
              <Link href={localeHref(locale, `/legal/${item.slug}`)} key={item.slug}>
                {item.title}
                <Icon name="arrow-right" />
              </Link>
            ))}
          </nav>
        </Stack>
      </Section>
    </>
  );
}
