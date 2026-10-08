"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl">
      {n}
      {suffix}
    </span>
  );
}

export function Intro() {
  return (
    <section id="intro" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <p className="text-center text-[11px] tracking-[0.32em] uppercase text-gold-dark dark:text-gold">
            Introduction
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-center font-display text-4xl md:text-6xl leading-tight">
            Your Story, Beautifully Preserved.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-ink/70 dark:text-cream/70">
            HS Films & Photography captures genuine emotions and meaningful moments through
            professional photography, cinematic video, creative editing and beautifully designed
            albums. Figures below are placeholders — replace them with your studio&apos;s actual
            numbers when ready.
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08} className="text-center">
              <Counter value={item.value} suffix={item.suffix} />
              <p className="mt-2 text-sm text-ink/60 dark:text-cream/60">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
