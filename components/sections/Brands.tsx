"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BRANDS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Brands() {
  return (
    <section id="brands" className="section-padding bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading subtitle="OES BRANDS AVAILABLE" title="All Major" highlight="Car Brands" />
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: ".brand-prev", nextEl: ".brand-next" }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={16}
            slidesPerView={3}
            breakpoints={{ 640: { slidesPerView: 5 }, 1024: { slidesPerView: 8 } }}
            loop
          >
            {BRANDS.map((brand) => (
              <SwiperSlide key={brand.name}>
                <div className="flex items-center justify-center p-4 h-24 rounded-xl border border-gray-200 bg-white hover:border-primary/30 hover:shadow-md transition-all">
                  <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="brand-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="brand-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
