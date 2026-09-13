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
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent, localeHref } from "@/content";



export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { additionalPorts, corridors, home, lanes, networkPage, ports, ui } = getContent(locale);

  return buildMetadata({
   locale,
    locale,
    title: networkPage.meta.title,
    description: networkPage.meta.description,
    path: "/network",
  });
}

export default async function NetworkPage({ params }) {
  const { locale } = await params;
  const { additionalPorts, corridors, home, lanes, networkPage, ports, ui } = getContent(locale);

  const breadcrumb = crumbs(locale, [{ label: networkPage.meta.title, href: "/network" }]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ locale, path: "/network", name: networkPage.meta.title, description: networkPage.meta.description }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero
        locale={locale}
        eyebrow={networkPage.eyebrow}
        title={networkPage.title}
        lead={networkPage.lead}
        breadcrumb={breadcrumb}
      />

      <Section aria-labelledby="lanes-title">
        <SectionHead
          eyebrow={ui.sections.tradeLanes}
          title={ui.sections.tradeLanesTitle}
          titleId="lanes-title"
          action={
            <Button href={localeHref(locale, "/network/schedule")} variant="secondary">
              Sailing schedule
            </Button>
          }
        />
        <LaneTable lanes={lanes} locale={locale} ui={ui} />
      </Section>

      <Section surface="subtle" id="ports" aria-labelledby="ports-title">
        <SectionHead
          eyebrow={ui.sections.ports}
          title={ui.sections.portsTitle}
          titleId="ports-title"
          lead={ui.sections.portsLead}
          action={
            <Button href={localeHref(locale, "/network/agents")} variant="secondary">
              Agency network
            </Button>
          }
        />

        <RuleGrid cols={3} boxed>
          {ports.map((port) => (
            <div className="capability" key={port.slug}>
              <Icon name="pin" className="capability__icon" />
              <h3 className="capability__title">
                <Link href={localeHref(locale, `/network/ports/${port.slug}`)}>{port.name}</Link>
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
              <Link href={localeHref(locale, "/network/agents")}>{ui.sections.officesAndAgents}</Link>
            </h3>
            <p className="t-meta">{ui.common.allLocations}</p>
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
          eyebrow={ui.sections.corridors}
          title={ui.sections.corridorsTitle}
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
