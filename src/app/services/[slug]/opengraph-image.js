import { ogCard, size, contentType } from "@/lib/og";
import { services, getService } from "@/content/en/services";
import { site } from "@/content/en/site";

/* One card per service, prerendered at build time from the same catalogue the
   page reads. `generateStaticParams` is required here as well as on the page:
   an image route in a dynamic segment has its own set of params. */
export { size, contentType };
export const alt = `Caspian Sea Line service`;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  return ogCard({ eyebrow: "Service", title: service?.title ?? site.tagline });
}
