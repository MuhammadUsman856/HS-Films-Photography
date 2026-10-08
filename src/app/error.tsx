"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-5xl">Something went quiet.</h1>
      <p className="mt-4 text-ink/70 dark:text-cream/70">Please try again, or contact the studio by email.</p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 min-h-12 px-7 bg-gold text-ink text-[11px] tracking-[0.22em] uppercase"
      >
        Try again
      </button>
    </section>
  );
}
