import LinkArrow from "@/components/primitives/LinkArrow";
import DataTable from "@/components/primitives/DataTable";

/**
 * The trade lane table. Shared by the home page and /network so the two can
 * never show different frequencies.
 */
const columns = [
  {
    key: "lane",
    label: "Trade lane",
    render: (row) => <span className="lane-flag">{row.lane}</span>,
  },
  { key: "frequency", label: "Frequency" },
  { key: "transit", label: "Transit", numeric: true },
  { key: "cargo", label: "Cargo" },
  {
    key: "action",
    label: "Lane details",
    hideLabel: true,
    numeric: true,
    action: true,
    render: (row) => (
      <LinkArrow href="/network" aria-label={`Lane details: ${row.lane}`}>
        <span className="table__action-text">Lane details</span>
      </LinkArrow>
    ),
  },
];

export default function LaneTable({ lanes }) {
  return (
    <DataTable
      caption="Caspian Sea Line trade lanes, frequency, transit time and cargo types"
      columns={columns}
      rows={lanes}
    />
  );
}
