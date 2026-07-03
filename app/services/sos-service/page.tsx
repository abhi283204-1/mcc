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
  title: "SOS Service in Ghaziabad | Mittal Car Care",
  description: "24/7 emergency car breakdown assistance - tyre puncture, battery jumpstart, fuel delivery, towing, clutch breakdown & roadside assistance in Ghaziabad.",
};

const sosServices = [
  {
    name: "Tyre Puncture",
    duration: "Takes up to 1 Hour",
    warranty: "No Warranty",
    details: 90,
    recommended: false,
    badge: "ROADSIDE ASSISTANCE",
    description: "Car tyre puncture & air filling assistance",
    includes: ["Car Tyre Puncture Assistance", "Tyre Air Filling Assistance", "Tyre Inspection", "Doorstep Service"],
    price: 499,
    originalPrice: 799,
    image: "/images/tyrepuncture.jpeg",
  },
  {
    name: "Fuel Assistance",
    duration: "Takes up to 1 Hour",
    warranty: "No Warranty",
    details: 80,
    recommended: false,
    description: "Convenient doorstep fuel delivery",
    includes: ["Fuel Delivery", "Doorstep Refuelling", "Quick Assistance"],
    price: 499,
    originalPrice: 799,
    image: "/images/fuel-assistance.jpeg",
  },
  {
    name: "Battery Jumpstart",
    duration: "Takes up to 1 Hour",
    warranty: "No Warranty",
    details: 80,
    recommended: true,
    badge: "DOORSTEP SERVICE",
    description: "Available at your doorstep",
    includes: ["Battery Jumpstart", "Battery Health Check", "Terminal Inspection", "Doorstep Service"],
    price: 499,
    originalPrice: 799,
    image: "/images/battery-jumpstart.jpeg",
  },
  {
    name: "Car Engine Scanning",
    duration: "Takes up to 1 Hour",
    warranty: "No Warranty",
    details: 100,
    recommended: false,
    description: "Complete OBD-II diagnostic scan",
    includes: ["Visual Inspection for Engine Issues", "Complete OBD-II Diagnostic Scan", "Engine Warning Light Check & Reset", "Diagnostic Report"],
    price: 599,
    originalPrice: 999,
    image: "/images/car-engine-scanning.jpeg",
  },
  {
    name: "Car Fluid Leakage",
    duration: "Takes up to 1 Hour",
    warranty: "No Warranty",
    details: 90,
    recommended: false,
    description: "Identification of leakage source & recommendations",
    includes: ["Identification of Leakage Source", "Estimate & Recommendations", "Fluid Level Check and Top-up", "Doorstep Service"],
    price: 499,
    originalPrice: 799,
    image: "/images/carFluid-leackage.jpeg",
  },
  {
    name: "Wheel-Lift Tow (20 Kms)",
    duration: "Available 24/7",
    warranty: "No Warranty",
    details: 100,
    recommended: false,
    description: "On-site vehicle pick-up and delivery (up to 20 km)",
    includes: ["On-site Vehicle Pick-up", "Vehicle Loading & Unloading Assistance", "Delivery up to 20 Kms", "Safe Transport"],
    price: 1499,
    originalPrice: 2199,
    image: "/images/wheel-lift.jpeg",
  },
  {
    name: "Car Self Starter Issue",
    duration: "Takes up to 1 Hour",
    warranty: "No Warranty",
    details: 90,
    recommended: false,
    description: "Available at your doorstep",
    includes: ["Battery Jumpstart Included", "Fuse and Relay Inspection", "Starter Motor Check", "Doorstep Service"],
    price: 599,
    originalPrice: 999,
    image: "/images/car-starter.jpeg",
  },
  {
    name: "Flat-Bed Tow (20 Kms)",
    duration: "Available 24/7",
    warranty: "No Warranty",
    details: 110,
    recommended: false,
    description: "On-site vehicle pick-up and delivery (20 km included)",
    includes: ["On-site Vehicle Pick-up", "Flat-Bed Loading", "Delivery up to 20 Kms", "Doorstep Service"],
    price: 2499,
    originalPrice: 3499,
    image: "/images/flatbed.jpeg",
  },
  {
    name: "Clutch Breakdown",
    duration: "Available 24/7",
    warranty: "No Warranty",
    details: 100,
    recommended: false,
    description: "Reliable roadside support with towing",
    includes: ["Reliable Roadside Support", "Wheel Lift Tow (up to 20 Kms)", "Doorstep Service", "Safe Transport"],
    price: 1999,
    originalPrice: 2999,
    image: "/images/clutch-breakdown.jpeg",
  },
  {
    name: "Car Flooding",
    duration: "Available 24/7",
    warranty: "No Warranty",
    details: 110,
    recommended: false,
    description: "Car flood assistance & safe towing",
    includes: ["Electrical System Inspection", "Safe Vehicle Towing", "Car Flood Assistance", "Damage Assessment"],
    price: 1999,
    originalPrice: 2999,
    image: "/images/carFlooding.jpeg",
  },
  {
    name: "Insurance Accident",
    duration: "Available 24/7",
    warranty: "No Warranty",
    details: 100,
    recommended: false,
    description: "Safe towing with hassle-free insurance support",
    includes: ["Safe Towing to Workshop", "Hassle-free Insurance Support", "Claim Assistance", "Documentation Help"],
    price: 0,
    originalPrice: 0,
    image: "/images/insurace-Accident.jpeg",
  },
  {
    name: "Brake Failure",
    duration: "Available 24/7",
    warranty: "No Warranty",
    details: 100,
    recommended: false,
    badge: "EMERGENCY",
    description: "Quick & safe assistance at doorstep",
    includes: ["Wheel Lift Tow (up to 10 Kms)", "Doorstep Service", "Quick & Safe Assistance", "Brake Inspection"],
    price: 1499,
    originalPrice: 2199,
    image: "/images/break-faliure.jpeg",
  },
  {
    name: "Wrong Fuel Emergency",
    duration: "Available 24/7",
    warranty: "No Warranty",
    details: 110,
    recommended: false,
    description: "Prevents major engine damage",
    includes: ["Towing to Workshop", "Wheel Lift Tow (up to 10 Kms)", "Fuel System Flush", "Prevents Engine Damage"],
    price: 1999,
    originalPrice: 2999,
    image: "/images/wrong-fuel.jpeg",
  },
  {
    name: "Critical Dashboard Light",
    duration: "Takes up to 1 Hour",
    warranty: "No Warranty",
    details: 90,
    recommended: false,
    description: "Quick resolution of dashboard alerts",
    includes: ["Dashboard Alert Diagnosis", "Early Issue Detection", "Avoid Costly Repairs", "Diagnostic Report"],
    price: 599,
    originalPrice: 999,
    image: "/images/critical-dashboardLight.jpeg",
  },
];

export default function SOSServicePage() {
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
                SOS Service in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-8">
                Your trusted <span className="font-semibold text-gray-900">24/7 emergency roadside assistance</span> serving Ghaziabad with tyre puncture repair, battery jumpstart, towing & breakdown services.
              </p>

              {/* SOS Services */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Emergency Services</h2>
              <div className="space-y-4">
                {sosServices.map((pkg) => (
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
