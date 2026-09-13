/* eslint-disable @next/next/no-img-element --
   These <img> tags are not rendered by a browser. Satori draws them into a
   PNG at build time, and next/image does not exist inside an ImageResponse. */

import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { site } from "@/content/en/site";

/**
 * The share card.
 *
 * When someone pastes a link to this site into WhatsApp, Telegram, LinkedIn,
 * Slack, X or iMessage, the platform fetches the page and renders whatever
 * `og:image` points at. Without one it shows a bare grey rectangle — which is
 * what this site did until now, because `buildMetadata()` pointed at
 * `/og/default.jpg`, a file that never existed.
 *
 * Every route now generates a 1200×630 card at build time: the real logo on
 * the brand navy, the page's own title, and the tricolour rule from the
 * guidelines. No photography is invented — the card is made entirely from
 * approved brand artwork, so it is honest about a site that has no
 * photography yet, and it stays correct when the photography arrives.
 *
 * A route opts in with six lines next to its `page.js`:
 *
 *   // app/services/opengraph-image.js
 *   import { ogCard, size, contentType } from "@/lib/og";
 *   import { servicesPage } from "@/content/en/services";
 *
 *   export { size, contentType };
 *   export const alt = `${servicesPage.meta.title} — ${site.name}`;
 *   export default function Image() {
 *     return ogCard({ eyebrow: "Services", title: servicesPage.meta.title });
 *   }
 *
 * The title comes from the same content file the page itself reads, so the
 * card can never drift out of sync with the page.
 */

/* 1200×630 is the size every platform crops from. Anything smaller is
   upscaled; anything with a different ratio is cropped unpredictably. */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ASSETS = join(process.cwd(), "src/lib/og-assets");

/* Read once per build, not once per card. Satori cannot read woff2, so the
   variable font is instanced to two static TTFs (400 and 800) — see
   ARCHITECTURE.md §6. The logo and symbol are PNGs for the same reason.
   
   Both TTFs merge Mulish's `latin` AND `latin-ext` subsets. The latin subset
   alone has no `ə`, `ğ` or `ş`, so an Azerbaijani card rendered "Xidmətlər" as
   "Xidm tl r" — every missing glyph silently dropped, on the one image a
   reader sees before deciding whether to click. */
let assets;

async function loadAssets() {
  if (!assets) {
    const [regular, bold, logo, symbol] = await Promise.all([
      readFile(join(ASSETS, "mulish-400.ttf")),
      readFile(join(ASSETS, "mulish-800.ttf")),
      readFile(join(ASSETS, "logo-white.png")),
      readFile(join(ASSETS, "symbol-white.png")),
    ]);

    assets = {
      regular,
      bold,
      logo: `data:image/png;base64,${logo.toString("base64")}`,
      symbol: `data:image/png;base64,${symbol.toString("base64")}`,
    };
  }

  return assets;
}

/* One long title should not shrink every other card, so the size steps down
   only when it has to. Three sizes are enough; a continuous formula would give
   forty different cards and no more legibility. */
function titleSize(title) {
  if (title.length > 78) return 46;
  if (title.length > 46) return 56;
  return 68;
}

const NAVY = "#041e42";
const CYAN = "#18b4df";
const RED = "#ee3441";
const GREEN = "#539f45";

export async function ogCard({ eyebrow, title, meta = site.url.replace(/^https?:\/\//, "") }) {
  const { regular, bold, logo, symbol } = await loadAssets();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: NAVY,
          padding: "68px 72px 60px",
          fontFamily: "Mulish",
          position: "relative",
        }}
      >
        {/* The logo mark, bled off the right edge at 7% — the brand's own
            geometry used as texture rather than a stock pattern. */}
        <img
          src={symbol}
          width={620}
          height={620}
          alt=""
          style={{ position: "absolute", top: 5, right: -170, opacity: 0.07 }}
        />

        <img src={logo} width={352} height={123} alt="" style={{ display: "block" }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          {eyebrow ? (
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: CYAN,
                marginBottom: 18,
              }}
            >
              {eyebrow}
            </div>
          ) : null}

          <div
            style={{
              fontSize: titleSize(title),
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: -1,
              color: "#ffffff",
              maxWidth: 900,
            }}
          >
            {title}
          </div>

          <div style={{ fontSize: 26, fontWeight: 400, color: "rgba(255,255,255,0.62)", marginTop: 26 }}>
            {meta}
          </div>
        </div>

        {/* Cyan → red → green: the logo's colour stacking, used as the rule
            that closes every branded surface on the site. */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 10, display: "flex" }}>
          <div style={{ flex: 1, backgroundColor: CYAN }} />
          <div style={{ flex: 1, backgroundColor: RED }} />
          <div style={{ flex: 1, backgroundColor: GREEN }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Mulish", data: regular, weight: 400, style: "normal" },
        { name: "Mulish", data: bold, weight: 800, style: "normal" },
      ],
    }
  );
}
