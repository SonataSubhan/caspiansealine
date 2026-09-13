import Link from "next/link";

import Icon from "@/components/primitives/Icon";
import Container from "@/components/layout/Container";
import RuleGrid from "@/components/layout/RuleGrid";

/**
 * The conversion strip directly under the hero. Four equal cells, hairline
 * separated, each one a single link — the four things a visitor most often
 * arrives wanting to do.
 */
export default function QuickBar({ items }) {
  return (
    <section className="b-quickbar" aria-label="Quick actions">
      <Container>
        <RuleGrid cols={4} className="b-quickbar__grid">
          {items.map((item) => (
            <Link className="quick-tile" href={item.href} key={item.href}>
              <span className="quick-tile__icon">
                <Icon name={item.icon} />
              </span>
              <span className="quick-tile__text">
                <span className="quick-tile__title">{item.title}</span>
                <span className="quick-tile__sub">{item.sub}</span>
              </span>
              <Icon name="arrow-right" className="quick-tile__arrow" />
            </Link>
          ))}
        </RuleGrid>
      </Container>
    </section>
  );
}
