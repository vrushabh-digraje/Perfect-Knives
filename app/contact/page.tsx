import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PreFooterBanner from "@/components/PreFooterBanner";

export const metadata: Metadata = {
  title: "Contact Us | Perfect Knives",
  description:
    "Contact us Home Contact us Contact Form Feel Free to Contact us any time. we will get back to you as soon as we can't"
};

export default function ContactPage() {
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
            <span className="text-[#ea130e]">Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection showTitle={false} />

      {/* Pre-Footer Banner */}
      <PreFooterBanner />

      <Footer />
    </main>
  );
}
