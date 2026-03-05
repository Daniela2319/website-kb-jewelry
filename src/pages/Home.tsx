// pages/Home.tsx
import { About } from "../features/products/About";
import { FeaturedCollection } from "../features/products/FeaturedCollection";
import { Footer } from "../components/Footer";
import { LuxuryHeader } from "../components/Header";
import { Hero } from "../features/products/Hero";
import { Testimonials } from "../features/products/Testimonials";
import { LuxuryFullscreenCarousel } from "../features/products/ProductCarousel";
import { LuxuryCampaignSection } from "../features/products/LuxuryCampaignBanner";

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
