import { ogCard, size, contentType } from "@/lib/og";
import { certifications } from "@/content/en/company";
import { site } from "@/content/en/site";

/* The share card for this route. Title comes from the same content file the
   page reads, so the two can never drift apart. */
export { size, contentType };
export const alt = `${certifications.meta.title} — ${site.name}`;

export default function Image() {
  return ogCard({ eyebrow: "Company", title: certifications.meta.title });
}
