"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BEFORE_AFTER } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BeforeAfter() {
  return (
    <section id="before-after" className="section-padding bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading subtitle="TRANSFORMATION YOU CAN SEE" title="Before &" highlight="After" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
          <Swiper modules={[Navigation]} navigation={{ prevEl: ".ba-prev", nextEl: ".ba-next" }} spaceBetween={24} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
            {BEFORE_AFTER.map((item, index) => (
              <SwiperSlide key={`${item.title}-${index}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <div className="absolute inset-0 flex">
                    {/* Before - Left Half */}
                    <div className="relative w-1/2 h-full overflow-hidden">
                      <img src={item.before} alt={`Before - ${item.title}`} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-red-500/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        Before
                      </span>
                    </div>
                    {/* After - Right Half */}
                    <div className="relative w-1/2 h-full overflow-hidden">
                      <img src={item.after} alt={`After - ${item.title}`} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-3 right-3 text-white text-xs font-semibold bg-green-500/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        After
                      </span>
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white z-10 -translate-x-1/2" />
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-10 pointer-events-none z-10">
                    <span className="text-white font-semibold text-sm bg-black/50 backdrop-blur-sm px-4 py-1.5 rounded-full">
                      {item.title}
                    </span>
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
