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
  title: "Car Services in Delhi | Mittal Car Care",
  description: "Scheduled car service packages, brake maintenance and repair for all car brands in Delhi. Basic, Standard & Comprehensive services available.",
};

const scheduledPackages = [
  {
    name: "Basic Service",
    duration: "Takes 4 Hours",
    warranty: "1 Month Warranty",
    details: 9,
    recommended: false,
    badge: "EVERY 5000 KMS / 3 MONTHS",
    description: "Every 5,000 Kms or 3 Months (Recommended)",
    includes: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Cleaning", "Coolant Top-up", "Wiper Fluid Replacement", "Battery Water Top-up", "Interior Vacuuming", "Car Wash", "Brake Inspection"],
    price: 2099,
    originalPrice: 3178,
    image: "/images/Icons/basic-service.jpeg",
  },
  {
    name: "Standard Service",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 15,
    recommended: true,
    badge: "FREE AC GAS TOP-UP",
    description: "Every 10,000 Kms or 6 Months (Recommended)",
    includes: ["Basic Service Inclusions", "Front Brake Pads Inspection", "Spark Plug Cleaning", "Car Scanning", "Fuel Filter Check", "AC Gas Top-up", "AC Filter Cleaning", "Suspension Inspection", "Tyre Rotation"],
    price: 3999,
    originalPrice: 5378,
    image: "/images/Icons/standard-service.jpeg",
  },
  {
    name: "Comprehensive Service",
    duration: "Takes 8 Hours",
    warranty: "1 Month Warranty",
    details: 20,
    recommended: false,
    badge: "EVERY 20000 KMS / 1 YEAR",
    description: "Every 20,000 Kms or 1 Year (Recommended)",
    includes: ["Standard Service Inclusions", "Transmission Fluid Replacement", "Brake Fluid Replacement", "Coolant Flush & Replace", "Throttle Body Cleaning", "Fuel Injector Cleaning", "Wheel Alignment", "Wheel Balancing", "Complete Underbody Wash"],
    price: 5999,
    originalPrice: 8308,
    image: "/images/Icons/Comprehensive-Service.jpeg",
  },
];

const brakeMaintenancePackages = [
  {
    name: "Front Brake Pads",
    duration: "Takes 3 Hours",
    warranty: "1 Month Warranty",
    details: 3,
    recommended: false,
    description: "For Both Front Wheels - Labour Included",
    includes: ["Old Brake Pads Removal", "New Brake Pads Installation", "Brake Performance Check"],
    price: 1299,
    originalPrice: 2048,
    image: "/images/Icons/front-break-pads.jpeg",
  },
  {
    name: "Rear Brake Shoes",
    duration: "Takes 3 Hours",
    warranty: "1 Month Warranty",
    details: 3,
    recommended: false,
    description: "For Both Rear Wheels - Labour Included",
    includes: ["Old Brake Shoes Removal", "New Brake Shoes Installation", "Brake Performance Check"],
    price: 1599,
    originalPrice: 2398,
    image: "/images/Icons/rear-break-shoes.jpeg",
  },
  {
    name: "Front Brake Discs",
    duration: "Takes 5 Hours",
    warranty: "1 Month Warranty",
    details: 3,
    recommended: false,
    badge: "NEW",
    description: "Cost For Single Wheel",
    includes: ["Old Disc Removal", "New Brake Disc Installation", "Brake Performance Check"],
    price: 2499,
    originalPrice: 3499,
    image: "/images/Icons/break-disc.jpeg",
  },
  {
    name: "Caliper Pin Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 4,
    recommended: false,
    description: "Prevent Brake Failure - Cost For Single Wheel",
    includes: ["Caliper Inspection", "Old Pin Removal", "New Caliper Pin Fitting", "Brake Performance Test"],
    price: 899,
    originalPrice: 1299,
    image: "/images/Icons/Caliper-Pin.jpeg",
  },
  {
    name: "Disc Turning",
    duration: "Takes 4 Hours",
    warranty: "1 Month Warranty on Labour",
    details: 3,
    recommended: false,
    badge: "NEW",
    description: "For Both Front Wheels",
    includes: ["Disc Inspection", "Disc Turning/Resurfacing", "Brake Performance Check"],
    price: 999,
    originalPrice: 1499,
    image: "/images/Icons/disc-turning.jpeg",
  },
  {
    name: "Handbrake Wire Replacement",
    duration: "Takes 4 Hours",
    warranty: "1 Month Warranty",
    details: 3,
    recommended: false,
    description: "Ensures proper handbrake function",
    includes: ["Old Wire Removal", "New Handbrake Wire Fitting", "Handbrake Adjustment"],
    price: 799,
    originalPrice: 1199,
    image: "/images/Icons/handbreak-wire.jpeg",
  },
  {
    name: "Brake Drums Turning",
    duration: "Takes 4 Hours",
    warranty: "1 Month Warranty on Labour",
    details: 3,
    recommended: false,
    badge: "NEW",
    description: "For Both Rear Wheels",
    includes: ["Drum Inspection", "Drum Turning/Resurfacing", "Brake Performance Check"],
    price: 999,
    originalPrice: 1499,
    image: "/images/Icons/break-drum-turning.jpeg",
  },
  {
    name: "Wheel Cylinder Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty",
    details: 3,
    recommended: false,
    description: "Prevents Brake Failure",
    includes: ["Old Cylinder Removal", "New Wheel Cylinder Fitting", "Brake Fluid Top-up"],
    price: 1299,
    originalPrice: 1899,
    image: "/images/Icons/wheel-cylinder.jpeg",
  },
];

export default function CarServicesPage() {
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
                Car Services in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-8">
                Your trusted local <span className="font-semibold text-gray-900">car service specialist</span> serving Delhi with premium scheduled car service & brake maintenance.
              </p>

              {/* Scheduled Packages */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Scheduled Packages</h2>
              <div className="space-y-4 mb-10">
                {scheduledPackages.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Brake Maintenance */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Brake Maintenance</h2>
              <div className="space-y-4">
                {brakeMaintenancePackages.map((pkg) => (
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
