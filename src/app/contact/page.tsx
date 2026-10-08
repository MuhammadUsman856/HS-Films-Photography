import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { site } from "@/content/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { CopyEmail } from "@/components/system/CopyEmail";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";
import { formatPhoneHref } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Contact",
  path: "/contact",
  description: "Contact HS Films & Photography to discuss your wedding, event or session.",
});

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24">
      <Container className="grid gap-16 lg:grid-cols-2">
        <div>
          <p className="text-[11px] tracking-[0.32em] uppercase text-gold-dark dark:text-gold">
            Contact
          </p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl">{site.name}</h1>
          <p className="mt-6 text-lg">Have an event coming up?</p>
          <p className="mt-2 text-ink/70 dark:text-cream/70">Let&apos;s discuss how we can capture it.</p>
          <div className="mt-10 space-y-5 text-sm">
            <p className="flex items-start gap-3">
              <Mail className="mt-0.5 text-gold" size={18} />
              <span>
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
                <span className="ml-3">
                  <CopyEmail />
                </span>
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 text-gold" size={18} />
              <a href={formatPhoneHref(site.phone)} className="hover:text-gold">
                {site.phone}
              </a>
              <span className="text-ink/45 dark:text-cream/45">(placeholder)</span>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 text-gold" size={18} />
              {site.location.line} · {site.location.city}
            </p>
            <p className="flex items-start gap-3">
              <Clock className="mt-0.5 text-gold" size={18} />
              {site.hours}
            </p>
          </div>
          <div className="mt-10">
            <Button href="/booking">Start a Conversation</Button>
          </div>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
