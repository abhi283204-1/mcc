"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { usePathname } from "next/navigation";

const categories = [
  { name: "Car Repair & Services", icon: "/images/Icons/car-service.svg", href: "/services/car-services" },
  { name: "Denting & Painting", icon: "/images/Icons/painting.svg", href: "/services/denting-painting" },
  { name: "AC Service & Repair", icon: "/images/Icons/ac-service.svg", href: "/services/ac-service-repair" },
  { name: "Detailing Services", icon: "/images/Icons/detailing.svg", href: "/services/car-detailing" },
  { name: "Car Spa & Cleaning", icon: "/images/Icons/car-wash.svg", href: "/services/car-spa-cleaning" },
  { name: "Clutch & Body Parts", icon: "/images/Icons/clutch.svg", href: "/services/clutch-body-parts" },
  { name: "Suspension & Fitments", icon: "/images/Icons/suspension.svg", href: "/services/suspension-fitments" },
  { name: "Tyres & Wheel Care", icon: "/images/Icons/tyre.svg", href: "/services/tyres-wheel-care" },
  { name: "Car Inspections", icon: "/images/Icons/vehicle-inspection.svg", href: "/services/car-inspections" },
  { name: "Windshields & Lights", icon: "/images/Icons/wiper.svg", href: "/services/windshields-lights" },
  { name: "Insurance Claims", icon: "/images/Icons/insurance-claim.svg", href: "/services/insurance-claims" },
  { name: "SOS Service", icon: "/images/Icons/pick-droup.svg", href: "/services/sos-service" },
  { name: "Batteries", icon: "/images/Icons/battery.svg", href: "/services/batteries" },
];

export default function ServiceCategoryTabs() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <div className="border-b border-gray-200 bg-white sticky top-[74px] z-30">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 relative">
        {/* Left arrow */}
        <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 md:hidden">
          <ChevronLeft size={16} />
        </button>

        <div ref={scrollRef} className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-3 px-6 md:px-0">
          {categories.map((cat) => {
            const isActive = pathname === cat.href;
            return (
              <Link
                key={cat.name}
                href={cat.href}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border whitespace-nowrap text-sm font-medium transition-all flex-shrink-0 ${
                  isActive
                    ? "border-primary text-primary bg-primary/5"
                    : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <Image src={cat.icon} alt="" width={20} height={20} className="w-5 h-5" />
                {cat.name}
              </Link>
            );
          })}
        </div>

        {/* Right arrow */}
        <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 md:hidden">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
