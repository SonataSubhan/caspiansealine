import DataTable from "@/components/primitives/DataTable";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";

import { certifications } from "@/content/en/company";
import { home } from "@/content/en/home";

const BREADCRUMB = [{ label: "Certifications", href: "/certifications" }];

export const metadata = buildMetadata({
  title: certifications.meta.title,
  description: certifications.meta.description,
  path: "/certifications",
});

const columns = [
  { key: "name", label: "Standard" },
  { key: "body", label: "Issuing body" },
  { key: "scope", label: "Scope" },
  { key: "status", label: "Status" },
];

export default function CertificationsPage() {
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            path: "/certifications",
            name: certifications.meta.title,
            description: certifications.meta.description,
          }),
          breadcrumbSchema(BREADCRUMB),
        ]}
      />

      <PageHero
        eyebrow={certifications.eyebrow}
        title={certifications.title}
        lead={certifications.lead}
        breadcrumb={BREADCRUMB}
      />

      <Section>
        <Stack gap="lg">
          <DataTable
            caption="Certifications held, issuing body, scope and current status"
            columns={columns}
            rows={certifications.items.map((item) => ({ ...item, id: item.name }))}
          />

          <div className="notice">
            <p className="notice__title">Verify before publishing</p>
            <p>{certifications.notice}</p>
          </div>
        </Stack>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
