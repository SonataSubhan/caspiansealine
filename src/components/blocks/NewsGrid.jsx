import Link from "next/link";

import Button from "@/components/primitives/Button";
import Card, { CardBody, CardFoot } from "@/components/primitives/Card";
import LinkArrow from "@/components/primitives/LinkArrow";
import Media from "@/components/primitives/Media";
import Section from "@/components/layout/Section";
import SectionHead from "@/components/layout/SectionHead";
import Grid from "@/components/layout/Grid";
import { formatDate } from "@/content/en/news";

/** Article cards. Shared by the home page and /news. */
export default function NewsGrid({ content, articles, headingId = "news-title", surface }) {
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

      <Grid cols={3}>
        {articles.map((article) => (
          <Card className="news-card" key={article.slug}>
            <Media slot={`news-${article.slug}`} width={960} height={540} flush sizes="(max-width: 599px) 100vw, 33vw" />
            <CardBody>
              <p className="news-card__meta">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{article.category}</span>
              </p>
              <h3 className="news-card__title t-h5">
                <Link className="card__link" href={`/news/${article.slug}`}>
                  {article.title}
                </Link>
              </h3>
              <p className="card__text">{article.summary}</p>
              <CardFoot>
                <LinkArrow as="span">Read</LinkArrow>
              </CardFoot>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
