import { ogCard, size, contentType } from "@/lib/og";
import { careers } from "@/content/en/company";
import { site } from "@/content/en/site";

/* The share card for this route. Title comes from the same content file the
   page reads, so the two can never drift apart. */
export { size, contentType };
export const alt = `${careers.meta.title} — ${site.name}`;

export default function Image() {
  return ogCard({ eyebrow: "Careers", title: careers.meta.title });
}
