import Button from "@/components/primitives/Button";
import DataTable from "@/components/primitives/DataTable";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent, localeHref } from "@/content";



export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { home, lanes, networkPage, schedulePage, ui } = getContent(locale);

  return buildMetadata({
    locale,
    title: schedulePage.meta.title,
    description: schedulePage.meta.description,
    path: "/network/schedule",
  });
}

/* Built per render rather than at module scope: the headers are words in the
   reader's language. */
const scheduleColumns = (ui) => [
  { key: "lane", label: ui.table.tradeLane, render: (row) => <span className="lane-flag">{row.lane}</span> },
  { key: "days", label: ui.table.sailingDays, render: (row) => row.days.join(" · ") },
  { key: "frequency", label: ui.table.frequency },
  { key: "transit", label: ui.table.transit, numeric: true },
  { key: "cargo", label: ui.table.cargo },
];

/**
 * Sailing schedule.
 *
 * Static today because the data is static. When operations expose a feed, the
 * only change is where `lanes` comes from — the table stays as it is.
 */
export default async function SchedulePage({ params }) {
  const { locale } = await params;
  const { home, lanes, networkPage, schedulePage, ui } = getContent(locale);

  const breadcrumb = crumbs(locale, [
    { label: networkPage.meta.title, href: "/network" },
    { label: schedulePage.meta.title, href: "/network/schedule" },
  ]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            locale,
            path: "/network/schedule",
            name: schedulePage.meta.title,
            description: schedulePage.meta.description,
          }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero
        locale={locale}
        eyebrow={schedulePage.eyebrow}
        title={schedulePage.title}
        lead={schedulePage.lead}
        breadcrumb={breadcrumb}
      />

      <Section>
        <Stack gap="lg">
          <DataTable
            caption={ui.a11y.scheduleCaption}
            columns={scheduleColumns(ui)}
            rows={lanes}
          />

          <div className="notice">
            <p className="notice__title">{ui.notices.placeholderData}</p>
            <p>{schedulePage.notice}</p>
          </div>

          <p className="t-body-s t-muted u-measure">
            Departures can shift with weather, ice and berth availability. Confirmed dates are issued
            with the booking. To be notified when the schedule changes, ask the operations desk to add
            you to the distribution list.
          </p>

          <Button href={localeHref(locale, "/contact")} variant="secondary" arrow>
            Contact the operations desk
          </Button>
        </Stack>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
