/**
 * Sustainability.
 *
 * TODO(content): a published environmental target that is not formally adopted
 * is a reputational risk. Confirm each target below or replace this page with
 * the policies that are actually in force.
 */

export const sustainability = {
  meta: {
    title: "Sustainability",
    description:
      "The Caspian is a closed sea with no outlet. Caspian Sea Line's environmental standard is built around prevention: ballast water, waste, bunkering and spill response under one audited management system.",
  },
  eyebrow: "Responsibility",
  title: "A closed sea leaves no room for error.",
  lead:
    "The Caspian has no outlet. Everything discharged into it stays in it — which is why our environmental standard is written around prevention rather than response.",
  paragraphs: [
    "Ballast water management, garbage and sludge handling, bunkering procedure and spill response are governed by one management system across the fleet and the agency offices, and audited on the same cycle.",
    "The Caspian is not covered by every international convention that applies to open seas, which means the standard we hold ourselves to is a decision rather than a legal minimum. We have chosen to apply the stricter one.",
  ],
  targets: [
    { value: "−30%", label: "CO₂e per tonne-kilometre by 2030, against a 2024 baseline" },
    { value: "0", label: "Operational spills to sea — the only acceptable target" },
    { value: "100%", label: "Shore power connection wherever the terminal provides it" },
  ],
  pillars: [
    {
      icon: "droplet",
      title: "Ballast and bilge",
      text: "Ballast water managed to prevent transfer of species between Caspian ports; bilge and sludge discharged only to approved reception facilities, with receipts retained.",
    },
    {
      icon: "leaf",
      title: "Emissions",
      text: "Voyage planning and speed management to reduce fuel burn per tonne-kilometre, and shore power taken wherever a terminal offers it.",
    },
    {
      icon: "warehouse",
      title: "Waste",
      text: "Segregation on board, garbage record keeping, and disposal through licensed contractors only — audited annually.",
    },
    {
      icon: "shield",
      title: "Spill prevention",
      text: "Bunkering under checklist and supervision, oil spill response equipment maintained, and drills run on the fleet's exercise programme.",
    },
  ],
  link: { label: "HSSEQ policy", href: "/hsseq" },
};
