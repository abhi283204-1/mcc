"use client";
import { MapPin, Mail, Phone } from "lucide-react";
import { FOOTER_LINKS, CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Desktop layout - 4 columns */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <img src="/images/logo.png" alt="Mittal Car Care" className="h-24 mb-3" />
            <p className="text-sm leading-relaxed mb-4">Professional car care services with trust, quality & transparency. Your car is in safe hands.</p>
            <div className="flex gap-3">
              {(["facebook", "instagram", "whatsapp", "youtube"] as const).map((s) => {
                const icons: Record<string, string> = { facebook: "/images/Icons/fb.png", instagram: "/images/Icons/insta.png", whatsapp: "/images/Icons/whatsapp.png", youtube: "/images/Icons/yt.png" };
                return (
                  <a key={s} href={CONTACT_INFO.socials[s]} className="flex items-center justify-center hover:opacity-80 transition-opacity">
                    <img src={icons[s]} alt={s} className="h-7" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services - 2 sub-columns */}
          <div>
            <h4 className="text-white font-bold mb-4">Our Services</h4>
            <ul className="columns-2 gap-x-4">
              {FOOTER_LINKS.services.map((service) => (
                <li key={service.label} className="mb-1">
                  <a href={service.href} className="text-sm hover:text-primary transition-colors leading-tight">{service.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                <span className="font-semibold text-white uppercase">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
              {CONTACT_INFO.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-white flex-shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-white font-semibold hover:opacity-80 transition-opacity">{phone}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile layout - stacked */}
        <div className="md:hidden">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img src="/images/logo.png" alt="Mittal Car Care" className="h-20" />
            </div>
            <p className="text-sm leading-relaxed max-w-md mx-auto mb-5">Professional car care services with trust, quality & transparency. Your car is in safe hands.</p>
            <div className="flex justify-center gap-4">
              {(["facebook", "instagram", "whatsapp", "youtube"] as const).map((s) => {
                const icons: Record<string, string> = { facebook: "/images/Icons/fb.png", instagram: "/images/Icons/insta.png", whatsapp: "/images/Icons/whatsapp.png", youtube: "/images/Icons/yt.png" };
                return (
                  <a key={s} href={CONTACT_INFO.socials[s]} className="flex items-center justify-center hover:opacity-80 transition-opacity">
                    <img src={icons[s]} alt={s} className="h-9" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-8">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-white font-bold mb-4">Our Services</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-8">
              {FOOTER_LINKS.services.map((service) => (
                <li key={service.label}>
                  <a href={service.href} className="text-sm hover:text-primary transition-colors">{service.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="font-semibold text-white uppercase">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
              {CONTACT_INFO.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3 text-sm">
                  <Phone className="w-5 h-5 text-white flex-shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-white font-semibold hover:opacity-80 transition-opacity">{phone}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <p className="text-center text-sm text-white">© 2025 Mittal Car Care. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
