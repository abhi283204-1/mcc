import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/sections/Footer";
import ServiceCategoryTabs from "@/components/ac-service/ServiceCategoryTabs";
import PackageCard from "@/components/ac-service/PackageCard";
import CarBrandGrid from "@/components/ac-service/CarBrandGrid";
import VideoReviews from "@/components/sections/VideoReviews";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import Areas from "@/components/sections/Areas";

export const metadata: Metadata = {
  title: "Car Detailing Services in Ghaziabad | Mittal Car Care",
  description: "Professional car detailing services in Ghaziabad. Ceramic coating, teflon coating, PPF, rubbing & polishing, anti-rust coating for all car brands.",
};

const polishing = [
  {
    name: "3M™ Car Rubbing & Polishing",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 120,
    recommended: true,
    badge: "3M ULTRA SHINE POLISHING",
    description: "Every 6 Months Recommended",
    includes: ["Exterior Wash", "Clay Bar Treatment", "3M Rubbing Compound", "3M Polishing", "Wax Protection Layer"],
    price: 2299,
    originalPrice: 3299,
    image: "/images/Icons/detailing.svg",
  },
];

const ceramicCoating = [
  {
    name: "Ceramic Coating",
    duration: "Takes 3 Days",
    warranty: "1 Year Warranty",
    details: 180,
    recommended: false,
    badge: "FREE ALL ROUND CLEANING",
    description: "Complete paint protection with hydrophobic layer",
    includes: ["Deep Wash & Decontamination", "Paint Correction", "Ceramic Coat Application", "Curing & Inspection", "Final Buff & QC"],
    price: 9999,
    originalPrice: 14999,
    image: "/images/Icons/detailing.svg",
  },
  {
    name: "Meguiar's Ceramic Coating",
    duration: "Takes 3 Days",
    warranty: "1 Year Warranty",
    details: 195,
    recommended: false,
    badge: "FREE INTERIOR SPA",
    description: "Complete paint protection with premium Meguiar's products",
    includes: ["Deep Wash & Decontamination", "Paint Correction", "Meguiar's Ceramic Coat Application", "Curing & Inspection", "Final Buff & QC"],
    price: 12999,
    originalPrice: 17999,
    image: "/images/Icons/detailing.svg",
  },
];

const teflonCoating = [
  {
    name: "Meguiar's Teflon Coating",
    duration: "Takes 24 Hours",
    warranty: "3 Months Warranty",
    details: 140,
    recommended: false,
    description: "Every 1 Year Recommended",
    includes: ["Exterior Wash", "Surface Decontamination", "Meguiar's Teflon Application", "Buff & Shine", "Final Inspection"],
    price: 3499,
    originalPrice: 4999,
    image: "/images/Icons/detailing.svg",
  },
  {
    name: "3M™ Teflon Coating",
    duration: "Takes 24 Hours",
    warranty: "3 Months Warranty",
    details: 140,
    recommended: false,
    description: "Every 1 Year Recommended",
    includes: ["Exterior Wash", "Surface Decontamination", "3M Teflon Application", "Buff & Shine", "Final Inspection"],
    price: 2999,
    originalPrice: 4499,
    image: "/images/Icons/detailing.svg",
  },
];

const ppf = [
  {
    name: "PPF - Paint Protection Film",
    duration: "Takes 6 Days",
    warranty: "1 Year Warranty",
    details: 210,
    recommended: false,
    badge: "FREE INTERIOR SPA",
    description: "Complete paint protection with ultra shine polish",
    includes: ["Surface Preparation", "Paint Correction", "PPF Application", "Edge Sealing", "Final Inspection & QC"],
    price: 35999,
    originalPrice: 45999,
    image: "/images/Icons/detailing.svg",
  },
];

const antiRustCoating = [
  {
    name: "Anti Rust Underbody Coating",
    duration: "Takes 24 Hours",
    warranty: "3 Months Warranty",
    details: 130,
    recommended: false,
    badge: "MONSOON SPECIAL",
    description: "Protects underbody from rust & corrosion",
    includes: ["Underbody Wash", "Surface Preparation", "Anti-Rust Coating Application", "Drying & Inspection"],
    price: 1999,
    originalPrice: 2999,
    image: "/images/Icons/detailing.svg",
  },
  {
    name: "Silencer Coating",
    duration: "Takes 6 Hours",
    warranty: "3 Months Warranty",
    details: 110,
    recommended: false,
    description: "2 layers of protection for silencer",
    includes: ["Silencer Cleaning", "Surface Prep", "Anti-Rust Coating (2 Layers)", "Heat Resistance Check"],
    price: 1499,
    originalPrice: 2199,
    image: "/images/Icons/detailing.svg",
  },
];

export default function CarDetailingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[74px] bg-white min-h-screen">
        <ServiceCategoryTabs />

        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-10">
            {/* LEFT COLUMN */}
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                Car Detailing Services in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-8">
                Your trusted local <span className="font-semibold text-gray-900">car detailing specialist</span> serving Ghaziabad with premium ceramic coating, teflon coating, PPF & polishing services.
              </p>

              {/* Polishing */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Polishing</h2>
              <div className="space-y-4 mb-10">
                {polishing.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Ceramic Coating */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Ceramic Coating</h2>
              <div className="space-y-4 mb-10">
                {ceramicCoating.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Teflon Coating */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Teflon Coating</h2>
              <div className="space-y-4 mb-10">
                {teflonCoating.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* PPF */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">PPF</h2>
              <div className="space-y-4 mb-10">
                {ppf.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Anti Rust Coating */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Anti Rust Coating</h2>
              <div className="space-y-4">
                {antiRustCoating.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN - Car Brand Grid */}
            <div className="hidden lg:block">
              <CarBrandGrid />
            </div>
          </div>
        </div>
        <VideoReviews />
        <Testimonials />
        <Process />
        <Areas />
      </main>
      <Footer />
    </>
  );
}
