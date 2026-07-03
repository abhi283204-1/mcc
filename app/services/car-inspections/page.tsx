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
  title: "Car Inspection & Diagnostics in Ghaziabad | Mittal Car Care",
  description: "Professional car inspection, diagnostics, engine scanning, road trip inspection and second-hand car inspection services in Ghaziabad.",
};

const inspections = [
  {
    name: "Second Hand Car Inspection",
    duration: "Takes 4 Hours",
    warranty: "No Warranty",
    details: 150,
    recommended: true,
    badge: "USED CAR BUYERS",
    description: "Complete pre-purchase inspection for used cars",
    includes: ["50 Points Check", "Detailed Health Card", "Onsite Car Valuation", "Engine & Transmission Check", "Test Drive Inspection"],
    price: 1999,
    originalPrice: 2999,
    image: "/images/car-inspection.jpeg",
  },
  {
    name: "Car Inspection / Diagnostics",
    duration: "Takes 4 Hours",
    warranty: "No Warranty",
    details: 130,
    recommended: false,
    badge: "FREE CAR INSPECTION",
    description: "Comprehensive diagnostics with upfront estimate",
    includes: ["Test Drive Inspection", "25 Points Checklist", "Upfront Estimate", "Visual Inspection", "Fault Code Reading"],
    price: 499,
    originalPrice: 899,
    image: "/images/carinspection.jpeg",
  },
  {
    name: "Road Trip Inspection",
    duration: "Takes 4 Hours",
    warranty: "No Warranty",
    details: 140,
    recommended: false,
    description: "Ensure your car is road-trip ready",
    includes: ["50 Points Check List", "Detailed Health Card", "Tyre & Brake Inspection", "Fluid Level Check", "AC & Electrical Check"],
    price: 999,
    originalPrice: 1499,
    image: "/images/roadTripinspection.jpeg",
  },
  {
    name: "Engine Scanning",
    duration: "Takes 3 Hours",
    warranty: "No Warranty",
    details: 110,
    recommended: false,
    description: "OEM-level engine diagnostics",
    includes: ["OEM Scanning", "Code Reset", "Fault Detection", "Performance Report"],
    price: 599,
    originalPrice: 999,
    image: "/images/enginescan.jpeg",
  },
  {
    name: "Car Fluids Check",
    duration: "Takes 3 Hours",
    warranty: "No Warranty",
    details: 100,
    recommended: false,
    description: "Complete fluid level & quality inspection",
    includes: ["Engine Oil Check", "Coolant Level Check", "Brake Fluid Inspection", "Transmission Fluid Check", "Power Steering Fluid Check"],
    price: 499,
    originalPrice: 799,
    image: "/images/carFluid-check.jpeg",
  },
  {
    name: "Complete Suspension Inspection",
    duration: "Takes 4 Hours",
    warranty: "No Warranty",
    details: 120,
    recommended: false,
    description: "Detailed suspension health check",
    includes: ["25 Points Check", "Upfront Estimate", "Shock Absorber Test", "Bushing & Mount Inspection", "Steering Linkage Check"],
    price: 499,
    originalPrice: 799,
    image: "/images/suspension-inspection.jpeg",
  },
];

const radiator = [
  {
    name: "Radiator Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 130,
    recommended: false,
    description: "Prevents engine overheating - Spare Part Price Only",
    includes: ["Old Radiator Removal", "New Radiator Installation", "Coolant Refill", "Leak Test", "Temperature Check"],
    price: 3999,
    originalPrice: 5499,
    image: "/images/radiator-replace.jpeg",
  },
  {
    name: "Radiator Fan Motor Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 120,
    recommended: false,
    description: "Prevents engine overheating - Labour Included",
    includes: ["Old Fan Motor Removal", "New Fan Motor Installation", "Wiring Check", "Temperature Test"],
    price: 2499,
    originalPrice: 3499,
    image: "/images/radiatorFan.jpeg",
  },
  {
    name: "Radiator Flush & Clean",
    duration: "Takes 2 Hours",
    warranty: "No Warranty",
    details: 100,
    recommended: false,
    description: "Prevents engine overheating",
    includes: ["Coolant Drain", "System Flush", "Fresh Coolant Refill", "Leak Inspection"],
    price: 999,
    originalPrice: 1499,
    image: "/images/radiatorFlushClean.jpeg",
  },
];

export default function CarInspectionsPage() {
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
                Car Inspection & Diagnostics in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-8">
                Your trusted local <span className="font-semibold text-gray-900">car inspection specialist</span> serving Ghaziabad with comprehensive diagnostics, engine scanning & pre-purchase inspection services.
              </p>

              {/* Inspections */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Inspections</h2>
              <div className="space-y-4 mb-10">
                {inspections.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Radiator */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Radiator</h2>
              <div className="space-y-4">
                {radiator.map((pkg) => (
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
