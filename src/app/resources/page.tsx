import Link from "next/link";
import { resources } from "@/content/resources";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Creative Resources",
  path: "/resources",
  description: "Guides and checklists from HS Films & Photography, ready for future articles.",
});

export default function ResourcesPage() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <h1 className="font-display text-5xl md:text-7xl">Creative Resources</h1>
        <p className="mt-6 max-w-2xl text-ink/70 dark:text-cream/70">
          Practical guides for clients. This section is structured so it can grow into a blog.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {resources.map((r) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className="border border-ink/10 dark:border-white/10 p-8 hover:border-gold"
            >
              <p className="text-[11px] tracking-[0.24em] uppercase text-gold-dark dark:text-gold">
                {r.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl">{r.title}</h2>
              <p className="mt-3 text-sm text-ink/65 dark:text-cream/65">{r.excerpt}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
