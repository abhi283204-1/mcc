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
  title: "Car Spa & Cleaning in Ghaziabad | Mittal Car Care",
  description: "Professional car spa, interior cleaning, deep cleaning, rubbing & polishing, rat repellent treatment and sunroof service in Ghaziabad.",
};

const spa = [
  {
    name: "Car Interior Spa",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 140,
    recommended: false,
    badge: "FREE CAR INSPECTION",
    description: "Interior wet cleaning with deep sanitisation",
    includes: ["Seat Shampooing", "Dashboard & Console Cleaning", "Carpet Deep Cleaning", "Anti-Bacterial Treatment", "Interior Vacuuming"],
    price: 1099,
    originalPrice: 1599,
    image: "/images/interior-spa.jpeg",
  },
  {
    name: "Deep All Round Spa",
    duration: "Takes 8 Hours",
    warranty: "1 Month Warranty",
    details: 180,
    recommended: true,
    badge: "INCLUDES EXTERIOR POLISHING",
    description: "Complete interior dry cleaning + exterior polishing",
    includes: ["Full Interior Dry Cleaning", "Seat & Carpet Shampooing", "Dashboard Polishing", "Exterior Rubbing & Polishing", "Engine Bay Cleaning", "Anti-Bacterial Treatment"],
    price: 2499,
    originalPrice: 3499,
    image: "/images/deep-spa.jpeg",
  },
  {
    name: "Premium Top Wash",
    duration: "Takes 1 Hour",
    warranty: "No Warranty",
    details: 95,
    recommended: false,
    description: "Preserves your vehicle's paint and finish",
    includes: ["Exterior Foam Wash", "Hand Drying", "Tyre Cleaning", "Glass Cleaning"],
    price: 499,
    originalPrice: 799,
    image: "/images/top-wash.jpeg",
  },
  {
    name: "Car Wash & Wax",
    duration: "Takes 3 Hours",
    warranty: "No Warranty",
    details: 110,
    recommended: false,
    description: "Preserves your vehicle's paint and finish",
    includes: ["Exterior Foam Wash", "Hand Drying", "Wax Coat Application", "Tyre Dressing", "Glass Cleaning"],
    price: 899,
    originalPrice: 1299,
    image: "/images/car-wash-wax.jpeg",
  },
  {
    name: "Car Rubbing & Polishing",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 120,
    recommended: false,
    description: "Ultra shine polishing - Every 6 Months Recommended",
    includes: ["Exterior Wash", "Clay Bar Treatment", "Rubbing Compound", "Machine Polishing", "Wax Protection Layer"],
    price: 2299,
    originalPrice: 3299,
    image: "/images/car-rubbing.jpeg",
  },
  {
    name: "Rat / Pest Repellent Treatment",
    duration: "Takes 3 Hours",
    warranty: "1 Month Warranty",
    details: 100,
    recommended: false,
    description: "Protects car wiring & interiors from pests",
    includes: ["Underbody Inspection", "Anti-Rodent Spray Application", "Engine Bay Treatment", "Cabin Treatment"],
    price: 699,
    originalPrice: 999,
    image: "/images/rat-repellent.jpeg",
  },
];

const winterSpecial = [
  {
    name: "360° Deep Cleaning",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 160,
    recommended: false,
    badge: "DESIGNED FOR FESTIVITIES",
    description: "Includes dry cleaning + rubbing & polishing",
    includes: ["Full Interior Dry Cleaning", "Seat & Carpet Shampooing", "Exterior Rubbing & Polishing", "Dashboard & Console Detailing", "Engine Bay Cleaning", "Tyre Dressing"],
    price: 3499,
    originalPrice: 4999,
    image: "/images/360deepclean.jpeg",
  },
];

const sunroof = [
  {
    name: "Sunroof Service",
    duration: "Takes 8 Hours",
    warranty: "1 Month Warranty",
    details: 130,
    recommended: false,
    description: "Every 1 Year Recommended",
    includes: ["Sunroof Track Cleaning", "Lubrication & Greasing", "Drain Tube Cleaning", "Seal Inspection", "Operation Test"],
    price: 1499,
    originalPrice: 2199,
    image: "/images/sunroof-service.jpeg",
  },
];

export default function CarSpaCleaning() {
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
                Car Spa & Cleaning in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-8">
                Your trusted local <span className="font-semibold text-gray-900">car cleaning specialist</span> serving Ghaziabad with premium car spa, deep cleaning & sanitisation services.
              </p>

              {/* Spa */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Spa</h2>
              <div className="space-y-4 mb-10">
                {spa.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Winter Special */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Winter Special</h2>
              <div className="space-y-4 mb-10">
                {winterSpecial.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Sunroof */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Sunroof</h2>
              <div className="space-y-4">
                {sunroof.map((pkg) => (
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
