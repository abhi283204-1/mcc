"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { BEFORE_AFTER } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BeforeAfter() {
  return (
    <section id="before-after" className="section-padding bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading subtitle="TRANSFORMATION YOU CAN SEE" title="Before &" highlight="After" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
          <Swiper modules={[Navigation]} navigation={{ prevEl: ".ba-prev", nextEl: ".ba-next" }} spaceBetween={24} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
            {BEFORE_AFTER.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                  <Image src={item.before} alt={item.title} fill className="object-cover" sizes="400px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                    <span className="text-white text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">Before</span>
                    <span className="text-white font-semibold text-sm">{item.title}</span>
                    <span className="text-white text-xs bg-primary/80 px-3 py-1 rounded-full">After</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="ba-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="ba-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
