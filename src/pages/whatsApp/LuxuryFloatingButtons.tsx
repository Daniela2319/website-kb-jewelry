// components/ui/LuxuryFloatingButtons.tsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowUp, FaArrowDown } from "react-icons/fa";

export function LuxuryFloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollDown = () =>
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });

  return (
    <>
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/55917088806000?text=Hello! I am interested in the pieces from your collection I saw on the website."
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="
        fixed
        bottom-8
        right-8
        w-14
        h-14
        flex
        items-center
        justify-center
        rounded-full
        bg-[#c6a75e]
        text-white
        shadow-xl
        hover:scale-110
        transition
        z-50
        "
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Scroll Down */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
        fixed
        bottom-8
        left-8
        w-12
        h-12
        flex
        items-center
        justify-center
        rounded-full
        border
        border-gray-300
        bg-white/70
        backdrop-blur
        shadow-lg
        hover:scale-110
        transition
        "
      >
        <FaArrowDown size={10} />
      </motion.button>

      {/* Scroll Top */}
      {showTop && (
        <motion.button
          onClick={scrollTop}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="
          fixed
          bottom-28
          right-8
          w-12
          h-12
          flex
          items-center
          justify-center
          rounded-full
          border
          border-gray-100
          bg-white/70
          backdrop-blur
          shadow-lg
          hover:scale-110
          transition
          "
        >
          <FaArrowUp size={16} />
        </motion.button>
      )}
    </>
  );
}
