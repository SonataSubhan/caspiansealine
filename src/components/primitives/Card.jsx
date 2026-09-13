/**
 * The card shell. Content shapes (service, vessel, article) compose it rather
 * than extending it, so there is one border radius, one hover state and one
 * focus treatment across the whole site.
 *
 * `accent` paints the top hairline in one of the logo's three accent colours.
 */
export default function Card({ accent, children, className = "", as: Tag = "article" }) {
  return (
    <Tag className={`card ${className}`.trim()} data-accent={accent}>
      {accent ? <div className="card__accent" /> : null}
      {children}
    </Tag>
  );
}

export function CardBody({ children, className = "" }) {
  return <div className={`card__body ${className}`.trim()}>{children}</div>;
}

export function CardFoot({ children }) {
  return <p className="card__foot">{children}</p>;
}
