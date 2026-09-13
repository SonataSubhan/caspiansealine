import Button from "@/components/primitives/Button";
import DataTable from "@/components/primitives/DataTable";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";

import { schedulePage, lanes } from "@/content/en/network";
import { home } from "@/content/en/home";

const BREADCRUMB = [
  { label: "Network", href: "/network" },
  { label: "Sailing schedule", href: "/network/schedule" },
];

export const metadata = buildMetadata({
  title: schedulePage.meta.title,
  description: schedulePage.meta.description,
  path: "/network/schedule",
});

const columns = [
  { key: "lane", label: "Trade lane", render: (row) => <span className="lane-flag">{row.lane}</span> },
  { key: "days", label: "Sailing days", render: (row) => row.days.join(" · ") },
  { key: "frequency", label: "Frequency" },
  { key: "transit", label: "Transit", numeric: true },
  { key: "cargo", label: "Cargo" },
];

/**
 * Sailing schedule.
 *
 * Static today because the data is static. When operations expose a feed, the
 * only change is where `lanes` comes from — the table stays as it is.
 */
export default function SchedulePage() {
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({
            path: "/network/schedule",
            name: schedulePage.meta.title,
            description: schedulePage.meta.description,
          }),
          breadcrumbSchema(BREADCRUMB),
        ]}
      />

      <PageHero
        eyebrow={schedulePage.eyebrow}
        title={schedulePage.title}
        lead={schedulePage.lead}
        breadcrumb={BREADCRUMB}
      />

      <Section>
        <Stack gap="lg">
          <DataTable
            caption="Published sailing days, frequency and transit time by trade lane"
            columns={columns}
            rows={lanes}
          />

          <div className="notice">
            <p className="notice__title">Placeholder data</p>
            <p>{schedulePage.notice}</p>
          </div>

          <p className="t-body-s t-muted u-measure">
            Departures can shift with weather, ice and berth availability. Confirmed dates are issued
            with the booking. To be notified when the schedule changes, ask the operations desk to add
            you to the distribution list.
          </p>

          <Button href="/contact" variant="secondary" arrow>
            Contact the operations desk
          </Button>
        </Stack>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
