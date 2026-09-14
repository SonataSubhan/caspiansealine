import "./globals.css";

import { mulish } from "./fonts";
import Logo from "@/components/primitives/Logo";
import Button from "@/components/primitives/Button";
import Container from "@/components/layout/Container";
import Cluster from "@/components/layout/Cluster";
import Eyebrow from "@/components/primitives/Eyebrow";
import IconSprite from "@/components/primitives/IconSprite";
import { defaultLocale, getContent, localeHref, locales } from "@/content";

/**
 * The 404 for an address that matches no route at all.
 *
 * `[locale]/not-found.js` only renders when a matched route calls `notFound()`
 * — a bad service slug, say. A URL like `/nope` never enters a segment, so
 * without this file Next serves its own unbranded "404 | This page could not
 * be found", which is a visible hole in an otherwise finished site.
 *
 * This convention deliberately bypasses the layout, which is why the font, the
 * stylesheet, the icon sprite and `<html>` itself are all declared here. It
 * also means there is no `[locale]` segment to read, so — like the in-segment
 * 404 — the page is bilingual rather than guessing.
 *
 * The full header is left off on purpose: this is a dead end, and the logo
 * plus two clear ways out is faster and reads better than a mega-menu.
 */
export const metadata = {
  title: `404 · ${getContent(defaultLocale).site.name}`,
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  const ordered = [defaultLocale, ...locales.filter((code) => code !== defaultLocale)];

  return (
    <html lang={defaultLocale} className={mulish.variable}>
      <body>
        <IconSprite />

        <main id="main">
          <section className="b-pagehero motif" data-surface="inverse">
            <Container className="b-pagehero__inner">
              <Logo variant="white" height="2.5rem" href={localeHref(defaultLocale, "/")} />

              <Eyebrow tone="red">{getContent(defaultLocale).ui.notFound.eyebrow}</Eyebrow>

              {ordered.map((code, index) => {
                const { ui } = getContent(code);

                return (
                  <div className="not-found__block" key={code} lang={code}>
                    {index === 0 ? (
                      <h1 className="t-h1 b-pagehero__title">{ui.notFound.title}</h1>
                    ) : (
                      <p className="t-h3 b-pagehero__title">{ui.notFound.title}</p>
                    )}
                    <p className="t-lead b-pagehero__lead">{ui.notFound.lead}</p>

                    <Cluster>
                      <Button href={localeHref(code, "/")} size={index === 0 ? "lg" : undefined} arrow>
                        {ui.notFound.backHome}
                      </Button>
                      <Button
                        href={localeHref(code, "/contact")}
                        variant="secondary"
                        size={index === 0 ? "lg" : undefined}
                      >
                        {ui.a11y.contactUs}
                      </Button>
                    </Cluster>
                  </div>
                );
              })}
            </Container>
          </section>
        </main>
      </body>
    </html>
  );
}
