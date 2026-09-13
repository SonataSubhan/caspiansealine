import Icon from "@/components/primitives/Icon";
import SpecList from "@/components/primitives/SpecList";
import Section from "@/components/layout/Section";
import RuleGrid from "@/components/layout/RuleGrid";
import Stack from "@/components/layout/Stack";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";

import { agentsPage, ports } from "@/content/en/network";
import { site } from "@/content/en/site";
import { home } from "@/content/en/home";

const BREADCRUMB = [
  { label: "Network", href: "/network" },
  { label: "Agency network", href: "/network/agents" },
];

export const metadata = buildMetadata({
  title: agentsPage.meta.title,
  description: agentsPage.meta.description,
  path: "/network/agents",
});

export default function AgentsPage() {
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            path: "/network/agents",
            name: agentsPage.meta.title,
            description: agentsPage.meta.description,
          }),
          breadcrumbSchema(BREADCRUMB),
        ]}
      />

      <PageHero
        eyebrow={agentsPage.eyebrow}
        title={agentsPage.title}
        lead={agentsPage.lead}
        breadcrumb={BREADCRUMB}
      />

      <Section>
        <Stack gap="lg">
          <RuleGrid cols={2} boxed>
            <div className="capability">
              <Icon name="pin" className="capability__icon" />
              <h2 className="capability__title">Head office — Baku</h2>
              <p className="capability__text">
                {site.contact.address.street}, {site.contact.address.locality}, {site.contact.address.country}
              </p>
              <SpecList
                items={[
                  { key: "Telephone", value: site.contact.phone },
                  { key: "Email", value: site.contact.generalEmail },
                ]}
              />
            </div>

            <div className="capability">
              <Icon name="headset" className="capability__icon" />
              <h2 className="capability__title">Operations desk</h2>
              <p className="capability__text">Live shipments, port calls and schedule questions, 24 / 7.</p>
              <SpecList
                items={[
                  { key: "Telephone", value: site.contact.phone },
                  { key: "Email", value: site.contact.operationsEmail },
                ]}
              />
            </div>
          </RuleGrid>

          <h2 className="t-h3">Port coverage</h2>
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
            <p className="notice__title">Content to supply</p>
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
