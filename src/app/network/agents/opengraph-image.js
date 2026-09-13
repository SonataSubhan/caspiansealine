import { ogCard, size, contentType } from "@/lib/og";
import { agentsPage } from "@/content/en/network";
import { site } from "@/content/en/site";

/* The share card for this route. Title comes from the same content file the
   page reads, so the two can never drift apart. */
export { size, contentType };
export const alt = `${agentsPage.meta.title} — ${site.name}`;

export default function Image() {
  return ogCard({ eyebrow: "Agency network", title: agentsPage.meta.title });
}
