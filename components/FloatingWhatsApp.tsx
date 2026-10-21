"use client";

import { MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={`https://wa.me/919967882739?text=${encodeURIComponent("Hello Perfect Knives, I would like to inquire about industrial cutting blades.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Perfect Knives on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center px-3 py-1.5 bg-slate-900 border border-slate-700 text-xs font-medium text-white rounded-lg shadow-xl whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
        <div className="w-2 h-2 bg-slate-900 border-r border-t border-slate-700 rotate-45 absolute -right-1 top-1/2 -translate-y-1/2"></div>
      </div>
    </aside>
  );
}
