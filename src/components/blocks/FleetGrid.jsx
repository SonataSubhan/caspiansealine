import Link from "next/link";

import Badge from "@/components/primitives/Badge";
import Button from "@/components/primitives/Button";
import Card, { CardBody } from "@/components/primitives/Card";
import Media from "@/components/primitives/Media";
import SpecList from "@/components/primitives/SpecList";
import Section from "@/components/layout/Section";
import SectionHead from "@/components/layout/SectionHead";
import Grid from "@/components/layout/Grid";

/** Vessel cards. Used on the home page (3 shown) and on /fleet (all). */
export default function FleetGrid({ content, vessels, surface = "subtle", headingId = "fleet-title", linked = true }) {
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
        {vessels.map((vessel) => (
          <Card className="vessel-card" key={vessel.slug}>
            <Media slot={vessel.slug} width={960} height={600} flush sizes="(max-width: 599px) 100vw, 33vw" />
            <CardBody>
              <Badge tone={vessel.accent}>{vessel.type}</Badge>
              <h3 className="card__title t-h4">
                {linked ? (
                  <Link className="card__link" href="/fleet">
                    {vessel.name}
                  </Link>
                ) : (
                  vessel.name
                )}
              </h3>
              {vessel.summary ? <p className="card__text">{vessel.summary}</p> : null}
              <SpecList items={vessel.specs.slice(0, 4)} className="vessel-card__spec" />
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
