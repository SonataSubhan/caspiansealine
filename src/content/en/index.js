/**
 * The English dictionary.
 *
 * One barrel per language, re-exporting that language's data modules under
 * identical names. `content/index.js` picks between them, so nothing else in
 * the codebase ever imports a language folder directly — which is the whole
 * reason a page can render in either language without knowing that two exist.
 *
 * Every language barrel must export the same set of names. If one is missing,
 * the build fails loudly at the first page that reads it, rather than the page
 * quietly rendering `undefined` in production.
 */
export { site } from "./site";
export { utilityNav, primaryNav, footerNav, legalNav } from "./navigation";
export { home } from "./home";
export { servicePillars, serviceCategories, services, servicesPage } from "./services";
export {
  lanes,
  ports,
  additionalPorts,
  corridors,
  networkPage,
  schedulePage,
  agentsPage,
} from "./network";
export { vessels, fleetPage } from "./fleet";
export { about, leadership, hsseq, certifications, careers } from "./company";
export { sustainability } from "./sustainability";
export { articles, newsPage } from "./news";
export { quotePage, contactPage, trackPage } from "./forms";
export { legalDocuments } from "./legal";
export { media } from "./media";
export { ui } from "./ui";
