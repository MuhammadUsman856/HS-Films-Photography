import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/content/portfolio";

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="group relative overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-80" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-cream-soft">
          <p className="text-[10px] tracking-[0.24em] uppercase text-gold-light">
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-2xl leading-tight">{project.title}</h3>
          {project.location ? (
            <p className="mt-1 text-xs text-cream/70">
              {project.location}
              {project.date ? ` · ${project.date}` : ""}
            </p>
          ) : null}
          <Link
            href={`/portfolio/${project.slug}`}
            className="mt-4 inline-flex min-h-10 items-center text-[11px] tracking-[0.2em] uppercase underline underline-offset-4"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
}
