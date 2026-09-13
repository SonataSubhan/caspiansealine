import Button from "@/components/primitives/Button";
import Eyebrow from "@/components/primitives/Eyebrow";
import Media from "@/components/primitives/Media";
import Section from "@/components/layout/Section";
import Split from "@/components/layout/Split";
import Stack from "@/components/layout/Stack";
import Prose from "@/components/layout/Prose";
import { localeHref } from "@/content";

/** Navy band with the environmental targets. Green accent, used only here. */
export default function SustainabilityBand({ locale, ui,  content, headingId = "sustain-title" }) {
  return (
    <Section className="b-sustain motif" surface="inverse" aria-labelledby={headingId}>
      <Split ratio="copyNarrow">
        <Stack gap="lg">
          <Eyebrow tone="green">{content.eyebrow}</Eyebrow>
          <h2 className="t-h2" id={headingId}>
            {content.title}
          </h2>
          <p className="t-lead">{content.lead}</p>
          <Prose paragraphs={content.paragraphs.slice(0, 1)} className="t-muted" />
          <Button href={localeHref(locale, "/sustainability")} variant="secondary" arrow>
            {ui.common.ourApproach}
          </Button>
        </Stack>

        <Stack gap="lg" className="b-sustain__panel">
          <dl className="b-sustain__targets t-numeric">
            {content.targets.map((target) => (
              <div className="b-sustain__target" key={target.value + target.label}>
                <dt>{target.value}</dt>
                <dd>{target.label}</dd>
              </div>
            ))}
          </dl>
          <Media locale={locale} slot="sustainability" width={1200} height={675} ratio="wide" sizes="(max-width: 899px) 100vw, 50vw" />
        </Stack>
      </Split>
    </Section>
  );
}
