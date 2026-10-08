import { BookingForm } from "@/components/forms/BookingForm";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Session",
  path: "/booking",
  description: "Request a photography or videography booking with HS Films & Photography.",
});

export default function BookingPage() {
  return (
    <section className="pt-32 pb-24">
      <Container className="max-w-4xl">
        <h1 className="font-display text-5xl md:text-7xl">Book a Session</h1>
        <p className="mt-6 max-w-2xl text-ink/70 dark:text-cream/70">
          Share a few details about your event. This request can later connect to email, WhatsApp,
          Supabase, Firebase, Resend or your CRM.
        </p>
        <div className="mt-12">
          <BookingForm />
        </div>
      </Container>
    </section>
  );
}
