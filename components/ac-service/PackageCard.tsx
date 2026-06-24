"use client";

import { useRouter } from "next/navigation";
import { Clock, Award, CheckCircle2 } from "lucide-react";
import { useCart } from "@/lib/CartContext";

interface PackageCardProps {
  name: string;
  duration: string;
  warranty: string;
  details: number;
  recommended?: boolean;
  badge?: string;
  description?: string;
  includes?: string[];
  price?: number;
  originalPrice?: number;
  image?: string;
}

export default function PackageCard({ name, duration, warranty, recommended, badge, description, includes, price, originalPrice, image }: PackageCardProps) {
  const router = useRouter();
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (price) {
      addItem({ name, price, originalPrice });
      router.push("/cart");
    }
  };
  return (
    <div className={`relative rounded-2xl border bg-white overflow-hidden ${recommended ? "border-primary shadow-md" : "border-gray-200"}`}>
      {/* Badge */}
      {badge && (
        <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 inline-block rounded-br-lg">
          {badge}
        </div>
      )}
      {recommended && !badge && (
        <div className="bg-primary text-white text-xs font-bold px-3 py-1 inline-flex items-center gap-1 rounded-br-lg">
          <Award size={12} /> RECOMMENDED
        </div>
      )}

      <div className="p-4 md:p-5">
        {/* Top section: image + content */}
        <div className="flex gap-4">
          {/* Image */}
          {image && (
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-gray-100">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-gray-900 text-base md:text-lg">{name}</h3>
              <span className="hidden md:flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
                <Clock size={12} /> {duration}
              </span>
            </div>

            {/* Description bullets */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs md:text-sm text-gray-600">
              <span>• {duration}</span>
              <span>• {warranty}</span>
              {description && <span>• {description}</span>}
            </div>
          </div>
        </div>

        {/* Includes checklist */}
        {includes && includes.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {includes.map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-gray-700">
                <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Bottom: CTA */}
        <div className="flex items-center justify-end mt-4 pt-4 border-t border-gray-100">
          <button onClick={handleAddToCart} className="bg-white border-2 border-primary text-primary text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
            + ADD TO CART
          </button>
        </div>

      </div>
    </div>
  );
}
