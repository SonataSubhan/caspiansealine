import Icon from "@/components/primitives/Icon";
import SpecList from "@/components/primitives/SpecList";
import Section from "@/components/layout/Section";
import RuleGrid from "@/components/layout/RuleGrid";
import PageHero from "@/components/blocks/PageHero";
import EnquiryForm from "@/components/blocks/EnquiryForm";

import { buildMetadata } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";

import { contactPage } from "@/content/en/forms";
import { site } from "@/content/en/site";

const BREADCRUMB = [{ label: "Contact", href: "/contact" }];

export const metadata = buildMetadata({
  title: contactPage.meta.title,
  description: contactPage.meta.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ path: "/contact", name: contactPage.meta.title, description: contactPage.meta.description }),
          breadcrumbSchema(BREADCRUMB),
        ]}
      />

      <PageHero
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        lead={contactPage.lead}
        breadcrumb={BREADCRUMB}
      />

      <Section spacing="tight" aria-label="Desks">
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
          <EnquiryForm variant="contact" subjects={contactPage.subjects} />

          <aside className="panel panel--sticky" aria-label="Contact details">
            <p className="panel__title">Head office</p>
            <address className="t-body-s t-muted" style={{ fontStyle: "normal" }}>
              {site.contact.address.street}
              <br />
              {site.contact.address.locality}
              <br />
              {site.contact.address.country}
            </address>

            <SpecList
              items={[
                { key: "Operations", value: site.contact.phone },
                { key: "Emergency", value: site.contact.emergencyPhone },
                { key: "General", value: site.contact.generalEmail },
                { key: "Bookings", value: site.contact.operationsEmail },
              ]}
            />

            <div className="notice">
              <p className="notice__title">Content to supply</p>
              <p>TODO(content): confirm the street address, direct lines and the emergency number.</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
