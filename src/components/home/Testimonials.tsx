import { testimonials } from "@/content/testimonials";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          kicker="Kind Words"
          title="Memories, as they remember them."
          body="Placeholder reviews — replace these with real client words in src/content/testimonials.ts."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
