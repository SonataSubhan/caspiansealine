/**
 * Key/value rows for vessel data, port facts and contact details.
 * A description list, because that is what this is.
 */
export default function SpecList({ items, className = "" }) {
  return (
    <dl className={`spec ${className}`.trim()}>
      {items.map((item) => (
        <div className="spec__row" key={item.key}>
          <dt className="spec__key">{item.key}</dt>
          <dd className="spec__value">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
