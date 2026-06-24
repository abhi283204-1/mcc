"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Process() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading subtitle="OUR PROCESS" title="Simple & Honest" highlight="Car Service Process in Delhi" />
        <div className="relative">
          {/* Connection line - dashed blue */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 z-0 border-t-[3px] border-dashed border-primary" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center relative z-10"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-white border-2 border-primary/20 flex items-center justify-center mb-4 shadow-sm">
                    {i === 0 ? (
                      <Image src="/images/Icons/book-service1.svg" alt={item.title} width={32} height={32} />
                    ) : i === 1 ? (
                      <Image src="/images/Icons/inspection.svg" alt={item.title} width={32} height={32} />
                    ) : i === 2 ? (
                      <Image src="/images/Icons/service-repair.svg" alt={item.title} width={32} height={32} />
                    ) : (
                      <Image src="/images/Icons/fast-delivery.svg" alt={item.title} width={32} height={32} />
                    )}
                  </div>
                  <span className="text-primary font-bold text-2xl">{item.step}</span>
                  <h4 className="font-bold text-gray-900 mt-1 mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
