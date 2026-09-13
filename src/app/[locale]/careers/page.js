import Icon from "@/components/primitives/Icon";
import Button from "@/components/primitives/Button";
import Section from "@/components/layout/Section";
import Split from "@/components/layout/Split";
import Stack from "@/components/layout/Stack";
import Prose from "@/components/layout/Prose";
import RuleGrid from "@/components/layout/RuleGrid";
import Media from "@/components/primitives/Media";
import PageHero from "@/components/blocks/PageHero";

import { buildMetadata } from "@/lib/seo";
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent } from "@/content";



export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { careers, site, ui } = getContent(locale);

  return buildMetadata({
   locale,
    locale,
    title: careers.meta.title,
    description: careers.meta.description,
    path: "/careers",
  });
}

export default async function CareersPage({ params }) {
  const { locale } = await params;
  const { careers, site, ui } = getContent(locale);

  const breadcrumb = crumbs(locale, [{ label: careers.meta.title, href: "/careers" }]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ locale, path: "/careers", name: careers.meta.title, description: careers.meta.description }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero locale={locale} eyebrow={careers.eyebrow} title={careers.title} lead={careers.lead} breadcrumb={breadcrumb} />

      <Section>
        <Split ratio="copyNarrow" align="start">
          <Media locale={locale} slot="careers" width={1200} height={900} ratio="hero" sizes="(max-width: 899px) 100vw, 40vw" />
          <Stack gap="lg">
            <Prose paragraphs={careers.paragraphs} />
            <Button href={`mailto:${site.contact.generalEmail}`} arrow>
              Send a speculative application
            </Button>
          </Stack>
        </Split>
      </Section>

      <Section surface="subtle" aria-labelledby="areas-title">
        <h2 className="t-h3" id="areas-title">
          Where people work
        </h2>
        <div className="b-network__footer">
          <RuleGrid cols={4} boxed>
            {careers.areas.map((area) => (
              <div className="capability" key={area.title}>
                <Icon name={area.icon} className="capability__icon" />
                <h3 className="capability__title">{area.title}</h3>
                <p className="capability__text">{area.text}</p>
              </div>
            ))}
          </RuleGrid>
        </div>
      </Section>
    </>
  );
}
