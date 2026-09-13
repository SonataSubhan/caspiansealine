/**
 * Which file fills which image slot.
 *
 * A photograph is the same photograph in every language, so the paths live
 * here once. Only the alt text is translated — see `<locale>/media.js`.
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
 * A slot with no entry here renders the labelled placeholder plate instead of
 * a broken image, so clearing this object puts every placeholder back.
 */
const TEST = "/img/test";

export const sources = {
  /* --- Home ------------------------------------------------------------ */
  hero: `${TEST}/07.avif`,
  sustainability: `${TEST}/01.avif`,

  /* --- Header mega menus ----------------------------------------------- */
  "menu-feature": `${TEST}/03.avif`,
  "network-map": `${TEST}/05.avif`,
  company: `${TEST}/06.avif`,

  /* --- Fleet ------------------------------------------------------------ */
  "csl-absheron": `${TEST}/08.avif`,
  "csl-khazri": `${TEST}/04.avif`,
  "csl-gilavar": `${TEST}/02.avif`,

  /* --- News ------------------------------------------------------------- */
  "news-fourth-weekly-departure-baku-kuryk": `${TEST}/09.avif`,
  "news-transformer-shipment-central-asian-grid": `${TEST}/03.avif`,
  "news-agency-office-opened-aktau": `${TEST}/10.avif`,

  /* --- Service detail pages --------------------------------------------- */
  "service-container-shipping": `${TEST}/05.avif`,
  "service-project-cargo": `${TEST}/03.avif`,

  /* --- Ports ------------------------------------------------------------- */
  "port-baku-alat": `${TEST}/07.avif`,

  /* --- Company pages ----------------------------------------------------- */
  about: `${TEST}/06.avif`,
  hsseq: `${TEST}/03.avif`,
  careers: `${TEST}/02.avif`,
};

/** Pairs each language's alt text with the file for that slot. */
export function withSources(altText) {
  return Object.fromEntries(
    Object.entries(sources).map(([slot, src]) => [slot, { src, alt: altText[slot] ?? "" }])
  );
}
