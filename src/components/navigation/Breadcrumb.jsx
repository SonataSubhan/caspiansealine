import Link from "next/link";

import { getContent, localeHref } from "@/content";

/**
 * Breadcrumb trail for inner pages.
 *
 * The same `items` array feeds the visible trail and the BreadcrumbList
 * structured data on the page, so the two can never disagree — which is what
 * Google penalises.
 */
export default function Breadcrumb({ items, locale }) {
  const { ui } = getContent(locale);

  return (
    <nav className="breadcrumb" aria-label={ui.a11y.breadcrumb}>
      <ol>
        <li>
          <Link href={localeHref(locale, "/")}>{ui.common.home}</Link>
        </li>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.href || item.label}>
              {last || !item.href ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
