import { ogCard, size, contentType } from "@/lib/og";
import { getLegalDocuments, getLegalDocument } from "@/content/en/legal";
import { site } from "@/content/en/site";

/* One card per legal document. */
export { size, contentType };
export const alt = `Caspian Sea Line legal document`;

export function generateStaticParams() {
  return getLegalDocuments().map((document) => ({ slug: document.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const document = getLegalDocument(slug);

  return ogCard({ eyebrow: "Legal", title: document?.title ?? site.tagline });
}
