import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "gold" | "ghost" | "line";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "gold",
  className,
  type = "button",
  onClick,
}: Props) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 min-h-12 px-7 text-[11px] tracking-[0.22em] uppercase transition-all duration-500",
    variant === "gold" &&
      "bg-gold text-ink hover:bg-gold-light shadow-glow",
    variant === "ghost" &&
      "border border-white/70 text-white hover:bg-white hover:text-ink",
    variant === "line" &&
      "border border-ink/20 dark:border-cream/20 text-ink dark:text-cream hover:border-gold hover:text-gold-dark dark:hover:text-gold-light",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
