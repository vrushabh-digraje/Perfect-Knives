"use client";

import { useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { faqData, FAQItem } from "@/data/faq";

interface FaqSectionProps {
  showTitle?: boolean;
}

export default function FaqSection({ showTitle = true }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqData.filter((item: FAQItem) => {
    return (
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#f8f9fa] relative border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
        {showTitle && (
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea130e] block">
              FAQ&apos;s
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e1e1e] tracking-tight">
              Get every single answers here.
            </h2>
          </div>
        )}

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-300 text-[#1e1e1e] placeholder-gray-400 text-sm focus:outline-none focus:border-[#ea130e] shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Accordions List */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white border border-gray-200 text-[#575757] text-sm">
              No matching questions found.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#ea130e] shadow-md"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#1e1e1e] group-hover:text-[#ea130e] transition-colors">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#ea130e] text-white rotate-180 shadow-sm"
                          : "bg-gray-100 text-gray-600 group-hover:bg-[#ea130e] group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#575757] leading-relaxed border-t border-gray-100 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
