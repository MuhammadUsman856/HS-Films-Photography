import Image from "next/image";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function InstagramStrip() {
  return (
    <section className="pb-24">
      <Container>
        <p className="text-center text-[11px] tracking-[0.32em] uppercase text-gold-dark dark:text-gold">
          Instagram
        </p>
        <h2 className="mt-4 text-center font-display text-4xl">Recently on film</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-3">
          {images.instagram.map((src, i) => (
            <a
              key={src}
              href={site.instagram}
              className="relative aspect-square overflow-hidden"
              aria-label="View Instagram"
            >
              <Image
                src={src}
                alt={`Instagram still ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
