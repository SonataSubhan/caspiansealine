import { ogCard, size, contentType } from "@/lib/og";
import { getContent, locales } from "@/content";

/**
 * The default share card, and the fallback for any route that does not define
 * its own. Next resolves `opengraph-image` down the segment tree, so this one
 * covers everything and each segment below can override it.
 */
export { size, contentType };
export const alt = "Caspian Sea Line";

/* An image route inside a dynamic segment has its own params, so it needs
   its own list — without this the card is rendered on demand instead of at
   build time, and the build output stops being 100% static. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Image({ params }) {
  const { locale } = await params;
  const { site, home } = getContent(locale);

  return ogCard({ eyebrow: home.hero.eyebrow, title: site.tagline });
}
