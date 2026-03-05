// features/campaign/LuxuryCampaignSection.tsx
import { motion } from "framer-motion";
import image from "../../assets/image_banner.png";
export function LuxuryCampaignSection() {
  return (
    <section className="relative py-28 bg-beigeLuxury overflow-hidden">
      {/* Background decor */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#d4af37,_transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="group relative overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src={image}
            alt="Luxury diamond ring"
            className="
              w-full
              h-[560px]
              object-cover
              transition-transform
              duration-[2000ms]
              ease-out
              group-hover:scale-110
            "
          />

          {/* overlay cinematic */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >
          <p className="text-softGold uppercase tracking-[0.3em] text-sm">
            Signature Collection
          </p>

          <h2 className="text-5xl md:text-6xl font-serifLuxury text-darkLuxury leading-tight">
            Crafted for
            <span className="block text-softGold">Timeless Elegance</span>
          </h2>

          <p className="text-gray-600 max-w-md leading-relaxed text-lg">
            Each piece is meticulously crafted to celebrate elegance, beauty and
            individuality. Discover jewellery designed to shine through
            generations.
          </p>

          {/* Luxury Button */}
          <button
            onClick={() =>
              document.getElementById("collections")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="
            relative
            px-10
            py-4
            border
            border-darkLuxury
            rounded-full
            overflow-hidden
            group
            transition-all
            duration-500
            hover:text-white
            "
          >
            <span className="relative z-10 tracking-wide">
              Explore Collection
            </span>

            <span
              className="
              absolute
              inset-0
              bg-darkLuxury
              scale-x-0
              origin-left
              transition-transform
              duration-500
              group-hover:scale-x-100
              "
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
