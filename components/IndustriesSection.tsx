"use client";

import Link from "next/link";
import { Utensils, Scissors, Disc, Layers, ShieldAlert, Boxes, ArrowRight, Phone } from "lucide-react";
import { industriesData } from "@/data/industries";
import { companyInfo } from "@/data/company";

const icons = [Utensils, Scissors, Disc, Layers, ShieldAlert, Boxes];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ea130e] block">
            INDUSTRIES WE SUPPORT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e1e1e] tracking-tight">
            Cutting Solutions for Multiple Industries
          </h2>
          <p className="text-[#575757] text-sm sm:text-base leading-relaxed">
            Different industries require cutting tools with specific material properties, geometries, dimensions, and
            performance characteristics. Our industrial knife solutions are developed around application requirements
            to support a variety of manufacturing and processing environments.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industriesData.map((ind, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={ind.id}
                className="group p-7 bg-[#f8f9fa] border border-gray-200 hover:border-[#ea130e] hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#fdf2f2] text-[#ea130e] group-hover:bg-[#ea130e] group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#1e1e1e] group-hover:text-[#ea130e] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#575757] leading-relaxed mt-2.5">
                      {ind.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DISCUSS YOUR REQUIREMENTS Button */}
        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ea130e] hover:bg-[#c8100c] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-95 group"
          >
            <span>DISCUSS YOUR REQUIREMENTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
