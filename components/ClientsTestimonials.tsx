"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData, clientLogos } from "@/data/testimonials";

export default function ClientsTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prev = () => {
    setCurrentTestimonial((curr) => (curr - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const next = () => {
    setCurrentTestimonial((curr) => (curr + 1) % testimonialsData.length);
  };

  const t = testimonialsData[currentTestimonial];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20 relative z-10">
        {/* PART 1: TRUSTED CLIENTS */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea130e] block">
              Our Trusted Clients
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1e1e] tracking-tight">
              Trusted by India’s Leading Brands
            </h2>
          </div>

          {/* Infinite Marquee of Logos */}
          <div className="relative w-full overflow-hidden py-6 border-y border-gray-200 bg-[#f8f9fa]">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-marquee gap-10 sm:gap-14 items-center">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
                <div
                  key={`${client.id}-${idx}`}
                  className="flex items-center justify-center p-3 bg-white border border-gray-200 hover:border-[#ea130e] shrink-0 transition-all group shadow-sm"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-28 sm:w-32 object-contain filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PART 2: WHAT OUR CLIENT SAYS */}
        <div className="space-y-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1e1e1e] tracking-tight">
              What Our Client Say&apos;s
            </h3>
          </div>

          {/* Featured Testimonial Card */}
          <div className="max-w-4xl mx-auto relative bg-[#f8f9fa] border border-gray-200 hover:border-[#ea130e] p-8 sm:p-12 shadow-md transition-all">
            <Quote className="w-16 h-16 text-gray-200 absolute top-6 right-8 pointer-events-none" />

            <div className="space-y-6">
              {/* Quote text */}
              <p className="text-lg sm:text-xl md:text-2xl text-[#1e1e1e] font-medium leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ea130e] text-white font-extrabold text-sm flex items-center justify-center shadow-sm">
                    {t.avatarText}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1e1e1e]">
                      {t.name}
                    </h4>
                    <p className="text-xs text-[#ea130e] font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>

                {/* Slider Navigation Buttons */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 bg-white hover:bg-[#ea130e] text-[#1e1e1e] hover:text-white border border-gray-300 hover:border-[#ea130e] flex items-center justify-center transition-all shadow-sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-gray-500 px-2 font-bold">
                    {currentTestimonial + 1} / {testimonialsData.length}
                  </span>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-10 h-10 bg-white hover:bg-[#ea130e] text-[#1e1e1e] hover:text-white border border-gray-300 hover:border-[#ea130e] flex items-center justify-center transition-all shadow-sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
