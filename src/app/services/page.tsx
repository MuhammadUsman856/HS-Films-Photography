import { services } from "@/content/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/home/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  path: "/services",
  description:
    "Wedding photography, cinematic videography, events, editing, albums, portraits and restoration by HS Films & Photography.",
});

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <h1 className="font-display text-5xl md:text-7xl">Services</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/70 dark:text-cream/70">
            A complete creative studio for photography, film and finishing.
          </p>
        </Container>
      </section>
      <Container className="grid gap-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </Container>
      <CTASection title="Ready to begin?" body="Book a session or request a custom quote." />
    </>
  );
}
