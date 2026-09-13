const TONES = { neutral: "", cyan: "badge--cyan", red: "badge--red", green: "badge--green" };

export default function Badge({ children, tone = "neutral", as: Tag = "span", className = "" }) {
  return <Tag className={`badge ${TONES[tone]} ${className}`.trim()}>{children}</Tag>;
}
