import { ogCard, size, contentType } from "@/lib/og";
import { getContent, locales } from "@/content";

/* The share card for this route, in the reader's language. Title and eyebrow
   come from the same content file the page reads, so the card cannot drift
   away from the page. */
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
  const { contactPage } = getContent(locale);

  return ogCard({ eyebrow: contactPage.eyebrow, title: contactPage.meta.title });
}
