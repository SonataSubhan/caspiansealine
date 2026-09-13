/**
 * Legal pages.
 *
 * TODO(content): every document below is a structural placeholder. Privacy,
 * cookies and especially terms of carriage must be written or reviewed by a
 * lawyer before publication — a carrier's terms of carriage are a contract.
 */

const documents = [
  {
    slug: "privacy",
    title: "Privacy notice",
    updated: "2026-09-01",
    intro: "How Caspian Sea Line collects, uses and protects personal data.",
    sections: [
      { heading: "Who we are", body: ["TODO(content): controller identity, registered address and data protection contact."] },
      { heading: "What we collect", body: ["TODO(content): categories of personal data collected through the website, the quote form and commercial correspondence."] },
      { heading: "Why we collect it", body: ["TODO(content): lawful basis for each processing purpose."] },
      { heading: "Who we share it with", body: ["TODO(content): processors, agents and authorities; international transfers."] },
      { heading: "How long we keep it", body: ["TODO(content): retention periods."] },
      { heading: "Your rights", body: ["TODO(content): access, rectification, erasure, objection, and how to exercise them."] },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie policy",
    updated: "2026-09-01",
    intro: "What this website stores on your device, and why.",
    sections: [
      {
        heading: "What we use today",
        body: [
          "This website currently sets no analytics, advertising or tracking cookies. It loads no third-party scripts and no external fonts — everything it needs is served from this domain.",
          "TODO(content): if analytics is added later, this page and a consent mechanism must be added with it.",
        ],
      },
      { heading: "Strictly necessary storage", body: ["TODO(content): list any strictly necessary cookies once forms are wired to a back end."] },
    ],
  },
  {
    slug: "terms",
    title: "Legal notice",
    updated: "2026-09-01",
    intro: "Website terms of use, company details and disclaimers.",
    sections: [
      { heading: "Company details", body: ["TODO(content): registered name, registration number, registered office, VAT number."] },
      { heading: "Use of this website", body: ["TODO(content): permitted use, intellectual property, and limitation of liability for website content."] },
      { heading: "Schedules and rates", body: ["TODO(content): statement that published schedules and indications are not binding offers."] },
      { heading: "Governing law", body: ["TODO(content): governing law and jurisdiction."] },
    ],
  },
  {
    slug: "terms-of-carriage",
    title: "Terms of carriage",
    updated: "2026-09-01",
    intro: "The contractual terms on which Caspian Sea Line carries cargo.",
    sections: [
      {
        heading: "Before you publish this page",
        body: [
          "TODO(legal): terms of carriage are a contract, not marketing copy. This page must be drafted or reviewed by a maritime lawyer and reconciled with the bill of lading and sea waybill actually issued.",
          "Publishing placeholder terms would be worse than publishing nothing.",
        ],
      },
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility statement",
    updated: "2026-09-01",
    intro: "How this website is built to be usable by everyone, and how to tell us when it is not.",
    sections: [
      {
        heading: "What we have done",
        body: [
          "This site is built to WCAG 2.2 AA as a design constraint rather than a retrofit: semantic headings in order, a skip link, a visible focus ring on every interactive element, controls at least 46px tall, colour contrast checked against the brand palette, full keyboard operation including the navigation menus, and support for reduced-motion preferences.",
          "Data tables reflow into labelled rows on small screens rather than forcing a sideways scroll, and every image slot carries a text alternative.",
        ],
      },
      {
        heading: "Known limitations",
        body: ["TODO(content): list anything found in testing that is not yet fixed, with a target date."],
      },
      {
        heading: "Tell us about a problem",
        body: ["TODO(content): accessibility contact address and expected response time."],
      },
    ],
  },
];

export function getLegalDocuments() {
  return documents;
}

export function getLegalDocument(slug) {
  return documents.find((doc) => doc.slug === slug);
}
