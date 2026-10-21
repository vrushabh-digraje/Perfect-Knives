import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreFooterBanner from "@/components/PreFooterBanner";
import { Award, Target, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Perfect Knives",
  description:
    "At Perfect Engineering Works, we specialize in manufacturing industrial knives and cutting blades designed to meet the demanding requirements of modern industries."
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Breadcrumb Banner */}
      <section className="relative py-16 sm:py-20 bg-[#000000] text-white border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#888888]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#ea130e]">About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Us
          </h1>
        </div>
      </section>

      {/* Main About Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image with Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden shadow-2xl bg-gray-100 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-machine.jpeg"
                alt="Perfect Knives Machinery"
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            <div className="absolute -top-6 -right-6 bg-[#ea130e] text-white p-6 shadow-2xl text-center hidden sm:block">
              <span className="text-4xl font-extrabold tracking-tight block leading-none">25+</span>
              <span className="text-xs font-bold uppercase tracking-wider mt-1 block">
                Years of Working
                <br />
                Experience
              </span>
            </div>
          </div>

          {/* Right Column: Copy verbatim from live site */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ea130e] block">
                ABOUT PERFECT KNIVES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1e1e] tracking-tight">
                Engineering Precision. Delivering Performance.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#f8f9fa] border border-gray-200">
                <h4 className="text-sm font-bold text-[#1e1e1e] mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ea130e]" />
                  Quality Product
                </h4>
                <p className="text-xs text-[#575757] leading-relaxed">
                  Manufacture high-quality industrial tools with state-of-the-art CNC machines and heat treatment processes.
                </p>
              </div>

              <div className="p-5 bg-[#f8f9fa] border border-gray-200">
                <h4 className="text-sm font-bold text-[#1e1e1e] mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ea130e]" />
                  Precision Driven
                </h4>
                <p className="text-xs text-[#575757] leading-relaxed">
                  Conduct thorough inspections for sharpness, durability, and dimensional accuracy.
                </p>
              </div>
            </div>

            <p className="text-[#575757] text-sm sm:text-base leading-relaxed">
              At Perfect Engineering Works, we specialize in manufacturing industrial knives and cutting blades
              designed to meet the demanding requirements of modern industries. With a focus on precision
              engineering, product quality, and application-specific solutions, we help businesses find the right
              cutting tools for their manufacturing processes.
            </p>

            <p className="text-[#575757] text-sm leading-relaxed">
              From standard industrial blades to customized cutting solutions, our approach combines manufacturing
              expertise with a commitment to dependable performance.
            </p>

            <div className="pt-4 border-t border-gray-200 space-y-3">
              <h3 className="text-xl font-bold text-[#1e1e1e]">A Legacy of Precision Engineering</h3>
              <p className="text-[#575757] text-sm leading-relaxed">
                Perfect Engineering Works, operating under the PERFECT brand, is an industrial knife and blade
                manufacturer based in Nashik, Maharashtra, India.
              </p>
              <p className="text-[#575757] text-sm leading-relaxed">
                Established in 1985, the company has developed its expertise in manufacturing cutting tools for diverse
                industrial applications. Our products are designed to address the requirements of businesses involved
                in material processing, manufacturing, converting, and other industrial operations.
              </p>
              <p className="text-[#575757] text-sm leading-relaxed">
                We understand that every production process presents different challenges. Blade geometry, material
                selection, dimensional accuracy, and cutting performance can directly influence production efficiency
                and finished product quality.
              </p>
              <p className="text-[#575757] text-sm leading-relaxed">
                Our focus is on understanding these requirements and delivering industrial cutting solutions that align
                with the specific needs of our customers.
              </p>
              <p className="text-[#575757] text-sm leading-relaxed">
                Through our commitment to manufacturing quality, technical understanding, and professional business
                relationships, we aim to support the evolving requirements of industrial customers in India and
                international markets.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div className="p-4 bg-[#f8f9fa] border border-gray-200">
                <div className="w-8 h-8 bg-[#fdf2f2] text-[#ea130e] flex items-center justify-center mb-2">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#1e1e1e] mb-1">Our Mission</h4>
                <p className="text-xs text-[#575757] leading-relaxed">
                  Our mission is to manufacture industrial knives and cutting blades that meet customer specifications
                  and application requirements. We aim to combine manufacturing expertise, attention to quality, and
                  responsive service to support our customers&apos; production needs.
                </p>
              </div>

              <div className="p-4 bg-[#f8f9fa] border border-gray-200">
                <div className="w-8 h-8 bg-[#fdf2f2] text-[#ea130e] flex items-center justify-center mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#1e1e1e] mb-1">Our Vision</h4>
                <p className="text-xs text-[#575757] leading-relaxed">
                  Our vision is to strengthen our position as a trusted industrial knife manufacturer by continuously
                  improving our manufacturing capabilities, developing application-focused products, and building
                  lasting relationships with customers across industries.
                </p>
              </div>

              <div className="p-4 bg-[#f8f9fa] border border-gray-200">
                <div className="w-8 h-8 bg-[#fdf2f2] text-[#ea130e] flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#1e1e1e] mb-1">Our Values</h4>
                <p className="text-xs text-[#575757] leading-relaxed">
                  Our product range addresses different industrial requirements, from rotary cutting and slitting to
                  plastic processing and metalworking. Products can be evaluated according to the intended application,
                  machine specifications, material being processed, and required blade dimensions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer Banner */}
      <PreFooterBanner />

      <Footer />
    </main>
  );
}
