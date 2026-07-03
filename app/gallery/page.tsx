"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/sections/Footer";

const categories = ["All", "Before & After", "Services", "Workshop"] as const;

type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
}

const galleryImages: GalleryImage[] = [
  // Before & After
  { src: "/images/before2.jpg", alt: "Before denting & painting", category: "Before & After" },
  { src: "/images/after2.jpg", alt: "After denting & painting", category: "Before & After" },
  { src: "/images/before3.jpg", alt: "Before repair work", category: "Before & After" },
  { src: "/images/after3.jpg", alt: "After repair work", category: "Before & After" },
  { src: "/images/after1.jpg", alt: "After car detailing", category: "Before & After" },

  // Services
  { src: "/images/Icons/Comprehensive-Service.jpeg", alt: "Comprehensive car service", category: "Services" },
  { src: "/images/Icons/regular-ac-service.jpeg", alt: "Regular AC service", category: "Services" },
  { src: "/images/Icons/hight-performance-ac-service.jpeg", alt: "High performance AC service", category: "Services" },
  { src: "/images/Icons/front-break-pads.jpeg", alt: "Front brake pads replacement", category: "Services" },
  { src: "/images/Icons/full-body-dent-paint.jpeg", alt: "Full body dent & paint", category: "Services" },
  { src: "/images/Icons/bonnet-paint.jpeg", alt: "Bonnet painting", category: "Services" },
  { src: "/images/Icons/front-bumper-paint.jpeg", alt: "Front bumper painting", category: "Services" },
  { src: "/images/eps.jpg", alt: "EPS module repair", category: "Services" },
  { src: "/images/srr.jpeg", alt: "Steering rack repair", category: "Services" },

  // Workshop
  { src: "/images/workshop1.jpeg", alt: "Mittal Car Care workshop", category: "Workshop" },
  { src: "/images/workshop2.jpeg", alt: "Workshop service area", category: "Workshop" },
  { src: "/images/workshop3.jpeg", alt: "Workshop equipment", category: "Workshop" },
  { src: "/images/workshop4.jpeg", alt: "Workshop interior", category: "Workshop" },
  { src: "/images/our-team.jpg", alt: "Our team at Mittal Car Care", category: "Workshop" },
  { src: "/images/gallery1.jpg", alt: "Gallery image 1", category: "Workshop" },
  { src: "/images/gallery2.jpg", alt: "Gallery image 2", category: "Workshop" },
  { src: "/images/gallery3.jpg", alt: "Gallery image 3", category: "Workshop" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="pt-[74px] bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-20 overflow-hidden">
          <Image
            src="/images/mcc.jpg"
            alt="Mittal Car Care Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            >
              Our Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto"
            >
              See the quality of our work — from denting & painting to full car restorations. Every car leaves our workshop looking brand new.
            </motion.p>
          </div>
        </section>

        {/* Filter Tabs */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg transition-shadow duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                    <p className="text-white text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Close gallery lightbox"
              >
                <X size={32} />
              </button>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl max-h-[85vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
              </motion.div>
              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-base font-medium">
                {selectedImage.alt}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
