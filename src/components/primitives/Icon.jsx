/**
 * Renders one symbol from the sprite in <IconSprite />.
 *
 * Icons are decorative by default (`aria-hidden`), because they almost always
 * sit next to a text label. Pass a `title` only when the icon IS the label —
 * and prefer an aria-label on the surrounding button instead.
 */
export default function Icon({ name, className, title, ...rest }) {
  return (
    <svg
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <use href={`#i-${name}`} />
    </svg>
  );
}
