// components/FeaturedCollection.tsx
import { SectionTitle } from "../../components/SectionTitle";
import image1 from "../../assets/photo-feature3.webp";
import image2 from "../../assets/photo-feat1.png";
import image3 from "../../assets/photo-feature2.webp";

export const FeaturedCollection = () => {
  const items = [
    { id: 1, image: image1, description: "Golden Ring ", value: "$499" },
    { id: 2, image: image2, description: "Silver Necklace ", value: "$399" },
    { id: 3, image: image3, description: "Diamond Earrings ", value: "$599" },
  ];

  return (
    <section id="featCollection" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Featured Collection"
          subtitle="Luxury crafted to perfection"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-beigeLuxury rounded-2xl overflow-hidden hover:shadow-xl transition duration-500"
            >
              <img
                src={item.image}
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-6 text-center">
                <h3 className="font-serifLuxury text-xl">{item.description}</h3>
                <p className="text-softGold font-semibold mt-2">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
