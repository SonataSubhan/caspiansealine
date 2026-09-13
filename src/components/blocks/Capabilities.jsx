import Icon from "@/components/primitives/Icon";
import Section from "@/components/layout/Section";
import SectionHead from "@/components/layout/SectionHead";
import RuleGrid from "@/components/layout/RuleGrid";

/** Six-cell hairline grid. The most reusable block on the site. */
export default function Capabilities({ content, headingId = "capabilities-title", surface, cols = 3 }) {
  return (
    <Section surface={surface} aria-labelledby={headingId}>
      <SectionHead
        eyebrow={content.eyebrow}
        title={content.title}
        titleId={headingId}
        lead={content.lead}
        centred
      />

      <RuleGrid cols={cols} boxed>
        {content.items.map((item) => (
          <div className="capability" key={item.title}>
            <Icon name={item.icon} className="capability__icon" />
            <h3 className="capability__title">{item.title}</h3>
            <p className="capability__text">{item.text}</p>
          </div>
        ))}
      </RuleGrid>
    </Section>
  );
}
