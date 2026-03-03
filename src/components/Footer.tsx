// components/Footer.tsx

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 text-center">
      <h3 className="font-serifLuxury text-white text-xl mb-4">KB Jewes</h3>
      <p>© 2026 KB Jewes. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="hover:text-softGold transition">
          Instagram
        </a>
        <a href="#" className="hover:text-softGold transition">
          Facebook
        </a>
        <a href="#" className="hover:text-softGold transition">
          Pinterest
        </a>
      </div>
    </footer>
  );
};
