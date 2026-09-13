import Button from "@/components/primitives/Button";
import Eyebrow from "@/components/primitives/Eyebrow";
import Container from "@/components/layout/Container";
import Cluster from "@/components/layout/Cluster";

/** The closing call to action. Every page that is not itself a form ends here. */
export default function CtaBand({ eyebrow, title, lead, actions, headingId = "cta-title" }) {
  return (
    <section className="b-cta motif" data-surface="inverse" aria-labelledby={headingId}>
      <Container className="b-cta__inner">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="t-h2 b-cta__title" id={headingId}>
          {title}
        </h2>
        <p className="t-lead b-cta__lead">{lead}</p>
        <Cluster>
          {actions.map((action) => (
            <Button key={action.href} href={action.href} variant={action.variant} size="lg" arrow={action.arrow}>
              {action.label}
            </Button>
          ))}
        </Cluster>
      </Container>
    </section>
  );
}
