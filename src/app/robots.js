import { getContent, defaultLocale } from "@/content";

const { site } = getContent(defaultLocale);

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
