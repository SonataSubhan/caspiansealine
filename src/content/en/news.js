/**
 * Newsroom.
 *
 * TODO(content): these three articles are placeholders with realistic
 * headlines and dummy bodies. Replace with real releases, or hide the
 * newsroom until there are at least three.
 *
 * When a CMS is introduced, this module is the only file that changes: the
 * pages read `getArticles()` and `getArticle(slug)`, not the array.
 */

export const articles = [
  {
    slug: "fourth-weekly-departure-baku-kuryk",
    title: "Fourth weekly departure added on the Baku–Kuryk lane",
    date: "2026-09-02",
    category: "Network",
    summary:
      "A fourth fixed sailing day has been added between Baku (Alat) and Kuryk in response to sustained trailer volumes on the Middle Corridor.",
    body: [
      "TODO(content): replace with the real announcement. This placeholder shows the structure a release should follow — what changed, when it takes effect, and what a customer needs to do differently.",
      "Two to four paragraphs is the right length. Anything longer belongs on a service page rather than in the newsroom.",
    ],
  },
  {
    slug: "transformer-shipment-central-asian-grid",
    title: "Transformer shipment completed for a Central Asian grid project",
    date: "2026-08-14",
    category: "Operations",
    summary:
      "An out-of-gauge transformer moved from a European plant to a Central Asian substation, including route survey, Caspian crossing and final positioning.",
    body: [
      "TODO(content): replace with the real case study. A project cargo release should state the dimensions and weight, the constraint that made it difficult, and how it was solved.",
      "Photographs matter more than adjectives on this kind of story.",
    ],
  },
  {
    slug: "agency-office-opened-aktau",
    title: "Agency office opened at Aktau to shorten port-call turnaround",
    date: "2026-07-29",
    category: "Company",
    summary:
      "An own agency office at Aktau replaces the appointed agent, bringing berth planning and documentation in-house on the Kazakh side of the crossing.",
    body: [
      "TODO(content): replace with the real announcement, including who to contact at the new office.",
    ],
  },
];

export const newsPage = {
  meta: {
    title: "News",
    description: "Announcements, network changes and operational updates from Caspian Sea Line.",
  },
  eyebrow: "Newsroom",
  title: "Latest from Caspian Sea Line.",
  lead: "Network changes, operational updates and company announcements.",
};
