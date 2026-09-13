import Image from "next/image";

/**
 * Every image slot on the site goes through this component.
 *
 * No photography has been supplied yet, so when `src` is absent it renders a
 * labelled brand plate carrying the exact asset spec the slot expects rather
 * than a broken image or an invented one. The box is identical either way, so
 * dropping the real photograph in later moves nothing on the page.
 *
 *   <Media slot="hero" width={1600} height={1200} note="vessel at sea" />
 *   <Media src="/img/hero.jpg" alt="…" width={1600} height={1200} />
 */
const RATIOS = {
  hero: "media--ratio-hero",
  wide: "media--ratio-wide",
  square: "media--ratio-square",
  portrait: "media--ratio-portrait",
};

export default function Media({
  src,
  alt = "",
  slot = "image",
  width,
  height,
  note,
  ratio,
  flush = false,
  sizes = "(max-width: 899px) 100vw, 50vw",
  priority = false,
  className = "",
}) {
  const classes = ["media", ratio ? RATIOS[ratio] : "", flush ? "media--flush" : "", className]
    .filter(Boolean)
    .join(" ");

  const style = !ratio && width && height ? { "--media-ratio": `${width} / ${height}` } : undefined;

  if (src) {
    return (
      <div className={classes} style={style}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
      </div>
    );
  }

  const label = [
    "IMG",
    slot,
    width && height ? `${width}×${height}` : null,
    note,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className={classes} style={style} aria-hidden="true">
      <div className="media-placeholder">
        <span className="media-placeholder__label">{label}</span>
      </div>
    </div>
  );
}
