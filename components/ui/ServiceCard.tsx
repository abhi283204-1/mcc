"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Car, Snowflake, Paintbrush, Sparkles, CircleDot, Battery, Gem, ClipboardCheck, Lightbulb, Wrench, Cog, Settings, Shield, Truck, FileCheck } from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Car, Snowflake, Paintbrush, Sparkles, CircleDot, Battery, Gem, ClipboardCheck, Lightbulb, Wrench, Cog, Settings, Shield, Truck, FileCheck };

interface ServiceCardProps {
  title: string;
  icon: string;
  img?: string;
  href?: string;
  index: number;
}

export default function ServiceCard({ title, icon, img, href, index }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Car;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group"
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
        {img ? (
          <img src={img} alt={title} className="w-8 h-8" />
        ) : (
          <IconComponent className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
        )}
      </div>
      <span className="font-medium text-gray-800 text-sm">{title}</span>
    </motion.div>
  );

  if (href) return <Link href={href}>{content}</Link>;
  return content;
}
