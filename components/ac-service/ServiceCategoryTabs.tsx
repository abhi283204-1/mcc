"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const categories = [
  { name: "Car Repair & Services", icon: "/images/Icons/car-service.svg", href: "/services/car-services", active: false },
  { name: "Denting & Painting", icon: "/images/Icons/painting.svg", href: "/services/denting-painting", active: false },
  { name: "AC Service & Repair", icon: "/images/Icons/ac-service.svg", href: "/services/ac-service-repair", active: true },
  { name: "Detailing Services", icon: "/images/Icons/detailing.svg", href: "/services/car-detailing", active: false },
  { name: "Car Spa & Cleaning", icon: "/images/Icons/car-wash.svg", href: "/services/car-spa-cleaning", active: false },
  { name: "Clutch & Body Parts", icon: "/images/Icons/clutch.svg", href: "/services/clutch-body-parts", active: false },
  { name: "Suspension & Fitments", icon: "/images/Icons/suspension.svg", href: "/services/suspension-fitments", active: false },
  { name: "Tyres & Wheel Care", icon: "/images/Icons/tyre.svg", href: "/services/tyres-wheel-care", active: false },
  { name: "Batteries", icon: "/images/Icons/battery.svg", href: "/services/batteries", active: false },
];

export default function ServiceCategoryTabs() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full border whitespace-nowrap text-sm font-medium transition-all flex-shrink-0 ${
                cat.active
                  ? "border-primary text-primary bg-primary/5"
                  : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <Image src={cat.icon} alt="" width={20} height={20} className="w-5 h-5" />
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Right arrow */}
        <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 md:hidden">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
