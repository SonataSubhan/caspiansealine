/**
 * Home page copy.
 *
 * TODO(content): every figure in `stats`, `lanes` and `targets` is a plausible
 * placeholder, not a verified fact. See prototype/CONTENT-TODO.md.
 */

export const home = {
  meta: {
    title: "Trans-Caspian shipping & logistics",
    description:
      "Caspian Sea Line moves containers, rolling cargo, breakbulk and project shipments across the Caspian Sea. Ocean transport, port agency, customs and inland haulage under one contract.",
  },

  hero: {
    eyebrow: "Trans-Caspian shipping & logistics",
    titleLead: "Sea freight across the",
    titleAccent: "Caspian",
    titleTail: ", engineered end to end.",
    lead:
      "Containers, rolling cargo, breakbulk and project shipments between Baku, Aktau, Kuryk, Türkmenbaşy and Bandar Anzali — with port agency, customs and inland haulage handled under one contract.",
    actions: [
      { label: "Get a quote", href: "/quote", variant: "primary", arrow: true },
      { label: "Sailing schedule", href: "/network/schedule", variant: "secondary" },
    ],
    image: { slot: "hero", width: 1600, height: 1200, note: "vessel at sea" },
  },

  quickActions: [
    {
      title: "Request a quote",
      sub: "Indication within 24 hours",
      href: "/quote",
      icon: "quote",
    },
    {
      title: "Sailing schedule",
      sub: "Departures and transit times",
      href: "/network/schedule",
      icon: "calendar",
    },
    {
      title: "Track a shipment",
      sub: "Booking or B/L number",
      href: "/track",
      icon: "track",
    },
    {
      title: "Find an agent",
      sub: "Offices and port agents",
      href: "/network/agents",
      icon: "pin",
    },
  ],

  intro: {
    eyebrow: "Who we are",
    title: "A Caspian operator built for the Middle Corridor.",
    statement:
      "The Caspian is a short sea with long consequences. A missed berth window in Alat becomes a missed train in Aktau, and a missed train becomes a delivery that slips by a week.",
    paragraphs: [
      "Caspian Sea Line is built around that reality. We operate fixed-day sailings on the main Trans-Caspian lanes, hold our own agency presence in the ports we call, and run a single operations desk that owns the shipment from the moment cargo is booked until it is released at destination.",
      "That means one contract, one point of contact and one set of documents — whether you are moving forty containers, a fleet of trailers or a transformer that needs a route survey before it leaves the plant.",
    ],
    link: { label: "More about the company", href: "/about" },
  },

  stats: [
    { value: "5", label: "Caspian littoral states served from a single operations desk" },
    { value: "12", unit: "+", label: "Ports and terminals covered by own offices or appointed agents" },
    { value: "18", unit: "h", label: "Typical port-to-port transit, Baku (Alat) to Aktau" },
    { value: "24/7", label: "Operations, agency and emergency response cover" },
  ],

  services: {
    eyebrow: "What we do",
    title: "Three capabilities, one accountable operator.",
    action: { label: "All services", href: "/services" },
  },

  network: {
    eyebrow: "Where we sail",
    title: "Trade lanes across the Caspian.",
    lead:
      "Fixed-day departures on the core lanes, with additional callings on inducement. Transit times are port to port and exclude terminal dwell.",
    action: { label: "Full sailing schedule", href: "/network/schedule" },
  },

  fleet: {
    eyebrow: "Tonnage",
    title: "Vessels matched to the cargo, not the other way round.",
    action: { label: "View the fleet", href: "/fleet" },
  },

  capabilities: {
    eyebrow: "Why shippers stay",
    title: "The operating detail that decides a schedule.",
    items: [
      {
        icon: "headset",
        title: "One operations desk",
        text: "The same team owns the booking, the sea leg, the port call and the release. No handover, no re-explaining the cargo.",
      },
      {
        icon: "clock",
        title: "Fixed-day departures",
        text: "Published sailing days on the core lanes, so production and rail bookings can be planned backwards from the vessel.",
      },
      {
        icon: "crane",
        title: "Project cargo engineering",
        text: "Route surveys, lifting plans, lashing calculations and permit handling for out-of-gauge and heavy-lift consignments.",
      },
      {
        icon: "doc-check",
        title: "Customs and border expertise",
        text: "Declarations, transit documents and dangerous-goods paperwork prepared in-house on both sides of the crossing.",
      },
      {
        icon: "shield",
        title: "Audited safety management",
        text: "Safety, quality and environmental management held to international standards and verified by external audit.",
      },
      {
        icon: "route",
        title: "Corridor connectivity",
        text: "Onward rail and road across the Middle Corridor, coordinated against the vessel rather than booked after arrival.",
      },
    ],
  },

  news: {
    eyebrow: "Newsroom",
    title: "Latest from Caspian Sea Line.",
    action: { label: "All news", href: "/news" },
  },

  cta: {
    eyebrow: "Start here",
    title: "Tell us what you are moving.",
    lead:
      "Send the cargo details, the origin and the delivery date. You will get a routing proposal and an indication from a named operator, not a ticket number.",
    actions: [
      { label: "Get a quote", href: "/quote", variant: "primary", arrow: true },
      { label: "Talk to an operator", href: "/contact", variant: "secondary" },
    ],
  },
};

export default home;
