// components/Testimonials.tsx
import { SectionTitle } from "../../components/SectionTitle";

export const Testimonials = () => {
  return (
    <section className="py-8 bg-beigeLuxury">
      <div className="container mx-auto px-6">
        <SectionTitle title="What Our Clients Say" />

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow">
            <p className="italic text-gray-600">
              "Kunj made me a custom-made gold ring that exceeded my
              expectations. His attention to detail and commitment to customer
              satisfaction are impressive. The ring is a masterpiece of
              craftsmanship, and Kunj also ensured safe and timely delivery.
              Highly recommended!"
            </p>
            <h4 className="mt-4 font-semibold">
              Maximilian • Hamburg, Germany
            </h4>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <p className="italic text-gray-600">
              "Buying a Lab-grown Diamond from Kunj was an absolute delight. His
              extensive selection and knowledge made finding the perfect stone
              effortless. The quality and brilliance of the diamond surpassed
              expectations, and the overall experience was both professional and
              enjoyable. Highly recommended for anyone seeking top-tier diamonds
              with exceptional service."
            </p>
            <h4 className="mt-4 font-semibold"> Andrew • Tennessee, USA</h4>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <p className="italic text-gray-600">
              "Kunj was extremely helpful in helping me pick the perfect diamond
              for my wedding proposal. He was able to save me over $5,000. Would
              definitely recommend working with Kunj if you’re on the hunt for
              your perfect diamond!"
            </p>
            <h4 className="mt-4 font-semibold"> Matthew • Toronto, Canada</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
