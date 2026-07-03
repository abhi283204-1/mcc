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
  title: "Car Battery Replacement in Ghaziabad | Mittal Car Care",
  description: "Car battery replacement from Amaron, Exide, Livguard with free installation. Alternator repair & replacement services in Ghaziabad.",
};

const amaron = [
  {
    name: "Amaron (55 Months Warranty)",
    duration: "Free Installation",
    warranty: "55 Months Warranty",
    details: 110,
    recommended: true,
    badge: "RECOMMENDED",
    description: "35 Amp Hour • Free of cost installation",
    includes: ["Old Battery Removal", "New Battery Installation", "Terminal Cleaning", "Charging System Check"],
    price: 4600,
    originalPrice: 5499,
    image: "/images/amaron.jpeg",
  },
  {
    name: "Amaron (72 Months Warranty)",
    duration: "Free Installation",
    warranty: "66 Months Warranty",
    details: 115,
    recommended: false,
    description: "35 Amp Hour • Free of cost installation",
    includes: ["Old Battery Removal", "New Battery Installation", "Terminal Cleaning", "Charging System Check"],
    price: 5499,
    originalPrice: 6499,
    image: "/images/amaron72.jpeg",
  },
];

const exide = [
  {
    name: "Exide (55 Months Warranty)",
    duration: "Free Installation",
    warranty: "55 Months Warranty",
    details: 110,
    recommended: false,
    description: "40 Amp Hour • Free of cost installation",
    includes: ["Old Battery Removal", "New Battery Installation", "Terminal Cleaning", "Charging System Check"],
    price: 4299,
    originalPrice: 5199,
    image: "/images/exide55.jpeg",
  },
  {
    name: "Exide (66 Months Warranty)",
    duration: "Free Installation",
    warranty: "66 Months Warranty",
    details: 115,
    recommended: false,
    description: "35 Amp Hour • Free of cost installation",
    includes: ["Old Battery Removal", "New Battery Installation", "Terminal Cleaning", "Charging System Check"],
    price: 5299,
    originalPrice: 6299,
    image: "/images/exide66.jpeg",
  },
];

const livguard = [
  {
    name: "Livguard (60 Months Warranty)",
    duration: "Free Installation",
    warranty: "60 Months Warranty",
    details: 110,
    recommended: false,
    description: "35 Amp Hour • Free of cost installation",
    includes: ["Old Battery Removal", "New Battery Installation", "Terminal Cleaning", "Charging System Check"],
    price: 3999,
    originalPrice: 4799,
    image: "/images/livguard66.jpeg",
  },
  {
    name: "Livguard (72 Months Warranty)",
    duration: "Free Installation",
    warranty: "72 Months Warranty",
    details: 115,
    recommended: false,
    description: "35 Amp Hour • Free of cost installation",
    includes: ["Old Battery Removal", "New Battery Installation", "Terminal Cleaning", "Charging System Check"],
    price: 4799,
    originalPrice: 5699,
    image: "/images/livguard72.jpeg",
  },
];

const alternator = [
  {
    name: "Alternator Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 130,
    recommended: false,
    description: "Improves battery life",
    includes: ["Old Alternator Removal", "New Alternator Installation", "Belt Adjustment", "Charging Output Test"],
    price: 3999,
    originalPrice: 5499,
    image: "/images/alternator-replacement.jpeg",
  },
  {
    name: "Alternator Repair",
    duration: "Takes 6 Hours",
    warranty: "3 Months Warranty",
    details: 120,
    recommended: false,
    description: "Improves battery life",
    includes: ["Alternator Inspection", "Brush & Bearing Replacement", "Regulator Check", "Charging Output Test"],
    price: 2499,
    originalPrice: 3499,
    image: "/images/alternator-repair.jpeg",
  },
];

export default function BatteriesPage() {
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
                Car Battery Replacement in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-8">
                Your trusted local <span className="font-semibold text-gray-900">car battery specialist</span> serving Ghaziabad with genuine batteries from top brands and free installation.
              </p>

              {/* Amaron */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Amaron</h2>
              <div className="space-y-4 mb-10">
                {amaron.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Exide */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Exide</h2>
              <div className="space-y-4 mb-10">
                {exide.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Livguard */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Livguard</h2>
              <div className="space-y-4 mb-10">
                {livguard.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Alternator */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Alternator</h2>
              <div className="space-y-4">
                {alternator.map((pkg) => (
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
