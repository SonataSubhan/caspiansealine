import { notFound } from "next/navigation";
import Link from "next/link";

import Icon from "@/components/primitives/Icon";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import PageHero from "@/components/blocks/PageHero";

import { buildMetadata } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";

import { getLegalDocuments, getLegalDocument } from "@/content/en/legal";

export function generateStaticParams() {
  return getLegalDocuments().map((doc) => ({ slug: doc.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doc = getLegalDocument(slug);

  if (!doc) return buildMetadata({ title: "Not found", noIndex: true });

  return buildMetadata({
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
  const { slug } = await params;
  const doc = getLegalDocument(slug);

  if (!doc) notFound();

  const others = getLegalDocuments().filter((item) => item.slug !== doc.slug);
  const breadcrumb = [{ label: doc.title, href: `/legal/${doc.slug}` }];

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ path: `/legal/${doc.slug}`, name: doc.title, description: doc.intro }),
          breadcrumbSchema(breadcrumb),
        ]}
      />

      <PageHero eyebrow="Legal" title={doc.title} lead={doc.intro} breadcrumb={breadcrumb}>
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
          <nav className="link-rows" aria-label="Other legal documents">
            {others.map((item) => (
              <Link href={`/legal/${item.slug}`} key={item.slug}>
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
