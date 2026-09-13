import Link from "next/link";
import Icon from "./Icon";

/**
 * The standard "read more" affordance.
 *
 * `as="span"` renders the same visual without an anchor — used inside a card
 * whose heading already carries the real link, so the card has exactly one
 * focusable target instead of two that go to the same place.
 */
export default function LinkArrow({ href, children, as, className = "", ...rest }) {
  const inner = (
    <>
      {children}
      <Icon name="arrow-right" className="link-arrow__icon" />
    </>
  );

  const classes = `link-arrow ${className}`.trim();

  if (as === "span" || !href) {
    return <span className={classes}>{inner}</span>;
  }

  return (
    <Link className={classes} href={href} {...rest}>
      {inner}
    </Link>
  );
}
