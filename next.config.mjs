/**
 * Caspian Sea Line — Next.js configuration
 *
 * The site is fully static (SSG). Nothing here may introduce a request-time
 * dependency, because that would silently move pages out of the prerender.
 *
 * @type {import('next').NextConfig}
 */

const isDev = process.env.NODE_ENV === "development";

/**
 * Content Security Policy.
 *
 * Deliberately header-based rather than nonce-based: a nonce has to be minted
 * per request, which forces every page into dynamic rendering and removes both
 * static generation and CDN caching. For a marketing site that trade is not
 * worth making.
 *
 * `'unsafe-inline'` in style-src is unavoidable — Next and next/font both emit
 * inline styles. script-src keeps it only because the JSON-LD blocks are
 * inline; they contain no executable code.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig = {
  reactCompiler: true,

  // Trailing slashes off keeps one canonical URL per page.
  trailingSlash: false,

  // `X-Powered-By` tells an attacker the stack for no benefit.
  poweredByHeader: false,

  images: {
    // AVIF first, WebP as the fallback; the browser picks.
    formats: ["image/avif", "image/webp"],
    // v16 defaults to [75]; anything not listed is coerced. Keep it explicit.
    qualities: [70, 75, 90],
    // Every image on this site is local and lives under /brand or /img.
    localPatterns: [
      { pathname: "/brand/**", search: "" },
      { pathname: "/img/**", search: "" },
    ],
  },

  /**
   * English is served without a language prefix (see proxy.js), so the
   * prefixed spelling must not also resolve — two URLs for one page split its
   * ranking signals and give the crawler a duplicate to reconcile.
   *
   * A redirect in this file runs before the proxy, so `/en/services` is sent
   * to `/services` and only then rewritten back internally. Azerbaijani keeps
   * its prefix and is untouched.
   */
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: true },
      /**
       * Everything under /en goes to the unprefixed URL — except the generated
       * share cards.
       *
       * Next builds `og:image` from the route path, which for English is
       * `/en/…/opengraph-image`. Sending that through a redirect would make
       * every link preview a two-hop fetch, and some scrapers (WhatsApp in
       * particular) do not follow a redirect for an image. The card is not a
       * page a person lands on, so serving it at its real path costs nothing.
       */
      {
        source: "/en/:path((?!.*opengraph-image).*)",
        destination: "/:path",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // Fingerprinted font files never change under a given name.
        source: "/:path*.woff2",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
