import Media from "@/components/primitives/Media";
import Section from "@/components/layout/Section";
import Grid from "@/components/layout/Grid";
import Stack from "@/components/layout/Stack";
import Card, { CardBody } from "@/components/primitives/Card";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";

import { leadership } from "@/content/en/company";
import { home } from "@/content/en/home";

const BREADCRUMB = [
  { label: "About us", href: "/about" },
  { label: "Leadership", href: "/about/leadership" },
];

export const metadata = buildMetadata({
  title: leadership.meta.title,
  description: leadership.meta.description,
  path: "/about/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            path: "/about/leadership",
            name: leadership.meta.title,
            description: leadership.meta.description,
          }),
          breadcrumbSchema(BREADCRUMB),
        ]}
      />

      <PageHero eyebrow={leadership.eyebrow} title={leadership.title} breadcrumb={BREADCRUMB} />

      <Section>
        <Stack gap="lg">
          <div className="notice">
            <p className="notice__title">Content to supply</p>
            <p>{leadership.lead}</p>
          </div>

          <Grid cols={4}>
            {leadership.people.map((person) => (
              <Card key={person.role}>
                <Media slot="portrait" width={640} height={800} ratio="portrait" flush sizes="(max-width: 599px) 100vw, 25vw" />
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
