import Button from "@/components/primitives/Button";
import Container from "@/components/layout/Container";
import Cluster from "@/components/layout/Cluster";
import Eyebrow from "@/components/primitives/Eyebrow";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="b-pagehero motif" data-surface="inverse">
      <Container className="b-pagehero__inner">
        <Eyebrow tone="red">Error 404</Eyebrow>
        <h1 className="t-h1 b-pagehero__title">This page is not in the schedule.</h1>
        <p className="t-lead b-pagehero__lead">
          The address you followed does not exist, or the page has moved. The links below cover most
          of what people arrive looking for.
        </p>
        <Cluster>
          <Button href="/" size="lg" arrow>
            Back to the home page
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </Cluster>
      </Container>
    </section>
  );
}
