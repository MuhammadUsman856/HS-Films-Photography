import Image from "next/image";
import { images } from "@/content/images";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/home/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  path: "/about",
  description:
    "The story, approach and philosophy of HS Films & Photography — a cinematic studio preserving real emotion.",
});

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <Container>
          <p className="text-[11px] tracking-[0.32em] uppercase text-gold-dark dark:text-gold">
            About
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl">
            A studio for the moments that become family history.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink/70 dark:text-cream/70">
            Replace this story with your own. Until then, it describes how HS Films & Photography
            works: quietly, cinematically, and with complete respect for the day.
          </p>
        </Container>
      </section>

      <section className="relative h-[60vh] min-h-[420px]">
        <Image
          src={images.about}
          alt="Editorial studio photograph"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      <Container className="grid gap-16 py-24 md:grid-cols-2">
        <article>
          <h2 className="font-display text-4xl">Our Story</h2>
          <p className="mt-5 leading-relaxed text-ink/70 dark:text-cream/70">
            HS Films & Photography began as a desire to preserve Pakistani celebrations with the
            dignity they deserve — the color of a mehndi night, the stillness before a nikkah, the
            laugh that happens only once.
          </p>
        </article>
        <article>
          <h2 className="font-display text-4xl">Our Approach</h2>
          <p className="mt-5 leading-relaxed text-ink/70 dark:text-cream/70">
            We work like a small film crew: observe first, then compose. Direction is gentle.
            Equipment is professional. The result should feel effortless on the day and luxurious
            in the gallery.
          </p>
        </article>
        <article>
          <h2 className="font-display text-4xl">Our Philosophy</h2>
          <p className="mt-5 leading-relaxed text-ink/70 dark:text-cream/70">
            Real emotion outranks perfect posing. We believe the most valuable photographs are the
            ones that still feel alive twenty years later.
          </p>
        </article>
        <article>
          <h2 className="font-display text-4xl">What Makes Us Different</h2>
          <p className="mt-5 leading-relaxed text-ink/70 dark:text-cream/70">
            Photography, videography, editing and albums share one visual language. You are not
            assembling vendors — you are trusting a studio.
          </p>
        </article>
      </Container>

      <section className="bg-cream dark:bg-ink-soft py-24">
        <Container>
          <h2 className="font-display text-4xl">Our Creative Process</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink/70 dark:text-cream/70">
            Conversation. Timeline. Coverage. Color. Delivery. Every stage is designed to reduce
            stress and raise the quality of what you keep.
          </p>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
