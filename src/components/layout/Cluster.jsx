/** Horizontal rhythm that wraps. Button rows, tag rows, meta rows. */
const GAPS = { sm: "cluster--sm", md: "", lg: "cluster--lg" };

export default function Cluster({ children, gap = "md", className = "", as: Tag = "div" }) {
  return <Tag className={`cluster ${GAPS[gap]} ${className}`.trim()}>{children}</Tag>;
}
