"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VIDEO_REVIEWS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoCard from "@/components/ui/VideoCard";

export default function VideoReviews() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading subtitle="VIDEO REVIEWS" title="Hear From Our Happy" highlight="Customers" />
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: ".vid-prev", nextEl: ".vid-next" }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{ 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
          >
            {VIDEO_REVIEWS.map((video) => (
              <SwiperSlide key={video.title}>
                <VideoCard {...video} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="vid-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="vid-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
