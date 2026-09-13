import Image from "next/image";

import { getMedia } from "@/content/en/media";

/**
 * Every image slot on the site goes through this component.
 *
 * A slot resolves against the registry in `content/en/media.js`. If a
 * photograph is registered it is rendered; if not, the slot renders a labelled
 * brand plate stating the exact asset size it expects, rather than a broken
 * image or an invented one. The box is identical either way, so dropping the
 * real photograph in later moves nothing on the page.
 *
 *   <Media slot="hero" width={1600} height={1200} note="vessel at sea" />
 *   <Media src="/img/x.avif" alt="…" width={1600} height={1200} />   ← override
 */
const RATIOS = {
  hero: "media--ratio-hero",
  wide: "media--ratio-wide",
  square: "media--ratio-square",
  portrait: "media--ratio-portrait",
};

export default function Media({
  src,
  alt,
  slot = "image",
  width,
  height,
  note,
  ratio,
  flush = false,
  sizes = "(max-width: 899px) 100vw, 50vw",
  preload = false,
  className = "",
}) {
  const classes = ["media", ratio ? RATIOS[ratio] : "", flush ? "media--flush" : "", className]
    .filter(Boolean)
    .join(" ");

  const style = !ratio && width && height ? { "--media-ratio": `${width} / ${height}` } : undefined;

  const registered = getMedia(slot);
  const resolvedSrc = src || registered?.src;
  const resolvedAlt = alt ?? registered?.alt ?? "";

  if (resolvedSrc) {
    return (
      <div className={classes} style={style}>
        <Image
          src={resolvedSrc}
          alt={resolvedAlt}
          fill
          sizes={sizes}
          /* `preload` replaced `priority` in Next 16. Reserved for the one
             image that is the LCP element; everything else lazy-loads. */
          preload={preload}
          quality={75}
        />
      </div>
    );
  }

  const label = ["IMG", slot, width && height ? `${width}×${height}` : null, note]
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
