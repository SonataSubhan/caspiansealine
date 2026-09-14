import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import SpecList from "@/components/primitives/SpecList";
import PageHero from "@/components/blocks/PageHero";
import EnquiryForm from "@/components/blocks/EnquiryForm";

import { buildMetadata } from "@/lib/seo";
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent } from "@/content";



export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { quotePage, services, site, ui } = getContent(locale);

  return buildMetadata({
    locale,
    title: quotePage.meta.title,
    description: quotePage.meta.description,
    path: "/quote",
  });
}

/**
 * Quote request.
 *
 * The page itself is a Server Component and stays fully static; only the form
 * is a Client Component, so the JavaScript cost is confined to the thing that
 * actually needs it.
 */
export default async function QuotePage({ params }) {
  const { locale } = await params;
  const { quotePage, services, site, ui } = getContent(locale);

  const breadcrumb = crumbs(locale, [{ label: quotePage.meta.title, href: "/quote" }]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ locale, path: "/quote", name: quotePage.meta.title, description: quotePage.meta.description }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero
        locale={locale}
        eyebrow={quotePage.eyebrow}
        title={quotePage.title}
        lead={quotePage.lead}
        breadcrumb={breadcrumb}
      />

      <Section>
        <div className="b-detail">
          <EnquiryForm
            variant="quote"
            locale={locale}
            site={site}
            ui={ui}
            cargoTypes={quotePage.cargoTypes}
            services={quotePage.services}
          />

          <aside className="panel panel--sticky" aria-label={ui.a11y.whatHappensNext}>
            <p className="panel__title">{quotePage.aside.title}</p>
            <ol className="steps">
              {quotePage.aside.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <hr className="rule" />

            <p className="panel__title">{ui.sections.preferToTalk}</p>
            <SpecList
              items={[
                { key: ui.common.operations, value: site.contact.phone },
                { key: ui.common.email, value: site.contact.operationsEmail },
                { key: ui.common.hours, value: "24 / 7" },
              ]}
            />
          </aside>
        </div>
      </Section>
    </>
  );
}
