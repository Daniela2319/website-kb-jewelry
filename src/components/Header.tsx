import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo-head.png";

export const LuxuryHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "High Jewellery", href: "#collections" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-around">
        {/* Logo */}
        <div
          className="text-2xl tracking-[0.5em] font-light font-serif cursor-pointer"
          onClick={() => {
            document
              .getElementById("banner-hero")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {Logo && <img src={Logo} alt="KB Jewels Logo" className="h-10" />}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-14 text-xs uppercase tracking-[0.25em] text-neutral-700">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative hover:text-black transition duration-300 after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b">
          <div className="text-xl tracking-[0.4em] font-serif">
            {Logo && <img src={Logo} alt="KB Jewels Logo" className="h-8" />}
          </div>
          <button onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col items-center gap-8 mt-16 text-sm uppercase tracking-[0.3em] text-neutral-800">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-black transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
