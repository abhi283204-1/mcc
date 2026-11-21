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
  title: "Engine Work & Turbo Repair in Ghaziabad | Mittal Car Care",
  description: "Expert engine diagnostics, tuning, overhaul, oil leak repair and turbo repair & replacement in Ghaziabad. 40+ years of workshop experience. Genuine parts.",
};

const engineDiagnosticsTuning = [
  {
    name: "Computer Scanning (Fault Codes)",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 1 Hour", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "CHECK ENGINE LIGHT?",
    recommended: true,
    description: "Scan to read fault codes and find the cause of warning lights",
    includes: [
      "Engine ECU Scan",
      "Fault Code Reading",
      "Code Reset After Repair",
      "Written Report & Advice",
    ],
    image: "/images/icons/engine-scanning.jpg",
  },
  {
    name: "Engine Tuning",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 4 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Restores smooth running, better pickup and mileage",
    includes: [
      "Spark Plug / Glow Plug Check",
      "Air Filter Check",
      "Idle & Throttle Adjustment",
      "Injector & Fuel Mixture Check",
      "Test Drive",
    ],
    image: "/images/Icons/engine-tuning.jpeg",
  },
  {
    name: "Spark Plug Replacement",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 2 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Better pickup, smoother idle and mileage for petrol engines",
    includes: [
      "Old Spark Plugs Removal",
      "New Spark Plugs Fitting",
      "Ignition Coil Check",
      "Idle Check",
    ],
    image: "/images/Icons/spark-plug.jpeg",
  },
  {
    name: "Throttle Body Cleaning",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 2 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Fixes rough idle, hesitation and poor pickup",
    includes: [
      "Throttle Body Removal & Cleaning",
      "Sensor Check",
      "Idle Reset",
      "Test Drive",
    ],
    image: "/images/Icons/throttle-body-cleaning.jpeg",
  },
  {
    name: "Engine Carbon Cleaning (Decarbonisation)",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 4 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Removes carbon build-up for better pickup and cleaner running",
    includes: [
      "Intake System Cleaning",
      "Combustion Chamber Cleaning",
      "Injector & Throttle Check",
      "Post-service Test Drive",
    ],
    image: "/images/Icons/engine-carbon-cleaning.jpeg",
  },
];

const engineLeaksGaskets = [
  {
    name: "Valve Cover Gasket Replacement",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 4 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Stops oil leaks around the top of the engine",
    includes: [
      "Old Gasket Removal",
      "Surface Cleaning",
      "New Gasket Fitting",
      "Oil Leak Check",
    ],
  },
  {
    name: "Oil Pan Gasket Replacement",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 6 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Stops oil dripping from under the engine",
    includes: [
      "Engine Oil Drain",
      "Old Gasket Removal",
      "New Gasket Fitting",
      "Fresh Engine Oil Fill",
      "Leak Check",
    ],
  },
  {
    name: "Head Gasket Replacement",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 2 Days", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "MAJOR REPAIR",
    recommended: false,
    description: "For overheating, white smoke and coolant loss",
    includes: [
      "Cylinder Head Removal",
      "Head Surface Check",
      "New Head Gasket Set",
      "Reassembly & Coolant Refill",
      "Test Drive",
    ],
  },
];

const engineBeltsMounts = [
  {
    name: "Timing Belt / Chain Kit Replacement",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 8 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "PREVENT ENGINE DAMAGE",
    recommended: true,
    description: "Replace on time to avoid serious engine damage",
    includes: [
      "Old Timing Belt / Chain Removal",
      "New Kit Fitting",
      "Tensioner & Idler Replacement",
      "Timing Alignment Check",
      "Test Drive",
    ],
  },
  {
    name: "Drive Belt Replacement",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 2 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Fixes squealing noise and worn or cracked belts",
    includes: [
      "Old Belt Removal",
      "New Belt Fitting",
      "Tensioner Check",
      "Alignment Check",
    ],
    image: "/images/Icons/drive-belt-pulleys.jpeg",
  },
  {
    name: "Water Pump Replacement",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 5 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "For overheating and coolant leaks",
    includes: [
      "Old Water Pump Removal",
      "New Water Pump Fitting",
      "Coolant Refill",
      "Leak & Temperature Check",
    ],
  },
  {
    name: "Engine Mount Replacement",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 4 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Reduces engine vibration and shaking",
    includes: [
      "Old Mount Removal",
      "New Mount Fitting",
      "Alignment Check",
      "Vibration Test",
    ],
  },
];

