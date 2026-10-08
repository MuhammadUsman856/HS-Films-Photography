"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const hero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const lightOnDark = hero && !scrolled;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-gold focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open ? "glass py-3" : "bg-transparent py-5",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className={cn(
              "font-display text-xl md:text-2xl tracking-wide",
              lightOnDark ? "text-cream-soft" : "text-ink dark:text-cream-soft",
            )}
          >
            {site.name}
          </Link>

          <nav
            className={cn(
              "hidden lg:flex items-center gap-7 text-[11px] tracking-[0.18em] uppercase",
              lightOnDark ? "text-cream/85" : "text-ink/75 dark:text-cream/75",
            )}
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "hover:text-gold transition-colors",
                  pathname === link.href && "text-gold",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className={lightOnDark ? "text-cream-soft" : "text-ink dark:text-cream-soft"}>
              <ThemeToggle />
            </div>
            <Button href="/booking" className="hidden sm:inline-flex">
              Book Now
            </Button>
            <button
              type="button"
              className={cn(
                "lg:hidden flex h-10 w-10 items-center justify-center",
                lightOnDark ? "text-cream-soft" : "text-ink dark:text-cream-soft",
              )}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
