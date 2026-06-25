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
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: "Clutch & Body Parts in Ghaziabad | Mittal Car Care",
  description: "Professional clutch replacement, body part replacement and custom repair services in Ghaziabad. Genuine spare parts with warranty.",
};

const clutch = [
  {
    name: "Clutch Set Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 150,
    recommended: false,
    badge: "FREE 50 POINT INSPECTION",
    description: "Improved pickup and mileage - Labour + Spare Part Rates",
    includes: ["Old Clutch Removal", "New Clutch Plate & Pressure Plate", "Bearing Replacement", "Clutch Adjustment", "Test Drive"],
    price: 4999,
    originalPrice: 6999,
    image: "/images/Icons/clutch.svg",
  },
  {
    name: "Flywheel Replacement",
    duration: "Takes 8 Hours",
    warranty: "1 Month Warranty",
    details: 140,
    recommended: false,
    description: "Improves performance - Spare Part Price Only",
    includes: ["Gearbox Removal", "Old Flywheel Removal", "New Flywheel Fitting", "Clutch Reassembly", "Test Drive"],
    price: 5999,
    originalPrice: 7999,
    image: "/images/Icons/clutch.svg",
  },
  {
    name: "Clutch Bearing Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 130,
    recommended: false,
    description: "Improves gear shifting - Spare Part Price Only",
    includes: ["Gearbox Removal", "Old Bearing Removal", "New Bearing Installation", "Reassembly", "Test Drive"],
    price: 2499,
    originalPrice: 3499,
    image: "/images/Icons/clutch.svg",
  },
  {
    name: "Flywheel Turning",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 120,
    recommended: false,
    description: "Improves gear shifting",
    includes: ["Flywheel Inspection", "Flywheel Resurfacing", "Clutch Reassembly", "Test Drive"],
    price: 1999,
    originalPrice: 2999,
    image: "/images/Icons/clutch.svg",
  },
  {
    name: "Clutch Overhaul",
    duration: "Takes 8 Hours",
    warranty: "1 Month Warranty on Labour",
    details: 160,
    recommended: false,
    badge: "FREE CAR WASH",
    description: "Complete clutch system overhaul - Labour Rates Only",
    includes: ["Gearbox Removal", "Clutch Inspection", "Worn Part Replacement", "Reassembly & Adjustment", "Test Drive"],
    price: 3499,
    originalPrice: 4999,
    image: "/images/Icons/clutch.svg",
  },
];

const bodyParts = [
  {
    name: "Front Bumper Replacement",
    duration: "Takes 4 Hours",
    warranty: "1 Month Warranty on Fitting",
    details: 110,
    recommended: false,
    description: "Genuine spare parts • 100% paint match guarantee",
    includes: ["Old Bumper Removal", "New Bumper Fitting", "Paint Match & Application", "Final Inspection"],
    price: 3999,
    originalPrice: 5499,
  },
  {
    name: "Rear Bumper Replacement",
    duration: "Takes 4 Hours",
    warranty: "1 Month Warranty on Fitting",
    details: 110,
    recommended: false,
    description: "Genuine spare parts • 100% paint match guarantee",
    includes: ["Old Bumper Removal", "New Bumper Fitting", "Paint Match & Application", "Final Inspection"],
    price: 3999,
    originalPrice: 5499,
  },
  {
    name: "Fender Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 120,
    recommended: false,
    description: "Genuine spare parts • 100% paint match guarantee",
    includes: ["Old Fender Removal", "New Fender Installation", "Paint & Color Match", "Alignment Check"],
    price: 4499,
    originalPrice: 5999,
  },
  {
    name: "Bonnet Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 125,
    recommended: false,
    description: "Genuine spare parts • 100% paint match guarantee",
    includes: ["Old Bonnet Removal", "New Bonnet Installation", "Paint & Color Match", "Hinge Alignment"],
    price: 5999,
    originalPrice: 7999,
  },
  {
    name: "Boot Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 120,
    recommended: false,
    description: "Genuine spare parts • 100% paint match guarantee",
    includes: ["Old Boot Removal", "New Boot Installation", "Paint & Color Match", "Lock & Hinge Check"],
    price: 4999,
    originalPrice: 6999,
  },
  {
    name: "Left Front Door Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 130,
    recommended: false,
    description: "Genuine spare parts • 100% paint match guarantee",
    includes: ["Old Door Removal", "New Door Installation", "Paint & Color Match", "Window & Lock Alignment"],
    price: 6999,
    originalPrice: 8999,
  },
  {
    name: "Left Rear Door Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 130,
    recommended: false,
    description: "Genuine spare parts • 100% paint match guarantee",
    includes: ["Old Door Removal", "New Door Installation", "Paint & Color Match", "Window & Lock Alignment"],
    price: 6999,
    originalPrice: 8999,
  },
  {
    name: "Right Front Door Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 130,
    recommended: false,
    description: "Genuine spare parts • 100% paint match guarantee",
    includes: ["Old Door Removal", "New Door Installation", "Paint & Color Match", "Window & Lock Alignment"],
    price: 6999,
    originalPrice: 8999,
  },
  {
    name: "Right Rear Door Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 130,
    recommended: false,
    description: "Genuine spare parts • 100% paint match guarantee",
    includes: ["Old Door Removal", "New Door Installation", "Paint & Color Match", "Window & Lock Alignment"],
    price: 6999,
    originalPrice: 8999,
  },
];

export default function ClutchBodyPartsPage() {
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
                Clutch & Body Parts in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-8">
                Your trusted local <span className="font-semibold text-gray-900">clutch & body parts specialist</span> serving Ghaziabad with genuine spare parts and expert fitting services.
              </p>

              {/* Clutch */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Clutch</h2>
              <div className="space-y-4 mb-10">
                {clutch.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Body Parts */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Body Parts</h2>
              <div className="space-y-4">
                {bodyParts.map((pkg) => (
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
      <MobileBottomNav />
    </>
  );
}
