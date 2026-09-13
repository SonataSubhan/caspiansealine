import { locale as rootLocale } from "next/root-params";

import Button from "@/components/primitives/Button";
import Container from "@/components/layout/Container";
import Cluster from "@/components/layout/Cluster";
import Eyebrow from "@/components/primitives/Eyebrow";
import { getContent, localeHref } from "@/content";

/**
 * 404, in the reader's language.
 *
 * A not-found page cannot take `params` — it renders for addresses that
 * matched no route — so the language comes from `next/root-params`, which
 * exposes the `[locale]` segment above the root layout to any Server
 * Component without it being threaded through as a prop.
 */
export const metadata = {
  robots: { index: false, follow: false },
};

export default async function NotFound() {
  const locale = await rootLocale();
  const { ui } = getContent(locale);

  return (
    <section className="b-pagehero motif" data-surface="inverse">
      <Container className="b-pagehero__inner">
        <Eyebrow tone="red">{ui.notFound.eyebrow}</Eyebrow>
        <h1 className="t-h1 b-pagehero__title">{ui.notFound.title}</h1>
        <p className="t-lead b-pagehero__lead">{ui.notFound.lead}</p>
        <Cluster>
          <Button href={localeHref(locale, "/")} size="lg" arrow>
            {ui.notFound.backHome}
          </Button>
          <Button href={localeHref(locale, "/contact")} variant="secondary" size="lg">
            {ui.a11y.contactUs}
          </Button>
        </Cluster>
      </Container>
    </section>
  );
}
