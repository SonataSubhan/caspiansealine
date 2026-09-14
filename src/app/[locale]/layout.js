import "../globals.css";

import { mulish } from "../fonts";
import IconSprite from "@/components/primitives/IconSprite";
import SkipLink from "@/components/navigation/SkipLink";
import SiteHeader from "@/components/navigation/SiteHeader";
import SiteFooter from "@/components/navigation/SiteFooter";
import PageTransition from "@/components/motion/PageTransition";
import RevealController from "@/components/motion/RevealController";
import { JsonLd, organisationSchema, websiteSchema } from "@/lib/schema";
import { getContent, localeAlternates, localeNames, locales } from "@/content";

/**
 * The root layout, and the root of both languages.
 *
 * Every route on the site lives under `[locale]`, which is what makes the
 * language a segment of the URL rather than a runtime setting. English is
 * served without the prefix — `proxy.js` rewrites `/services` to
 * `/en/services` before the router sees it — so no published English link
 * changes.
 */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Root metadata, per language.
 *
 * `metadataBase` is set once here so every page can declare relative URLs.
 * `title.template` appends the brand to child pages; the home page overrides
 * it with an absolute title.
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { site } = getContent(locale);

  return {
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
    alternates: {
      canonical: localeAlternates("/")[locale],
      languages: { ...localeAlternates("/"), "x-default": localeAlternates("/").en },
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
}

export const viewport = {
  themeColor: "#041e42",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const { primaryNav, utilityNav, footerNav, legalNav, site, ui } = getContent(locale);

  return (
    /* `lang` is the reader's language, which is what a screen reader switches
       its pronunciation on and what Google reads to confirm the hreflang set.

       `data-scroll-behavior` restores instant scroll-to-top on navigation,
       which Next 16 no longer forces when the page sets scroll-behavior.

       No `suppressHydrationWarning`, and no boot script: nothing writes to this
       element before React hydrates any more. `data-motion` is set by
       RevealController on mount, which is also what makes the server HTML and
       the first client render identical. See app/styles/motion.css. */
    <html
      lang={localeNames[locale]?.htmlLang ?? "en"}
      className={mulish.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <SkipLink locale={locale} />
        <IconSprite />

        {/* Organisation and WebSite are declared once, in the layout. Pages
            reference them by @id instead of redeclaring the company. */}
        <JsonLd schema={[organisationSchema(locale), websiteSchema(locale)]} />

        <RevealController />

        {/* The header and footer get exactly the slices they render, not the
            whole dictionary. The header is a Client Component, so everything
            handed to it is serialised into the payload of every page —
            passing the full dictionary would ship all sixteen services, every
            article and every legal document to the browser on each request,
            to render a navigation bar. */}
        <SiteHeader locale={locale} content={{ primaryNav, utilityNav, site, ui }} />

        {/* Renders <main id="main"> and cross-fades it on every route change. */}
        <PageTransition>{children}</PageTransition>

        <SiteFooter locale={locale} content={{ footerNav, legalNav, site, ui }} />
      </body>
    </html>
  );
}
