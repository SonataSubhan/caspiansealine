/**
 * The brand's core layout device: cells separated by true 1px hairlines drawn
 * by the grid gap over a coloured background. Lines can never double up or
 * land on a half pixel, at any zoom level or column count.
 */
export default function RuleGrid({ children, cols = 3, boxed = false, className = "" }) {
  const classes = ["rule-grid", `rule-grid--${cols}`, boxed ? "rule-grid--boxed" : "", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
