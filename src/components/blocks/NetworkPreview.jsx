import Button from "@/components/primitives/Button";
import Eyebrow from "@/components/primitives/Eyebrow";
import Section from "@/components/layout/Section";
import SectionHead from "@/components/layout/SectionHead";
import Stack from "@/components/layout/Stack";
import LaneTable from "./LaneTable";

/** Trade lanes plus the list of ports called. */
export default function NetworkPreview({ content, lanes, ports, locale, ui }) {
  return (
    <Section aria-labelledby="network-title">
      <SectionHead
        eyebrow={content.eyebrow}
        title={content.title}
        titleId="network-title"
        lead={content.lead}
        action={
          <Button href={content.action.href} variant="secondary">
            {content.action.label}
          </Button>
        }
      />

      <LaneTable lanes={lanes} locale={locale} ui={ui} />

      <Stack gap="sm" className="b-network__footer" id="ports">
        <Eyebrow tone="plain" className="t-meta">
          {ui.sections.portsWeCall}
        </Eyebrow>
        <ul className="b-network__ports" role="list">
          {ports.map((port) => (
            <li key={port}>{port}</li>
          ))}
        </ul>
      </Stack>
    </Section>
  );
}
