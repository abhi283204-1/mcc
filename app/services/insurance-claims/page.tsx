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
  title: "Insurance Claims in Ghaziabad | Mittal Car Care",
  description: "Hassle-free car insurance claims - accidental repairs, fire damage, flood damage, windshield replacement, theft claims with cashless facility in Ghaziabad.",
};

const knowYourPolicy = [
  {
    name: "Know Your Policy",
    duration: "Call Within 2 Hours",
    warranty: "No Warranty",
    details: 90,
    recommended: false,
    badge: "FREE CONSULTATION",
    description: "Get clarity on your insurance policy & claim process",
    includes: ["Policy Review", "Claim Intimation Guidance", "Coverage Details Explanation", "Documentation Assistance"],
    price: 0,
    originalPrice: 0,
    image: "/images/car-insurance.png",
  },
];

const accidentalRepairs = [
  {
    name: "Accidental Denting & Painting",
    duration: "Takes 24 Hours",
    warranty: "1 Month Warranty",
    details: 150,
    recommended: true,
    badge: "CASHLESS AVAILABLE",
    description: "For insured vehicles - Cashless facility available",
    includes: ["Free Pickup & Drop", "Dedicated Service Buddy", "Denting & Repair Work", "Painting & Finishing", "Insurance Claim Processing"],
    price: 0,
    originalPrice: 0,
    image: "/images/accidental-denting.jpeg",
  },
  {
    name: "Fire Damage Assistance",
    duration: "Takes 24 Hours",
    warranty: "1 Month Warranty",
    details: 140,
    recommended: false,
    badge: "CASHLESS AVAILABLE",
    description: "For insured vehicles - Cashless facility available",
    includes: ["Free Pickup & Drop", "Dedicated Service Buddy", "Damage Assessment", "Repair & Restoration", "Insurance Claim Processing"],
    price: 0,
    originalPrice: 0,
    image: "/images/firedamage.jpeg",
  },
  {
    name: "Car Flood Damage",
    duration: "Takes 24 Hours",
    warranty: "1 Month Warranty",
    details: 140,
    recommended: false,
    badge: "CASHLESS AVAILABLE",
    description: "For insured vehicles - Cashless facility available",
    includes: ["Free Pickup & Drop", "Dedicated Service Buddy", "Water Damage Assessment", "Engine & Electrical Check", "Insurance Claim Processing"],
    price: 0,
    originalPrice: 0,
    image: "/images/carFloodDamage.jpeg",
  },
  {
    name: "Windshield Replacement (Insured)",
    duration: "Takes 24 Hours",
    warranty: "1 Month Warranty on Fitting",
    details: 120,
    recommended: false,
    description: "For insured vehicles - Cashless doorstep service",
    includes: ["Doorstep Service Available", "ISI Approved Windshield", "Cashless Facility", "Insurance Claim Processing"],
    price: 0,
    originalPrice: 0,
    image: "/images/windshield-insured.jpeg",
  },
];

const theftLost = [
  {
    name: "Tyres & Wheel Replacement (Insured)",
    duration: "Takes 24 Hours",
    warranty: "1 Month Warranty",
    details: 120,
    recommended: false,
    badge: "CASHLESS AVAILABLE",
    description: "For insured vehicles - Cashless facility available",
    includes: ["Free Pickup & Drop", "Dedicated Service Buddy", "Tyre & Wheel Replacement", "Insurance Claim Processing"],
    price: 0,
    originalPrice: 0,
    image: "/images/tyreinsured.jpeg",
  },
  {
    name: "Battery Replacement (Insured)",
    duration: "Takes 24 Hours",
    warranty: "1 Month Warranty",
    details: 110,
    recommended: false,
    description: "For insured vehicles - Cashless facility available",
    includes: ["Free Pickup & Drop", "Dedicated Service Buddy", "Battery Replacement", "Insurance Claim Processing"],
    price: 0,
    originalPrice: 0,
    image: "/images/batterinsured.jpeg",
  },
  {
    name: "Key Replacement (Insured)",
    duration: "Takes 24 Hours",
    warranty: "1 Month Warranty",
    details: 110,
    recommended: false,
    description: "For insured vehicles - Cashless facility available",
    includes: ["Free Pickup & Drop", "Dedicated Service Buddy", "Key Replacement & Programming", "Insurance Claim Processing"],
    price: 0,
    originalPrice: 0,
    image: "/images/keyreplace.jpeg",
  },
  {
    name: "ECM Replacement (Insured)",
    duration: "Takes 24 Hours",
    warranty: "1 Month Warranty",
    details: 120,
    recommended: false,
    description: "For insured vehicles - Cashless facility available",
    includes: ["Free Pickup & Drop", "Dedicated Service Buddy", "ECM Replacement & Programming", "Insurance Claim Processing"],
    price: 0,
    originalPrice: 0,
    image: "/images/ecm.jpeg",
  },
  {
    name: "Car Theft Claim",
    duration: "Consultation",
    warranty: "No Warranty",
    details: 130,
    recommended: false,
    description: "For insured vehicles - Complete claim assistance",
    includes: ["Claim Intimation", "Document Consultation", "Co-ordination with Insurance Company", "Follow-up & Settlement"],
    price: 0,
    originalPrice: 0,
    image: "/images/cartheft.jpeg",
  },
];

const inspection = [
  {
    name: "Doorstep Accidental Inspection",
    duration: "Takes 4 Hours",
    warranty: "No Warranty",
    details: 110,
    recommended: false,
    description: "25 points checklist at your doorstep",
    includes: ["25 Points Checklist", "Damage Assessment", "Repair Estimate", "Claim Guidance"],
    price: 499,
    originalPrice: 799,
    image: "/images/doorstep.jpeg",
  },
  {
    name: "Towing (For Insured Vehicles)",
    duration: "Free Towing",
    warranty: "No Warranty",
    details: 90,
    recommended: false,
    description: "Cashless towing facility for insured vehicles",
    includes: ["Free Towing", "Cashless Facility", "Safe Vehicle Transport"],
    price: 0,
    originalPrice: 0,
    image: "/images/towing.jpeg",
  },
  {
    name: "Insurance Claim Inspection",
    duration: "Takes 4 Hours",
    warranty: "No Warranty",
    details: 120,
    recommended: false,
    badge: "FREE PICKUP & DROP",
    description: "Complete inspection with real-time claim tracking",
    includes: ["Free Pick Up & Drop", "Dedicated Service Buddy", "Real Time Claim Tracking", "Detailed Inspection Report"],
    price: 0,
    originalPrice: 0,
    image: "/images/insurance1.jpeg",
  },
];

export default function InsuranceClaimsPage() {
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
                Insurance Claims in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-8">
                Your trusted local <span className="font-semibold text-gray-900">insurance claim specialist</span> serving Ghaziabad with hassle-free cashless insurance claims, accidental repairs & theft assistance.
              </p>

              {/* Know Your Policy */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Know Your Policy</h2>
              <div className="space-y-4 mb-10">
                {knowYourPolicy.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Accidental Repairs */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Accidental Repairs</h2>
              <div className="space-y-4 mb-10">
                {accidentalRepairs.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Theft / Lost */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Theft / Lost</h2>
              <div className="space-y-4 mb-10">
                {theftLost.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Inspection */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Inspection</h2>
              <div className="space-y-4">
                {inspection.map((pkg) => (
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
