/**
 * Site-wide facts. Everything here appears in more than one place, so it is
 * defined once and imported — never retyped into a component.
 *
 * TODO(content): every value marked TODO must be confirmed by the client
 * before launch. See prototype/CONTENT-TODO.md for the full checklist.
 */

export const site = {
  name: "Caspian Sea Line",
  legalName: "Caspian Sea Line", // TODO(content): exact registered name
  descriptor: "Shipping company",
  locale: "en",
  url: "https://www.caspiansealine.com", // TODO(content): confirm production domain

  tagline: "Trans-Caspian shipping & logistics",
  summary:
    "Trans-Caspian shipping and multimodal logistics. Ocean transport, port agency, forwarding and customs, delivered under one contract.",
  metaDescription:
    "Caspian Sea Line moves containers, rolling cargo, breakbulk and project shipments across the Caspian Sea. Ocean transport, port agency, customs and inland haulage under one contract.",

  contact: {
    // TODO(content): real numbers, addresses and mailboxes
    phone: "+994 12 000 00 00",
    phoneHref: "tel:+994120000000",
    emergencyPhone: "+994 12 000 00 01",
    emergencyPhoneHref: "tel:+994120000001",
    operationsEmail: "ops@caspiansealine.com",
    generalEmail: "info@caspiansealine.com",
    address: {
      street: "TODO — street address",
      locality: "Baku",
      region: "Baku",
      postalCode: "TODO",
      country: "Azerbaijan",
      countryCode: "AZ",
    },
    hours: "Operations desk staffed 24 / 7",
  },

  /** Facts reused across About, Contact and structured data. */
  facts: [
    { key: "Head office", value: "Baku, Azerbaijan" },
    { key: "Operating since", value: "TODO" },
    { key: "Own agency offices", value: "TODO" },
    { key: "Management system", value: "ISM · ISO 9001 · ISO 14001" }, // TODO(content): confirm
  ],

  social: [
    // TODO(content): real profile URLs, or delete the entry
    { label: "LinkedIn", icon: "linkedin", href: "#" },
    { label: "Facebook", icon: "facebook", href: "#" },
    { label: "Instagram", icon: "instagram", href: "#" },
    { label: "YouTube", icon: "youtube", href: "#" },
  ],

  /** Languages the content layer is prepared for. Only `en` is built today. */
  locales: ["en"],
  plannedLocales: ["en", "az", "ru"],
};

export default site;
