import { ogCard, size, contentType } from "@/lib/og";
import { getContent, locales } from "@/content";
import { bySlug } from "@/content/lookup";

/* One card per entry, in both languages. An image route inside a dynamic
   segment has its own params, so it needs its own generateStaticParams. */
export { size, contentType };
export const alt = "Caspian Sea Line";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).legalDocuments.map((entry) => ({ locale, slug: entry.slug }))
  );
}

export default async function Image({ params }) {
  const { locale, slug } = await params;
  const content = getContent(locale);
  const entry = bySlug(content.legalDocuments, slug);

  return ogCard({
    eyebrow: content.ui.card.legal,
    title: entry?.title ?? content.site.tagline,
  });
}
