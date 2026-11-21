"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  Snowflake,
  Paintbrush,
  Sparkles,
  CircleDot,
  Battery,
  Gem,
  ClipboardCheck,
  Lightbulb,
  Wrench,
  Cog,
  Settings,
  Shield,
  Truck,
  FileCheck,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Car,
  Snowflake,
  Paintbrush,
  Sparkles,
  CircleDot,
  Battery,
  Gem,
  ClipboardCheck,
  Lightbulb,
  Wrench,
  Cog,
  Settings,
  Shield,
  Truck,
  FileCheck,
};

interface ServiceCardProps {
  title: string;
  icon: string;
  img?: string;
  href?: string;
  index: number;
}

export default function ServiceCard({
  title,
  icon,
  img,
  href,
  index,
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Car;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: Math.min(index, 8) * 0.035 }}
      className="group flex h-full min-h-[112px] w-full min-w-0 flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white p-3 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 lg:min-h-[88px] lg:flex-row lg:justify-start lg:gap-3 lg:p-4 lg:text-left"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
        {img ? (
          <img
            src={img}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-8 w-8 object-contain"
          />
        ) : (
          <IconComponent className="h-6 w-6 text-primary transition-colors group-hover:text-primary" />
        )}
      </div>

      <span className="w-full min-w-0 break-words text-xs font-medium leading-snug text-gray-800 [overflow-wrap:anywhere] lg:text-sm">
        {title}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <Link
  href={href}
  prefetch={true}
  className="block h-full min-w-0"
>
        {content}
      </Link>
    );
  }

  return content;
}
