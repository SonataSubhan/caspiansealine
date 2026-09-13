import LinkArrow from "@/components/primitives/LinkArrow";
import DataTable from "@/components/primitives/DataTable";
import { localeHref } from "@/content";

/**
 * The trade lane table. Shared by the home page and /network so the two can
 * never show different frequencies.
 *
 * The columns are built per render rather than declared once at module scope,
 * because their labels are now words in the reader's language.
 */
export default function LaneTable({ lanes, locale, ui }) {
  const columns = [
    {
      key: "lane",
      label: ui.table.tradeLane,
      render: (row) => <span className="lane-flag">{row.lane}</span>,
    },
    { key: "frequency", label: ui.table.frequency },
    { key: "transit", label: ui.table.transit, numeric: true },
    { key: "cargo", label: ui.table.cargo },
    {
      key: "action",
      label: ui.a11y.laneDetails,
      hideLabel: true,
      numeric: true,
      action: true,
      render: (row) => (
        <LinkArrow href={localeHref(locale, "/network")} aria-label={`${ui.a11y.laneDetails}: ${row.lane}`}>
          <span className="table__action-text">{ui.a11y.laneDetails}</span>
        </LinkArrow>
      ),
    },
  ];

  return <DataTable caption={ui.a11y.laneTableCaption} columns={columns} rows={lanes} />;
}
