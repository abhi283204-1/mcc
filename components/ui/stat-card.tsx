"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index?: number;
}

export default function StatCard({ icon: Icon, value, label, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.1 }}
      className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 shadow-md min-w-[140px]"
    >
      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
        <Icon size={16} className="text-[#0A5BFF]" />
      </div>
      <div>
        <p className="font-bold text-gray-900 text-[13px] leading-tight">{value}</p>
        <p className="text-[10px] text-gray-500 leading-tight">{label}</p>
      </div>
    </motion.div>
  );
}
