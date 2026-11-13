"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import { FOOTER_LINKS, CONTACT_INFO } from "@/lib/constants";

const SOCIAL_ICONS = {
  facebook: "/images/Icons/fb.png",
  instagram: "/images/Icons/insta.png",
  whatsapp: "/images/Icons/whatsapp.png",
  youtube: "/images/Icons/yt.png",
} as const;

export default function Footer() {
  return (
    <footer id="footer" className="w-full overflow-hidden bg-gray-900 text-gray-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid min-w-0 grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1.15fr_1.35fr] lg:gap-x-6 xl:gap-x-8">
          {/* Logo and company information */}
          <div className="min-w-0">
            <img
              src="/images/logo.png"
              alt="Mittal Car Care"
              className="mb-3 h-20 w-auto max-w-full object-contain object-left sm:h-24"
            />
            <p className="mb-4 max-w-sm text-sm leading-relaxed">
              Professional car care services with trust, quality &amp; transparency. Your car is in safe hands.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {(Object.keys(SOCIAL_ICONS) as Array<keyof typeof SOCIAL_ICONS>).map((social) => (
                <a
                  key={social}
                  href={CONTACT_INFO.socials[social]}
                  aria-label={social}
                  className="flex shrink-0 items-center justify-center transition-opacity hover:opacity-80"
                >
                  <img src={SOCIAL_ICONS[social]} alt="" className="h-7 w-auto object-contain" loading="lazy" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="min-w-0">
            <h4 className="mb-4 font-bold text-white">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 sm:gap-x-4">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label} className="min-w-0">
                  <a
                    href={link.href}
                    className="break-words text-sm leading-6 transition-colors hover:text-primary [overflow-wrap:anywhere]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h4 className="mb-4 font-bold text-white">Our Services</h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 sm:gap-x-4">
              {FOOTER_LINKS.services.map((service) => (
                <li key={service.label} className="min-w-0">
                  <a
                    href={service.href}
                    className="break-words text-sm leading-6 transition-colors hover:text-primary [overflow-wrap:anywhere]"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h4 className="mb-4 font-bold text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex min-w-0 items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 break-words font-semibold uppercase leading-6 text-white transition-opacity hover:opacity-80 [overflow-wrap:anywhere]"
                >
                  {CONTACT_INFO.address}
                </a>
              </li>
              <li className="flex min-w-0 items-start gap-2 text-sm">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-white" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="min-w-0 break-all leading-6 transition-colors hover:text-primary"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              {CONTACT_INFO.phones.map((phone) => (
                <li key={phone} className="flex min-w-0 items-start gap-2 text-sm">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-white" />
                  <a
                    href={`tel:${phone.replace(/\\s/g, "")}`}
                    className="min-w-0 break-words font-semibold leading-6 text-white transition-opacity hover:opacity-80 [overflow-wrap:anywhere]"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs leading-5 text-white sm:text-sm">
            © {new Date().getFullYear()} Mittal Car Care. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
