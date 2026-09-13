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
