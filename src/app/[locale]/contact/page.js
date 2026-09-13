import Icon from "@/components/primitives/Icon";
import SpecList from "@/components/primitives/SpecList";
import Section from "@/components/layout/Section";
import RuleGrid from "@/components/layout/RuleGrid";
import PageHero from "@/components/blocks/PageHero";
import EnquiryForm from "@/components/blocks/EnquiryForm";

import { buildMetadata } from "@/lib/seo";
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent } from "@/content";



export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { contactPage, site, ui } = getContent(locale);

  return buildMetadata({
   locale,
    locale,
    title: contactPage.meta.title,
    description: contactPage.meta.description,
    path: "/contact",
  });
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const { contactPage, site, ui } = getContent(locale);

  const breadcrumb = crumbs(locale, [{ label: contactPage.meta.title, href: "/contact" }]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ locale, path: "/contact", name: contactPage.meta.title, description: contactPage.meta.description }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero
        locale={locale}
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        lead={contactPage.lead}
        breadcrumb={breadcrumb}
      />

      <Section spacing="tight" aria-label={ui.a11y.desks}>
        <RuleGrid cols={3} boxed>
          {contactPage.desks.map((desk) => (
            <div className="capability" key={desk.title}>
              <Icon name={desk.icon} className="capability__icon" />
              <h2 className="capability__title">{desk.title}</h2>
              <p className="capability__text">{desk.text}</p>
              <p className="t-meta">{desk.hours}</p>
            </div>
          ))}
        </RuleGrid>
      </Section>

      <Section>
        <div className="b-detail">
          <EnquiryForm variant="contact" locale={locale} site={site} ui={ui} subjects={contactPage.subjects} />

          <aside className="panel panel--sticky" aria-label={ui.a11y.contactDetails}>
            <p className="panel__title">{ui.common.headOffice}</p>
            <address className="t-body-s t-muted" style={{ fontStyle: "normal" }}>
              {site.contact.address.street}
              <br />
              {site.contact.address.locality}
              <br />
              {site.contact.address.country}
            </address>

            <SpecList
              items={[
                { key: ui.common.operations, value: site.contact.phone },
                { key: ui.common.emergency, value: site.contact.emergencyPhone },
                { key: ui.common.general, value: site.contact.generalEmail },
                { key: ui.common.bookings, value: site.contact.operationsEmail },
              ]}
            />

            <div className="notice">
              <p className="notice__title">{ui.notices.contentToSupply}</p>
              <p>TODO(content): confirm the street address, direct lines and the emergency number.</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
