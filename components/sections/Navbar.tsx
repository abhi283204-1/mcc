"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"}`}>
      <div className="container mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">MCC</span>
          </div>
          <div className="leading-tight">
            <span className="font-bold text-gray-900 text-lg block">MITTAL</span>
            <span className="text-[10px] text-gray-500 tracking-widest uppercase">Car Care</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+919873370404" className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-gray-600">+91 98733 70404</span>
          </a>
          <Button size="sm">Book Service</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="py-3 px-4 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t mt-2 flex flex-col gap-3">
              <a href="tel:+919873370404" className="flex items-center gap-2 px-4 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-primary" /> +91 98733 70404
              </a>
              <Button className="w-full">Book Service</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
