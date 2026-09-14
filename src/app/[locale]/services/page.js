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
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent, localeHref } from "@/content";
import { byCategory } from "@/content/lookup";



export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { home, serviceCategories, services, servicesPage, ui } = getContent(locale);

  return buildMetadata({
    locale,
    title: servicesPage.meta.title,
    description: servicesPage.meta.description,
    path: "/services",
  });
}

/**
 * Service index.
 *
 * The four category sections and every card inside them are generated from
 * the catalogue in `content/en/services.js`. Adding a service means adding one
 * entry there — this file never changes.
 */
export default async function ServicesPage({ params }) {
  const { locale } = await params;
  const { home, serviceCategories, services, servicesPage, ui } = getContent(locale);

  const breadcrumb = crumbs(locale, [{ label: servicesPage.meta.title, href: "/services" }]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            locale,
            path: "/services",
            name: servicesPage.meta.title,
            description: servicesPage.meta.description,
          }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero
        locale={locale}
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        lead={servicesPage.lead}
        breadcrumb={breadcrumb}
      />

      {serviceCategories.map((category, index) => {
        const items = byCategory(services, category.id);

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
                      <Link className="card__link" href={localeHref(locale, `/services/${service.slug}`)}>
                        {service.title}
                      </Link>
                    </h3>
                    <p className="card__text">{service.summary}</p>
                    <CardFoot>
                      <LinkArrow as="span">{ui.common.readMore}</LinkArrow>
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
