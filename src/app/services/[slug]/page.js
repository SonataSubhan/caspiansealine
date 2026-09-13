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
import { JsonLd, webPageSchema, breadcrumbSchema, serviceSchema } from "@/lib/schema";

import { services, getService, serviceCategories, servicesByCategory } from "@/content/en/services";
import { home } from "@/content/en/home";

/** Every service page is prerendered; an unknown slug 404s rather than rendering. */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return buildMetadata({ title: "Not found", noIndex: true });

  return buildMetadata({
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
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const category = serviceCategories.find((item) => item.id === service.category);
  const siblings = servicesByCategory(service.category).filter((item) => item.slug !== service.slug);

  const breadcrumb = [
    { label: "Services", href: "/services" },
    { label: service.title, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            path: `/services/${service.slug}`,
            name: service.title,
            description: service.summary,
          }),
          breadcrumbSchema(breadcrumb),
          serviceSchema({ ...service, category: category?.title }),
        ]}
      />

      <PageHero
        eyebrow={category?.title}
        eyebrowTone={category?.accent}
        title={service.title}
        lead={service.intro}
        breadcrumb={breadcrumb}
      />

      <Section>
        <div className="b-detail">
          <Stack gap="lg">
            <Media slot={`service-${service.slug}`} width={1200} height={675} ratio="wide" sizes="(max-width: 899px) 100vw, 60vw" />
            <Prose paragraphs={service.body} />

            <Stack gap="sm">
              <h2 className="t-h4">What is included</h2>
              <ul className="checklist" role="list">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Stack>
          </Stack>

          <aside className="panel panel--sticky" aria-label="Service details">
            <Icon name={service.icon} className="capability__icon" />
            <p className="panel__title">At a glance</p>
            <SpecList items={service.facts} />
            <Button href="/quote" block arrow>
              Get a quote
            </Button>
            <Button href="/contact" variant="secondary" block>
              Ask a question
            </Button>
          </aside>
        </div>
      </Section>

      {siblings.length > 0 ? (
        <Section surface="subtle" aria-labelledby="related-title">
          <Stack gap="lg">
            <h2 className="t-h3" id="related-title">
              More in {category?.title.toLowerCase()}
            </h2>
            <nav className="link-rows" aria-label={`Other ${category?.title} services`}>
              {siblings.map((item) => (
                <Link href={`/services/${item.slug}`} key={item.slug}>
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
