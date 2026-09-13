import Link from "next/link";

import Button from "@/components/primitives/Button";
import LinkArrow from "@/components/primitives/LinkArrow";
import Card, { CardBody, CardFoot } from "@/components/primitives/Card";
import Section from "@/components/layout/Section";
import SectionHead from "@/components/layout/SectionHead";
import Grid from "@/components/layout/Grid";

/**
 * The three service pillars.
 *
 * The heading carries the only link; the arrow at the foot is a <span> that
 * inherits the card's hover state, so the card has one focusable target rather
 * than two that go to the same place.
 */
export default function ServicePillars({ content, pillars, headingId = "services-title" }) {
  return (
    <Section surface="subtle" aria-labelledby={headingId}>
      <SectionHead
        eyebrow={content.eyebrow}
        title={content.title}
        titleId={headingId}
        action={
          content.action ? (
            <Button href={content.action.href} variant="secondary">
              {content.action.label}
            </Button>
          ) : null
        }
      />

      <Grid cols={3}>
        {pillars.map((pillar) => (
          <Card accent={pillar.accent} key={pillar.id}>
            <CardBody>
              <p className="service-card__index">{pillar.index}</p>
              <h3 className="card__title t-h4">
                <Link className="card__link" href={pillar.href}>
                  {pillar.title}
                </Link>
              </h3>
              <p className="card__text">{pillar.text}</p>
              <ul className="service-card__list" role="list">
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <CardFoot>
                <LinkArrow as="span">Explore</LinkArrow>
              </CardFoot>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
