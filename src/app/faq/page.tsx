import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/home/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ",
  path: "/faq",
  description: "Frequently asked questions about booking HS Films & Photography.",
});

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <Container className="max-w-3xl">
          <h1 className="font-display text-5xl md:text-7xl">FAQ</h1>
          <div className="mt-12">
            <FAQAccordion />
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
