"use client";

import Link from "next/link";
import { CheckCircle2, Cog, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden shadow-2xl bg-gray-100 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-machine.jpeg"
                alt="Perfect Knives Machinery"
                className="w-full h-[460px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Experience Badge (Red #ea130e background) */}
            <div className="absolute -top-5 -right-3 sm:-right-6 bg-[#ea130e] text-white p-5 sm:p-6 shadow-2xl flex flex-col items-center justify-center text-center">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none text-white">
                25+
              </span>
              <span className="text-xs font-bold uppercase tracking-wider mt-1 text-white">
                Years of Working
                <br />
                Experience
              </span>
            </div>
          </div>

          {/* Right Column: Exact Copy & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ea130e] block">
                ABOUT PERFECT KNIVES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e1e1e] tracking-tight leading-tight">
                Engineering Cutting Solutions
              </h2>
            </div>

            <p className="text-[#575757] text-sm sm:text-base leading-relaxed">
              At Perfect Knives, we specialize in industrial knives and cutting blades designed for precision,
              durability, and dependable performance. We understand that cutting tools play an important role in
              maintaining production efficiency, product consistency, and manufacturing quality.
            </p>

            {/* Two Value Proposition Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-[#f8f9fa] border border-gray-200 hover:border-[#ea130e] transition-colors">
                <div className="flex items-center gap-2.5 text-[#1e1e1e] font-bold text-sm mb-2">
                  <div className="w-8 h-8 bg-[#fdf2f2] text-[#ea130e] flex items-center justify-center shrink-0">
                    <Cog className="w-4 h-4" />
                  </div>
                  Precision Engineering
                </div>
                <p className="text-xs text-[#575757] leading-relaxed">
                  Cutting tools developed to meet specific dimensional and application requirements.
                </p>
              </div>

              <div className="p-5 bg-[#f8f9fa] border border-gray-200 hover:border-[#ea130e] transition-colors">
                <div className="flex items-center gap-2.5 text-[#1e1e1e] font-bold text-sm mb-2">
                  <div className="w-8 h-8 bg-[#fdf2f2] text-[#ea130e] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  Commitment to Quality
                </div>
                <p className="text-xs text-[#575757] leading-relaxed">
                  Attention to material selection, manufacturing processes, and product inspection.
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#ea130e] hover:bg-[#c8100c] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
