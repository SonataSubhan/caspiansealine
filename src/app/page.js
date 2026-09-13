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

import { home } from "@/content/en/home";
import { site } from "@/content/en/site";
import { servicePillars } from "@/content/en/services";
import { lanes, ports, additionalPorts } from "@/content/en/network";
import { vessels } from "@/content/en/fleet";
import { sustainability } from "@/content/en/sustainability";
import { getArticles } from "@/content/en/news";

export const metadata = buildMetadata({
  title: `${site.name} — ${home.meta.title}`,
  description: home.meta.description,
  path: "/",
  absoluteTitle: true,
});

/**
 * Home page.
 *
 * Every section is a block component fed from the content layer. There is no
 * copy in this file on purpose: changing a headline means editing
 * `content/en/home.js`, never a component.
 */
export default function HomePage() {
  const portNames = [...ports.map((port) => port.name), ...additionalPorts];
  const articles = getArticles().slice(0, 3);

  return (
    <>
      <JsonLd
        schema={webPageSchema({
          path: "/",
          name: `${site.name} — ${home.meta.title}`,
          description: home.meta.description,
        })}
      />

      <Hero {...home.hero} />
      <QuickBar items={home.quickActions} />
      <Intro content={home.intro} facts={site.facts} stats={home.stats} />
      <ServicePillars content={home.services} pillars={servicePillars} />
      <NetworkPreview content={home.network} lanes={lanes} ports={portNames} />
      <FleetGrid content={home.fleet} vessels={vessels} />
      <Capabilities content={home.capabilities} />
      <SustainabilityBand content={sustainability} />
      <NewsGrid content={home.news} articles={articles} />
      <CtaBand {...home.cta} />
    </>
  );
}
