"use client";
import { Play } from "lucide-react";
import Image from "next/image";

interface VideoCardProps {
  thumbnail: string;
  duration: string;
  title: string;
}

export default function VideoCard({ thumbnail, duration, title }: VideoCardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-video">
      <Image src={thumbnail} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="300px" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play className="w-6 h-6 text-primary fill-primary ml-1" />
        </div>
      </div>
      <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">{duration}</span>
    </div>
  );
}
