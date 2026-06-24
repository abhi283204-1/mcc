"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AREAS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Areas() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading subtitle="AREAS WE COVER" title="Service Available" highlight="Near You" />
        <div className="border border-gray-200 rounded-2xl p-6">
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{ prevEl: ".area-prev", nextEl: ".area-next" }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={12}
              slidesPerView={2}
              breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}
              loop
            >
              {AREAS.map((area) => (
                <SwiperSlide key={area}>
                  <span className="inline-flex items-center justify-center gap-2 w-full px-4 py-4 rounded-[15px] border border-gray-200 text-sm text-black font-semibold hover:bg-gray-50 transition-colors cursor-pointer">
                    <img src="/images/Icons/pin.png" alt="" className="w-4 h-4" /> {area}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="area-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="area-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
