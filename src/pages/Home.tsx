// pages/Home.tsx
import { FeaturedCollection } from "../components/FeaturedCollection";
import { Footer } from "../components/Footer";
import { LuxuryHeader } from "../components/Header";
import { Hero } from "../components/Hero";
import { Newsletter } from "../components/Newsletter";
import { Testimonials } from "../components/Testimonials";

export const Home = () => {
  return (
    <>
      <LuxuryHeader />
      <Hero />
      <FeaturedCollection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};
