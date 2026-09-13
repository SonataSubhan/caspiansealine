/**
 * The navigation tree.
 *
 * This is the only place site structure is declared. The desktop mega menu,
 * the mobile drawer, the footer columns and the XML sitemap all read from it,
 * so a new page is added in exactly one file and appears everywhere at once.
 *
 * Shape:
 *   { label, href }                                  → a plain link
 *   { label, groups: [{ title, links: [...] }], feature } → a mega-menu panel
 */

export const utilityNav = [
  { label: "Sailing schedule", href: "/network/schedule", icon: "calendar" },
  { label: "Track a shipment", href: "/track", icon: "track" },
  { label: "Agency network", href: "/network/agents", icon: "pin" },
];

export const primaryNav = [
  {
    id: "services",
    label: "Services",
    href: "/services",
    groups: [
      {
        title: "Ocean transport",
        links: [
          { label: "Container shipping", href: "/services/container-shipping" },
          { label: "RoRo & rolling cargo", href: "/services/roro" },
          { label: "Breakbulk & general cargo", href: "/services/breakbulk" },
          { label: "Dry bulk", href: "/services/dry-bulk" },
          { label: "Liquid bulk", href: "/services/liquid-bulk" },
        ],
      },
      {
        title: "Port & agency",
        links: [
          { label: "Port agency", href: "/services/port-agency" },
          { label: "Husbandry & crew services", href: "/services/husbandry" },
          { label: "Stevedoring coordination", href: "/services/stevedoring" },
          { label: "Bunkering & supplies", href: "/services/bunkering" },
        ],
      },
      {
        title: "Logistics",
        links: [
          { label: "Freight forwarding", href: "/services/freight-forwarding" },
          { label: "Customs clearance", href: "/services/customs-clearance" },
          { label: "Warehousing", href: "/services/warehousing" },
          { label: "Inland transport", href: "/services/inland-transport" },
        ],
      },
      {
        title: "Specialised",
        links: [
          { label: "Project & heavy lift", href: "/services/project-cargo" },
          { label: "Oil & gas logistics", href: "/services/energy-logistics" },
          { label: "Chartering & brokerage", href: "/services/chartering" },
          { label: "All services", href: "/services", strong: true },
        ],
      },
    ],
    feature: {
      eyebrow: "Featured",
      title: "One contract, quay to door",
      text: "Sea leg, port handling, customs and final delivery managed by a single operations desk.",
      href: "/services",
      linkLabel: "Explore services",
      image: { slot: "menu-feature", width: 640, height: 360 },
    },
  },
  {
    id: "network",
    label: "Network",
    href: "/network",
    groups: [
      {
        title: "Routes",
        links: [
          { label: "Trade lanes", href: "/network" },
          { label: "Sailing schedule", href: "/network/schedule" },
          { label: "Agency network", href: "/network/agents" },
        ],
      },
      {
        title: "Ports",
        links: [
          { label: "Baku / Alat, Azerbaijan", href: "/network/ports/baku-alat" },
          { label: "Aktau, Kazakhstan", href: "/network/ports/aktau" },
          { label: "Kuryk, Kazakhstan", href: "/network/ports/kuryk" },
          { label: "Türkmenbaşy, Turkmenistan", href: "/network/ports/turkmenbashy" },
          { label: "Bandar Anzali, Iran", href: "/network/ports/bandar-anzali" },
        ],
      },
      {
        title: "Corridors",
        links: [
          { label: "Middle Corridor", href: "/network#middle-corridor" },
          { label: "North–South corridor", href: "/network#north-south" },
        ],
      },
      {
        title: "Get in touch",
        links: [
          { label: "Request a quote", href: "/quote" },
          { label: "Contact a desk", href: "/contact" },
        ],
      },
    ],
    feature: {
      eyebrow: "Coverage",
      title: "Five Caspian states, one operator",
      text: "Fixed-day departures from Baku with connecting rail and road across the Middle Corridor.",
      href: "/network",
      linkLabel: "See the network",
      image: { slot: "network-map", width: 640, height: 360 },
    },
  },
  { id: "fleet", label: "Fleet", href: "/fleet" },
  {
    id: "company",
    label: "Company",
    href: "/about",
    groups: [
      {
        title: "About us",
        links: [
          { label: "Who we are", href: "/about" },
          { label: "Leadership", href: "/about/leadership" },
        ],
      },
      {
        title: "Standards",
        links: [
          { label: "HSSEQ policy", href: "/hsseq" },
          { label: "Certifications", href: "/certifications" },
        ],
      },
      {
        title: "Media",
        links: [{ label: "News", href: "/news" }],
      },
      {
        title: "People",
        links: [{ label: "Careers", href: "/careers" }],
      },
    ],
    feature: {
      eyebrow: "Standards",
      title: "Audited, certified, accountable",
      text: "Safety and quality management aligned to ISM, ISO 9001 and ISO 14001.",
      href: "/certifications",
      linkLabel: "View certifications",
      image: { slot: "company", width: 640, height: 360 },
    },
  },
  { id: "sustainability", label: "Sustainability", href: "/sustainability" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export const footerNav = [
  {
    title: "Services",
    links: [
      { label: "Container shipping", href: "/services/container-shipping" },
      { label: "RoRo & rolling cargo", href: "/services/roro" },
      { label: "Breakbulk", href: "/services/breakbulk" },
      { label: "Project & heavy lift", href: "/services/project-cargo" },
      { label: "Port agency", href: "/services/port-agency" },
      { label: "Freight forwarding", href: "/services/freight-forwarding" },
    ],
  },
  {
    title: "Network",
    links: [
      { label: "Trade lanes", href: "/network" },
      { label: "Sailing schedule", href: "/network/schedule" },
      { label: "Agency network", href: "/network/agents" },
      { label: "Ports we call", href: "/network#ports" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Fleet", href: "/fleet" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "HSSEQ", href: "/hsseq" },
      { label: "Certifications", href: "/certifications" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Customer tools",
    links: [
      { label: "Request a quote", href: "/quote" },
      { label: "Track a shipment", href: "/track" },
      { label: "Terms of carriage", href: "/legal/terms-of-carriage" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const legalNav = [
  { label: "Privacy notice", href: "/legal/privacy" },
  { label: "Cookie policy", href: "/legal/cookies" },
  { label: "Legal", href: "/legal/terms" },
  { label: "Accessibility", href: "/legal/accessibility" },
];
