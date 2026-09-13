import { localeHref } from "@/content";

/**
 * Build a breadcrumb trail for the reader's language.
 *
 * Pages declare the trail with plain paths — `/services`, `/network` — and the
 * labels they already have in the content layer. This puts the language prefix
 * on, once, so no page contains `/az` and no page can forget it.
 *
 * The same array feeds the visible trail and the BreadcrumbList structured
 * data, which is what stops the two from disagreeing.
 */
export function crumbs(locale, items) {
  return items.map((item) => ({ ...item, href: localeHref(locale, item.href) }));
}
