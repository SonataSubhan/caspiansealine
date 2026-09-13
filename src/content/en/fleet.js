/**
 * The fleet.
 *
 * TODO(content): vessel names are placeholders built from Baku wind names
 * (Khazri, Gilavar) and the Absheron peninsula. Every specification is
 * literally TODO. Replace the whole array with the real fleet list.
 */

export const vessels = [
  {
    slug: "csl-absheron",
    name: "CSL Absheron",
    type: "Container / general cargo",
    accent: "cyan",
    summary:
      "Multipurpose tonnage for containerised and general cargo on the Baku–Aktau and Baku–Türkmenbaşy lanes.",
    specs: [
      { key: "Capacity", value: "TODO TEU" },
      { key: "Deadweight", value: "TODO DWT" },
      { key: "Length overall", value: "TODO m" },
      { key: "Built", value: "TODO" },
      { key: "Flag", value: "Azerbaijan" },
      { key: "IMO number", value: "TODO" },
    ],
  },
  {
    slug: "csl-khazri",
    name: "CSL Khazri",
    type: "RoRo / trailers",
    accent: "red",
    summary:
      "Rolling-cargo tonnage for accompanied and unaccompanied trailers, trucks and wheeled machinery.",
    specs: [
      { key: "Lane metres", value: "TODO lm" },
      { key: "Deadweight", value: "TODO DWT" },
      { key: "Ramp capacity", value: "TODO t" },
      { key: "Built", value: "TODO" },
      { key: "Flag", value: "Azerbaijan" },
      { key: "IMO number", value: "TODO" },
    ],
  },
  {
    slug: "csl-gilavar",
    name: "CSL Gilavar",
    type: "Project / heavy lift",
    accent: "green",
    summary:
      "Heavy-lift tonnage with onboard cranes for out-of-gauge and project consignments.",
    specs: [
      { key: "Crane capacity", value: "TODO t" },
      { key: "Deadweight", value: "TODO DWT" },
      { key: "Hold dimensions", value: "TODO m" },
      { key: "Built", value: "TODO" },
      { key: "Flag", value: "Azerbaijan" },
      { key: "IMO number", value: "TODO" },
    ],
  },
];

export const fleetPage = {
  meta: {
    title: "Fleet",
    description:
      "Caspian Sea Line operates multipurpose, RoRo and heavy-lift tonnage on the Caspian Sea, supplemented by vetted chartered vessels.",
  },
  eyebrow: "Tonnage",
  title: "Vessels matched to the cargo, not the other way round.",
  lead:
    "Own tonnage on the core lanes, supplemented by chartered vessels that are vetted on certification, class status and operational record before they are offered.",
  charter: {
    title: "Chartered tonnage",
    paragraphs: [
      "Where a cargo does not fit a scheduled sailing, our chartering desk fixes tonnage for it. Every candidate vessel is checked for certification, class status, previous cargoes and operational record before it is offered — a cheap fixture on an unsuitable ship is not a saving.",
      "Chartered voyages are operated by the same desk that runs our own sailings, so the reporting and the escalation path do not change.",
    ],
    link: { label: "Chartering & brokerage", href: "/services/chartering" },
  },
};
