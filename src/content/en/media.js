/**
 * The image registry.
 *
 * Every `<Media slot="…" />` on the site looks its slot up here. A slot with an
 * entry renders the photograph; a slot without one renders the labelled
 * placeholder that states the size it expects. Nothing at the call site
 * changes either way — adding or replacing a photograph is one line in this
 * file, and clearing the whole object puts every placeholder back.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * ⚠ TEMPORARY TEST IMAGERY — NOT FOR PRODUCTION
 *
 * The files under /img/test are the client's placeholder photographs. They
 * show Maersk-liveried vessels, Maersk and Evergreen containers, and European
 * terminals — another carrier's branding on a competitor's boxes. They are
 * fine for judging the layout and completely unusable on a live Caspian Sea
 * Line site, for brand reasons and almost certainly for licensing reasons too.
 *
 * Replace with the company's own photography, or licensed stock that carries
 * no third-party livery, before launch. Then delete /public/img/test.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Alt text describes what is actually in each frame. When the real photographs
 * arrive, the alt text must be rewritten with them — it is not decoration.
 */

const TEST = "/img/test";

export const media = {
  /* --- Home ------------------------------------------------------------ */
  hero: {
    src: `${TEST}/07.avif`,
    alt: "A container vessel alongside a terminal berth at dusk, gantry cranes working the stacks.",
  },
  sustainability: {
    src: `${TEST}/01.avif`,
    alt: "A loaded container vessel at a quay in the blue hour, lights reflecting on still water.",
  },

  /* --- Header mega menus ----------------------------------------------- */
  "menu-feature": {
    src: `${TEST}/03.avif`,
    alt: "Two crew in high-visibility suits on a container hatch cover during loading.",
  },
  "network-map": {
    src: `${TEST}/05.avif`,
    alt: "A container terminal yard seen from the water, stacks and gantry cranes along the quay.",
  },
  company: {
    src: `${TEST}/06.avif`,
    alt: "A container vessel working cargo at sunset with the terminal's crane line behind it.",
  },

  /* --- Fleet ------------------------------------------------------------ */
  "csl-absheron": {
    src: `${TEST}/08.avif`,
    alt: "A container vessel moored bow-on at a terminal berth on a clear day.",
  },
  "csl-khazri": {
    src: `${TEST}/04.avif`,
    alt: "A container vessel alongside a row of gantry cranes in calm water.",
  },
  "csl-gilavar": {
    src: `${TEST}/02.avif`,
    alt: "Gantry cranes working a fully loaded container vessel under an overcast sky.",
  },

  /* --- News ------------------------------------------------------------- */
  "news-fourth-weekly-departure-baku-kuryk": {
    src: `${TEST}/09.avif`,
    alt: "A container vessel being worked by four gantry cranes at dusk.",
  },
  "news-transformer-shipment-central-asian-grid": {
    src: `${TEST}/03.avif`,
    alt: "Crew supervising cargo operations on a container vessel's hatch covers.",
  },
  "news-agency-office-opened-aktau": {
    src: `${TEST}/10.avif`,
    alt: "A container vessel alongside the quay with cranes positioned over the stacks.",
  },

  /* --- Service detail pages --------------------------------------------- */
  "service-container-shipping": {
    src: `${TEST}/05.avif`,
    alt: "Container stacks and gantry cranes across a terminal yard.",
  },
  "service-project-cargo": {
    src: `${TEST}/03.avif`,
    alt: "Crew on deck during a lift, containers secured on the hatch covers around them.",
  },

  /* --- Ports ------------------------------------------------------------- */
  "port-baku-alat": {
    src: `${TEST}/07.avif`,
    alt: "A container vessel alongside a terminal berth at dusk.",
  },

  /* --- Company pages ----------------------------------------------------- */
  about: {
    src: `${TEST}/06.avif`,
    alt: "A container vessel working cargo at sunset.",
  },
  hsseq: {
    src: `${TEST}/03.avif`,
    alt: "Two crew in high-visibility suits supervising cargo operations on deck.",
  },
  careers: {
    src: `${TEST}/02.avif`,
    alt: "Gantry cranes working a container vessel at a terminal berth.",
  },
};

/** Returns the registered image for a slot, or undefined if none is set. */
export function getMedia(slot) {
  return media[slot];
}
