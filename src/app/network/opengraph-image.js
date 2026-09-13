import { ogCard, size, contentType } from "@/lib/og";
import { networkPage } from "@/content/en/network";
import { site } from "@/content/en/site";

/* The share card for this route. Title comes from the same content file the
   page reads, so the two can never drift apart. */
export { size, contentType };
export const alt = `${networkPage.meta.title} — ${site.name}`;

export default function Image() {
  return ogCard({ eyebrow: "Network", title: networkPage.meta.title });
}
