import Icon from "@/components/primitives/Icon";
import Section from "@/components/layout/Section";
import Split from "@/components/layout/Split";
import Prose from "@/components/layout/Prose";
import RuleGrid from "@/components/layout/RuleGrid";
import Media from "@/components/primitives/Media";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";

import { buildMetadata } from "@/lib/seo";
import { crumbs } from "@/lib/breadcrumb";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getContent } from "@/content";



export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { home, hsseq, ui } = getContent(locale);

  return buildMetadata({
   locale,
    locale,
    title: hsseq.meta.title,
    description: hsseq.meta.description,
    path: "/hsseq",
  });
}

export default async function HsseqPage({ params }) {
  const { locale } = await params;
  const { home, hsseq, ui } = getContent(locale);

  const breadcrumb = crumbs(locale, [{ label: hsseq.meta.title, href: "/hsseq" }]);

  return (
    <>
      <JsonLd
        schema={[
          webPageSchema({ locale, path: "/hsseq", name: hsseq.meta.title, description: hsseq.meta.description }),
          breadcrumbSchema(breadcrumb, locale),
        ]}
      />

      <PageHero locale={locale} eyebrow={hsseq.eyebrow} title={hsseq.title} lead={hsseq.lead} breadcrumb={breadcrumb} />

      <Section>
        <Split ratio="copyNarrow" align="start">
          <Media locale={locale} slot="hsseq" width={1200} height={900} ratio="hero" sizes="(max-width: 899px) 100vw, 40vw" />
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
