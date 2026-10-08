import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export function FeaturedPortfolio() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          kicker="Portfolio"
          title="A gallery of light, color and feeling."
        />
        <div className="mt-14">
          <PortfolioGrid limit={6} />
        </div>
        <div className="mt-12 text-center">
          <Button href="/portfolio" variant="line">
            View Full Portfolio
          </Button>
        </div>
      </Container>
    </section>
  );
}
