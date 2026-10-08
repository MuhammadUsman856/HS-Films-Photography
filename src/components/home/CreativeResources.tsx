import Link from "next/link";
import { resources } from "@/content/resources";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CreativeResources() {
  return (
    <section className="bg-cream dark:bg-ink-soft py-24">
      <Container>
        <SectionHeading kicker="Guides" title="Creative Resources" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {resources.map((r) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className="border border-ink/10 dark:border-white/10 p-7 hover:border-gold transition-colors"
            >
              <p className="text-[11px] tracking-[0.24em] uppercase text-gold-dark dark:text-gold">
                {r.kicker}
              </p>
              <h3 className="mt-3 font-display text-2xl">{r.title}</h3>
              <p className="mt-3 text-sm text-ink/65 dark:text-cream/65">{r.excerpt}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
