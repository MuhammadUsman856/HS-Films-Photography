import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  path: "/privacy",
  description: "Privacy note for HS Films & Photography.",
});

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-5xl">Privacy</h1>
        <p className="mt-8 leading-relaxed text-ink/70 dark:text-cream/70">
          Booking and contact forms currently store submissions only on the server logs until an
          email or database provider is connected. Theme preference is saved in your browser. Replace
          this page with a full privacy policy before collecting production data.
        </p>
      </Container>
    </section>
  );
}
