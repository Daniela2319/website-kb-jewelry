// features/products/LuxuryFullscreenCarousel.tsx
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../../assets/photo-feature3.webp";
import image2 from "../../assets/photo-banner.png";
import image3 from "../../assets/photo-feature2.webp";
import image4 from "../../assets/photo-feat1.png";
import image5 from "../../assets/photo-carosel.png";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Golden Elegance Ring",
    description:
      "Its luminous golden finish captures light with subtle brilliance, revealing a timeless silhouette designed to transcend trends.",
    price: 499,
    image: image1,
  },
  {
    id: 2,
    name: "Diamond Glow Necklace",
    description:
      "A stunning diamond necklace that radiates elegance and sophistication.",
    price: 899,
    image: image2,
  },
  {
    id: 3,
    name: "Timeless Earrings",
    description:
      "Lightweight and impeccably balanced, they transition seamlessly from day to evening with quiet confidence.",
    price: 329,
    image: image3,
  },
  {
    id: 4,
    name: "Diamond Earrings",
    description:
      "The Diamond Earrings offer a refined intensity that elevates presence without excess. ",
    price: 529,
    image: image4,
  },
  {
    id: 5,
    name: "Luxury Bracelet",
    description:
      "The Luxury Bracelet wraps the wrist in effortless refinement, balancing contemporary design with timeless elegance. ",
    price: 699,
    image: image5,
  },
];

export const LuxuryFullscreenCarousel = () => {
  const [selected, setSelected] = useState<Product | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const whatsappNumber = "917088806000";

  // Autoplay elegante
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section
      id="collections"
      className="py-14 sm:py-20 lg:py-24 bg-beigeLuxury"
    >
      <div className="container mx-auto px-6 relative">
        <h2 className="text-5xl text-center font-serifLuxury text-darkLuxury mb-16">
          Signature Collection
        </h2>

        {/* Setas */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-3xl text-darkLuxury"
        >
          ‹
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-3xl text-darkLuxury"
        >
          ›
        </button>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="relative basis-[85%] sm:basis-1/2 lg:basis-1/4 flex-shrink-0 rounded-3xl overflow-hidden shadow-xl group"
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="h-[420px] sm:h-[480px] lg:h-[500px] w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Gradient elegante */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>

                  {/* Botão */}
                  <button
                    onClick={() => setSelected(product)}
                    className="
      relative
      w-fit
      px-5
      py-2
      text-sm
      rounded-full
      text-white
      border border-white/60
      backdrop-blur-sm
      bg-white/10
      font-semibold
      transition
      duration-300
      hover:bg-white/20
    "
                  >
                    View Piece
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FULLSCREEN */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-start md:items-center justify-center overflow-y-auto"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-white text-3xl z-50"
              >
                ✕
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl w-full px-6 grid md:grid-cols-2 gap-10 items-center overflow-y-auto max-h-screen py-10"
              >
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-[50vh] md:h-[80vh] object-cover rounded-3xl"
                />

                <div className="text-white space-y-6">
                  <h3 className="text-4xl font-serifLuxury">{selected.name}</h3>
                  <p className="text-lg">{selected.description}</p>
                  <p className="text-softGold text-2xl">R$ {selected.price}</p>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Olá! Tenho interesse na peça ${selected.name}`}
                    target="_blank"
                    className="inline-block bg-softGold text-black px-8 py-4 rounded-full font-semibold"
                  >
                    Buy via WhatsApp
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
