import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import FeaturesStrip from "@/components/FeaturesStrip";
import AboutSection from "@/components/AboutSection";
import ProductCatalog from "@/components/ProductCatalog";
import MetricsBanner from "@/components/MetricsBanner";
import IndustriesSection from "@/components/IndustriesSection";
import ClientsTestimonials from "@/components/ClientsTestimonials";
import PreFooterBanner from "@/components/PreFooterBanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeroSlider />
      <FeaturesStrip />
      <AboutSection />
      <ProductCatalog initialLimit={6} />
      <MetricsBanner />
      <IndustriesSection />
      <ClientsTestimonials />
      <PreFooterBanner />
      <Footer />
    </main>
  );
}
