import { brand, contact, siteUrl, social } from "../site-shared";

/**
 * Site-wide facts, in English.
 *
 * The numbers, mailboxes and domain come from `site-shared.js` so they exist
 * once for the whole site. Only the wording is here.
 */
export const site = {
  ...brand,
  descriptor: "Shipping company",
  locale: "en",
  url: siteUrl,

  tagline: "Trans-Caspian shipping & logistics",
  summary:
    "Trans-Caspian shipping and multimodal logistics. Ocean transport, port agency, forwarding and customs, delivered under one contract.",
  metaDescription:
    "Caspian Sea Line moves containers, rolling cargo, breakbulk and project shipments across the Caspian Sea. Ocean transport, port agency, customs and inland haulage under one contract.",

  contact: {
    ...contact,
    address: {
      street: contact.street,
      locality: "Baku",
      region: "Baku",
      postalCode: contact.postalCode,
      country: "Azerbaijan",
      countryCode: contact.countryCode,
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

  social,
};

export default site;
