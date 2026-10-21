import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import PreFooterBanner from "@/components/PreFooterBanner";

export const metadata: Metadata = {
  title: "FAQ | Perfect Knives",
  description:
    "FAQ Home FAQ FAQ's Get every single answers here. What types of industrial knives and cutting blades does PerfectKnives offer?"
};

export default function FaqPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Breadcrumb */}
      <section className="relative py-16 sm:py-20 bg-[#000000] text-white border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#888888]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#ea130e]">FAQ</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            FAQ
          </h1>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <FaqSection showTitle={true} />

      {/* Pre-Footer Banner */}
      <PreFooterBanner />

      <Footer />
    </main>
  );
}
