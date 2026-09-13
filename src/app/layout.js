import "./globals.css";

import { mulish } from "./fonts";
import IconSprite from "@/components/primitives/IconSprite";
import SkipLink from "@/components/navigation/SkipLink";
import SiteHeader from "@/components/navigation/SiteHeader";
import SiteFooter from "@/components/navigation/SiteFooter";
import PageTransition from "@/components/motion/PageTransition";
import RevealController from "@/components/motion/RevealController";
import { MOTION_BOOT_SCRIPT } from "@/components/motion/motionBootScript";
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
       which Next 16 no longer forces when the page sets scroll-behavior.

       `suppressHydrationWarning` is required, and only here: the inline boot
       script below writes `data-motion` onto this element before React
       hydrates, so the server HTML and the client DOM legitimately differ by
       that one attribute. The flag is shallow — it covers <html>'s own
       attributes and nothing inside it. */
    <html
      lang="en"
      className={mulish.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Runs before first paint. It is the only thing that switches the
            reveal animations on, so if it never runs — no JavaScript, a
            blocked bundle, an old engine — the page renders finished instead
            of hidden. See components/motion/motionBootScript.js. */}
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOT_SCRIPT }} />
      </head>
      <body>
        <SkipLink />
        <IconSprite />

        {/* Organisation and WebSite are declared once, in the layout. Pages
            reference them by @id instead of redeclaring the company. */}
        <JsonLd schema={[organisationSchema(), websiteSchema()]} />

        <RevealController />

        <SiteHeader />

        {/* Renders <main id="main"> and cross-fades it on every route change. */}
        <PageTransition>{children}</PageTransition>

        <SiteFooter />
      </body>
    </html>
  );
}
