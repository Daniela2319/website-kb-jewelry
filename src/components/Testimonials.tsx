// components/Testimonials.tsx
import { SectionTitle } from "./SectionTitle";

export const Testimonials = () => {
  return (
    <section className="py-20 bg-beigeLuxury">
      <div className="container mx-auto px-6">
        <SectionTitle title="What Our Clients Say" />

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow">
            <p className="italic text-gray-600">
              "Absolutely stunning quality and elegance."
            </p>
            <h4 className="mt-4 font-semibold">Ana Oliveira</h4>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <p className="italic text-gray-600">
              "KB Jewes made me feel powerful and sophisticated."
            </p>
            <h4 className="mt-4 font-semibold">Marina Costa</h4>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <p className="italic text-gray-600">
              "Luxury experience from start to finish."
            </p>
            <h4 className="mt-4 font-semibold">Camila Rocha</h4>
          </div>
        </div>
      </div>
    </section>
  );
};