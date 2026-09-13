import Link from "next/link";

import Icon from "@/components/primitives/Icon";
import Logo from "@/components/primitives/Logo";
import Button from "@/components/primitives/Button";
import Container from "@/components/layout/Container";
import { footerNav, legalNav } from "@/content/en/navigation";
import { site } from "@/content/en/site";

/**
 * The site footer. A Server Component — nothing here needs state, so none of
 * it reaches the browser as JavaScript.
 *
 * The link columns are generated from the same navigation module the header
 * uses, so the footer can never fall out of step with the site structure.
 */
export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <Container className="footer-cta__inner">
          <p className="footer-cta__title">Operations desk, around the clock.</p>

          <div className="cluster cluster--lg">
            <address className="footer-contact">
              <span className="t-meta t-muted">Bookings &amp; operations</span>
              <a href={site.contact.phoneHref}>{site.contact.phone}</a>
              <a href={`mailto:${site.contact.operationsEmail}`}>{site.contact.operationsEmail}</a>
            </address>
            <Button href="/contact" variant="accent" arrow>
              Contact us
            </Button>
          </div>
        </Container>
      </div>

      <div className="footer-main">
        <Container className="footer-main__inner">
          <div className="footer-brand">
            <Logo variant="white" height="2.5rem" />
            <p className="t-body-s t-muted">{site.summary}</p>

            <ul className="social" role="list">
              {site.social.map((item) => (
                <li key={item.label}>
                  <a href={item.href} aria-label={`${site.name} on ${item.label}`}>
                    <Icon name={item.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerNav.map((column) => (
            <div className="footer-col" key={column.title}>
              <p className="footer-col__title">{column.title}</p>
              <ul className="footer-col__list" role="list">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </div>

      <div className="footer-legal">
        <Container className="footer-legal__inner">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul className="footer-legal__links" role="list">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
