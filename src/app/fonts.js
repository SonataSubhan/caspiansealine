import localFont from "next/font/local";

/**
 * Mulish — the only approved typeface (brand guidelines, p.6).
 *
 * Self-hosted from `@fontsource-variable/mulish` rather than next/font/google:
 * no third-party request at runtime, no build-time dependency on an external
 * host, and the exact file version is pinned in package.json.
 *
 * One variable file covers the full 300–900 range the design system uses, so
 * the whole site ships two font files (latin + latin-ext) and nothing else.
 * latin-ext carries the Azerbaijani diacritics (ə, ğ, ı, ş, ç, ö, ü) that the
 * AZ locale will need — loaded now so adding that locale costs nothing.
 *
 * Called exactly once, here. Every other module imports the result.
 */
export const mulish = localFont({
  src: [
    {
      path: "./fonts/mulish-latin-variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "./fonts/mulish-latin-ext-variable.woff2",
      weight: "300 900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-mulish",
  preload: true,
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
  adjustFontFallback: "Arial",
});