const engineOverhaul = [
  {
    name: "Top (Head) Overhaul",
    price: 0, // quote only, keep 0
    originalPrice: undefined,
    duration: "Takes 3 Days", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "For loss of power, smoke and low compression",
    includes: [
      "Cylinder Head Removal",
      "Valve Grinding & Cleaning",
      "Gasket Set & Seals Replacement",
      "Reassembly & Tuning",
      "Road Test",
    ],
  },
  {
    name: "Complete Engine Overhaul",
    price: 0, // quote only, keep 0
    originalPrice: undefined,
    duration: "Takes 5-7 Days", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "COMPLETE REBUILD",
    recommended: false,
    description: "Full rebuild with genuine parts for engines with major wear or knocking",
    includes: [
      "Engine Removal & Dismantling",
      "Parts Inspection & Measurement",
      "Genuine Parts Replacement",
      "Reassembly & Tuning",
      "Final Road Test",
    ],
  },
];

const turbo = [
  {
    name: "Turbo Inspection and Boost Test",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 2 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Find out why your turbo is losing power",
    includes: [
      "Boost Pressure Test",
      "Turbo Shaft Play Check",
      "Oil Feed Line Check",
      "Intercooler Hose Check",
      "Written Findings",
    ],
    image: "/images/Icons/turbo-inspection.jpeg",
  },
  {
    name: "Turbo Cleaning",
    price: 0, // TODO
    originalPrice: undefined,
    duration: "Takes 6 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Restores power and reduces smoke",
    includes: [
      "Turbo Cleaning",
      "Actuator Check",
      "Intake & Hose Check",
      "Boost Test After Cleaning",
    ],
    image: "/images/Icons/turbo-cleaning.jpeg",
  },
  {
    name: "Turbo Repair and Rebuild",
    price: 0, // quote only, keep 0
    originalPrice: undefined,
    duration: "Takes 24 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "TURBO SPECIALISTS",
    recommended: true,
    description: "For whistling noise, smoke and power loss",
    includes: [
      "Turbo Removal & Dismantling",
      "Inspection & Worn Parts Replacement",
      "Balancing",
      "Refitting",
      "Boost Test & Road Test",
    ],
    image: "/images/Icons/turbo-rebuild.jpeg",
  },
  {
    name: "Turbo Replacement",
    price: 0, // quote only, keep 0
    originalPrice: undefined,
    duration: "Takes 24 Hours", // TODO
    warranty: "", // TODO
    details: 0,
    badge: "",
    recommended: false,
    description: "Complete turbo replacement when repair is not possible",
    includes: [
      "Old Turbo Removal",
      "New Turbo Fitting",
      "Oil Line & Gasket Replacement",
      "Boost Test",
      "Road Test",
    ],
    image: "/images/Icons/turbo-replacement.jpeg",
  },
];

export default async function EngineWorkTurboPage() {
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

  const mergedDiagnosticsTuning = mergeActivePackages(engineDiagnosticsTuning);
  const mergedLeaksGaskets = mergeActivePackages(engineLeaksGaskets);
  const mergedBeltsMounts = mergeActivePackages(engineBeltsMounts);
  const mergedOverhaul = mergeActivePackages(engineOverhaul);
  const mergedTurbo = mergeActivePackages(turbo);

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
                Engine Work &amp; Turbo in Ghaziabad
              </h1>
              <p className="text-gray-500 text-[15px] mb-8">
                Engine or turbo trouble? From diagnostics to complete rebuilds, our technicians handle it with precision and genuine components. With over{" "}
                <span className="font-semibold text-gray-900">40 years of workshop experience</span>, we find the real cause first, explain it clearly, and fix it right.
              </p>

              {/* Diagnostics and Tuning */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Diagnostics and Tuning</h2>
              <div className="space-y-4 mb-10">
                {mergedDiagnosticsTuning.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Leaks and Gaskets */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Leaks and Gaskets</h2>
              <div className="space-y-4 mb-10">
                {mergedLeaksGaskets.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Belts and Mounts */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Belts and Mounts</h2>
              <div className="space-y-4 mb-10">
                {mergedBeltsMounts.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Engine Overhaul */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Engine Overhaul</h2>
              <div className="space-y-4 mb-10">
                {mergedOverhaul.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>

              {/* Turbo */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">Turbo</h2>
              <div className="space-y-4">
                {mergedTurbo.map((pkg) => (
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
