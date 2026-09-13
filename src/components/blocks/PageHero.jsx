import Eyebrow from "@/components/primitives/Eyebrow";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/navigation/Breadcrumb";

/**
 * The inner-page header. Every page except the home page opens with this, so
 * the site has one entry rhythm instead of twenty.
 *
 * The h1 lives here, which keeps the heading hierarchy identical on every
 * page: one h1 in the hero, h2 for each section below it.
 */
export default function PageHero({ eyebrow, eyebrowTone, title, lead, breadcrumb, children }) {
  return (
    <section className="b-pagehero motif" data-surface="inverse" aria-labelledby="page-title">
      <Container className="b-pagehero__inner">
        {breadcrumb ? <Breadcrumb items={breadcrumb} /> : null}
        {eyebrow ? <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow> : null}
        <h1 className="t-h1 b-pagehero__title" id="page-title">
          {title}
        </h1>
        {lead ? <p className="t-lead b-pagehero__lead">{lead}</p> : null}
        {children}
      </Container>
    </section>
  );
}
