"use client";

import { useEffect, useState, useRef } from "react";
import { Phone, Users, Factory, Award, TrendingUp } from "lucide-react";
import { companyInfo } from "@/data/company";

const icons = [Users, Factory, Award, TrendingUp];

export default function MetricsBanner() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 bg-[#000000] text-white border-y border-[#222222] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        {/* Metric Numbers Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {companyInfo.stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="group p-6 bg-[#111111] border border-[#222222] hover:border-[#ea130e] text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-white/5 border border-white/10 text-[#ea130e] group-hover:bg-[#ea130e] group-hover:text-white flex items-center justify-center mx-auto mb-4 transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight flex items-center justify-center">
                  <span>{hasAnimated ? stat.value.toLocaleString() : "0"}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mt-2">
                  {stat.label}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Callout Banner from the original site (Red #ea130e background) */}
        <div className="p-6 sm:p-8 bg-[#ea130e] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Support a variety of manufacturing and processing environments.
            </h3>
          </div>

          <a
            href={`tel:${companyInfo.phone}`}
            className="shrink-0 inline-flex items-center gap-3 px-6 py-3.5 bg-black hover:bg-[#1a1a1a] text-white font-bold text-sm shadow-xl active:scale-95 transition-all group"
          >
            <Phone className="w-5 h-5 text-[#ea130e] group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-bold text-white">{companyInfo.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
