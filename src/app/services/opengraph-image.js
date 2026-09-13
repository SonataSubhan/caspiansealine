import { ogCard, size, contentType } from "@/lib/og";
import { servicesPage } from "@/content/en/services";
import { site } from "@/content/en/site";

/* The share card for this route. Title comes from the same content file the
   page reads, so the two can never drift apart. */
export { size, contentType };
export const alt = `${servicesPage.meta.title} — ${site.name}`;

export default function Image() {
  return ogCard({ eyebrow: "Services", title: servicesPage.meta.title });
}
