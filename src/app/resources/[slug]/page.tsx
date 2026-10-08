import { notFound } from "next/navigation";
import { resources } from "@/content/resources";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = resources.find((r) => r.slug === slug);
  if (!item) return {};
  return pageMetadata({
    title: item.title,
    path: `/resources/${item.slug}`,
    description: item.excerpt,
  });
}

export default async function ResourceArticle({ params }: Props) {
  const { slug } = await params;
  const item = resources.find((r) => r.slug === slug);
  if (!item) notFound();

  return (
    <article className="pt-32 pb-24">
      <Container className="max-w-3xl">
        <p className="text-[11px] tracking-[0.28em] uppercase text-gold-dark dark:text-gold">
          {item.kicker}
        </p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{item.title}</h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink/75 dark:text-cream/75">
          {item.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/booking">Book a Session</Button>
        </div>
      </Container>
    </article>
  );
}
