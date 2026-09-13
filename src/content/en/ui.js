/**
 * Interface strings.
 *
 * Rule 1 of this codebase is that content is data, not JSX. A single-language
 * site can cheat on that for small strings — a table header, an aria-label, a
 * "Read more" — and the cheating is invisible. A second language makes every
 * one of them visible at once, because an Azerbaijani page rendering an
 * English "Read more" is simply a bug.
 *
 * So everything a reader or a screen reader can perceive lives here, grouped
 * by what it is rather than by which file happens to use it. Nothing in
 * `components/` or `app/` contains a sentence any more.
 *
 * Every language file must define the same keys. A missing one renders
 * `undefined`, which is loud enough to catch in review and in the QA sweep.
 */
export const ui = {
  /* Announced to assistive technology, never shown on screen. Translated all
     the same: a screen-reader user reading an Azerbaijani page should not hear
     English landmark names. */
  a11y: {
    breadcrumb: "Breadcrumb",
    primaryNav: "Primary",
    quickActions: "Quick actions",
    siteMenu: "Site menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contactUs: "Contact us",
    homeLink: "Caspian Sea Line — home",
    skipToContent: "Skip to main content",
    languageLabel: "Language",
    laneDetails: "Lane details",
    serviceDetails: "Service details",
    portDetails: "Port details",
    otherLegalDocuments: "Other legal documents",
    moreNews: "More news",
    keyFigures: "Key figures",
    targets: "Targets",
    desks: "Desks",
    contactDetails: "Contact details",
    whatHappensNext: "What happens next",
    laneTableCaption: "Caspian Sea Line trade lanes, frequency, transit time and cargo types",
    scheduleCaption: "Published sailing days, frequency and transit time by trade lane",
    certificationsCaption: "Certifications held, issuing body, scope and current status",
  },

  /* Short repeated words. If a word appears on more than one page, it belongs
     here so the two can never drift apart. */
  common: {
    home: "Home",
    read: "Read",
    readMore: "Read more",
    explore: "Explore",
    allLocations: "All locations",
    allReleases: "All releases",
    notFound: "Not found",
    telephone: "Telephone",
    email: "Email",
    hours: "Hours",
    operations: "Operations",
    emergency: "Emergency",
    general: "General",
    bookings: "Bookings",
    headOffice: "Head office",
    getQuote: "Get a quote",
    ourApproach: "Our approach",
    rightsReserved: "All rights reserved.",
  },

  /* Section headings written in a page file rather than in a content module,
     because they label a structure rather than describe a subject. */
  sections: {
    tradeLanes: "Trade lanes",
    tradeLanesTitle: "Fixed-day departures on the core lanes.",
    ports: "Ports",
    portsWeCall: "Ports we call",
    portsTitle: "Where we call.",
    portsLead: "Own offices where the volume justifies it, appointed agents everywhere else.",
    corridors: "Corridors",
    corridorsTitle: "The two corridors we sit on.",
    officesAndAgents: "Offices & agents",
    officesAndAgentsSub: "Direct contacts for every port we call, plus the head office in Baku.",
    facilities: "Facilities",
    portFacts: "Port facts",
    whatIsIncluded: "What is included",
    atAGlance: "At a glance",
    askQuestion: "Ask a question",
    moreIn: "More in",
    otherServicesIn: "Other services in",
    news: "Announcements and updates.",
    ourPresence: "Our presence",
    appointedAgent: "Appointed agent",
    portCoverage: "Port coverage",
    headOfficeBaku: "Head office — Baku",
    operationsDesk: "Operations desk",
    operationsDeskLead: "Live shipments, port calls and schedule questions, 24 / 7.",
    preferToTalk: "Prefer to talk?",
    quickLinks: "Quick links",
    footerCta: "Operations desk, around the clock.",
    footerCtaMeta: "Bookings & operations",
  },

  /* Table headers. */
  table: {
    tradeLane: "Trade lane",
    sailingDays: "Sailing days",
    frequency: "Frequency",
    transit: "Transit",
    cargo: "Cargo",
    standard: "Standard",
    issuingBody: "Issuing body",
    scope: "Scope",
    status: "Status",
    unlocode: "UN/LOCODE",
  },

  /* Honest notices. Each one exists because something is genuinely not ready,
     and each says so rather than pretending. */
  notices: {
    contentToSupply: "Content to supply",
    placeholderData: "Placeholder data",
    verifyBeforePublishing: "Verify before publishing",
    notConnectedYet: "Not connected yet",
  },

  /* The enquiry and contact forms. */
  form: {
    name: "Your name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    phoneHint: "Optional, but faster for a live shipment.",
    origin: "Origin",
    originHint: "City, port or plant.",
    destination: "Destination",
    cargoType: "Cargo type",
    scope: "Scope required",
    cargoDetails: "Cargo details",
    cargoDetailsHint: "Weight, dimensions, number of units, packaging, and anything unusual.",
    deliveryDate: "Required delivery date",
    subject: "Subject",
    message: "Message",
    honeypot: "Leave this field empty",
    sending: "Sending…",
    submitQuote: "Request a quote",
    submitMessage: "Send message",
    success: "Thank you — an operator will come back to you, normally within one business day.",
    failureTitle: "Not sent",
    unconfiguredTitle: "Form endpoint not connected",
    selectPlaceholder: "Select…",
    successTitle: "Sent",
    failureBody: "Something went wrong on our side. Please email",
    unconfiguredBody:
      "TODO(build): this form has no back end yet, so nothing was sent. Set NEXT_PUBLIC_FORM_ENDPOINT and the submission will go through unchanged. In the meantime, email",
    privacyNote: "We use these details only to answer your enquiry. See our",
    privacyLink: "privacy notice",
  },

  /* The eyebrow on a share card for a single entry. */
  card: {
    service: "Service",
    news: "News",
    port: "Port",
    legal: "Legal",
  },

  /* 404. */
  notFound: {
    metaTitle: "Page not found",
    eyebrow: "Error 404",
    title: "This page is not in the schedule.",
    lead:
      "The address you followed does not exist, or the page has moved. The links below cover most of what people arrive looking for.",
    backHome: "Back to the home page",
  },
};
