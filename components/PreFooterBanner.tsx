import Link from "next/link";
import { Phone, ShieldCheck, MessageSquare } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function PreFooterBanner() {
  return (
    <section className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Need Our Products */}
          <div className="bg-[#ea130e] text-white p-7 shadow-md flex items-center gap-4 transition-transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-black/20 text-white flex items-center justify-center shrink-0">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Need Our Products</h4>
              <p className="text-xs uppercase tracking-wider text-white/80">Contact US:</p>
              <a
                href={`tel:${companyInfo.phone}`}
                className="text-base sm:text-lg font-bold text-white hover:underline mt-0.5 block"
              >
                {companyInfo.phone}
              </a>
            </div>
          </div>

          {/* Column 2: Material Verification */}
          <div className="bg-[#f8f9fa] border border-gray-200 text-[#1e1e1e] p-7 shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#ea130e]/10 text-[#ea130e] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#1e1e1e] mb-1">Material Verification</h4>
              <p className="text-xs text-[#575757] leading-relaxed">
                Ensuring that the selected material aligns with the specified product requirements.
              </p>
            </div>
          </div>

          {/* Column 3: LET'S DISCUSS YOUR REQUIREMENTS */}
          <div className="bg-[#000000] text-white p-7 shadow-md flex items-center gap-4 transition-transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-white/10 text-[#ea130e] flex items-center justify-center shrink-0">
              <MessageSquare className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-3">
                LET&apos;S DISCUSS YOUR REQUIREMENTS
              </h4>
              <Link
                href="/contact"
                className="inline-block px-5 py-2 bg-white text-[#1e1e1e] hover:bg-[#ea130e] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
