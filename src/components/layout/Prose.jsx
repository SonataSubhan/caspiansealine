/**
 * Long-form copy. Capped to a readable measure and given its own vertical
 * rhythm, so body text never inherits the spacing rules of the page shell.
 *
 * `paragraphs` takes an array of strings from the content layer; `children`
 * is for the rare case that needs real markup.
 */
export default function Prose({ paragraphs, children, className = "" }) {
  return (
    <div className={`prose ${className}`.trim()}>
      {paragraphs ? paragraphs.map((text) => <p key={text.slice(0, 40)}>{text}</p>) : children}
    </div>
  );
}
