// components/Footer.tsx
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="font-serifLuxury text-white text-2xl mb-4">
            KB Jewels
          </h3>

          <p className="text-sm leading-relaxed max-w-sm">
            Timeless jewelry crafted with elegance and precision. Designed for
            women who appreciate refined luxury and sophisticated beauty.
          </p>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h4 className="text-white font-semibold mb-4 tracking-wide">
            Contact
          </h4>

          <p className="mb-2">
            Phone:{" "}
            <a
              href="tel:+917088806000"
              className="hover:text-softGold transition"
            >
              +91 70888 06000
            </a>
          </p>

          <a
            href="https://wa.me/917088806000"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm hover:text-softGold transition"
          >
            <FaWhatsapp />
            WhatsApp Support
          </a>
        </div>

        {/* Social */}
        <div className="text-center md:text-right">
          <h4 className="text-white font-semibold mb-4 tracking-wide">
            Follow Us
          </h4>

          <div className="flex justify-center md:justify-end gap-6 text-lg">
            <a href="#" className="hover:text-softGold transition">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-softGold transition">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-softGold transition">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm">
        © 2026 KB Jewels. All rights reserved.
      </div>
    </footer>
  );
};
