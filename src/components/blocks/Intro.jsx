import Eyebrow from "@/components/primitives/Eyebrow";
import LinkArrow from "@/components/primitives/LinkArrow";
import SpecList from "@/components/primitives/SpecList";
import Stat from "@/components/primitives/Stat";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import RuleGrid from "@/components/layout/RuleGrid";
import Prose from "@/components/layout/Prose";

/** Positioning statement, credential panel and the proof numbers. */
export default function Intro({ content, facts, stats }) {
  return (
    <Section aria-labelledby="intro-title">
      <div className="b-intro__grid">
        <Stack gap="lg">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="t-h2" id="intro-title">
            {content.title}
          </h2>
          <SpecList items={facts} className="b-intro__facts" />
        </Stack>

        <Stack gap="lg">
          <p className="b-intro__statement">{content.statement}</p>
          <Prose paragraphs={content.paragraphs} />
          <LinkArrow href={content.link.href}>{content.link.label}</LinkArrow>
        </Stack>
      </div>

      <RuleGrid cols={4} boxed className="b-intro__stats t-numeric">
        {stats.map((stat) => (
          <Stat key={stat.label} value={stat.value} unit={stat.unit} label={stat.label} />
        ))}
      </RuleGrid>
    </Section>
  );
}
