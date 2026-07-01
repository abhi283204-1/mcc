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
  title: "Denting & Painting in Ghaziabad | Mittal Car Care",
  description: "Professional car denting & painting services in Ghaziabad. 100% color match, 2 years warranty, doorstep pickup & drop. All brands serviced.",
};

const frontSide = [
  {
    name: "Front Bumper Paint",
    duration: "Takes 24 Hours",
    warranty: "2 Years Warranty",
    details: 120,
    recommended: false,
    badge: "100% COLOR MATCH",
    description: "Durable & long lasting finish",
    includes: ["Dent Repair (if any)", "Surface Preparation", "Primer Application", "Paint Color Matching", "Clear Coat Finish"],
    price: 2499,
    originalPrice: 3499,
    image: "/images/Icons/front-bumper-paint.jpeg",
  },
  {
    name: "Bonnet Paint",
    duration: "Takes 24 Hours",
    warranty: "2 Years Warranty",
    details: 135,
    recommended: false,
    description: "Durable & long lasting finish",
    includes: ["Dent Removal", "Sanding & Primer", "Base Coat Application", "Clear Coat & Polish"],
    price: 2999,
    originalPrice: 3999,
    image: "/images/Icons/bonnet-paint.jpeg",
  },
];

const rearSide = [
  {
    name: "Rear Bumper Paint",
    duration: "Takes 24 Hours",
    warranty: "2 Years Warranty",
    details: 120,
    recommended: false,
    description: "Durable & long lasting finish",
    includes: ["Dent Repair (if any)", "Surface Preparation", "Primer Application", "Paint Color Matching", "Clear Coat Finish"],
    price: 2499,
    originalPrice: 3499,
    image: "/images/Icons/rear-bumper-paint.jpeg",
  },
  {
    name: "Boot Paint",
    duration: "Takes 24 Hours",
    warranty: "2 Years Warranty",
    details: 130,
    recommended: false,
    description: "Durable & long lasting finish",
    includes: ["Dent Removal", "Surface Prep & Primer", "Color Matching", "Paint & Clear Coat"],
    price: 2999,
    originalPrice: 3999,
    image: "/images/Icons/boot-paint.jpeg",
  },
];

const leftSide = [
  {
    name: "Left Fender Paint",
    duration: "Takes 24 Hours",
    warranty: "2 Years Warranty",
    details: 110,
    recommended: false,
    description: "Durable & long lasting finish",
    includes: ["Dent Repair", "Surface Preparation", "Primer & Paint", "Clear Coat Finish"],
    price: 2499,
    originalPrice: 3499,
    image: "/images/Icons/left-fender.jpeg",
  },
  {
    name: "Left Front Door Paint",
    duration: "Takes 24 Hours",
    warranty: "2 Years Warranty",
    details: 125,
    recommended: false,
    description: "Durable & long lasting finish",
    includes: ["Dent Removal", "Sanding & Primer", "Color Match Paint", "Clear Coat & Polish"],
    price: 2999,
    originalPrice: 3999,
    image: "/images/Icons/left-front-door.jpeg",
  },
  {
    name: "Left Rear Door Paint",
    duration: "Takes 24 Hours",
    warranty: "2 Years Warranty",
    details: 125,
    recommended: false,
    description: "Durable & long lasting finish",
    includes: ["Dent Removal", "Sanding & Primer", "Color Match Paint", "Clear Coat & Polish"],
    price: 2999,
    originalPrice: 3999,
    image: "/images/Icons/left-rear-door.jpeg",
  },
  {
    name: "Left Quarter Panel Paint",
    duration: "Takes 24 Hours",
    warranty: "2 Years Warranty",
    details: 115,
    recommended: false,
    description: "Durable & long lasting finish",
    includes: ["Dent Repair", "Surface Prep", "Primer & Paint Application", "Clear Coat"],
    price: 2999,
    originalPrice: 3999,
    image: "/images/Icons/left-quarter-panel-paint.jpeg",
  },
  {
    name: "Left Running Board Paint",
    duration: "Takes 24 Hours",
    warranty: "2 Years Warranty",
    details: 105,
    recommended: false,
    description: "Durable & long lasting finish",
    includes: ["Scratch Filling", "Primer Coat", "Paint Application", "Clear Coat Finish"],
    price: 1999,
    originalPrice: 2799,
    image: "/images/Icons/left-running-board.jpeg",
  },
];

