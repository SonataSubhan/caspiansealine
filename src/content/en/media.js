import { withSources } from "../media-sources";

/**
 * Alt text, in English.
 *
 * It describes what is actually in each frame — it is not decoration, and it
 * is read aloud. When the real photographs arrive, this must be rewritten with
 * them; the file paths live in `../media-sources.js`.
 */
const alt = {
  hero: "A container vessel alongside a terminal berth at dusk, gantry cranes working the stacks.",
  sustainability: "A loaded container vessel at a quay in the blue hour, lights reflecting on still water.",

  "menu-feature": "Two crew in high-visibility suits on a container hatch cover during loading.",
  "network-map": "A container terminal yard seen from the water, stacks and gantry cranes along the quay.",
  company: "A container vessel working cargo at sunset with the terminal's crane line behind it.",

  "csl-absheron": "A container vessel moored bow-on at a terminal berth on a clear day.",
  "csl-khazri": "A container vessel alongside a row of gantry cranes in calm water.",
  "csl-gilavar": "Gantry cranes working a fully loaded container vessel under an overcast sky.",

  "news-fourth-weekly-departure-baku-kuryk": "A container vessel being worked by four gantry cranes at dusk.",
  "news-transformer-shipment-central-asian-grid": "Crew supervising cargo operations on a container vessel's hatch covers.",
  "news-agency-office-opened-aktau": "A container vessel alongside the quay with cranes positioned over the stacks.",

  "service-container-shipping": "Container stacks and gantry cranes across a terminal yard.",
  "service-project-cargo": "Crew on deck during a lift, containers secured on the hatch covers around them.",

  "port-baku-alat": "A container vessel alongside a terminal berth at dusk.",

  about: "A container vessel working cargo at sunset.",
  hsseq: "Two crew in high-visibility suits supervising cargo operations on deck.",
  careers: "Gantry cranes working a container vessel at a terminal berth.",
};

export const media = withSources(alt);
