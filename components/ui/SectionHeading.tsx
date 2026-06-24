"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  highlight?: string;
}

export default function SectionHeading({ subtitle, title, highlight }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <span className="text-primary font-bold text-sm uppercase tracking-wider">{subtitle}</span>
      <h2 className="text-[32px] leading-[40px] md:text-4xl font-bold text-gray-900 mt-2">
        {title} {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
    </motion.div>
  );
}
