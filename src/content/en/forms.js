/**
 * Copy and option lists for the quote, contact and tracking forms.
 *
 * Kept out of the components so a sales lead can reword a label or add a cargo
 * type without opening a JSX file.
 */

export const quotePage = {
  meta: {
    title: "Request a quote",
    description:
      "Send your cargo details and required delivery date. Caspian Sea Line replies with a routing proposal and an indication within one business day.",
  },
  eyebrow: "Start here",
  title: "Tell us what you are moving.",
  lead:
    "The more of this you can fill in, the closer the first answer will be. If you do not have a detail yet, leave it blank — we will ask.",
  aside: {
    title: "What happens next",
    steps: [
      "A named operator picks the enquiry up — not a queue.",
      "We check space, equipment and the connecting legs against your delivery date.",
      "You get a routing proposal and an indication, normally within one business day.",
    ],
  },
  cargoTypes: [
    "Containerised",
    "RoRo / rolling cargo",
    "Breakbulk / general cargo",
    "Project / heavy lift",
    "Dry bulk",
    "Liquid bulk",
    "Not sure yet",
  ],
  services: [
    "Ocean transport only",
    "Ocean transport + inland haulage",
    "Full door-to-door",
    "Port agency only",
    "Customs clearance only",
  ],
};

export const contactPage = {
  meta: {
    title: "Contact",
    description:
      "Reach the Caspian Sea Line operations desk, booking desk or head office in Baku. Emergency contact available 24 hours.",
  },
  eyebrow: "Get in touch",
  title: "Talk to an operator.",
  lead: "One desk covers bookings, operations and agency. Out of hours, the emergency line reaches a duty officer.",
  desks: [
    {
      icon: "headset",
      title: "Operations & bookings",
      text: "Live shipments, schedule questions, documentation.",
      hours: "24 / 7",
    },
    {
      icon: "quote",
      title: "Commercial",
      text: "Rates, tenders, new business and chartering enquiries.",
      hours: "Mon–Fri, 09:00–18:00 (UTC+4)",
    },
    {
      icon: "ship",
      title: "Port agency",
      text: "Port calls, husbandry, crew changes and disbursements.",
      hours: "24 / 7",
    },
  ],
  subjects: ["Booking or quote", "Live shipment", "Port agency", "Careers", "Media", "Something else"],
};

export const trackPage = {
  meta: {
    title: "Track a shipment",
    description: "Track a Caspian Sea Line shipment by booking reference or bill of lading number.",
  },
  eyebrow: "Shipment status",
  title: "Track a shipment.",
  lead: "Enter a booking reference or bill of lading number.",
  notice:
    "TODO(build): tracking needs a back end. Until the operations system exposes an API, this form should either be pointed at the existing portal or replaced with a direct line to the operations desk.",
};
