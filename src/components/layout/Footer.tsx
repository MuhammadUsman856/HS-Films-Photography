import Link from "next/link";
import { Camera, Globe, MessageCircle } from "lucide-react";
import { footerLinks, footerServices, site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 dark:border-white/10 bg-cream dark:bg-ink-soft">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/65 dark:text-cream/65">
            Photography, videography and creative storytelling for life&apos;s most meaningful
            moments.
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.24em] uppercase text-gold-dark dark:text-gold">
            Explore
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.24em] uppercase text-gold-dark dark:text-gold">
            Services
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {footerServices.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.24em] uppercase text-gold-dark dark:text-gold">
            Contact
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-5 inline-block text-sm hover:text-gold"
          >
            {site.email}
          </a>
          <p className="mt-2 text-sm text-ink/65 dark:text-cream/65">{site.hours}</p>
          <div className="mt-6 flex gap-4">
            <a href={site.instagram} aria-label="Instagram" className="hover:text-gold">
              <Camera size={18} />
            </a>
            <a href={site.facebook} aria-label="Facebook" className="hover:text-gold">
              <MessageCircle size={18} />
            </a>
            <a href={site.youtube} aria-label="YouTube" className="hover:text-gold">
              <Globe size={18} />
            </a>
          </div>
        </div>
      </Container>
      <div className="border-t border-ink/10 dark:border-white/10 py-6 text-center text-xs tracking-wide text-ink/55 dark:text-cream/50">
        © 2026 {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
