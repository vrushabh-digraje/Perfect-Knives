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
  { id: "knife-cutter", key: "Industrial Knife Cutter Blade", label: "Knife Cutters", href: "/products" },
  { id: "perforation", key: "Perforation Knife", label: "Perforation Knives", href: "/products" },
  { id: "slitting", key: "Slitting Cutter", label: "Slitting Cutters", href: "/products" },
  { id: "textile", key: "Textile Blade", label: "Textile Blades", href: "/products" },
  { id: "sealing", key: "Sealing Jaw", label: "Sealing Jaws", href: "/products" }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

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
      className="relative w-full h-[560px] sm:h-[620px] lg:h-[680px] bg-black overflow-hidden select-none"
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
                  <div className="space-y-4 sm:space-y-5">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-[1.25] sm:leading-[1.22] max-w-6xl">
                      <span className="text-zinc-300 font-normal">We are Leading </span>
                      {featuredProducts.map((prod, idx) => {
                        const isHovered = hoveredProduct === prod.id;
                        return (
                          <span key={prod.id}>
                            <Link
                              href={prod.href}
                              onMouseEnter={() => setHoveredProduct(prod.id)}
                              onMouseLeave={() => setHoveredProduct(null)}
                              className={`inline-block transition-all duration-200 cursor-pointer ${
                                isHovered
                                  ? "text-[#ea130e] underline decoration-[#ea130e] underline-offset-8"
                                  : "text-white hover:text-[#ea130e] hover:underline decoration-[#ea130e] underline-offset-8"
                              }`}
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
                        );
                      })}
                      <span className="block mt-2.5 sm:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-white">
                        Manufacturer &amp; Supplier in{" "}
                        <span className="text-[#ea130e] drop-shadow-[0_2px_12px_rgba(234,19,14,0.4)]">
                          Mumbai, Maharashtra
                        </span>
                      </span>
                    </h1>

                    {/* Interactive Product Filter Chips */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
                      <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mr-1 hidden sm:inline-block">
                        Quick Explore:
                      </span>
                      {featuredProducts.map((prod) => {
                        const isHovered = hoveredProduct === prod.id;
                        return (
                          <Link
                            key={prod.id}
                            href={prod.href}
                            onMouseEnter={() => setHoveredProduct(prod.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all transform shadow-sm flex items-center gap-1.5 ${
                              isHovered
                                ? "bg-[#ea130e] border border-[#ea130e] text-white -translate-y-0.5 shadow-md shadow-red-900/40"
                                : "bg-white/10 hover:bg-[#ea130e] border border-white/20 hover:border-[#ea130e] text-white hover:-translate-y-0.5"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isHovered ? "bg-white" : "bg-[#ea130e]"
                              }`}
                            ></span>
                            {prod.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
                    {slide.title}
                  </h1>
                )}

                {/* Button Row */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Link
                    href={slide.buttonLink}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#ea130e] hover:bg-[#c8100c] text-white font-semibold text-sm transition-all active:scale-95 shadow-md"
                  >
                    <span>{slide.buttonText}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  {slide.id === 1 && (
                    <Link
                      href="/products"
                      className="inline-block px-6 py-3.5 bg-black/40 hover:bg-white/15 text-white font-semibold text-sm border border-white/25 hover:border-white/50 backdrop-blur-md transition-all active:scale-95"
                    >
                      Explore Products
                    </Link>
                  )}
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
