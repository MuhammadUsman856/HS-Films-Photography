import { packages } from "@/content/packages";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Packages",
  path: "/packages",
  description: "Photography and videography packages by HS Films & Photography. Request a custom quote.",
});

export default function PackagesPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <h1 className="font-display text-5xl md:text-7xl">Packages</h1>
          <p className="mt-6 max-w-2xl text-ink/70 dark:text-cream/70">
            Pricing is intentionally unset so you can add your real figures later. Every package can
            be tailored.
          </p>
        </Container>
      </section>
      <Container className="grid gap-6 pb-24 md:grid-cols-2">
        {packages.map((pkg) => (
          <article
            key={pkg.slug}
            className={cn(
              "border p-8 md:p-10",
              pkg.featured
                ? "border-gold bg-cream dark:bg-ink-soft"
                : "border-ink/10 dark:border-white/10",
            )}
          >
            <p className="text-[11px] tracking-[0.24em] uppercase text-gold-dark dark:text-gold">
              {pkg.priceLabel}
            </p>
            <h2 className="mt-3 font-display text-4xl">{pkg.name}</h2>
            <p className="mt-3 text-ink/70 dark:text-cream/70">{pkg.tagline}</p>
            <p className="mt-4 text-sm">{pkg.description}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {pkg.features.map((f) => (
                <li key={f}>— {f}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/booking">Request Custom Quote</Button>
            </div>
          </article>
        ))}
      </Container>
      <CTASection cta="Request Custom Quote" />
    </>
  );
}
