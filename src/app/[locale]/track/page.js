import Button from "@/components/primitives/Button";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import PageHero from "@/components/blocks/PageHero";

import { buildMetadata } from "@/lib/seo";
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent } from "@/content";



export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { site, trackPage, ui } = getContent(locale);

  return buildMetadata({
    locale,
    title: trackPage.meta.title,
    description: trackPage.meta.description,
    path: "/track",
    // Nothing to index until tracking is wired to the operations system.
    noIndex: true,
  });
}

/**
 * Shipment tracking.
 *
 * Deliberately not faked. Rather than a search box that returns nothing, the
 * page says plainly that tracking is not connected yet and routes the user to
 * the desk that can answer immediately.
 */
export default async function TrackPage({ params }) {
  const { locale } = await params;
  const { site, trackPage, ui } = getContent(locale);

  const breadcrumb = crumbs(locale, [{ label: trackPage.meta.title, href: "/track" }]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ locale, path: "/track", name: trackPage.meta.title, description: trackPage.meta.description }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero locale={locale} eyebrow={trackPage.eyebrow} title={trackPage.title} breadcrumb={breadcrumb} />

      <Section containerSize="narrow">
        <Stack gap="lg">
          <div className="notice">
            <p className="notice__title">{ui.notices.notConnectedYet}</p>
            <p>{trackPage.notice}</p>
          </div>

          <p className="t-lead">
            Until then, the operations desk can give you a position and an ETA immediately — they are
            reading the same system a tracking page would.
          </p>

          <Stack gap="sm">
            <Button href={site.contact.phoneHref} size="lg" arrow>
              Call the operations desk
            </Button>
            <Button href={`mailto:${site.contact.operationsEmail}`} variant="secondary" size="lg">
              Email with your booking reference
            </Button>
          </Stack>
        </Stack>
      </Section>
    </>
  );
}
