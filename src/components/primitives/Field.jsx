/**
 * One labelled form control. Always a real <label for>, never a placeholder
 * standing in for a label — a placeholder disappears the moment someone types.
 */
export default function Field({ id, label, hint, required = false, children }) {
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <p className="field">
      <label className="field__label" htmlFor={id}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
        {required ? <span className="visually-hidden"> (required)</span> : null}
      </label>
      {children({ id, "aria-describedby": hintId, required })}
      {hint ? (
        <span className="field__hint" id={hintId}>
          {hint}
        </span>
      ) : null}
    </p>
  );
}
