import Link from "next/link";

import Icon from "@/components/primitives/Icon";
import LinkArrow from "@/components/primitives/LinkArrow";
import Card, { CardBody, CardFoot } from "@/components/primitives/Card";
import Section from "@/components/layout/Section";
import SectionHead from "@/components/layout/SectionHead";
import Grid from "@/components/layout/Grid";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";

import { servicesPage, serviceCategories, servicesByCategory } from "@/content/en/services";
import { home } from "@/content/en/home";

const BREADCRUMB = [{ label: "Services", href: "/services" }];

export const metadata = buildMetadata({
  title: servicesPage.meta.title,
  description: servicesPage.meta.description,
  path: "/services",
});

/**
 * Service index.
 *
 * The four category sections and every card inside them are generated from
 * the catalogue in `content/en/services.js`. Adding a service means adding one
 * entry there — this file never changes.
 */
export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            path: "/services",
            name: servicesPage.meta.title,
            description: servicesPage.meta.description,
          }),
          breadcrumbSchema(BREADCRUMB),
        ]}
      />

      <PageHero
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        lead={servicesPage.lead}
        breadcrumb={BREADCRUMB}
      />

      {serviceCategories.map((category, index) => {
        const items = servicesByCategory(category.id);

        return (
          <Section
            key={category.id}
            id={category.id}
            surface={index % 2 === 1 ? "subtle" : undefined}
            aria-labelledby={`${category.id}-title`}
          >
            <SectionHead
              eyebrow={`0${index + 1}`}
              eyebrowTone={category.accent}
              title={category.title}
              titleId={`${category.id}-title`}
            />

            <Grid cols={items.length > 3 ? 3 : items.length}>
              {items.map((service) => (
                <Card accent={category.accent} key={service.slug}>
                  <CardBody>
                    <Icon name={service.icon} className="capability__icon" />
                    <h3 className="card__title t-h4">
                      <Link className="card__link" href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p className="card__text">{service.summary}</p>
                    <CardFoot>
                      <LinkArrow as="span">Read more</LinkArrow>
                    </CardFoot>
                  </CardBody>
                </Card>
              ))}
            </Grid>
          </Section>
        );
      })}

      <CtaBand {...home.cta} />
    </>
  );
}
