import Link from "next/link";

import Icon from "@/components/primitives/Icon";
import Eyebrow from "@/components/primitives/Eyebrow";
import Button from "@/components/primitives/Button";
import Section from "@/components/layout/Section";
import SectionHead from "@/components/layout/SectionHead";
import Stack from "@/components/layout/Stack";
import RuleGrid from "@/components/layout/RuleGrid";
import LaneTable from "@/components/blocks/LaneTable";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";

import { networkPage, lanes, ports, additionalPorts, corridors } from "@/content/en/network";
import { home } from "@/content/en/home";

const BREADCRUMB = [{ label: "Network", href: "/network" }];

export const metadata = buildMetadata({
  title: networkPage.meta.title,
  description: networkPage.meta.description,
  path: "/network",
});

export default function NetworkPage() {
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ path: "/network", name: networkPage.meta.title, description: networkPage.meta.description }),
          breadcrumbSchema(BREADCRUMB),
        ]}
      />

      <PageHero
        eyebrow={networkPage.eyebrow}
        title={networkPage.title}
        lead={networkPage.lead}
        breadcrumb={BREADCRUMB}
      />

      <Section aria-labelledby="lanes-title">
        <SectionHead
          eyebrow="Trade lanes"
          title="Fixed-day departures on the core lanes."
          titleId="lanes-title"
          action={
            <Button href="/network/schedule" variant="secondary">
              Sailing schedule
            </Button>
          }
        />
        <LaneTable lanes={lanes} />
      </Section>

      <Section surface="subtle" id="ports" aria-labelledby="ports-title">
        <SectionHead
          eyebrow="Ports"
          title="Where we call."
          titleId="ports-title"
          lead="Own offices where the volume justifies it, appointed agents everywhere else."
          action={
            <Button href="/network/agents" variant="secondary">
              Agency network
            </Button>
          }
        />

        <RuleGrid cols={3} boxed>
          {ports.map((port) => (
            <div className="capability" key={port.slug}>
              <Icon name="pin" className="capability__icon" />
              <h3 className="capability__title">
                <Link href={`/network/ports/${port.slug}`}>{port.name}</Link>
              </h3>
              <p className="t-meta">{port.country}</p>
              <p className="capability__text">{port.role}</p>
            </div>
          ))}

          {/* Sixth cell: keeps the 3-up hairline grid square, and is the
              link a reader wants at exactly this point anyway. */}
          <div className="capability">
            <Icon name="headset" className="capability__icon" />
            <h3 className="capability__title">
              <Link href="/network/agents">Offices &amp; agents</Link>
            </h3>
            <p className="t-meta">All locations</p>
            <p className="capability__text">
              Direct contacts for every port we call, plus the head office in Baku.
            </p>
          </div>
        </RuleGrid>

        <Stack gap="sm" className="b-network__footer">
          <Eyebrow tone="plain" className="t-meta">
            Also served on inducement
          </Eyebrow>
          <ul className="b-network__ports" role="list">
            {additionalPorts.map((port) => (
              <li key={port}>{port}</li>
            ))}
          </ul>
        </Stack>
      </Section>

      <Section aria-labelledby="corridors-title">
        <SectionHead
          eyebrow="Corridors"
          title="The two corridors we sit on."
          titleId="corridors-title"
        />
        <RuleGrid cols={2} boxed>
          {corridors.map((corridor) => (
            <div className="capability" key={corridor.id} id={corridor.id}>
              <Icon name="route" className="capability__icon" />
              <h3 className="capability__title">{corridor.title}</h3>
              <p className="capability__text">{corridor.text}</p>
            </div>
          ))}
        </RuleGrid>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
