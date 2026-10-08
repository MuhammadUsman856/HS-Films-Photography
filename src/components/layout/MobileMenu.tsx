"use client";

import Link from "next/link";
import { navLinks } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden bg-ink text-cream-soft">
      <div className="flex h-full flex-col justify-between px-8 pb-12 pt-28">
        <nav className="flex flex-col gap-6" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-display text-4xl"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-between">
          <Button href="/booking">Book Now</Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
