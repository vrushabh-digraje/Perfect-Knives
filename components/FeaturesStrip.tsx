"use client";

import { Target, Cog, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Application-Focused Solutions",
    description:
      "Industrial knives and blades suited to different materials, machines, and production processes."
  },
  {
    icon: Cog,
    title: "Precision Engineering",
    description:
      "Cutting tools developed to meet specific dimensional and application requirements."
  },
  {
    icon: ShieldCheck,
    title: "Commitment to Quality",
    description:
      "Attention to material selection, manufacturing processes, and product inspection."
  }
];

export default function FeaturesStrip() {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="group relative bg-white border border-gray-200 hover:border-[#ea130e] p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-13 h-13 bg-[#fdf2f2] group-hover:bg-[#ea130e] text-[#ea130e] group-hover:text-white p-3 inline-flex items-center justify-center transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1e1e1e] group-hover:text-[#ea130e] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#575757] text-sm leading-relaxed mt-2 font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
