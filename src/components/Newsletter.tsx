// components/Newsletter.tsx

export const Newsletter = () => {
  return (
    <section className="py-20 bg-darkLuxury text-white text-center">
      <h2 className="font-serifLuxury text-3xl mb-6">
        Join Our Exclusive Circle
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-3 rounded-full text-black w-80"
        />
        <button className="bg-softGold px-8 py-3 rounded-full hover:scale-105 transition">
          Subscribe
        </button>
      </div>
    </section>
  );
};
