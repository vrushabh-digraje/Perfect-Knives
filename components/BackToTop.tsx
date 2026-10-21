"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-12 h-12 bg-[#ea130e] hover:bg-[#c8100c] text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
    >
      <svg className="absolute w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 44 44">
        <circle
          cx="22"
          cy="22"
          r="18"
          className="text-white/20"
          strokeWidth="2.5"
          stroke="currentColor"
          fill="transparent"
        />
        <circle
          cx="22"
          cy="22"
          r="18"
          className="text-white transition-all duration-150"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
        />
      </svg>
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
    </button>
  );
}
