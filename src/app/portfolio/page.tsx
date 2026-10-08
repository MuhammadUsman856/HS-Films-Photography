import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/home/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio",
  path: "/portfolio",
  description: "Wedding, event and cinematic portfolio from HS Films & Photography.",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-32 pb-10">
        <Container>
          <h1 className="font-display text-5xl md:text-7xl">Portfolio</h1>
          <p className="mt-6 max-w-2xl text-ink/70 dark:text-cream/70">
            Filter by collection. Each project opens into a full gallery.
          </p>
        </Container>
      </section>
      <Container className="pb-24">
        <PortfolioGrid />
      </Container>
      <CTASection />
    </>
  );
}
