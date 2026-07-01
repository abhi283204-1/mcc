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
    image: "/images/Icons/regular-ac-service.jpeg",
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
    image: "/images/Icons/hight-performance-ac-service.jpeg",
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
    image: "/images/Icons/v-belt.jpeg",
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
    image: "/images/Icons/compressor.jpeg",
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
    image: "/images/Icons/Condenser.jpg",
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
    image: "/images/Icons/car-cooling-coils.jpg",
  },
  {
    name: "Heating Coil Replacement",
    duration: "Takes 8 Hours",
    warranty: "3 Months Warranty",
    details: 148,
    recommended: false,
    description: "Prevents engine overheating due to faulty heating coil",
    includes: ["Old Heating Coil Removal", "New Heating Coil Fitting", "Coolant Refill", "Leak Test"],
    price: 3999,
    originalPrice: 5499,
    image: "/images/Icons/car-heater-core.jpeg",
  },
  {
    name: "AC Blower Motor Replacement",
    duration: "Takes 8 Hours",
    warranty: "1 Month Warranty",
    details: 155,
    recommended: false,
    description: "When AC blower is not working or making noise",
    includes: ["Old Blower Motor Removal", "New Blower Motor Installation", "Wiring Check", "Performance Test"],
    price: 2999,
    originalPrice: 3999,
    image: "/images/Icons/ac-blower-motor.jpg",
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
    image: "/images/Icons/reverse-flushing-a-radiator.png",
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
    image: "/images/Icons/car-radiator-fan-motor.jpeg",
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
    image: "/images/Icons/radiator-replacement.jpeg",
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
    image: "/images/Icons/ac-inspection.jpeg",
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
    image: "/images/Icons/ac-condencer-cleaning.jpeg",
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
    image: "/images/Icons/drive-belt.jpeg",
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
    </>
  );
}
