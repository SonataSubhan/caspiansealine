import Media from "@/components/primitives/Media";
import Section from "@/components/layout/Section";
import Grid from "@/components/layout/Grid";
import Stack from "@/components/layout/Stack";
import Card, { CardBody } from "@/components/primitives/Card";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent } from "@/content";



export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { about, home, leadership, ui } = getContent(locale);

  return buildMetadata({
    locale,
    title: leadership.meta.title,
    description: leadership.meta.description,
    path: "/about/leadership",
  });
}

export default async function LeadershipPage({ params }) {
  const { locale } = await params;
  const { about, home, leadership, ui } = getContent(locale);

  const breadcrumb = crumbs(locale, [
    { label: about.meta.title, href: "/about" },
    { label: leadership.meta.title, href: "/about/leadership" },
  ]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            locale,
            path: "/about/leadership",
            name: leadership.meta.title,
            description: leadership.meta.description,
          }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero locale={locale} eyebrow={leadership.eyebrow} title={leadership.title} breadcrumb={breadcrumb} />

      <Section>
        <Stack gap="lg">
          <div className="notice">
            <p className="notice__title">{ui.notices.contentToSupply}</p>
            <p>{leadership.lead}</p>
          </div>

          <Grid cols={4}>
            {leadership.people.map((person) => (
              <Card key={person.role}>
                <Media locale={locale} slot="portrait" width={640} height={800} ratio="portrait" flush sizes="(max-width: 599px) 100vw, 25vw" />
                <CardBody>
                  <h2 className="card__title t-h5">{person.name}</h2>
                  <p className="t-meta">{person.role}</p>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
