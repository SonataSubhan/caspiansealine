import Section from "@/components/layout/Section";
import Split from "@/components/layout/Split";
import Stack from "@/components/layout/Stack";
import Prose from "@/components/layout/Prose";
import RuleGrid from "@/components/layout/RuleGrid";
import Media from "@/components/primitives/Media";
import SpecList from "@/components/primitives/SpecList";
import Stat from "@/components/primitives/Stat";
import Icon from "@/components/primitives/Icon";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";

import { about } from "@/content/en/company";
import { site } from "@/content/en/site";
import { home } from "@/content/en/home";

const BREADCRUMB = [{ label: "About us", href: "/about" }];

export const metadata = buildMetadata({
  title: about.meta.title,
  description: about.meta.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ path: "/about", name: about.meta.title, description: about.meta.description }),
          breadcrumbSchema(BREADCRUMB),
        ]}
      />

      <PageHero eyebrow={about.eyebrow} title={about.title} lead={about.lead} breadcrumb={BREADCRUMB} />

      <Section>
        <Split ratio="copyNarrow">
          <Stack gap="lg">
            <Media slot="about" width={1000} height={1250} ratio="portrait" sizes="(max-width: 899px) 100vw, 40vw" />
            <SpecList items={site.facts} />
          </Stack>
          <Prose paragraphs={about.paragraphs} />
        </Split>
      </Section>

      <Section surface="subtle" spacing="tight" aria-label="Key figures">
        <RuleGrid cols={4} boxed className="t-numeric">
          {home.stats.map((stat) => (
            <Stat key={stat.label} value={stat.value} unit={stat.unit} label={stat.label} />
          ))}
        </RuleGrid>
      </Section>

      <Section aria-labelledby="principles-title">
        <h2 className="t-h3" id="principles-title">
          How we work
        </h2>
        <div className="b-network__footer">
          <RuleGrid cols={4} boxed>
            {about.principles.map((principle) => (
              <div className="capability" key={principle.title}>
                <Icon name={principle.icon} className="capability__icon" />
                <h3 className="capability__title">{principle.title}</h3>
                <p className="capability__text">{principle.text}</p>
              </div>
            ))}
          </RuleGrid>
        </div>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
