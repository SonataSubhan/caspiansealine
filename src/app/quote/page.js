import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import SpecList from "@/components/primitives/SpecList";
import PageHero from "@/components/blocks/PageHero";
import EnquiryForm from "@/components/blocks/EnquiryForm";

import { buildMetadata } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";

import { quotePage } from "@/content/en/forms";
import { site } from "@/content/en/site";

const BREADCRUMB = [{ label: "Request a quote", href: "/quote" }];

export const metadata = buildMetadata({
  title: quotePage.meta.title,
  description: quotePage.meta.description,
  path: "/quote",
});

/**
 * Quote request.
 *
 * The page itself is a Server Component and stays fully static; only the form
 * is a Client Component, so the JavaScript cost is confined to the thing that
 * actually needs it.
 */
export default function QuotePage() {
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ path: "/quote", name: quotePage.meta.title, description: quotePage.meta.description }),
          breadcrumbSchema(BREADCRUMB),
        ]}
      />

      <PageHero
        eyebrow={quotePage.eyebrow}
        title={quotePage.title}
        lead={quotePage.lead}
        breadcrumb={BREADCRUMB}
      />

      <Section>
        <div className="b-detail">
          <EnquiryForm variant="quote" cargoTypes={quotePage.cargoTypes} services={quotePage.services} />

          <aside className="panel panel--sticky" aria-label="What happens next">
            <p className="panel__title">{quotePage.aside.title}</p>
            <ol className="steps">
              {quotePage.aside.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <hr className="rule" />

            <p className="panel__title">Prefer to talk?</p>
            <SpecList
              items={[
                { key: "Operations", value: site.contact.phone },
                { key: "Email", value: site.contact.operationsEmail },
                { key: "Hours", value: "24 / 7" },
              ]}
            />
          </aside>
        </div>
      </Section>
    </>
  );
}