const rightSide = [
  {
    name: "Right Fender Paint",
    duration: "Takes 24 Hours",
    warranty: "2 Years Warranty",
    details: 110,
    recommended: false,
    description: "Durable & long lasting finish",
    includes: ["Dent Repair", "Surface Preparation", "Primer & Paint", "Clear Coat Finish"],
    price: 2499,
    originalPrice: 3499,
    image: "/images/Icons/right-fender-paint.jpeg",
  },
  {
    name: "Right Front Door Paint",
    duration: "Takes 24 Hours",
    warranty: "2 Years Warranty",
    details: 125,
    recommended: false,
    description: "Durable & long lasting finish",
    includes: ["Dent Removal", "Sanding & Primer", "Color Match Paint", "Clear Coat & Polish"],
    price: 2999,
    originalPrice: 3999,
    image: "/images/Icons/right-front-door-paint.jpeg",
  },
  {
    name: "Right Rear Door Paint",
    duration: "Takes 24 Hours",
    warranty: "2 Years Warranty",
    details: 125,
    recommended: false,
    description: "Durable & long lasting finish",
    includes: ["Dent Removal", "Sanding & Primer", "Color Match Paint", "Clear Coat & Polish"],
    price: 2999,
    originalPrice: 3999,
    image: "/images/Icons/right-rear-door-paint.jpeg",
  },
  {
    name: "Right Quarter Panel Paint",
    duration: "Takes 24 Hours",
    warranty: "2 Years Warranty",
    details: 115,
    recommended: false,
    description: "Durable & long lasting finish",
    includes: ["Dent Repair", "Surface Prep", "Primer & Paint Application", "Clear Coat"],
    price: 2999,
    originalPrice: 3999,
    image: "/images/Icons/right-Q-panel.jpeg",
  },
  {
    name: "Right Running Board Paint",
    duration: "Takes 24 Hours",
    warranty: "2 Years Warranty",
    details: 105,
    recommended: false,
    description: "Durable & long lasting finish",
    includes: ["Scratch Filling", "Primer Coat", "Paint Application", "Clear Coat Finish"],
    price: 1999,
    originalPrice: 2799,
    image: "/images/Icons/right-running-board-paint.jpeg",
  },
];

const wholeBody = [
  {
    name: "Full Body Dent Paint",
    duration: "Takes 8 Days",
    warranty: "2 Years Warranty",
    details: 310,
    recommended: true,
    badge: "FREE DEEP ALL ROUND CLEANING",
    description: "100% color match with durable & long lasting finish",
    includes: ["Full Body Dent Repair", "Complete Surface Prep", "Primer Application", "Base & Clear Coat", "Final Polishing & QC"],
    price: 25999,
    originalPrice: 34999,
    image: "/images/Icons/full-body-dent-paint.jpeg",
  },
];

const alloyPaint = [
  {
    name: "Alloy Wheel Paint",
    duration: "Takes 24 Hours",
    warranty: "1 Year Warranty",
    details: 95,
    recommended: false,
    description: "Price for one wheel only • Alloy preservation",
    includes: ["Surface Cleaning", "Scratch Removal", "Primer Application", "Paint & Clear Coat"],
    price: 799,
    originalPrice: 1199,
    image: "/images/Icons/alloy-wheel-paint.jpeg",
  },
];

export default function DentingPaintingPage() {
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
                Denting & Painting in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-8">
                Your trusted local <span className="font-semibold text-gray-900">denting & painting specialist</span> serving Ghaziabad with premium doorstep denting & painting. 100% color match guaranteed.
              </p>

              {/* Front Side */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Front Side</h2>
              <div className="space-y-4 mb-10">
                {frontSide.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Rear Side */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Rear Side</h2>
              <div className="space-y-4 mb-10">
                {rearSide.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Left Side */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Left Side</h2>
              <div className="space-y-4 mb-10">
                {leftSide.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Right Side */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Right Side</h2>
              <div className="space-y-4 mb-10">
                {rightSide.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Whole Body */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Whole Body</h2>
              <div className="space-y-4 mb-10">
                {wholeBody.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Alloy Paint */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Alloy Paint</h2>
              <div className="space-y-4">
                {alloyPaint.map((pkg) => (
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
