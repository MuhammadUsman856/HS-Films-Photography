import {
  Aperture,
  Clapperboard,
  Users,
  Sparkles,
  MessageCircle,
  Package,
  ImageIcon,
  Palette,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import { whyChoose } from "@/content/studio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons = [
  Aperture,
  Clapperboard,
  Users,
  Sparkles,
  MessageCircle,
  Package,
  ImageIcon,
  Palette,
  BookOpen,
  ShieldCheck,
];

export function WhyChoose() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading kicker="Why HS" title="Why choose us." />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyChoose.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.04} className="border border-ink/10 dark:border-white/10 p-6">
                <Icon className="text-gold" size={22} />
                <h3 className="mt-4 font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-cream/65">
                  {item.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
