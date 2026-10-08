import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection({
  title = "Have an event coming up?",
  body = "Let's discuss how we can capture it.",
  cta = "Book Now",
  href = "/booking",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream-soft">
      <Container className="text-center">
        <h2 className="font-display text-4xl md:text-6xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-cream/70">{body}</p>
        <div className="mt-10">
          <Button href={href}>{cta}</Button>
        </div>
      </Container>
    </section>
  );
}
