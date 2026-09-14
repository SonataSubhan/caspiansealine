import Button from "@/components/primitives/Button";
import Container from "@/components/layout/Container";
import Cluster from "@/components/layout/Cluster";
import Eyebrow from "@/components/primitives/Eyebrow";
import { defaultLocale, getContent, localeHref, locales } from "@/content";

/**
 * 404 — the one page on the site that is bilingual on purpose.
 *
 * Every other page knows its language from the `[locale]` segment. This one
 * cannot: it renders for an address that matched no route, so there is no
 * segment to read. `next/root-params` looks like the answer and is not — it
 * exports nothing in this build, and a 404 that throws is worse than a 404 in
 * the wrong language.
 *
 * Rather than guess, it says the same thing in both languages. That is also
 * the honest answer to the situation: at a broken address we genuinely do not
 * know who arrived or in which language they were reading.
 *
 * `lang` on each block is what lets a screen reader pronounce each half
 * correctly, and what stops a translation tool treating the page as one
 * confused language.
 */
export const metadata = {
  robots: { index: false, follow: false },
};

export default function NotFound() {
  /* Default language first, then the others. */
  const ordered = [defaultLocale, ...locales.filter((code) => code !== defaultLocale)];

  return (
    <section className="b-pagehero motif" data-surface="inverse">
      <Container className="b-pagehero__inner">
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
  );
}
