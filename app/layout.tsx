import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sitecraftix.com/perfectknives"),
  title: "Perfect Knives | Industrial Knives & Cutting Blades Manufacturer",
  description:
    "Leading manufacturer of high-precision industrial knives, slitting blades, circular cutters, tray sealing knives, and custom guillotine blades. Based in Thane / Nashik, Maharashtra, India. Established 1985.",
  keywords: [
    "industrial knives",
    "cutting blades",
    "slitting cutters",
    "circular knives",
    "tray sealing knives",
    "guillotine blades",
    "zig zag cutter with anvil",
    "precision tool steel",
    "Perfect Engineering Works",
    "machine knives India"
  ],
  authors: [{ name: "Perfect Knives" }],
  openGraph: {
    title: "Perfect Knives | Precision Industrial Cutting Solutions",
    description:
      "Engineering cutting solutions with state-of-the-art CNC grinding, vacuum heat treatment, and precision metallurgical inspection.",
    url: "https://sitecraftix.com/perfectknives/",
    siteName: "Perfect Knives",
    images: [
      {
        url: "/images/hero-1.png",
        width: 1200,
        height: 630,
        alt: "Perfect Knives Precision Engineering"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-700 flex flex-col font-sans selection:bg-[#ea130e] selection:text-white">
        {children}
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
