import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  body,
  align = "center",
  light,
}: {
  kicker?: string;
  title: string;
  body?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "text-left", "max-w-3xl")}>
      {kicker ? (
        <p
          className={cn(
            "mb-4 text-[11px] tracking-[0.32em] uppercase",
            light ? "text-gold-light" : "text-gold-dark dark:text-gold-light",
          )}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance",
          light ? "text-cream-soft" : "text-ink dark:text-cream-soft",
        )}
      >
        {title}
      </h2>
      <div className={cn("editorial-rule mt-6", align === "center" && "mx-auto")} />
      {body ? (
        <p
          className={cn(
            "mt-6 text-base md:text-lg leading-relaxed",
            light ? "text-cream/75" : "text-ink/70 dark:text-cream/70",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
