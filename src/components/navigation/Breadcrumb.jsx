import Link from "next/link";

/**
 * Breadcrumb trail for inner pages.
 *
 * The same `items` array feeds the visible trail and the BreadcrumbList
 * structured data on the page, so the two can never disagree — which is what
 * Google penalises.
 */
export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
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
