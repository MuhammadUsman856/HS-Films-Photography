import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { CinematicVideo } from "@/components/home/CinematicVideo";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { InstagramStrip } from "@/components/home/InstagramStrip";
import { CreativeResources } from "@/components/home/CreativeResources";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesPreview />
      <FeaturedPortfolio />
      <CinematicVideo />
      <WhyChoose />
      <Process />
      <Testimonials />
      <InstagramStrip />
      <CreativeResources />
      <CTASection />
    </>
  );
}
