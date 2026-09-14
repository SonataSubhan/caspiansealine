import Link from "next/link";

import Button from "@/components/primitives/Button";
import Card, { CardBody, CardFoot } from "@/components/primitives/Card";
import LinkArrow from "@/components/primitives/LinkArrow";
import Media from "@/components/primitives/Media";
import Section from "@/components/layout/Section";
import SectionHead from "@/components/layout/SectionHead";
import Grid from "@/components/layout/Grid";
import { formatDate } from "@/content/lookup";
import { localeHref } from "@/content";

/* The grid's column count, in one place: the layout below and the decision
   about which cards are in the first row have to agree, and a number typed
   twice is a number that will eventually disagree with itself. */
const COLUMNS = 3;

/**
 * Article cards. Shared by the home page and /news.
 *
 * `leading` says this grid is the first content on the page, which makes its
 * first row the Largest Contentful Paint candidate. The first card is then
 * preloaded and the rest of its row is merely un-lazied; see Media for why
 * those are two different things.
 *
 * On the home page the hero photograph already holds that role, so the flag is
 * off and every card here stays lazy — a second preloaded image would compete
 * with the hero for the same bandwidth and make the real LCP arrive later.
 */
export default function NewsGrid({
  content,
  articles,
  locale,
  ui,
  headingId = "news-title",
  surface,
  leading = false,
}) {
  return (
    <Section surface={surface} aria-labelledby={headingId}>
      <SectionHead
        eyebrow={content.eyebrow}
        title={content.title}
        titleId={headingId}
        lead={content.lead}
        action={
          content.action ? (
            <Button href={content.action.href} variant="secondary">
              {content.action.label}
            </Button>
          ) : null
        }
      />

      <Grid cols={COLUMNS}>
        {articles.map((article, index) => (
          <Card className="news-card" key={article.slug}>
            <Media
              locale={locale}
              slot={`news-${article.slug}`}
              width={960}
              height={540}
              flush
              preload={leading && index === 0}
              eager={leading && index < COLUMNS}
              sizes="(max-width: 599px) 100vw, 33vw"
            />
            <CardBody>
              <p className="news-card__meta">
                <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
                <span aria-hidden="true">·</span>
                <span>{article.category}</span>
              </p>
              <h3 className="news-card__title t-h5">
                <Link className="card__link" href={localeHref(locale, `/news/${article.slug}`)}>
                  {article.title}
                </Link>
              </h3>
              <p className="card__text">{article.summary}</p>
              <CardFoot>
                <LinkArrow as="span">{ui.common.read}</LinkArrow>
              </CardFoot>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
