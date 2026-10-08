export function TestimonialCard({
  name,
  event,
  rating,
  quote,
}: {
  name: string;
  event: string;
  rating: number;
  quote: string;
}) {
  return (
    <figure className="h-full border border-ink/10 dark:border-white/10 bg-cream-soft/80 dark:bg-ink-soft/80 p-8 backdrop-blur">
      <div className="text-gold" aria-label={`${rating} out of 5 stars`}>
        {"★".repeat(rating)}
        <span className="text-ink/20 dark:text-cream/20">{"★".repeat(5 - rating)}</span>
      </div>
      <blockquote className="mt-5 font-display text-2xl leading-snug italic">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-ink/50 dark:text-cream/50"> · {event}</span>
      </figcaption>
    </figure>
  );
}
