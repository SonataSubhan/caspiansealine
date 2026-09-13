import { notFound } from "next/navigation";
import Link from "next/link";

import Icon from "@/components/primitives/Icon";
import Button from "@/components/primitives/Button";
import SpecList from "@/components/primitives/SpecList";
import Media from "@/components/primitives/Media";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Prose from "@/components/layout/Prose";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { getContent, locales, localeHref } from "@/content";
import { byCategory, bySlug } from "@/content/lookup";


/** Every service page is prerendered; an unknown slug 404s rather than rendering. */
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).services.map((service) => ({ locale, slug: service.slug }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const { home, serviceCategories, services, servicesPage, ui } = getContent(locale);
  const service = bySlug(services, slug);

  if (!service) return buildMetadata({ locale, title: ui.common.notFound, noIndex: true });

  return buildMetadata({
    locale,
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

/**
 * Service detail.
 *
 * One template, sixteen pages. Each renders the same four slots — intro,
 * prose, checklist, facts — so the section never drifts into sixteen
 * different layouts.
 */
export default async function ServicePage({ params }) {
  const { locale, slug } = await params;
  const { home, serviceCategories, services, servicesPage, ui } = getContent(locale);
  const service = bySlug(services, slug);

  if (!service) notFound();

  const category = serviceCategories.find((item) => item.id === service.category);
  const siblings = byCategory(services, service.category).filter((item) => item.slug !== service.slug);

  const breadcrumb = crumbs(locale, [
    { label: servicesPage.meta.title, href: "/services" },
    { label: service.title, href: `/services/${service.slug}` },
  ]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            locale,
            path: `/services/${service.slug}`,
            name: service.title,
            description: service.summary,
          }),
          breadcrumbSchema(breadcrumb, locale),
          serviceSchema({ ...service, category: category?.title }),
        ]}
      />

      <PageHero
        locale={locale}
        eyebrow={category?.title}
        eyebrowTone={category?.accent}
        title={service.title}
        lead={service.intro}
        breadcrumb={breadcrumb}
      />

      <Section>
        <div className="b-detail">
          <Stack gap="lg">
            <Media locale={locale} slot={`service-${service.slug}`} width={1200} height={675} ratio="wide" sizes="(max-width: 899px) 100vw, 60vw" />
            <Prose paragraphs={service.body} />

            <Stack gap="sm">
              <h2 className="t-h4">{ui.sections.whatIsIncluded}</h2>
              <ul className="checklist" role="list">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Stack>
          </Stack>

          <aside className="panel panel--sticky" aria-label={ui.a11y.serviceDetails}>
            <Icon name={service.icon} className="capability__icon" />
            <p className="panel__title">{ui.sections.atAGlance}</p>
            <SpecList items={service.facts} />
            <Button href={localeHref(locale, "/quote")} block arrow>
              {ui.common.getQuote}
            </Button>
            <Button href={localeHref(locale, "/contact")} variant="secondary" block>
              {ui.sections.askQuestion}
            </Button>
          </aside>
        </div>
      </Section>

      {siblings.length > 0 ? (
        <Section surface="subtle" aria-labelledby="related-title">
          <Stack gap="lg">
            <h2 className="t-h3" id="related-title">
              {ui.sections.moreIn} {category?.title.toLowerCase()}
            </h2>
            <nav className="link-rows" aria-label={`${ui.sections.otherServicesIn} ${category?.title}`}>
              {siblings.map((item) => (
                <Link href={localeHref(locale, `/services/${item.slug}`)} key={item.slug}>
                  {item.title}
                  <Icon name="arrow-right" />
                </Link>
              ))}
            </nav>
          </Stack>
        </Section>
      ) : null}

      <CtaBand {...home.cta} />
    </>
  );
}
