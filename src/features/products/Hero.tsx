// components/Hero.tsx
import React from "react";
import image from "../../assets/photo-hero.png";

export const Hero: React.FC = () => {
  return (
    <section
      id="banner-hero"
      className="relative bg-beigeLuxury min-h-screen flex items-center translate-y-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="space-y-6 animate-fadeIn">
          <h1 className="font-serifLuxury text-4xl md:text-6xl text-darkLuxury leading-tight">
            Timeless Elegance <br /> Designed for You
          </h1>
          <p className="text-gray-600 text-lg">
            Discover refined jewelry crafted to celebrate femininity,
            sophistication and timeless beauty.
          </p>
          <button
            onClick={() =>
              document.getElementById("featCollection")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-softGold text-white px-8 py-3 rounded-full hover:scale-105 transition duration-300 shadow-lg"
          >
            Discover Elegance
          </button>
        </div>

        {/* Imagem */}
        <div className="relative ">
          <img
            src={image}
            alt="Elegant Brazilian model wearing luxury ring"
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
