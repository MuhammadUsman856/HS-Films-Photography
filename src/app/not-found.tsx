import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] tracking-[0.32em] uppercase text-gold-dark dark:text-gold">404</p>
      <h1 className="mt-4 font-display text-5xl md:text-7xl">This frame was not found.</h1>
      <p className="mt-5 max-w-md text-ink/70 dark:text-cream/70">
        The page may have moved. Return home or explore the portfolio.
      </p>
      <div className="mt-10 flex gap-4">
        <Button href="/">Home</Button>
        <Link href="/portfolio" className="inline-flex items-center text-sm underline">
          Portfolio
        </Link>
      </div>
    </section>
  );
}
