/**
 * Generic lookups over the content arrays.
 *
 * These used to be per-file functions (`getService`, `getPort`, `getArticle`,
 * `getLegalDocument`, `getVessel` — five copies of `find`). With a second
 * language that would have become ten. The locale modules now hold data and
 * nothing else, which is what makes adding a third language a translation job
 * rather than a programming one.
 */

/** The item in `items` with this slug, or undefined. */
export function bySlug(items, slug) {
  return items.find((item) => item.slug === slug);
}

/** Every service in a category, in catalogue order. */
export function byCategory(services, categoryId) {
  return services.filter((service) => service.category === categoryId);
}

/** Articles newest first. The source array stays in whatever order reads best. */
export function newestFirst(articles) {
  return [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * A date in the reader's language: "04 Mar 2026" / "04 mar 2026".
 *
 * `az` resolves in full-ICU Node, which is what the build runs on. The machine
 * that renders these is the build machine, so this is decided once at build
 * time and shipped as plain text — no formatting library reaches the browser.
 */
const DATE_LOCALE = { en: "en-GB", az: "az-Latn-AZ" };

export function formatDate(iso, locale = "en") {
  return new Date(iso).toLocaleDateString(DATE_LOCALE[locale] ?? DATE_LOCALE.en, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
