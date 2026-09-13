import { notFound } from "next/navigation";

import SpecList from "@/components/primitives/SpecList";
import Button from "@/components/primitives/Button";
import Media from "@/components/primitives/Media";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata, trimDescription } from "@/lib/seo";
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent, locales, localeHref } from "@/content";
import { bySlug } from "@/content/lookup";


export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).ports.map((port) => ({ locale, slug: port.slug }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const { home, networkPage, ports, ui } = getContent(locale);
  const port = bySlug(ports, slug);

  if (!port) return buildMetadata({ locale, title: ui.common.notFound, noIndex: true });

  return buildMetadata({
    locale,
    title: `${port.name}, ${port.country}`,
    description: trimDescription(`${port.role} ${port.intro}`),
    path: `/network/ports/${port.slug}`,
  });
}

export default async function PortPage({ params }) {
  const { locale, slug } = await params;
  const { home, networkPage, ports, ui } = getContent(locale);
  const port = bySlug(ports, slug);

  if (!port) notFound();

  const breadcrumb = crumbs(locale, [
    { label: networkPage.meta.title, href: "/network" },
    { label: port.name, href: `/network/ports/${port.slug}` },
  ]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            locale,
            path: `/network/ports/${port.slug}`,
            name: `${port.name}, ${port.country}`,
            description: port.role,
          }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero
        locale={locale}
        eyebrow={port.country}
        title={port.name}
        lead={port.role}
        breadcrumb={breadcrumb}
      />

      <Section>
        <div className="b-detail">
          <Stack gap="lg">
            <Media locale={locale} slot={`port-${port.slug}`} width={1200} height={675} ratio="wide" sizes="(max-width: 899px) 100vw, 60vw" />
            <p className="t-lead u-measure">{port.intro}</p>

            <Stack gap="sm">
              <h2 className="t-h4">{ui.sections.facilities}</h2>
              <ul className="checklist" role="list">
                {port.facilities.map((facility) => (
                  <li key={facility}>{facility}</li>
                ))}
              </ul>
            </Stack>
          </Stack>

          <aside className="panel panel--sticky" aria-label={ui.a11y.portDetails}>
            <p className="panel__title">{ui.sections.portFacts}</p>
            <SpecList items={[...port.facts, { key: "UN/LOCODE", value: port.unlocode }]} />
            <Button href={localeHref(locale, "/quote")} block arrow>
              Get a quote
            </Button>
            <Button href={localeHref(locale, "/network/schedule")} variant="secondary" block>
              Sailing schedule
            </Button>
          </aside>
        </div>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
