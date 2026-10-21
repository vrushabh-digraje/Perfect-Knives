"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight, Layers, HelpCircle, Package } from "lucide-react";
import { productsData } from "@/data/products";
import { industriesData } from "@/data/industries";
import { faqData } from "@/data/faq";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const matchedProducts = normalizedQuery
    ? productsData.filter((p) => p.name.toLowerCase().includes(normalizedQuery))
    : [];

  const matchedIndustries = normalizedQuery
    ? industriesData.filter(
        (ind) =>
          ind.name.toLowerCase().includes(normalizedQuery) ||
          ind.description.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const matchedFaqs = normalizedQuery
    ? faqData.filter(
        (f) =>
          f.question.toLowerCase().includes(normalizedQuery) ||
          f.answer.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const hasResults =
    matchedProducts.length > 0 || matchedIndustries.length > 0 || matchedFaqs.length > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search site catalog"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-2xl bg-white border border-gray-300 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-gray-200 bg-gray-50">
          <Search className="w-5 h-5 text-[#ea130e] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search industrial knives, blades, industries, FAQ..."
            className="w-full bg-transparent text-[#1e1e1e] placeholder-gray-400 text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-gray-400 hover:text-black mr-2"
              title="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="p-5 overflow-y-auto space-y-6">
          {!query ? (
            <div className="text-center py-8 text-[#575757] text-xs">
              Type blade name, industry or FAQ keyword to start searching...
            </div>
          ) : !hasResults ? (
            <div className="text-center py-8 space-y-2">
              <p className="text-sm font-semibold text-[#1e1e1e]">No exact matches found</p>
              <p className="text-xs text-[#575757]">
                Try searching for general terms like &quot;circular&quot;, &quot;slitter&quot;, &quot;cutter&quot;, or &quot;sealing&quot;.
              </p>
            </div>
          ) : (
            <>
              {/* Product Matches */}
              {matchedProducts.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ea130e]">
                    <Package className="w-3.5 h-3.5" />
                    <span>Industrial Knives &amp; Blades ({matchedProducts.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchedProducts.map((p) => (
                      <Link
                        key={p.id}
                        href="/products"
                        onClick={onClose}
                        className="p-3 bg-gray-50 hover:bg-[#fdf2f2] border border-gray-200 hover:border-[#ea130e] flex items-center justify-between group transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-10 h-10 object-contain bg-white p-1 border border-gray-200"
                          />
                          <span className="text-xs font-bold text-[#1e1e1e] group-hover:text-[#ea130e]">
                            {p.name}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#ea130e]" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Industry Matches */}
              {matchedIndustries.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ea130e]">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Industries We Support ({matchedIndustries.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchedIndustries.map((ind) => (
                      <Link
                        key={ind.id}
                        href="/#industries"
                        onClick={onClose}
                        className="block p-3 bg-gray-50 hover:bg-[#fdf2f2] border border-gray-200 hover:border-[#ea130e] group transition-colors"
                      >
                        <span className="text-xs font-bold text-[#1e1e1e] group-hover:text-[#ea130e] block">
                          {ind.name}
                        </span>
                        <p className="text-[11px] text-[#575757] line-clamp-1 mt-0.5">
                          {ind.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Matches */}
              {matchedFaqs.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ea130e]">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>FAQ Answers ({matchedFaqs.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchedFaqs.map((faq) => (
                      <Link
                        key={faq.id}
                        href="/faq"
                        onClick={onClose}
                        className="block p-3 bg-gray-50 hover:bg-[#fdf2f2] border border-gray-200 hover:border-[#ea130e] group transition-colors"
                      >
                        <span className="text-xs font-bold text-[#1e1e1e] group-hover:text-[#ea130e] block">
                          {faq.question}
                        </span>
                        <p className="text-[11px] text-[#575757] line-clamp-1 mt-0.5">
                          {faq.answer}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
