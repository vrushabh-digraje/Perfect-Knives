"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Search,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  SlidersHorizontal
} from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "./SocialIcons";
import { companyInfo } from "@/data/company";
import SearchModal from "./SearchModal";
import QuickContactDrawer from "./QuickContactDrawer";
import QuoteModal from "./QuoteModal";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="relative w-full z-40">
        {/* TOP BAR (site-bg-black #000) */}
        <div className="bg-[#000000] border-b border-[#222222] text-xs text-[#aeaeae] py-2 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            {/* Left Contact Info */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#ea130e]" />
                <span className="text-[#888888] font-medium">Call :</span>
                <span className="font-semibold text-white">{companyInfo.phone}</span>
              </a>
              <span className="hidden sm:inline text-[#333333]">|</span>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#ea130e]" />
                <span className="text-[#888888] font-medium">Email :</span>
                <span className="font-semibold text-white">{companyInfo.email}</span>
              </a>
            </div>

            {/* Right Socials & Request Quote CTA */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2.5 pr-3 border-r border-[#2a2a2a]">
                <a
                  href={companyInfo.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-7 h-7 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center text-[#888888] hover:text-white hover:bg-[#ea130e] hover:border-[#ea130e] transition-all"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={companyInfo.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="w-7 h-7 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center text-[#888888] hover:text-white hover:bg-[#ea130e] hover:border-[#ea130e] transition-all"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={companyInfo.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-7 h-7 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center text-[#888888] hover:text-white hover:bg-[#ea130e] hover:border-[#ea130e] transition-all"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Request A Quote button */}
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#ea130e] hover:bg-[#c8100c] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95 group"
              >
                <span>Request A Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* MAIN STICKY BAR (background: #ffffff) */}
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "fixed top-0 left-0 bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200 py-3"
              : "bg-white border-b border-gray-200 py-3.5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-auto flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.png"
                  alt="Perfect Knives Logo"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  pathname === "/"
                    ? "text-[#ea130e]"
                    : "text-[#1e1e1e] hover:text-[#ea130e]"
                }`}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <Link
                  href="/about"
                  className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
                    pathname === "/about"
                      ? "text-[#ea130e]"
                      : "text-[#1e1e1e] hover:text-[#ea130e]"
                  }`}
                >
                  About Us
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      aboutDropdownOpen ? "rotate-180 text-[#ea130e]" : "text-gray-400"
                    }`}
                  />
                </Link>

                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 w-48 py-2 mt-1 bg-white border border-gray-200 shadow-xl animate-fadeIn z-50">
                    <Link
                      href="/about"
                      className="block px-4 py-2.5 text-xs font-semibold text-[#1e1e1e] hover:text-[#ea130e] hover:bg-gray-50 transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-4 py-2.5 text-xs font-semibold text-[#1e1e1e] hover:text-[#ea130e] hover:bg-gray-50 transition-colors"
                    >
                      FAQ
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/faq"
                className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  pathname === "/faq"
                    ? "text-[#ea130e]"
                    : "text-[#1e1e1e] hover:text-[#ea130e]"
                }`}
              >
                FAQ
              </Link>

              <Link
                href="/products"
                className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  pathname === "/products"
                    ? "text-[#ea130e]"
                    : "text-[#1e1e1e] hover:text-[#ea130e]"
                }`}
              >
                Products
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  pathname === "/contact"
                    ? "text-[#ea130e]"
                    : "text-[#1e1e1e] hover:text-[#ea130e]"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Button */}
              <button
                onClick={() => setSearchModalOpen(true)}
                aria-label="Open search dialog"
                className="p-2 sm:p-2.5 bg-gray-100 hover:bg-[#ea130e] text-[#1e1e1e] hover:text-white transition-colors group"
                title="Search products and FAQ"
              >
                <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>

              {/* Side Drawer Info Toggle */}
              <button
                onClick={() => setDrawerOpen(true)}
                aria-label="Open contact drawer"
                className="p-2 sm:p-2.5 bg-gray-100 hover:bg-[#ea130e] text-[#1e1e1e] hover:text-white transition-colors group hidden sm:flex"
                title="Quick contact"
              >
                <SlidersHorizontal className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile navigation menu"
                className="lg:hidden p-2 bg-gray-100 text-[#1e1e1e] hover:text-[#ea130e] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-5 space-y-3 shadow-xl animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-[#1e1e1e] hover:text-[#ea130e] hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-[#1e1e1e] hover:text-[#ea130e] hover:bg-gray-50"
              >
                About Us
              </Link>
              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-[#1e1e1e] hover:text-[#ea130e] hover:bg-gray-50"
              >
                FAQ
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-[#1e1e1e] hover:text-[#ea130e] hover:bg-gray-50"
              >
                Products
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-[#1e1e1e] hover:text-[#ea130e] hover:bg-gray-50"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Global Modals */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      <QuickContactDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}
