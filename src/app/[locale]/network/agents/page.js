import Icon from "@/components/primitives/Icon";
import SpecList from "@/components/primitives/SpecList";
import Section from "@/components/layout/Section";
import RuleGrid from "@/components/layout/RuleGrid";
import Stack from "@/components/layout/Stack";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent } from "@/content";



export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { agentsPage, home, networkPage, ports, site, ui } = getContent(locale);

  return buildMetadata({
   locale,
    locale,
    title: agentsPage.meta.title,
    description: agentsPage.meta.description,
    path: "/network/agents",
  });
}

export default async function AgentsPage({ params }) {
  const { locale } = await params;
  const { agentsPage, home, networkPage, ports, site, ui } = getContent(locale);

  const breadcrumb = crumbs(locale, [
    { label: networkPage.meta.title, href: "/network" },
    { label: agentsPage.meta.title, href: "/network/agents" },
  ]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            locale,
            path: "/network/agents",
            name: agentsPage.meta.title,
            description: agentsPage.meta.description,
          }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero
        locale={locale}
        eyebrow={agentsPage.eyebrow}
        title={agentsPage.title}
        lead={agentsPage.lead}
        breadcrumb={breadcrumb}
      />

      <Section>
        <Stack gap="lg">
          <RuleGrid cols={2} boxed>
            <div className="capability">
              <Icon name="pin" className="capability__icon" />
              <h2 className="capability__title">{ui.sections.headOfficeBaku}</h2>
              <p className="capability__text">
                {site.contact.address.street}, {site.contact.address.locality}, {site.contact.address.country}
              </p>
              <SpecList
                items={[
                  { key: ui.common.telephone, value: site.contact.phone },
                  { key: ui.common.email, value: site.contact.generalEmail },
                ]}
              />
            </div>

            <div className="capability">
              <Icon name="headset" className="capability__icon" />
              <h2 className="capability__title">{ui.sections.operationsDesk}</h2>
              <p className="capability__text">{ui.sections.operationsDeskLead}</p>
              <SpecList
                items={[
                  { key: ui.common.telephone, value: site.contact.phone },
                  { key: ui.common.email, value: site.contact.operationsEmail },
                ]}
              />
            </div>
          </RuleGrid>

          <h2 className="t-h3">{ui.sections.portCoverage}</h2>
          <RuleGrid cols={3} boxed>
            {ports.map((port) => {
              const presence = port.facts.find((fact) => fact.key === "Our presence");

              return (
                <div className="capability" key={port.slug}>
                  <h3 className="capability__title">{port.name}</h3>
                  <p className="t-meta">{port.country}</p>
                  <p className="capability__text">{presence ? presence.value : "Appointed agent"}</p>
                </div>
              );
            })}
          </RuleGrid>

          <div className="notice">
            <p className="notice__title">{ui.notices.contentToSupply}</p>
            <p>
              TODO(content): full office and agent list with addresses, direct lines and named
              contacts per port.
            </p>
          </div>
        </Stack>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
