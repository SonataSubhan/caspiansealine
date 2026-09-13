/**
 * One proof number. `unit` is rendered smaller and in the accent colour so a
 * figure like 18 h reads as a quantity rather than a word.
 */
export default function Stat({ value, unit, label }) {
  return (
    <div className="stat">
      <p className="stat__value">
        {value}
        {unit ? <span className="stat__unit">{unit}</span> : null}
      </p>
      <p className="stat__label">{label}</p>
    </div>
  );
}
