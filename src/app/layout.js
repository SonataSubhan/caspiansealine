import "./globals.css";

import { mulish } from "./fonts";
import IconSprite from "@/components/primitives/IconSprite";
import SkipLink from "@/components/navigation/SkipLink";
import SiteHeader from "@/components/navigation/SiteHeader";
import SiteFooter from "@/components/navigation/SiteFooter";
import { JsonLd, organisationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/content/en/site";

/**
 * Root metadata.
 *
 * `metadataBase` is set once here so every page can declare relative URLs.
 * `title.template` appends the brand to child pages; the home page overrides
 * it with an absolute title.
 */
export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.metaDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: false, address: false, email: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en",
    url: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  themeColor: "#041e42",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    /* `data-scroll-behavior` restores instant scroll-to-top on navigation,
       which Next 16 no longer forces when the page sets scroll-behavior. */
    <html lang="en" className={mulish.variable} data-scroll-behavior="smooth">
      <body>
        <SkipLink />
        <IconSprite />

        {/* Organisation and WebSite are declared once, in the layout. Pages
            reference them by @id instead of redeclaring the company. */}
        <JsonLd schema={[organisationSchema(), websiteSchema()]} />

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
