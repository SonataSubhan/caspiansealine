/**
 * Equal-width card grid. Column counts step down symmetrically (4→2→1,
 * 3→2→1) so a row is never left with a single orphan cell.
 */
export default function Grid({ children, cols = 3, className = "" }) {
  return <div className={`grid grid--${cols} ${className}`.trim()}>{children}</div>;
}
