import Button from "@/components/primitives/Button";
import Eyebrow from "@/components/primitives/Eyebrow";
import Media from "@/components/primitives/Media";
import Container from "@/components/layout/Container";
import Cluster from "@/components/layout/Cluster";

/**
 * Home hero.
 *
 * The media is positioned over the right half of the section rather than
 * placed in a grid column, so the copy can sit in the ordinary page container.
 * That is what puts the h1's left edge on the same vertical line as every
 * heading below it. Below 900px the media stacks underneath.
 */
export default function Hero({ eyebrow, titleLead, titleAccent, titleTail, lead, actions, image }) {
  return (
    <section className="b-hero" data-surface="inverse" aria-labelledby="hero-title">
      <Container className="b-hero__inner">
        <div className="b-hero__copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="t-h1 b-hero__title" id="hero-title">
            {titleLead} <em>{titleAccent}</em>
            {titleTail}
          </h1>
          <p className="t-lead b-hero__lead">{lead}</p>
          <Cluster className="b-hero__actions">
            {actions.map((action) => (
              <Button key={action.href} href={action.href} variant={action.variant} size="lg" arrow={action.arrow}>
                {action.label}
              </Button>
            ))}
          </Cluster>
        </div>
      </Container>

      <div className="b-hero__media">
        <Media slot={image.slot} width={image.width} height={image.height} note={image.note} priority sizes="50vw" />
      </div>
    </section>
  );
}
