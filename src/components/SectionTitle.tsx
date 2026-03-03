// components/SectionTitle.tsx
import React from "react";

interface Props {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<Props> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="font-serifLuxury text-3xl md:text-4xl text-darkLuxury">
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 mt-3">{subtitle}</p>}
  </div>
);
