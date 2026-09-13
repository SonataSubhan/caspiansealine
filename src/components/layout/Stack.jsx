/**
 * Vertical rhythm between siblings. Components never set their own outer
 * margins; the parent owns the gap. This is what stops spacing drift as the
 * site grows.
 */
const GAPS = { xs: "stack--xs", sm: "stack--sm", md: "", lg: "stack--lg", xl: "stack--xl" };

export default function Stack({ children, gap = "md", centre = false, className = "", as: Tag = "div" }) {
  const classes = ["stack", GAPS[gap], centre ? "stack--centre" : "", className].filter(Boolean).join(" ");
  return <Tag className={classes}>{children}</Tag>;
}
