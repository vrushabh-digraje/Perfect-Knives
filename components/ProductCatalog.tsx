"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, MessageSquare } from "lucide-react";
import { productsData } from "@/data/products";
import QuoteModal from "./QuoteModal";

interface ProductCatalogProps {
  initialLimit?: number;
  showFilters?: boolean;
}

export default function ProductCatalog({
  initialLimit,
  showFilters = false
}: ProductCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [quoteProductId, setQuoteProductId] = useState<string | undefined>(undefined);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Filter products by query
  const filteredProducts = productsData.filter((prod) =>
    prod.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedProducts = initialLimit
    ? filteredProducts.slice(0, initialLimit)
    : filteredProducts;

  const handleOpenQuote = (productId?: string) => {
    setQuoteProductId(productId);
    setQuoteModalOpen(true);
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#f8f9fa] relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ea130e] block">
            OUR PRODUCT RANGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e1e1e] tracking-tight">
            Industrial Knives &amp; Blades for Diverse Applications
          </h2>
          <p className="text-[#575757] text-sm sm:text-base leading-relaxed">
            Explore our range of industrial cutting tools developed for manufacturing, processing, converting, and
            material-handling applications. We offer product solutions for different industrial requirements, with
            customization options subject to technical specifications and manufacturing capabilities.
          </p>
        </div>

        {/* Search Bar when filters enabled */}
        {showFilters && (
          <div className="mb-10 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 text-[#1e1e1e] placeholder-gray-400 text-sm focus:outline-none focus:border-[#ea130e] shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1e1e1e]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Products Grid with full-width images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProducts.map((prod) => (
            <div
              key={prod.id}
              className="group relative bg-white border border-gray-200 hover:border-[#ea130e] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Product Image Frame: Slightly Full Width */}
              <div className="relative w-full h-64 sm:h-72 bg-white border-b border-gray-100 p-2 sm:p-3 flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Body: Authentic Title & Action */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-xl font-bold text-[#1e1e1e] group-hover:text-[#ea130e] transition-colors text-center sm:text-left">
                  {prod.name}
                </h3>

                <button
                  onClick={() => handleOpenQuote(prod.id)}
                  className="w-full py-2.5 px-4 bg-[#000000] hover:bg-[#ea130e] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Get A Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button: EXPLORE ALL PRODUCTS */}
        {initialLimit && (
          <div className="mt-14 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ea130e] hover:bg-[#c8100c] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-95 group"
            >
              <span>EXPLORE ALL PRODUCTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProductId={quoteProductId}
      />
    </section>
  );
}
