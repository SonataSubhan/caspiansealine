/**
 * The page measure. Header, footer and every section share it, which is what
 * puts the logo, the h1 and every card on the same vertical line.
 *
 * `size="narrow"` is for centred long-form copy only.
 */
const SIZES = { default: "container", narrow: "container container--narrow" };

export default function Container({ children, size = "default", className = "", as: Tag = "div", ...rest }) {
  return (
    <Tag className={`${SIZES[size]} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
