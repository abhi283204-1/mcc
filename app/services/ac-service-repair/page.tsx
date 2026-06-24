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
  title: "AC Service & Repair in Delhi | Mittal Car Care",
  description: "Professional AC service, gas refilling, compressor repair and cooling system diagnostics for all car brands in Delhi.",
};

const servicePackages = [
  {
    name: "Regular AC Service",
    duration: "Takes 4 Hours",
    warranty: "500 Kms or 1 Month Warranty",
    details: 134,
    recommended: false,
    badge: "FREE AC UNIT INSPECTION",
    description: "Every 5,000 Kms or 3 Months (Recommended)",
    includes: ["AC Vent Cleaning", "AC Inspection", "AC Gas (upto 400 gms)", "Condenser Cleaning", "AC Filter Cleaning"],
    price: 2499,
    originalPrice: 3332,
    image: "/images/Icons/ac-service.svg",
  },
  {
    name: "High Performance AC Service",
    duration: "Takes 8 Hours",
    warranty: "1,000 Kms or 1 Month Warranty",
    details: 269,
    recommended: true,
    badge: "FREE AC GAS",
    description: "Every 10,000 Kms or 1 Year (Recommended)",
    includes: ["AC Vent Cleaning", "AC Leak Test", "Dashboard Removing Refitting", "Dashboard Cleaning", "AC Gas (Upto 600gms)"],
    price: 3499,
    originalPrice: 4999,
    image: "/images/Icons/ac-service.svg",
  },
];

const fitments = [
  {
    name: "V-Belt Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 135,
    recommended: false,
    description: "Recommended when belt is worn or cracked",
    includes: ["Old Belt Removal", "New V-Belt Fitting", "Tension Adjustment"],
    price: 1499,
    originalPrice: 1999,
  },
  {
    name: "Compressor Replacement",
    duration: "Takes 8 Hours",
    warranty: "1 Month Warranty",
    details: 159,
    recommended: false,
    description: "When AC is not cooling due to compressor failure",
    includes: ["Old Compressor Removal", "New Compressor Installation", "AC Gas Top-up", "Leak Test"],
    price: 5999,
    originalPrice: 7999,
  },
  {
    name: "Condenser Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 142,
    recommended: false,
    description: "Required when condenser is damaged or leaking",
    includes: ["Old Condenser Removal", "New Condenser Fitting", "AC Gas Refill", "Performance Check"],
    price: 4499,
    originalPrice: 5999,
  },
  {
    name: "Cooling Coil Replacement",
    duration: "Takes 8 Hours",
    warranty: "1 Month Warranty",
    details: 159,
    recommended: false,
    description: "When cooling coil is damaged causing AC gas leakage",
    includes: ["Dashboard Removal", "Old Coil Removal", "New Cooling Coil Fitting", "AC Gas Refill", "Leak Test"],
    price: 4999,
    originalPrice: 6499,
  },
];

const radiator = [
  {
    name: "Radiator Flush & Clean",
    duration: "Takes 2 Hours",
    warranty: "1 Month Warranty",
    details: 101,
    recommended: false,
    description: "Removes rust & deposits for better cooling",
    includes: ["Coolant Drain", "Radiator Flush", "Fresh Coolant Refill"],
    price: 1299,
    originalPrice: 1799,
  },
  {
    name: "Radiator Fan Motor Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 143,
    recommended: false,
    description: "When fan motor is not working causing overheating",
    includes: ["Old Motor Removal", "New Fan Motor Fitting", "Wiring Check"],
    price: 2999,
    originalPrice: 3999,
  },
  {
    name: "Radiator Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 139,
    recommended: false,
    description: "Required when radiator is cracked or leaking",
    includes: ["Old Radiator Removal", "New Radiator Installation", "Coolant Refill", "Leak Test"],
    price: 3999,
    originalPrice: 5499,
  },
];

const under49 = [
  {
    name: "AC Inspection",
    duration: "Takes 1 Hour",
    warranty: "1 Month Warranty",
    details: 134,
    recommended: false,
    description: "Complete AC system diagnostic check",
    includes: ["AC Performance Check", "Gas Pressure Test", "Leak Detection"],
    price: 49,
  },
];

const under99 = [
  {
    name: "AC Condenser Cleaning",
    duration: "Takes 1 Hour",
    warranty: "1 Month Warranty",
    details: 134,
    recommended: false,
    description: "Improves AC cooling efficiency",
    includes: ["Condenser Water Wash", "Dirt & Debris Removal", "Airflow Check"],
    price: 99,
  },
];

const under199 = [
  {
    name: "Drive Belt Lubrication",
    duration: "Takes 1 Hour",
    warranty: "1 Month Warranty",
    details: 134,
    recommended: false,
    description: "Reduces belt noise & extends life",
    includes: ["Belt Inspection", "Lubrication Application", "Tension Check"],
    price: 199,
  },
];

export default function ACServicePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[74px] bg-white min-h-screen">
        <ServiceCategoryTabs />

        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-8">
          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-10">
            {/* LEFT COLUMN */}
            <div>
              {/* Page Title */}
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                AC Service & Repair in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-8">
                Your trusted local <span className="font-semibold text-gray-900">car AC specialist</span> serving Delhi with premium doorstep AC service & repair.
              </p>

              {/* Service Packages */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Service Packages</h2>
              <div className="space-y-4 mb-10">
                {servicePackages.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* AC Fitments */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">AC Fitments</h2>
              <div className="space-y-4 mb-10">
                {fitments.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Radiator */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Radiator</h2>
              <div className="space-y-4 mb-10">
                {radiator.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Under 49 */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Under 49</h2>
              <div className="space-y-4 mb-10">
                {under49.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Under 99 */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Under 99</h2>
              <div className="space-y-4 mb-10">
                {under99.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Under 199 */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Under 199</h2>
              <div className="space-y-4">
                {under199.map((pkg) => (
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
