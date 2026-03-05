// pages/Home.tsx
import { About } from "../components/About";
import { FeaturedCollection } from "../components/FeaturedCollection";
import { Footer } from "../components/Footer";
import { LuxuryHeader } from "../components/Header";
import { Hero } from "../components/Hero";
import { Newsletter } from "../components/Newsletter";
import { Testimonials } from "../components/Testimonials";
import { LuxuryFullscreenCarousel } from "../components/ProductCarousel";
import { LuxuryCampaignSection } from "../components/LuxuryCampaignBanner";

export const Home = () => {
  return (
    <>
      <LuxuryHeader />
      <Hero />
      <About />
      <FeaturedCollection />
      <LuxuryFullscreenCarousel />
      <LuxuryCampaignSection />
      <Testimonials />
      <Footer />
    </>
  );
};
