"use client";

import { useState, useEffect } from "react";
import { Phone, CalendarCheck, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Blue information strip: stats kept at opposite ends */}
      <div className="bg-[#174A8B] text-white">
        <div className="mx-auto flex h-7 max-w-7xl items-center justify-between gap-2 px-3 sm:px-4">
          <span className="text-[10px] font-semibold sm:text-xs">40+ Years of Experience</span>
          <span className="text-right text-[10px] font-semibold sm:text-xs">10,00,000+ Cars Serviced</span>
        </div>
      </div>

      <div className="container mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-1 px-2 sm:h-20 sm:px-4">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Mittal Car Care home"
          className="flex min-w-0 shrink items-center gap-1.5 sm:gap-3"
        >
          <Image
            src="/images/logo.png"
            alt="Mittal Car Care logo"
            width={100}
            height={64}
            priority
            className="h-[44px] w-[54px] shrink-0 object-contain sm:h-[62px] sm:w-[90px]"
          />
          <div className="min-w-0 leading-[1.05]">
            <div className="whitespace-nowrap text-[12px] font-black tracking-tight sm:text-lg">
              <span className="text-[#C62828]">MITTAL</span>{" "}
              <span className="text-[#174A8B]">CAR CARE</span>
            </div>
            <span className="mt-1 block whitespace-nowrap text-[8px] font-normal text-slate-500 sm:text-[10px]">
              Experienced. Trusted. Genuine.
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+919654700404" className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-gray-600">+91 96547 00404</span>
          </a>
          <Link href="/select-car">
            <Button size="sm">Book Now</Button>
          </Link>
        </div>

        {/* Compact mobile actions, in the same row as the logo */}
        <div className="flex shrink-0 items-center gap-1 lg:hidden">
          <a
            href="tel:+919654700404"
            aria-label="Call Mittal Car Care at 9654700404"
            className="flex h-8 items-center gap-1 rounded-md bg-[#C62828] px-2 text-[10px] font-bold text-white sm:h-9 sm:px-2.5 sm:text-xs"
          >
            <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Call</span>
          </a>
          <Link
            href="/select-car"
            className="flex h-8 items-center gap-1 rounded-md bg-[#174A8B] px-2 text-[10px] font-bold text-white sm:h-9 sm:px-2.5 sm:text-xs"
          >
            <CalendarCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Book</span>
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="ml-0.5 rounded-md p-1.5 text-slate-700 hover:bg-slate-100 sm:p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-white shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1 p-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t pt-4">
              <a href="tel:+919654700404" className="flex items-center gap-2 px-4 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-primary" /> +91 96547 00404
              </a>
              <Link href="/select-car" onClick={() => setMobileOpen(false)}>
                <Button className="w-full">Book Now</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
