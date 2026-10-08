import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group overflow-hidden border border-ink/10 dark:border-white/10 bg-cream-soft dark:bg-ink-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-cream/65">
          {service.summary}
        </p>
        <Link
          href="/services"
          className="mt-5 inline-block text-[11px] tracking-[0.2em] uppercase text-gold-dark dark:text-gold"
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}
