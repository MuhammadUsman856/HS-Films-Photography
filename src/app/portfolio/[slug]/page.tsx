import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolio } from "@/content/portfolio";
import { Gallery } from "@/components/portfolio/Gallery";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ShareButton } from "@/components/system/ShareButton";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    path: `/portfolio/${project.slug}`,
    description: project.description,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) notFound();
  const related = portfolio.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3);

  return (
    <>
      <section className="relative h-[70vh] min-h-[480px]">
        <Image src={project.cover} alt={project.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 flex h-full items-end px-6 pb-16 text-cream-soft md:px-16">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-gold-light">
              {project.subtitle}
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl md:text-6xl">{project.title}</h1>
            <p className="mt-4 text-sm text-cream/75">
              {project.date} · {project.location}
            </p>
          </div>
        </div>
      </section>
      <Container className="py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-2xl text-lg leading-relaxed text-ink/70 dark:text-cream/70">
            {project.description}
          </p>
          <ShareButton title={project.title} />
        </div>
        {project.video?.src ? (
          <div className="mt-12 aspect-video bg-ink">
            {project.video.type === "youtube" ? (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${project.video.src}`}
                title={project.title}
                loading="lazy"
                allowFullScreen
              />
            ) : null}
          </div>
        ) : null}
        <div className="mt-14">
          <Gallery images={project.gallery} title={project.title} />
        </div>
        <div className="mt-16">
          <Button href="/booking">Book a similar session</Button>
        </div>
        {related.length ? (
          <div className="mt-20">
            <h2 className="font-display text-3xl">Related projects</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/portfolio/${p.slug}`} className="block">
                  <div className="relative aspect-[4/5]">
                    <Image src={p.cover} alt={p.title} fill className="object-cover" sizes="33vw" />
                  </div>
                  <p className="mt-3 font-display text-xl">{p.title}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </>
  );
}
