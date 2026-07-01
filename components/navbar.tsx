"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Phone, CalendarCheck, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "Brands", href: "#brands" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[74px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Mittal Car Care"
              width={140}
              height={100}
              className="h-[100px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Center Navigation */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-1 text-[14px] font-semibold transition-colors ${
                    link.active ? "text-[#0A5BFF]" : "text-gray-800 hover:text-[#0A5BFF]"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={13} strokeWidth={2.5} />}
                  {link.active && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#0A5BFF] rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                <Phone size={14} className="text-green-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 leading-none">Call Us Now</p>
                <p className="text-[13px] font-bold text-gray-900">+91 98733 70404</p>
              </div>
            </div>
            <Link
              href="#book"
              className="inline-flex items-center gap-2 bg-[#0A5BFF] text-white text-[13px] font-semibold px-5 h-[44px] rounded-lg hover:bg-blue-700 transition-colors"
            >
              <CalendarCheck size={15} />
              Book Service
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[270px] bg-white z-50 shadow-2xl p-5 flex flex-col lg:hidden"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end p-1.5 text-gray-500"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
              <ul className="mt-5 space-y-0.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg text-[14px] font-medium ${
                        link.active ? "text-[#0A5BFF] bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5 border-t border-gray-100 space-y-3">
                <a href="tel:+919873370404" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Phone size={15} className="text-[#0A5BFF]" />
                  +91 98733 70404
                </a>
                <Link
                  href="#book"
                  className="flex items-center justify-center gap-2 w-full bg-[#0A5BFF] text-white font-semibold py-3 rounded-lg text-sm"
                >
                  <CalendarCheck size={15} />
                  Book Service
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
