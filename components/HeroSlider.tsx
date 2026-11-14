"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    tag: "PRECISION ENGINEERING",
    title:
      "We are Leading Industrial Knife Cutter Blade, Perforation Knife, Slitting Cutter, Textile Blade & Sealing Jaw Manufacturer & Supplier in Mumbai, Maharashtra",
    image: "/images/hero-1.png",
    buttonText: "Contact Us",
    buttonLink: "/contact"
  },
  {
    id: 2,
    tag: "INDUSTRIAL CUTTING SOLUTIONS",
    title: "Performance in Every Blade.",
    image: "/images/hero-2.png",
    buttonText: "Contact Us",
    buttonLink: "/contact"
  }
];

const featuredProducts = [
  { id: "knife-cutter", key: "Industrial Knife Cutter Blade", href: "/products" },
  { id: "perforation", key: "Perforation Knife", href: "/products" },
  { id: "slitting", key: "Slitting Cutter", href: "/products" },
  { id: "textile", key: "Textile Blade", href: "/products" },
  { id: "sealing", key: "Sealing Jaw", href: "/products" }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section
      aria-label="Hero slider"
      className="relative w-full h-[520px] sm:h-[600px] lg:h-[650px] bg-black overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Ken Burns zoom */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-black/65"></div>

            {/* Content Container */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-12 flex flex-col justify-center">
              <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-full space-y-4 sm:space-y-5">
                {/* Tag */}
                <div className="flex items-center gap-2 text-[#ea130e] text-sm sm:text-base font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#ea130e] animate-pulse"></span>
                  <span>{slide.tag}</span>
                </div>

                {/* Main Title - Interactive Formatting */}
                {slide.id === 1 ? (
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-[1.25] sm:leading-[1.22] max-w-6xl">
                    <span className="text-zinc-300 font-normal">We are Leading </span>
                    {featuredProducts.map((prod, idx) => (
                      <span key={prod.id}>
                        <Link
                          href={prod.href}
                          className="inline-block text-white hover:text-[#ea130e] hover:underline decoration-[#ea130e] underline-offset-8 transition-colors duration-200 cursor-pointer"
                        >
                          {prod.key}
                        </Link>
                        {idx < featuredProducts.length - 2 && (
                          <span className="text-zinc-400">, </span>
                        )}
                        {idx === featuredProducts.length - 2 && (
                          <span className="text-zinc-400"> &amp; </span>
                        )}
                      </span>
                    ))}
                    <span className="block mt-2.5 sm:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-white">
                      Manufacturer &amp; Supplier in{" "}
                      <span className="text-[#ea130e] drop-shadow-[0_2px_12px_rgba(234,19,14,0.4)]">
                        Mumbai, Maharashtra
                      </span>
                    </span>
                  </h1>
                ) : (
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
                    {slide.title}
                  </h1>
                )}

                {/* Button */}
                <div className="pt-2">
                  <Link
                    href={slide.buttonLink}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#ea130e] hover:bg-[#c8100c] text-white font-semibold text-sm transition-all active:scale-95 shadow-md"
                  >
                    <span>{slide.buttonText}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Carousel Navigation Arrows */}
      <div className="absolute right-6 sm:right-12 bottom-10 z-20 flex items-center gap-2">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-10 h-10 bg-black/70 hover:bg-[#ea130e] text-white flex items-center justify-center transition-all duration-200 active:scale-90"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-10 h-10 bg-black/70 hover:bg-[#ea130e] text-white flex items-center justify-center transition-all duration-200 active:scale-90"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicator Dots */}
      <div className="absolute left-6 sm:left-12 bottom-10 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 transition-all duration-300 ${
              i === current ? "w-8 bg-[#ea130e]" : "w-2.5 bg-white/40 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
