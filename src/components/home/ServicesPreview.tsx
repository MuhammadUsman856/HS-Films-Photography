import { services } from "@/content/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesPreview() {
  return (
    <section className="bg-cream dark:bg-ink-soft py-24 md:py-32">
      <Container>
        <SectionHeading
          kicker="Services"
          title="Crafted for every chapter of celebration."
          body="Photography, film, editing and albums — designed as one visual language."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/services" variant="line">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
