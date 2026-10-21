"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "./SocialIcons";
import { companyInfo } from "@/data/company";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 2500);
  };

  return (
    <footer className="bg-[#000000] text-[#aeaeae] border-t border-[#222222] relative overflow-hidden">
      {/* Top Footer Callout Ribbon */}
      <div className="border-b border-[#222222] bg-[#0c0c0c] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/5 border border-white/10 text-[#ea130e] flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#888888]">Call</span>
              <p className="text-base sm:text-lg font-bold text-white">{companyInfo.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/5 border border-white/10 text-[#ea130e] flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#888888]">Email</span>
              <p className="text-sm sm:text-base font-bold text-white">{companyInfo.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/5 border border-white/10 text-[#ea130e] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#888888]">Address</span>
              <p className="text-xs text-gray-300 max-w-xs">{companyInfo.addressShort}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About Us */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider border-b border-[#2a2a2a] pb-2">
              About Us
            </h4>
            <p className="text-xs sm:text-sm text-[#aeaeae] leading-relaxed">
              Precision-engineered industrial knives and cutting blades for diverse manufacturing applications. We
              focus on product quality, application-specific requirements, and dependable cutting solutions for
              industrial customers.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-[#161616] border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-white hover:bg-[#ea130e] hover:border-[#ea130e] transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.social.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 bg-[#161616] border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-white hover:bg-[#ea130e] hover:border-[#ea130e] transition-all"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-[#161616] border border-[#2a2a2a] flex items-center justify-center text-[#888888] hover:text-white hover:bg-[#ea130e] hover:border-[#ea130e] transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider border-b border-[#2a2a2a] pb-2">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#aeaeae]">
              <li>
                <Link href="/products" className="hover:text-[#ea130e] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#ea130e]" />
                  Industrial Knife Cutters
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#ea130e] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#ea130e]" />
                  Slitting Cutters
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#ea130e] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#ea130e]" />
                  Circular Knives
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#ea130e] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#ea130e]" />
                  Cut Off Knives
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#ea130e] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#ea130e]" />
                  Zig zag cutter with Anvil
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider border-b border-[#2a2a2a] pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#aeaeae]">
              <li>
                <Link href="/" className="hover:text-[#ea130e] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#ea130e]" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ea130e] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#ea130e]" />
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#ea130e] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#ea130e]" />
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ea130e] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#ea130e]" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider border-b border-[#2a2a2a] pb-2">
              Newsletter
            </h4>
            <p className="text-xs text-[#aeaeae] leading-relaxed">
              Our newsletters contain useful blog posts, case studies, &ldquo;how to&rdquo;s, and ways to help you grow your business.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-900/50 border border-emerald-600 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#333333] text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#ea130e]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#ea130e] hover:bg-[#c8100c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[#1a1a1a] bg-[#050505] py-6 text-xs text-[#777777]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            Copyright &copy; by <strong className="text-white font-semibold">Perfect Knives</strong> | All rights reserved
          </p>
          <p className="flex items-center gap-1">
            Designed &amp; Managed by{" "}
            <a
              href="https://sitecraftix.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[#ea130e] hover:underline font-bold"
            >
              SiteCraftix
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
