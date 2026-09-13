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
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent } from "@/content";



export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { about, home, site, ui } = getContent(locale);

  return buildMetadata({
   locale,
    locale,
    title: about.meta.title,
    description: about.meta.description,
    path: "/about",
  });
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const { about, home, site, ui } = getContent(locale);

  const breadcrumb = crumbs(locale, [{ label: about.meta.title, href: "/about" }]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ locale, path: "/about", name: about.meta.title, description: about.meta.description }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero locale={locale} eyebrow={about.eyebrow} title={about.title} lead={about.lead} breadcrumb={breadcrumb} />

      <Section>
        <Split ratio="copyNarrow" align="start">
          <Stack gap="lg">
            <Media locale={locale} slot="about" width={1200} height={900} ratio="hero" sizes="(max-width: 899px) 100vw, 40vw" />
            <SpecList items={site.facts} />
          </Stack>
          <Prose paragraphs={about.paragraphs} />
        </Split>
      </Section>

      <Section surface="subtle" spacing="tight" aria-label={ui.a11y.keyFigures}>
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
