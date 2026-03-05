// features/home/About.tsx
import { motion } from "framer-motion";
import { Gem, Hand } from "lucide-react";
import image from "../assets/photo-carosel.png";
import image2 from "../assets/photo-feat1.png";
import image3 from "../assets/photo-about.webp";

export const About = () => {
  return (
    <section id="about" className="bg-beigeLuxury py-28 translate-y-16">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* ===== IMAGENS ===== */}
        <div className="relative grid grid-cols-2 gap-6">
          {/* Imagem 1 */}
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src={image}
            className="rounded-3xl shadow-xl col-span-1 row-span-2 object-cover"
          />

          {/* Imagem 2 */}
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={image2}
            className="rounded-3xl shadow-xl object-cover"
          />

          {/* Imagem 3 */}
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src={image3}
            className="rounded-3xl shadow-xl object-cover"
          />

          {/* Card Flutuante */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
  absolute
  -bottom-6
  sm:-bottom-10
  left-1/2
  -translate-x-1/2
  bg-softGold
  text-white
  px-6 py-4
  sm:px-8 sm:py-6
  lg:px-12 lg:py-10
  rounded-2xl
  sm:rounded-3xl
  shadow-2xl
  text-center
  max-w-[160px]
  sm:max-w-[200px]
  lg:max-w-none
  "
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">10+</h3>

            <p className="text-xs sm:text-sm tracking-wide">
              Years of Excellence
            </p>
          </motion.div>
        </div>

        {/* ===== TEXTO ===== */}
        <div className="space-y-8">
          <span className="bg-champagne text-softGold px-5 py-2 rounded-full text-sm tracking-wide">
            Our Story
          </span>

          <h2 className="font-serifLuxury text-5xl text-darkLuxury leading-tight">
            Crafting <span className="text-softGold">Timeless</span> Beauty
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Founded by master jeweller Kunj Bansal, KB Jewels has been at the
            forefront of custom jewellery design for nearly a decade. We
            specialize in creating unique, personalized pieces that tell your
            story through exquisite craftsmanship and innovative design.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From engagement rings to family heirlooms, each piece is
            meticulously crafted using the finest materials and traditional
            techniques combined with modern innovation. Our commitment to
            quality and attention to detail ensures that every creation becomes
            a cherished treasure.
          </p>

          {/* Ícones */}
          <div className="flex gap-12 pt-4">
            <div className="flex items-start gap-4">
              <div className="bg-champagne p-3 rounded-full">
                <Gem className="text-softGold" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-darkLuxury">
                  Ethically Sourced
                </h4>
                <p className="text-gray-500 text-sm">Conflict-free materials</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-champagne p-3 rounded-full">
                <Hand className="text-softGold" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-darkLuxury">Handcrafted</h4>
                <p className="text-gray-500 text-sm">Artisan craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
