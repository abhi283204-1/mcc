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
  title: "Windshields & Lights in Ghaziabad | Mittal Car Care",
  description: "Professional windshield replacement, door glass replacement, headlight, taillight, fog light and side mirror replacement services in Ghaziabad.",
};

const windshields = [
  {
    name: "Front Windshield Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty on Fitting",
    details: 130,
    recommended: true,
    badge: "ISI APPROVED",
    description: "ISI approved windshield - Labour Included",
    includes: ["Old Windshield Removal", "New ISI Approved Windshield Fitting", "Adhesive & Sealant Application", "Leak Test", "Wiper Alignment"],
    price: 3999,
    originalPrice: 5499,
    image: "/images/Icons/wiper.svg",
  },
  {
    name: "Rear Windshield Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty on Fitting",
    details: 120,
    recommended: false,
    description: "ISI approved windshield - Labour Included",
    includes: ["Old Windshield Removal", "New ISI Approved Windshield Fitting", "Adhesive & Sealant Application", "Leak Test", "Defogger Connection Check"],
    price: 2999,
    originalPrice: 4299,
    image: "/images/Icons/wiper.svg",
  },
];

const glasses = [
  {
    name: "Door Glass Replacement",
    duration: "Takes 6 Hours",
    warranty: "1 Month Warranty on Fitting",
    details: 110,
    recommended: false,
    description: "AIS approved glass - Labour Included",
    includes: ["Old Glass Removal", "New AIS Approved Glass Fitting", "Window Regulator Check", "Seal Replacement", "Operation Test"],
    price: 1999,
    originalPrice: 2999,
    image: "/images/Icons/wiper.svg",
  },
];

const lights = [
  {
    name: "Front Headlight Replacement",
    duration: "Takes 4 Hours",
    warranty: "1 Month Warranty on Fitting",
    details: 120,
    recommended: false,
    badge: "ENHANCES NIGHT DRIVING",
    description: "Enhances night driving experience",
    includes: ["Old Headlight Removal", "New Headlight Installation", "Beam Alignment", "Wiring Check", "Light Output Test"],
    price: 2999,
    originalPrice: 4299,
    image: "/images/Icons/wiper.svg",
  },
  {
    name: "Rear Taillight Replacement",
    duration: "Takes 4 Hours",
    warranty: "1 Month Warranty on Fitting",
    details: 100,
    recommended: false,
    description: "Easy installation with perfect fitment",
    includes: ["Old Taillight Removal", "New Taillight Installation", "Wiring Check", "Bulb Test"],
    price: 1999,
    originalPrice: 2999,
    image: "/images/Icons/wiper.svg",
  },
  {
    name: "Fog Light Replacement",
    duration: "Takes 4 Hours",
    warranty: "1 Month Warranty on Fitting",
    details: 100,
    recommended: false,
    description: "Improved visibility in poor weather",
    includes: ["Old Fog Light Removal", "New Fog Light Installation", "Beam Alignment", "Wiring Check"],
    price: 1499,
    originalPrice: 2299,
    image: "/images/Icons/wiper.svg",
  },
];

const sideMirror = [
  {
    name: "Side Mirror Replacement",
    duration: "Takes 4 Hours",
    warranty: "1 Month Warranty",
    details: 110,
    recommended: false,
    description: "Enhances overall rear visibility",
    includes: ["Old Mirror Removal", "New Mirror Installation", "Adjustment & Alignment", "Electrical Connection Check"],
    price: 1499,
    originalPrice: 2199,
    image: "/images/Icons/wiper.svg",
  },
];

export default function WindshieldsLightsPage() {
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
                Windshields & Lights in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-8">
                Your trusted local <span className="font-semibold text-gray-900">windshield & lights specialist</span> serving Ghaziabad with ISI approved windshields, headlights, taillights and side mirror replacement services.
              </p>

              {/* Windshields */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Windshields</h2>
              <div className="space-y-4 mb-10">
                {windshields.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Glasses */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Glasses</h2>
              <div className="space-y-4 mb-10">
                {glasses.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Lights */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Lights</h2>
              <div className="space-y-4 mb-10">
                {lights.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Side Mirror */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Side Mirror</h2>
              <div className="space-y-4">
                {sideMirror.map((pkg) => (
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
