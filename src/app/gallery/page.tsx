import { portfolio } from "@/content/portfolio";
import { Gallery } from "@/components/portfolio/Gallery";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gallery",
  path: "/gallery",
  description: "Full photography gallery from HS Films & Photography.",
});

export default function GalleryPage() {
  const images = portfolio.flatMap((p) => p.gallery);

  return (
    <section className="pt-32 pb-24">
      <Container>
        <h1 className="font-display text-5xl md:text-7xl">Gallery</h1>
        <p className="mt-6 max-w-xl text-ink/70 dark:text-cream/70">
          A wider look at stills across weddings, portraits and events.
        </p>
        <div className="mt-12">
          <Gallery images={images} title="HS Films gallery" />
        </div>
      </Container>
    </section>
  );
}
