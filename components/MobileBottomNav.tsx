"use client";

import Link from "next/link";
import { Home, Wrench, Phone, User } from "lucide-react";

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="flex items-center justify-around py-2">
        <Link href="/" className="flex flex-col items-center gap-0.5 text-gray-600">
          <Home size={20} />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link href="#services" className="flex flex-col items-center gap-0.5 text-gray-600">
          <Wrench size={20} />
          <span className="text-[10px] font-medium">Services</span>
        </Link>
        <a href="tel:+919873370404" className="flex flex-col items-center gap-0.5 text-gray-600">
          <Phone size={20} />
          <span className="text-[10px] font-medium">Call us</span>
        </a>
        <Link href="/about" className="flex flex-col items-center gap-0.5 text-gray-600">
          <User size={20} />
          <span className="text-[10px] font-medium">Account</span>
        </Link>
        <a href="https://wa.me/919873370404" target="_blank" className="flex flex-col items-center gap-0.5 text-green-600">
          <img src="/images/Icons/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
