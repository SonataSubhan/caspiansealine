import { ogCard, size, contentType } from "@/lib/og";
import { ports, getPort } from "@/content/en/network";
import { site } from "@/content/en/site";

/* One card per port. The country sits in the eyebrow, because "Aktau" alone
   means little to someone seeing the link in a chat window. */
export { size, contentType };
export const alt = `Caspian Sea Line port`;

export function generateStaticParams() {
  return ports.map((port) => ({ slug: port.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const port = getPort(slug);

  return ogCard({
    eyebrow: port ? `Port · ${port.country}` : "Port",
    title: port?.name ?? site.tagline,
  });
}
