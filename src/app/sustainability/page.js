import Icon from "@/components/primitives/Icon";
import Button from "@/components/primitives/Button";
import Media from "@/components/primitives/Media";
import Section from "@/components/layout/Section";
import Split from "@/components/layout/Split";
import Stack from "@/components/layout/Stack";
import Prose from "@/components/layout/Prose";
import RuleGrid from "@/components/layout/RuleGrid";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";

import { sustainability } from "@/content/en/sustainability";
import { home } from "@/content/en/home";

const BREADCRUMB = [{ label: "Sustainability", href: "/sustainability" }];

export const metadata = buildMetadata({
  title: sustainability.meta.title,
  description: sustainability.meta.description,
  path: "/sustainability",
});

export default function SustainabilityPage() {
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            path: "/sustainability",
            name: sustainability.meta.title,
            description: sustainability.meta.description,
          }),
          breadcrumbSchema(BREADCRUMB),
        ]}
      />

      <PageHero
        eyebrow={sustainability.eyebrow}
        eyebrowTone="green"
        title={sustainability.title}
        lead={sustainability.lead}
        breadcrumb={BREADCRUMB}
      />

      <Section spacing="tight" surface="inverse" aria-label="Targets">
        <dl className="b-sustain__targets t-numeric">
          {sustainability.targets.map((target) => (
            <div className="b-sustain__target" key={target.value + target.label}>
              <dt>{target.value}</dt>
              <dd>{target.label}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <Split ratio="copyNarrow">
          <Media slot="sustainability" width={1000} height={1250} ratio="portrait" sizes="(max-width: 899px) 100vw, 40vw" />
          <Prose paragraphs={sustainability.paragraphs} />
        </Split>
      </Section>

      <Section surface="subtle" aria-labelledby="pillars-title">
        <h2 className="t-h3" id="pillars-title">
          How that is enforced
        </h2>
        <div className="b-network__footer">
          <RuleGrid cols={4} boxed>
            {sustainability.pillars.map((pillar) => (
              <div className="capability" key={pillar.title}>
                <Icon name={pillar.icon} className="capability__icon" />
                <h3 className="capability__title">{pillar.title}</h3>
                <p className="capability__text">{pillar.text}</p>
              </div>
            ))}
          </RuleGrid>
        </div>
      </Section>

      <Section spacing="tight">
        <Stack gap="md">
          <Button href={sustainability.link.href} variant="secondary" arrow>
            {sustainability.link.label}
          </Button>
        </Stack>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
