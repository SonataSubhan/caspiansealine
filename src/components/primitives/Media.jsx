import Image from "next/image";

import { getContent } from "@/content";

/**
 * Every image slot on the site goes through this component.
 *
 * A slot resolves against the reader's language registry (`<locale>/media.js`),
 * because the alt text is prose and prose is translated. The file itself is the
 * same in both languages — see `content/media-sources.js`.
 *
 * A slot resolves against that registry. If a
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
  locale,
  slot = "image",
  width,
  height,
  note,
  ratio,
  flush = false,
  sizes = "(max-width: 899px) 100vw, 50vw",
  preload = false,
  eager = false,
  className = "",
}) {
  const classes = ["media", ratio ? RATIOS[ratio] : "", flush ? "media--flush" : "", className]
    .filter(Boolean)
    .join(" ");

  const style = !ratio && width && height ? { "--media-ratio": `${width} / ${height}` } : undefined;

  const registered = getContent(locale).media[slot];
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
          /* `preload` replaced `priority` in Next 16. It emits a <link
             rel="preload"> in the document head, so it is reserved for the one
             image that is the LCP element — a second preloaded image competes
             with the first for the same bandwidth and delays it.

             `eager` is the weaker sibling: it only cancels lazy loading, with
             no preload link and no priority claim. It is for an image that sits
             above the fold beside the LCP one — a card next to it in the same
             row — where waiting for layout before the request starts is pure
             delay, but jumping the queue would be a lie about its importance.
             Everything else lazy-loads. */
          preload={preload}
          loading={!preload && eager ? "eager" : undefined}
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
