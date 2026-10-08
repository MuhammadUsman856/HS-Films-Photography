"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { images } from "@/content/images";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Replace `film` below with:
 * { type: "youtube", src: "VIDEO_ID" }
 * { type: "vimeo", src: "VIDEO_ID" }
 * { type: "self", src: "/videos/showreel.mp4" }
 * { type: "background", src: "/videos/hero.mp4" }
 */
const film: { type: "youtube" | "vimeo" | "self" | "background"; src: string } = {
  type: "youtube",
  src: "",
};

export function CinematicVideo() {
  const [play, setPlay] = useState(false);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-ink text-cream-soft">
      <Container>
        <p className="text-[11px] tracking-[0.32em] uppercase text-gold-light">Videography</p>
        <h2 className="mt-5 max-w-4xl font-display text-4xl md:text-6xl">
          More Than a Video. A Story You Can Relive.
        </h2>
        <div className="relative mt-12 aspect-video overflow-hidden bg-ink-soft">
          {!play || !film.src ? (
            <>
              <Image
                src={images.film}
                alt="Cinematic film placeholder"
                fill
                sizes="100vw"
                className="object-cover opacity-70"
              />
              <button
                type="button"
                onClick={() => film.src && setPlay(true)}
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                aria-label="Watch our films"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-gold">
                  <Play fill="currentColor" size={22} />
                </span>
                <span className="text-[11px] tracking-[0.28em] uppercase">Watch Our Films</span>
              </button>
            </>
          ) : film.type === "youtube" ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${film.src}?autoplay=1`}
              title="HS Films showreel"
              allow="autoplay; encrypted-media"
              loading="lazy"
              allowFullScreen
            />
          ) : film.type === "vimeo" ? (
            <iframe
              className="h-full w-full"
              src={`https://player.vimeo.com/video/${film.src}?autoplay=1`}
              title="HS Films showreel"
              allow="autoplay; encrypted-media"
              loading="lazy"
              allowFullScreen
            />
          ) : (
            <video className="h-full w-full object-cover" src={film.src} controls autoPlay playsInline />
          )}
        </div>
        <div className="mt-8">
          <Button href="/portfolio" variant="ghost">
            Watch Our Films
          </Button>
        </div>
      </Container>
    </section>
  );
}
