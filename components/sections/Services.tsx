"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [initialCount, setInitialCount] = useState(10);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInitialCount(window.innerWidth >= 768 ? 10 : 6);
  }, []);

  const handleToggle = () => {
    if (showAll) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowAll(!showAll);
  };

  return (
    <section id="services" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading subtitle="OUR SERVICES" title="Complete Car Care" highlight="Solutions" />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SERVICES.slice(0, initialCount).map((service, i) => (
            <ServiceCard key={service.title} title={service.title} icon={service.icon || "Car"} img={service.img || ""} href={service.href} index={i} />
          ))}
          <AnimatePresence>
            {showAll && SERVICES.slice(initialCount).map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ServiceCard title={service.title} icon={service.icon || "Car"} img={service.img || ""} href={service.href} index={i + initialCount} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {SERVICES.length > initialCount && (
          <div className="text-center mt-6">
            <button
              onClick={handleToggle}
              className="px-6 py-2.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
