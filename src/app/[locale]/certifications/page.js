import DataTable from "@/components/primitives/DataTable";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent } from "@/content";



export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { certifications, home, ui } = getContent(locale);

  return buildMetadata({
   locale,
    locale,
    title: certifications.meta.title,
    description: certifications.meta.description,
    path: "/certifications",
  });
}

/* Built per render: the headers are words in the reader's language. */
const certificationColumns = (ui) => [
  { key: "name", label: ui.table.standard },
  { key: "body", label: ui.table.issuingBody },
  { key: "scope", label: ui.table.scope },
  { key: "status", label: ui.table.status },
];

export default async function CertificationsPage({ params }) {
  const { locale } = await params;
  const { certifications, home, ui } = getContent(locale);

  const breadcrumb = crumbs(locale, [{ label: certifications.meta.title, href: "/certifications" }]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            locale,
            path: "/certifications",
            name: certifications.meta.title,
            description: certifications.meta.description,
          }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero
        locale={locale}
        eyebrow={certifications.eyebrow}
        title={certifications.title}
        lead={certifications.lead}
        breadcrumb={breadcrumb}
      />

      <Section>
        <Stack gap="lg">
          <DataTable
            caption={ui.a11y.certificationsCaption}
            columns={certificationColumns(ui)}
            rows={certifications.items.map((item) => ({ ...item, id: item.name }))}
          />

          <div className="notice">
            <p className="notice__title">{ui.notices.verifyBeforePublishing}</p>
            <p>{certifications.notice}</p>
          </div>
        </Stack>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
