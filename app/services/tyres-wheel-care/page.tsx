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
  title: "Tyres & Wheel Care in Ghaziabad | Mittal Car Care",
  description: "Car tyre replacement from top brands like Apollo, MRF, JK, Bridgestone, GoodYear. Complete wheel care services in Ghaziabad.",
};

const apolloTyres = [
  {
    name: "Apollo Alnac 4GS",
    duration: "Fitting Included",
    warranty: "5 Years Warranty",
    details: 110,
    recommended: true,
    badge: "RECOMMENDED",
    description: "Size - 175/65 R15 84H • Tubeless",
    includes: ["Tyre Fitting", "Wheel Balancing", "Valve Replacement", "Old Tyre Disposal"],
    price: 3999,
    originalPrice: 4799,
    image: "/images/Icons/tyre.svg",
  },
];

const mrfTyres = [
  {
    name: "MRF ZVTV",
    duration: "Fitting Included",
    warranty: "6 Years Warranty",
    details: 115,
    recommended: false,
    description: "Size - 175/65 R15 84TL • Tubeless",
    includes: ["Tyre Fitting", "Wheel Balancing", "Valve Replacement", "Old Tyre Disposal"],
    price: 4299,
    originalPrice: 5199,
    image: "/images/Icons/tyre.svg",
  },
];

const jkTyres = [
  {
    name: "JK UX Royale",
    duration: "Fitting Included",
    warranty: "5 Years Warranty",
    details: 110,
    recommended: false,
    description: "Size - 175/65 R15 • Tubeless",
    includes: ["Tyre Fitting", "Wheel Balancing", "Valve Replacement", "Old Tyre Disposal"],
    price: 3499,
    originalPrice: 4299,
    image: "/images/Icons/tyre.svg",
  },
];

const bridgestoneTyres = [
  {
    name: "Bridgestone B290",
    duration: "Fitting Included",
    warranty: "5 Years Warranty",
    details: 110,
    recommended: false,
    description: "Size - 175/65 R15 84T • Tubeless",
    includes: ["Tyre Fitting", "Wheel Balancing", "Valve Replacement", "Old Tyre Disposal"],
    price: 4499,
    originalPrice: 5299,
    image: "/images/Icons/tyre.svg",
  },
  {
    name: "Bridgestone B250",
    duration: "Fitting Included",
    warranty: "5 Years Warranty",
    details: 115,
    recommended: false,
    description: "Size - 175/65 R15 87H • Tubeless",
    includes: ["Tyre Fitting", "Wheel Balancing", "Valve Replacement", "Old Tyre Disposal"],
    price: 4799,
    originalPrice: 5699,
    image: "/images/Icons/tyre.svg",
  },
];

const goodyearTyres = [
  {
    name: "GoodYear Assurance TripleMax",
    duration: "Fitting Included",
    warranty: "5 Years Warranty",
    details: 110,
    recommended: false,
    description: "Size - 175/65 R15 88S • Tubeless",
    includes: ["Tyre Fitting", "Wheel Balancing", "Valve Replacement", "Old Tyre Disposal"],
    price: 4199,
    originalPrice: 4999,
    image: "/images/Icons/tyre.svg",
  },
];

const wheelCare = [
  {
    name: "Complete Wheel Care",
    duration: "Takes 4 Hours",
    warranty: "1 Month Warranty",
    details: 120,
    recommended: false,
    badge: "EVERY 5000 KMS / 6 MONTHS",
    description: "Alignment, balancing & rotation included",
    includes: ["Wheel Alignment", "Wheel Balancing", "Tyre Rotation", "Tyre Pressure Check", "Visual Inspection"],
    price: 1049,
    originalPrice: 1499,
    image: "/images/Icons/tyre.svg",
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
    image: "/images/Icons/tyre.svg",
  },
];

export default function TyresWheelCarePage() {
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
                Tyres & Wheel Care in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-8">
                Your trusted local <span className="font-semibold text-gray-900">tyre & wheel care specialist</span> serving Ghaziabad with top brand tyres and complete wheel care services.
              </p>

              {/* Apollo */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Apollo</h2>
              <div className="space-y-4 mb-10">
                {apolloTyres.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* MRF */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">MRF</h2>
              <div className="space-y-4 mb-10">
                {mrfTyres.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* JK */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">JK</h2>
              <div className="space-y-4 mb-10">
                {jkTyres.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Bridgestone */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Bridgestone</h2>
              <div className="space-y-4 mb-10">
                {bridgestoneTyres.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* GoodYear */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">GoodYear</h2>
              <div className="space-y-4 mb-10">
                {goodyearTyres.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Wheel Care Services */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Wheel Care Services</h2>
              <div className="space-y-4">
                {wheelCare.map((pkg) => (
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
