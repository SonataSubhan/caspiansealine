import Badge from "@/components/primitives/Badge";
import Media from "@/components/primitives/Media";
import SpecList from "@/components/primitives/SpecList";
import Button from "@/components/primitives/Button";
import Section from "@/components/layout/Section";
import Split from "@/components/layout/Split";
import Stack from "@/components/layout/Stack";
import Prose from "@/components/layout/Prose";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent } from "@/content";



export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { fleetPage, home, ui, vessels } = getContent(locale);

  return buildMetadata({
   locale,
    locale,
    title: fleetPage.meta.title,
    description: fleetPage.meta.description,
    path: "/fleet",
  });
}

/**
 * Fleet.
 *
 * Each vessel gets a full-width split rather than a card, because the
 * specification table is the point of the page and a card cannot hold it
 * legibly. The image side alternates so the page has a rhythm.
 */
export default async function FleetPage({ params }) {
  const { locale } = await params;
  const { fleetPage, home, ui, vessels } = getContent(locale);

  const breadcrumb = crumbs(locale, [{ label: fleetPage.meta.title, href: "/fleet" }]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ locale, path: "/fleet", name: fleetPage.meta.title, description: fleetPage.meta.description }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero
        locale={locale}
        eyebrow={fleetPage.eyebrow}
        title={fleetPage.title}
        lead={fleetPage.lead}
        breadcrumb={breadcrumb}
      />

      {vessels.map((vessel, index) => (
        <Section
          key={vessel.slug}
          id={vessel.slug}
          surface={index % 2 === 1 ? "subtle" : undefined}
          aria-labelledby={`${vessel.slug}-title`}
        >
          <Split ratio={index % 2 === 1 ? "mediaNarrow" : "copyNarrow"} flip={index % 2 === 1}>
            <Stack gap="lg">
              <Badge tone={vessel.accent}>{vessel.type}</Badge>
              <h2 className="t-h3" id={`${vessel.slug}-title`}>
                {vessel.name}
              </h2>
              <p className="t-lead">{vessel.summary}</p>
              <SpecList items={vessel.specs} className="u-full-width" />
            </Stack>

            <Media locale={locale}
              slot={vessel.slug}
              width={1200}
              height={800}
              note="vessel"
              sizes="(max-width: 899px) 100vw, 50vw"
            />
          </Split>
        </Section>
      ))}

      <Section aria-labelledby="charter-title">
        <Split ratio="copyNarrow" align="start">
          <Stack gap="lg">
            <h2 className="t-h3" id="charter-title">
              {fleetPage.charter.title}
            </h2>
            <Button href={fleetPage.charter.link.href} variant="secondary" arrow>
              {fleetPage.charter.link.label}
            </Button>
          </Stack>
          <Prose paragraphs={fleetPage.charter.paragraphs} />
        </Split>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
