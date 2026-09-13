/**
 * Copy on one side, media on the other.
 *
 * `flip` swaps the visual order only — the DOM order is untouched, so the
 * reading order stays correct for a screen reader and for a phone, where the
 * columns stack.
 */
const RATIOS = { even: "", copyNarrow: "split--copy-narrow", mediaNarrow: "split--media-narrow" };

export default function Split({ children, ratio = "even", flip = false, align, className = "" }) {
  const classes = ["split", RATIOS[ratio], className].filter(Boolean).join(" ");
  const style = align ? { alignItems: align } : undefined;

  return (
    <div className={classes} data-flip={flip ? "true" : undefined} style={style}>
      {children}
    </div>
  );
}
