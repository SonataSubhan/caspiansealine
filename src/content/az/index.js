/**
 * Azərbaycan lüğəti.
 *
 * Hər dil üçün bir barrel — həmin dilin data modullarını eyni adlar altında
 * yenidən ixrac edir. `content/index.js` onların arasından seçim edir, ona görə
 * kodun qalan hissəsi heç vaxt birbaşa dil qovluğunu import etmir. Səhifənin
 * iki dilin mövcudluğundan xəbərsiz hər iki dildə render oluna bilməsinin
 * səbəbi məhz budur.
 *
 * Hər dil barrel-i eyni adlar dəstini ixrac etməlidir. Biri çatışmasa, onu
 * oxuyan ilk səhifədə build səssizcə `undefined` göstərmək əvəzinə açıq şəkildə
 * xəta verir.
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
