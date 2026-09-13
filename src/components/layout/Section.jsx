import Container from "./Container";

/**
 * A page section: vertical rhythm, optional surface, and the container.
 *
 * Surface is a data attribute rather than a class because it re-points the
 * semantic colour tokens for everything inside — no component needs a dark
 * variant of its own.
 */
const SPACING = { tight: "section section--tight", default: "section", loose: "section section--loose" };

export default function Section({
  children,
  surface,
  spacing = "default",
  container = true,
  containerSize = "default",
  className = "",
  ...rest
}) {
  const classes = [SPACING[spacing], className].filter(Boolean).join(" ");

  return (
    <section className={classes} data-surface={surface} {...rest}>
      {container ? <Container size={containerSize}>{children}</Container> : children}
    </section>
  );
}
