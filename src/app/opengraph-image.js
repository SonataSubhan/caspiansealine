import { ogCard, size, contentType } from "@/lib/og";
import { site } from "@/content/en/site";

/**
 * The default share card, and the fallback for any route that does not define
 * its own. Next resolves `opengraph-image` down the segment tree, so this one
 * covers everything and each segment below can override it.
 */
export { size, contentType };
export const alt = `${site.name} — ${site.tagline}`;

export default function Image() {
  return ogCard({ eyebrow: "Caspian short-sea operator", title: site.tagline });
}
