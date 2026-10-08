"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { images } from "@/content/images";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <Image
        src={images.hero}
        alt="Cinematic wedding photography by HS Films & Photography"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/45 to-ink/80" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream-soft">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-[11px] tracking-[0.42em] uppercase text-gold-light"
        >
          HS Films & Photography
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-6 max-w-5xl font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl text-balance"
        >
          We Capture Moments. You Keep the Memories.
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-7 max-w-2xl text-base md:text-lg text-cream/80"
        >
          Professional photography, cinematic videography and creative storytelling for
          weddings, birthdays, events and unforgettable moments.
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button href="/booking">Book Your Session</Button>
          <Button href="/portfolio" variant="ghost">
            Explore Our Work
          </Button>
        </motion.div>
      </div>

      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/80"
        aria-label="Scroll to introduction"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase"
        >
          Scroll
          <ChevronDown size={18} />
        </motion.span>
      </a>
    </section>
  );
}
