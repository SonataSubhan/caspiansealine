import Icon from "@/components/primitives/Icon";
import Section from "@/components/layout/Section";
import Split from "@/components/layout/Split";
import Prose from "@/components/layout/Prose";
import RuleGrid from "@/components/layout/RuleGrid";
import Media from "@/components/primitives/Media";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";

import { hsseq } from "@/content/en/company";
import { home } from "@/content/en/home";

const BREADCRUMB = [{ label: "HSSEQ policy", href: "/hsseq" }];

export const metadata = buildMetadata({
  title: hsseq.meta.title,
  description: hsseq.meta.description,
  path: "/hsseq",
});

export default function HsseqPage() {
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ path: "/hsseq", name: hsseq.meta.title, description: hsseq.meta.description }),
          breadcrumbSchema(BREADCRUMB),
        ]}
      />

      <PageHero eyebrow={hsseq.eyebrow} title={hsseq.title} lead={hsseq.lead} breadcrumb={BREADCRUMB} />

      <Section>
        <Split ratio="copyNarrow">
          <Media slot="hsseq" width={1000} height={1250} ratio="portrait" sizes="(max-width: 899px) 100vw, 40vw" />
          <Prose paragraphs={hsseq.paragraphs} />
        </Split>
      </Section>

      <Section surface="subtle" aria-labelledby="commitments-title">
        <h2 className="t-h3" id="commitments-title">
          The four commitments
        </h2>
        <div className="b-network__footer">
          <RuleGrid cols={4} boxed>
            {hsseq.commitments.map((item) => (
              <div className="capability" key={item.title}>
                <Icon name={item.icon} className="capability__icon" />
                <h3 className="capability__title">{item.title}</h3>
                <p className="capability__text">{item.text}</p>
              </div>
            ))}
          </RuleGrid>
        </div>
      </Section>

      <CtaBand {...home.cta} />
    </>
  );
}
