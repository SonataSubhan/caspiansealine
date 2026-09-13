import Eyebrow from "@/components/primitives/Eyebrow";

/**
 * eyebrow → title → lead on the left, one optional action on the right.
 *
 * Fixed order, one component, used by every section on the site. That is what
 * stops eight sections from drifting into eight slightly different headers.
 * The heading level is a prop because the same visual belongs to an h2 on the
 * home page and an h1 on an inner page.
 */
export default function SectionHead({
  eyebrow,
  eyebrowTone,
  title,
  titleId,
  lead,
  action,
  as: Tag = "h2",
  size = "t-h2",
  centred = false,
}) {
  return (
    <div className={`section-head ${centred ? "section-head--centred" : ""}`.trim()}>
      <div className="section-head__titles">
        {eyebrow ? <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow> : null}
        <Tag className={size} id={titleId}>
          {title}
        </Tag>
        {lead ? <p className="t-lead">{lead}</p> : null}
      </div>
      {action ? <div className="section-head__action">{action}</div> : null}
    </div>
  );
}
