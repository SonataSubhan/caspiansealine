import { NextResponse } from "next/server";

import { defaultLocale, locales } from "@/content";

/**
 * The language prefix.
 *
 * Every route lives under `app/[locale]`, but English is published without a
 * prefix: `/services` is English, `/az/services` is Azerbaijani. That decision
 * is worth a file of its own — the alternative, moving English to `/en/…`,
 * would have changed the URL of every page already indexed and every link
 * already shared, and bought nothing.
 *
 * So an unprefixed request is rewritten — not redirected — onto the English
 * tree. The reader's address bar keeps saying `/services`; the router sees
 * `/en/services` and serves the page that was statically generated for it.
 *
 * Nothing here is dynamic: a rewrite does not opt a page out of static
 * rendering, so the build output stays 100% prerendered.
 *
 * The prefixed English URLs (`/en/services`) are redirected back to the
 * unprefixed ones in `next.config.mjs`, so the same page can never be reached
 * at two addresses and compete with itself for indexing.
 */
export function proxy(request) {
  const { pathname } = request.nextUrl;

  /* Any locale, including the default one. `/en/…` normally never reaches here
     — next.config redirects it to the unprefixed URL — but the generated share
     cards are deliberately exempt from that redirect, and prefixing an already
     prefixed path would turn `/en/x/opengraph-image` into `/en/en/x/…`. */
  const alreadyPrefixed = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (alreadyPrefixed) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  /**
   * Skip Next's internals, the API surface and anything with a file extension.
   *
   * That last clause is what keeps `/sitemap.xml`, `/robots.txt`,
   * `/favicon.ico`, `/icon.svg` and everything under `/img` and `/brand` at
   * the site root where they belong — they are not translated, and a language
   * prefix on them would be wrong.
   */
  matcher: ["/((?!api|_next/static|_next/image|.*\\.).*)"],
};
