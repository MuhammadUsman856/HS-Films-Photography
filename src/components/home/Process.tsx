import { processSteps } from "@/content/studio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section className="bg-cream dark:bg-ink-soft py-24 md:py-32">
      <Container>
        <SectionHeading kicker="Process" title="Four quiet steps." />
        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <p className="font-display text-5xl text-gold">{step.n}</p>
              <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-cream/65">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
