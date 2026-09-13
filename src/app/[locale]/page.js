import Hero from "@/components/blocks/Hero";
import QuickBar from "@/components/blocks/QuickBar";
import Intro from "@/components/blocks/Intro";
import ServicePillars from "@/components/blocks/ServicePillars";
import NetworkPreview from "@/components/blocks/NetworkPreview";
import FleetGrid from "@/components/blocks/FleetGrid";
import Capabilities from "@/components/blocks/Capabilities";
import SustainabilityBand from "@/components/blocks/SustainabilityBand";
import NewsGrid from "@/components/blocks/NewsGrid";
import CtaBand from "@/components/blocks/CtaBand";

import { JsonLd, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

import { getContent } from "@/content";
import { newestFirst } from "@/content/lookup";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { additionalPorts, articles, home, lanes, ports, servicePillars, site, sustainability, ui, vessels } = getContent(locale);

  return buildMetadata({
   locale,
    locale,
    title: `${site.name} — ${home.meta.title}`,
    description: home.meta.description,
    path: "/",
    absoluteTitle: true,
  });
}

/**
 * Home page.
 *
 * Every section is a block component fed from the content layer. There is no
 * copy in this file on purpose: changing a headline means editing
 * `content/<locale>/home.js`, never a component.
 */
export default async function HomePage({ params }) {
  const { locale } = await params;
  const { home, site, servicePillars, lanes, ports, additionalPorts, vessels, sustainability, articles, ui } =
    getContent(locale);

  const portNames = [...ports.map((port) => port.name), ...additionalPorts];
  const latest = newestFirst(articles).slice(0, 3);

  return (
    <>
      <JsonLd
        schema={webPageSchema({
          locale,
          path: "/",
          name: `${site.name} — ${home.meta.title}`,
          description: home.meta.description,
        })}
      />

      <Hero locale={locale} {...home.hero} />
      <QuickBar items={home.quickActions} ui={ui} />
      <Intro content={home.intro} facts={site.facts} stats={home.stats} />
      <ServicePillars content={home.services} pillars={servicePillars} ui={ui} />
      <NetworkPreview content={home.network} lanes={lanes} ports={portNames} locale={locale} ui={ui} />
      <FleetGrid locale={locale} content={home.fleet} vessels={vessels} />
      <Capabilities content={home.capabilities} />
      <SustainabilityBand locale={locale} ui={ui} content={sustainability} />
      <NewsGrid content={home.news} articles={latest} locale={locale} ui={ui} />
      <CtaBand {...home.cta} />
    </>
  );
}
