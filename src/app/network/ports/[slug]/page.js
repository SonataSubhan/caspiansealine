import { notFound } from "next/navigation";

import SpecList from "@/components/primitives/SpecList";
import Button from "@/components/primitives/Button";
import Media from "@/components/primitives/Media";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata, trimDescription } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";

import { ports, getPort } from "@/content/en/network";
import { home } from "@/content/en/home";

export function generateStaticParams() {
  return ports.map((port) => ({ slug: port.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const port = getPort(slug);

  if (!port) return buildMetadata({ title: "Not found", noIndex: true });

  return buildMetadata({
    title: `${port.name}, ${port.country}`,
    description: trimDescription(`${port.role} ${port.intro}`),
    path: `/network/ports/${port.slug}`,
  });
}

export default async function PortPage({ params }) {
  const { slug } = await params;
  const port = getPort(slug);

  if (!port) notFound();

  const breadcrumb = [
    { label: "Network", href: "/network" },
    { label: port.name, href: `/network/ports/${port.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            path: `/network/ports/${port.slug}`,
            name: `${port.name}, ${port.country}`,
            description: port.role,
          }),
          breadcrumbSchema(breadcrumb),
        ]}
      />

      <PageHero
        eyebrow={port.country}
        title={port.name}
        lead={port.role}
        breadcrumb={breadcrumb}
      />

      <Section>
        <div className="b-detail">
          <Stack gap="lg">
            <Media slot={`port-${port.slug}`} width={1200} height={675} ratio="wide" sizes="(max-width: 899px) 100vw, 60vw" />
            <p className="t-lead u-measure">{port.intro}</p>

            <Stack gap="sm">
              <h2 className="t-h4">Facilities</h2>
              <ul className="checklist" role="list">
                {port.facilities.map((facility) => (
                  <li key={facility}>{facility}</li>
                ))}
              </ul>
            </Stack>
          </Stack>

          <aside className="panel panel--sticky" aria-label="Port details">
            <p className="panel__title">Port facts</p>
            <SpecList items={[...port.facts, { key: "UN/LOCODE", value: port.unlocode }]} />
            <Button href="/quote" block arrow>
              Get a quote
            </Button>
            <Button href="/network/schedule" variant="secondary" block>
              Sailing schedule
            </Button>
          </aside>
        </div>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
