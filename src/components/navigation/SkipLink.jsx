import { getContent } from "@/content";

/** First focusable element on every page. */
export default function SkipLink({ locale }) {
  const { ui } = getContent(locale);

  return (
    <a className="skip-link" href="#main">
      {ui.a11y.skipToContent}
    </a>
  );
}
