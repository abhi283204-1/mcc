"use client";

import { useMemo, useRef } from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

const HOT_SERVICE_CONFIG = [
  {
    title: "Car Services",
    image: "/images/icons/car-services.jpg",
    icon: "Car",
    href: "/services/car-services",
    matches: [/car services?/, /periodic.*services?/, /general.*services?/],
  },
  {
    title: "Denting & Painting",
    image: "/images/icons/denting-painting.jpg",
    icon: "Paintbrush",
    href: "/services/denting-painting",
    matches: [/denting/, /painting/, /body.*repair/],
  },
  {
    title: "AC Service & Repair",
    image: "/images/icons/ac-service.jpg",
    icon: "Snowflake",
    href: "/services/ac-service-repair",
    matches: [/\bac\b/, /air conditioning/, /climate control/],
  },
  {
    title: "Detailing Service",
    image: "/images/icons/detailing-service.jpg",
    icon: "Sparkles",
    href: "/services/car-detailing",
    matches: [/detailing/, /ceramic coating/, /ppf/],
  },
  {
    title: "Engine Scanning",
    image: "/images/icons/engine-scanning.jpg",
    icon: "ScanSearch",
    href: "/services/car-inspections",
    matches: [/engine scanning/, /diagnostic/, /inspection/],
  },
  {
    title: "Car Spa & Cleaning",
    image: "/images/icons/car-spa-cleaning.jpg",
    icon: "Droplets",
    href: "/services/car-spa-cleaning",
    matches: [/car spa/, /spa.*clean/, /cleaning/, /car wash/],
  },
];

function normalize(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  const { hotServices, moreServices } = useMemo(() => {
    const remaining = [...SERVICES];
    const hot = HOT_SERVICE_CONFIG.map((config) => {
      const index = remaining.findIndex((service) => {
        const title = normalize(service.title);
        return config.matches.some((pattern) => pattern.test(title));
      });

      if (index < 0) {
        return {
          ...config,
          image: config.image,
          serviceTitle: config.title,
        };
      }

      const [service] = remaining.splice(index, 1);
      return {
        ...config,
        title: config.title,
        href: service.href || config.href,
        icon: service.icon || config.icon,
        image: config.image,
        serviceTitle: service.title,
      };
    });

    return { hotServices: hot, moreServices: remaining };
  }, []);

  return (
    <section id="services" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-5 sm:mb-7">
          <SectionHeading
            subtitle="OUR SERVICES"
            title="Car Services & Garage Workshops"
            highlight=""
          />
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            Explore our popular car care services, repairs and maintenance solutions.
          </p>
        </div>

        {/* Popular services: large, image-led cards like the reference website. */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {hotServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              aria-label={`Explore ${service.title}`}
              className="group relative isolate flex aspect-[1.08/1] min-h-[150px] min-w-0 items-end overflow-hidden rounded-2xl bg-slate-800 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl sm:aspect-[1.25/1] sm:min-h-[190px]"
            >
              {/* Use each service's existing image as the full-card background. */}
              {service.image ? (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${JSON.stringify(service.image)})` }}
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-[#174A8B] transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5"
              />
              <div className="relative z-10 w-full p-3 sm:p-4">
                <h3 className="text-sm font-extrabold leading-tight text-white drop-shadow sm:text-lg">
                  {service.title}
                </h3>
                <span className="mt-2 inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-slate-900 transition-colors group-hover:bg-[#C62828] group-hover:text-white sm:text-xs">
                  Explore Service <span className="ml-1" aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Remaining services are intentionally smaller and separate from the hot services. */}
        {moreServices.length > 0 && (
          <div className="mt-9 sm:mt-12">
            <div className="mb-4 flex items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C62828]">
                  More to explore
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900 sm:text-2xl">
                  Explore More Services
                </h3>
              </div>
              <span className="hidden text-xs text-slate-500 sm:inline">
                {moreServices.length} more services
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-5 lg:grid-cols-6">
              {moreServices.map((service, index) => (
                <div
                  key={service.title}
                  className="min-w-0 rounded-xl border border-slate-200 bg-white p-1.5 text-center shadow-sm transition hover:border-[#174A8B]/40 hover:shadow-md sm:p-2"
                >
                  <ServiceCard
                    title={service.title}
                    icon={service.icon || "Car"}
                    img={service.img || ""}
                    href={service.href}
                    index={index + hotServices.length}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
