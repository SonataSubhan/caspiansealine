/**
 * The kicker above a heading. Its leading rule carries the accent colour, and
 * that is the only place an accent colour appears outside the logo motif.
 */
const TONES = { cyan: "", red: "eyebrow--red", green: "eyebrow--green", plain: "eyebrow--plain" };

export default function Eyebrow({ children, tone = "cyan", as: Tag = "p", className = "" }) {
  return <Tag className={`eyebrow ${TONES[tone]} ${className}`.trim()}>{children}</Tag>;
}
