"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: LucideIcon;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  icon: Icon,
  size = "md",
  fullWidth = false,
  onClick,
  className = "",
}: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer";
  const variants = {
    primary: "bg-[#0A5BFF] text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40",
    secondary: "bg-white text-gray-900 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md",
  };
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-7 py-3.5 text-base",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </motion.button>
  );
}
