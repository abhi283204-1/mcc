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
import {
  getMccServices,
  getActiveMccService,
  mergePackageWithMccService,
  type MccPackage,
} from "@/lib/mcc-api";

export const metadata: Metadata = {
  title: "Body Type Conversion in Ghaziabad | Mittal Car Care",
  description: "New generation facelift, top variant upgrades, bumper & light conversion, alloy wheel upgrade and custom body kits in Ghaziabad. Factory-like finish guaranteed.",
};

const bodyFacelift = [
  {
    name: "New Generation Facelift Conversion",
    price: 0, // quote only, keep 0
    originalPrice: undefined,
    duration: "Takes 7-10 Days", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "FACTORY-LIKE FINISH",
    recommended: true,
    description: "Convert an older model to the latest-generation look, with matching panels, lights and paint",
    includes: [
      "Front & Rear Bumper Conversion",
      "Headlamp, Tail Lamp & Grille Upgrade",
      "Panel Fitting & Alignment",
      "Paint & Colour Matching",
      "Final Finishing & Quality Check",
    ],
  },
  {
    name: "Front Look Conversion",
    price: 0, // quote only, keep 0
    originalPrice: undefined,
    duration: "Takes 4-5 Days", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Give your car the new-generation front look",
    includes: [
      "Front Bumper & Grille Conversion",
      "Headlamp Fitting",
      "Bonnet & Fender Alignment",
      "Paint & Colour Matching",
      "Finishing & Quality Check",
    ],
    image: "/images/icons/front-look-conversion.jpeg",
  },
  {
    name: "Rear Look Conversion",
    price: 0, // quote only, keep 0
    originalPrice: undefined,
    duration: "Takes 3-4 Days", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Give your car the new-generation rear look",
    includes: [
      "Rear Bumper Conversion",
      "Tail Lamp Fitting",
      "Boot Garnish & Trim Fitting",
      "Paint & Colour Matching",
      "Finishing & Quality Check",
    ],
    image: "/images/icons/rear-look-conversion.jpeg",
  },
  {
    name: "Top Variant Upgrade",
    price: 0, // quote only, keep 0
    originalPrice: undefined,
    duration: "Takes 3-5 Days", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "BASE TO TOP LOOK",
    recommended: false,
    description: "Give your base or mid variant the look and features of the top model",
    includes: [
      "Alloy Wheels",
      "Fog Lamps & Projector Headlamps",
      "Grille & Chrome Garnish",
      "Body-Colour Mirrors & Door Handles",
      "Fitting & Alignment",
    ],
  },
];

const bodyBumpers = [
  {
    name: "Front Bumper Conversion",
    price: 0, // quote only, keep 0
    originalPrice: undefined,
    duration: "Takes 2 Days", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Change to a new-style or top-variant front bumper",
    includes: [
      "Old Bumper Removal",
      "New Bumper Fitting",
      "Grille & Fog Lamp Fitting",
      "Paint & Colour Matching",
    ],
    image: "/images/icons/front-bumper-conversion.jpeg",
  },
  {
    name: "Rear Bumper Conversion",
    price: 0, // quote only, keep 0
    originalPrice: undefined,
    duration: "Takes 2 Days", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Change to a new-style or top-variant rear bumper",
    includes: [
      "Old Bumper Removal",
      "New Bumper Fitting",
      "Reflector & Trim Fitting",
      "Paint & Colour Matching",
    ],
    image: "/images/icons/rear-bumper-conversion.jpeg",
  },
];

const bodyLights = [
  {
    name: "Projector Headlamp Upgrade",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 4 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "BETTER NIGHT VISIBILITY",
    recommended: true,
    description: "Brighter, sharper night visibility with a premium look",
    includes: [
      "Old Headlamp Removal",
      "Projector Headlamp Fitting",
      "Wiring & Relay Setup",
      "Beam Alignment",
      "Night Test",
    ],
    image: "/images/icons/projector-headlamp.jpeg",
  },
  {
    name: "LED Tail Lamp Upgrade",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 3 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Modern LED tail lamps for a fresh look",
    includes: [
      "Old Tail Lamp Removal",
      "LED Tail Lamp Fitting",
      "Wiring & Connector Setup",
      "Brake & Indicator Function Test",
    ],
    image: "/images/icons/led-tail-lamp.jpeg",
  },
  {
    name: "Fog Lamp Fitting",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 2 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Better visibility in fog and rain",
    includes: [
      "Fog Lamp Set Fitting",
      "Wiring & Switch Setup",
      "Bumper Fitment Check",
      "Beam Alignment",
    ],
    image: "/images/icons/fog-lamp-fitting.jpeg",
  },
  {
    name: "DRL Fitting",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 2 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Daytime running lights for a modern, premium look",
    includes: [
      "DRL Unit Fitting",
      "Wiring & Auto On/Off Setup",
      "Brightness Check",
    ],
    image: "/images/icons/drl-fitting.jpeg",
  },
];

