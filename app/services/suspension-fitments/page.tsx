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
  title: "Suspension & Fitments in Ghaziabad | Mittal Car Care",
  description: "Professional suspension repair, steering repair, shock absorber replacement and fitment services in Ghaziabad. All car brands serviced.",
};

const steering = [
  {
    name: "EPS Module Repair",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 130,
    recommended: false,
    badge: "NEW",
    description: "Improves steering performance",
    includes: ["EPS Module Inspection", "Module Repair", "Calibration", "Steering Test"],
    price: 3999,
    originalPrice: 5499,
    image: "/images/Icons/suspension.svg",
  },
  {
    name: "Steering Rack Repair",
    duration: "Takes 8 Hours",
    warranty: "1 Month Warranty",
    details: 140,
    recommended: false,
    description: "Improves steering handling",
    includes: ["Rack Inspection", "Seal Replacement", "Rack Repair", "Power Steering Fluid Top-up", "Test Drive"],
    price: 4499,
    originalPrice: 5999,
    image: "/images/Icons/suspension.svg",
  },
];

const suspension = [
  {
    name: "Front Shock Absorber Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 135,
    recommended: false,
    badge: "FREE CAR WASH",
    description: "Reduces suspension noise - Cost for single unit",
    includes: ["Old Shock Absorber Removal", "New Shock Absorber Installation", "Suspension Alignment", "Test Drive"],
    price: 2999,
    originalPrice: 3999,
    image: "/images/Icons/suspension.svg",
  },
  {
    name: "Rear Shock Absorber Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 135,
    recommended: false,
    description: "Reduces suspension noise - Cost for single unit",
    includes: ["Old Shock Absorber Removal", "New Shock Absorber Installation", "Suspension Check", "Test Drive"],
    price: 2499,
    originalPrice: 3499,
    image: "/images/Icons/suspension.svg",
  },
  {
    name: "Suspension Lower Arm Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 130,
    recommended: false,
    description: "Cost for single unit - Spare part price only",
    includes: ["Old Lower Arm Removal", "New Lower Arm Installation", "Wheel Alignment", "Test Drive"],
    price: 3499,
    originalPrice: 4999,
  },
  {
    name: "Link Rod Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 120,
    recommended: false,
    description: "Cost for single unit - Spare part price only",
    includes: ["Old Link Rod Removal", "New Link Rod Installation", "Suspension Check"],
    price: 999,
    originalPrice: 1499,
  },
  {
    name: "Tie Rod End Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 120,
    recommended: false,
    description: "Cost for single unit - Spare part price only",
    includes: ["Old Tie Rod End Removal", "New Tie Rod End Installation", "Wheel Alignment"],
    price: 1299,
    originalPrice: 1799,
  },
  {
    name: "Complete Suspension Inspection",
    duration: "Takes 4 Hours",
    warranty: "No Warranty",
    details: 110,
    recommended: false,
    description: "25 points check with upfront estimate",
    includes: ["Shock Absorber Check", "Spring Inspection", "Bushing Check", "Steering Linkage Inspection", "Report & Estimate"],
    price: 499,
    originalPrice: 799,
  },
  {
    name: "Front Shocker Mount Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 125,
    recommended: false,
    description: "Prevents suspension component failure - Cost for single unit",
    includes: ["Old Mount Removal", "New Mount Installation", "Alignment Check", "Test Drive"],
    price: 1499,
    originalPrice: 2199,
  },
  {
    name: "Front Axle Repair",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 130,
    recommended: false,
    description: "Prevents car breakdown",
    includes: ["Axle Inspection", "CV Joint Repair", "Boot Replacement", "Greasing", "Test Drive"],
    price: 2999,
    originalPrice: 3999,
  },
];

const fitments = [
  {
    name: "Engine Mounting Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 125,
    recommended: false,
    description: "Prevents engine damage - Spare part price only",
    includes: ["Old Mount Removal", "New Engine Mount Installation", "Vibration Check"],
    price: 1999,
    originalPrice: 2999,
  },
  {
    name: "Gear Box Mounting Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 125,
    recommended: false,
    description: "Prevents engine damage - Spare part price only",
    includes: ["Old Mount Removal", "New Gearbox Mount Installation", "Vibration Check"],
    price: 1999,
    originalPrice: 2999,
  },
  {
    name: "Fuel Pump Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 130,
    recommended: false,
    description: "Better fuel efficiency - Spare part price only",
    includes: ["Old Pump Removal", "New Fuel Pump Installation", "Fuel Line Check", "Performance Test"],
    price: 3499,
    originalPrice: 4999,
  },
  {
    name: "ECM Repair",
    duration: "Takes 8 Hours",
    warranty: "1 Month Warranty",
    details: 140,
    recommended: false,
    description: "Prevents electrical malfunction",
    includes: ["ECM Diagnostic", "Circuit Repair", "Reprogramming", "System Test"],
    price: 4999,
    originalPrice: 6999,
  },
  {
    name: "Water Pump Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 125,
    recommended: false,
    description: "Prevents engine overheating",
    includes: ["Old Pump Removal", "New Water Pump Installation", "Coolant Refill", "Leak Test"],
    price: 2499,
    originalPrice: 3499,
  },
  {
    name: "Starter Motor Repair",
    duration: "Takes 5 Hours",
    warranty: "1 Month Warranty",
    details: 120,
    recommended: false,
    description: "Improves battery life",
    includes: ["Starter Motor Inspection", "Brush & Solenoid Repair", "Reassembly", "Crank Test"],
    price: 1999,
    originalPrice: 2999,
  },
  {
    name: "Power Window Repair",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 115,
    recommended: false,
    description: "Smooth window functioning",
    includes: ["Window Motor Inspection", "Regulator Check", "Repair/Replacement", "Operation Test"],
    price: 1499,
    originalPrice: 2199,
  },
  {
    name: "Door Latch Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 110,
    recommended: false,
    description: "Smooth door functioning",
    includes: ["Old Latch Removal", "New Latch Installation", "Lock Alignment", "Operation Test"],
    price: 999,
    originalPrice: 1499,
  },
  {
    name: "Mud Flaps",
    duration: "Takes 2 Hours",
    warranty: "No Warranty",
    details: 90,
    recommended: false,
    description: "Enhanced durability - Set of 4",
    includes: ["Old Flap Removal (if any)", "New Mud Flap Fitting", "Alignment Check"],
    price: 599,
    originalPrice: 899,
  },
];

export default function SuspensionFitmentsPage() {
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
                Suspension & Fitments in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-8">
                Your trusted local <span className="font-semibold text-gray-900">suspension & fitment specialist</span> serving Ghaziabad with expert steering, suspension and fitment services.
              </p>

              {/* Steering */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Steering</h2>
              <div className="space-y-4 mb-10">
                {steering.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Suspension */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Suspension</h2>
              <div className="space-y-4 mb-10">
                {suspension.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Fitments */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Fitments</h2>
              <div className="space-y-4">
                {fitments.map((pkg) => (
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
