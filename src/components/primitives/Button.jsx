import Link from "next/link";
import Icon from "./Icon";

/**
 * The only button in the system.
 *
 * Renders an <a> when `href` is given and a <button> otherwise, so a link
 * never has to be faked with a click handler. Colour is not a prop: the
 * variant sets local custom properties, and the surrounding
 * `data-surface="inverse"` flips them automatically.
 */
const VARIANTS = {
  primary: "",
  secondary: "btn--secondary",
  accent: "btn--accent",
  ghost: "btn--ghost",
};

const SIZES = { sm: "btn--sm", md: "", lg: "btn--lg" };

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  block = false,
  type = "button",
  className = "",
  ...rest
}) {
  const classes = ["btn", VARIANTS[variant], SIZES[size], block ? "btn--block" : "", className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {arrow ? <Icon name="arrow-right" className="btn__icon" /> : null}
    </>
  );

  if (href) {
    return (
      <Link className={classes} href={href} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...rest}>
      {content}
    </button>
  );
}