const bodyStyling = [
  {
    name: "Steel to Alloy Wheel Upgrade",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 3 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: true,
    description: "Upgrade from steel wheels to alloy wheels for a better look and ride",
    includes: [
      "Alloy Wheel Set Fitting",
      "Wheel Balancing",
      "Wheel Alignment",
      "Tyre Fitment Check",
    ],
    image: "/images/icons/alloy-wheel-upgrade.jpeg",
  },
  {
    name: "Chrome Garnish Kit Fitting",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 2 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Adds a premium chrome finish to the grille, doors and body trim",
    includes: [
      "Chrome Garnish Set Fitting",
      "Surface Cleaning",
      "Final Fitment Check",
    ],
  },
  {
    name: "Body Kit Fitting (Skirts and Diffuser)",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 3 Days", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "CUSTOMISE YOUR CAR",
    recommended: false,
    description: "Body kit parts fitted and painted to match your car",
    includes: [
      "Side Skirts Fitting",
      "Front & Rear Lip / Diffuser Fitting",
      "Surface Preparation & Painting",
      "Colour Matching",
      "Finishing & Polishing",
    ],
    image: "/images/icons/body-kit-fitting.jpeg",
  },
  {
    name: "Spoiler Fitting",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 3 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Sporty look with a rear spoiler",
    includes: [
      "Spoiler Fitting",
      "Surface Preparation",
      "Painting to Match (if required)",
      "Final Fitment Check",
    ],
    image: "/images/icons/spoiler-fitting.jpeg",
  },
  {
    name: "Roof Rails Fitting",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 2 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Stylish roof rails with support for roof carriers",
    includes: [
      "Roof Rails Fitting",
      "Mounting Point Check",
      "Sealant Application",
      "Final Fitment Check",
    ],
  },
];

export default async function BodyTypeConversionPage() {
  const mccServices = await getMccServices();

  const mergeActivePackages = (packages: MccPackage[]): MccPackage[] =>
    packages
      .map((pkg) => {
        const service = getActiveMccService(pkg.name, mccServices);
        return mergePackageWithMccService(pkg, service);
      })
      .filter((pkg) => {
        const service = getActiveMccService(pkg.name, mccServices);
        return service !== null;
      });

  const mergedFacelift = mergeActivePackages(bodyFacelift);
  const mergedBumpers = mergeActivePackages(bodyBumpers);
  const mergedLights = mergeActivePackages(bodyLights);
  const mergedStyling = mergeActivePackages(bodyStyling);

  return (
    <>
      <Navbar />
      <main className="pt-[96px] sm:pt-[108px] bg-white min-h-screen">
        <ServiceCategoryTabs />

        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-10">
            {/* LEFT COLUMN */}
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                Body Type Conversion in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-4">
                Give your car a new identity. With over{" "}
                <span className="font-semibold text-gray-900">40 years of workshop experience</span>, we convert and upgrade your car&apos;s look: from new-generation facelifts and top-variant upgrades to bumpers, lights and alloy wheels. Every conversion is fitted, aligned and paint-matched for a clean, factory-like finish.
              </p>
              <p className="text-gray-400 text-xs mb-8 italic">
                Note: Structural modifications are subject to local RTO rules.
              </p>

              {/* Facelift Conversions */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Facelift Conversions</h2>
              <div className="space-y-4 mb-10">
                {mergedFacelift.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Bumper Conversions */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Bumper Conversions</h2>
              <div className="space-y-4 mb-10">
                {mergedBumpers.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Lights Upgrade */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Lights Upgrade</h2>
              <div className="space-y-4 mb-10">
                {mergedLights.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Wheels and Styling */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Wheels and Styling</h2>
              <div className="space-y-4">
                {mergedStyling.map((pkg) => (
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
