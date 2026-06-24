"use client";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  car: string;
  rating: number;
  text: string;
  image: string;
}

export default function TestimonialCard({ name, car, rating, text, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
      <Quote className="w-8 h-8 text-primary/20 mb-3" />
      <div className="flex gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{text}</p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
          <Image src={image} alt={name} fill className="object-cover" sizes="40px" />
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{car}</p>
        </div>
      </div>
    </div>
  );
}
