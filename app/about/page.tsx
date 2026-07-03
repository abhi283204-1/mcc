"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Shield,
  Truck,
  IndianRupee,
  CheckCircle2,
  CalendarCheck,
  Search,
  PackageCheck,
  Award,
  BadgeCheck,
  Car,
  Phone as PhoneIcon,
  Users,
  X,
  ClipboardCheck,
  Receipt,
  UserX,
  Percent,
  MapPin,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/sections/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const processSteps = [
  { icon: CalendarCheck, step: "01", title: "Book Service", desc: "Choose your service and schedule a convenient appointment online or via call." },
  { icon: Search, step: "02", title: "Vehicle Inspection", desc: "Our experts thoroughly inspect your vehicle and share a transparent estimate." },
  { icon: Wrench, step: "03", title: "Service & Repair", desc: "We service your car using genuine parts, modern tools, and expert hands." },
  { icon: PackageCheck, step: "04", title: "Delivery", desc: "Quality checked and delivered on time — your car feels brand new." },
];

const teamMembers = [
  { name: "Ravi Mittal", position: "Founder & CEO", desc: "20+ years of experience in automotive care with a vision for premium service quality." },
  { name: "Sunil Kumar", position: "Head Technician", desc: "Expert mechanic specializing in multi-brand diagnostics and engine repairs." },
  { name: "Amit Sharma", position: "Service Manager", desc: "Ensures smooth operations and timely delivery with customer-first approach." },
];

const trustBadges = [
  { icon: Shield, label: "Genuine Parts" },
  { icon: Award, label: "ISO Certified" },
  { icon: Car, label: "Multi-Brand Experts" },
  { icon: BadgeCheck, label: "Insurance Support" },
  { icon: Truck, label: "Pickup & Drop" },
  { icon: IndianRupee, label: "Transparent Pricing" },
];

const checklist = ["Certified Technicians", "Genuine Spare Parts", "Modern Equipment", "Affordable Pricing", "Insurance Assistance", "Fast Delivery"];

const comparisonFeatures = [
  { icon: ClipboardCheck, title: "Quality Checks to Deliver the Best Service", local: false, mittal: true, authorized: true },
  { icon: Receipt, title: "Genuine Parts with Guaranteed Bill", local: false, mittal: true, authorized: true },
  { icon: UserX, title: "No Middlemen Commission or Service Incentives", local: false, mittal: true, authorized: false },
  { icon: Percent, title: "Discounts on Services", local: true, mittal: true, authorized: false },
  { icon: MapPin, title: "Free Pickup & Drop", local: false, mittal: true, authorized: false },
  { icon: ThumbsUp, title: "Honest Guidance with No False Selling", local: false, mittal: true, authorized: false },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[74px]">
        {/* 1. HERO BANNER */}
        <section className="relative h-[320px] md:h-[420px] overflow-hidden">
          <img src="/images/mcc-banner.jpg" alt="Mittal Car Care Workshop" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 h-full flex flex-col justify-center">
            {/* Breadcrumb */}
            <nav className="mb-4 text-sm text-gray-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">About Us</span>
            </nav>
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 w-fit">
              ABOUT MITTAL CAR CARE
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-2xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight max-w-2xl">
              Your Trusted Multi-Brand Car Service Partner in Delhi
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-gray-200 text-sm md:text-base mt-4 max-w-xl leading-relaxed">
              We provide professional car repair, detailing, diagnostics, denting-painting and premium car care services with transparency, genuine parts, and expert technicians.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex gap-3 mt-6">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0A5BFF] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#0047CC] transition-colors">
                <CalendarCheck size={16} /> Book Service
              </Link>
              <Link href="#footer" className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                <PhoneIcon size={16} /> Contact Us
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. COMPANY INTRODUCTION */}
        <section className="py-14 md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Image */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
                <img src="/images/mcc-banner.jpg" alt="Mittal Car Care Service Center" className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl" />
                <div className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 bg-[#0A5BFF] text-white px-5 py-3 rounded-xl shadow-lg">
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-xs font-medium">Years Experience</p>
                </div>
              </motion.div>

              {/* Right - Content */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="text-[#0A5BFF] text-sm font-semibold">Who We Are</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-5 leading-tight">Complete Car Care Solutions Under One Roof</h2>
                <div className="space-y-3 text-gray-500 text-sm leading-relaxed">
                  <p>Mittal Car Care is a trusted multi-brand car service center in Delhi with over 10 years of experience. We specialize in car repair, diagnostics, denting-painting, detailing, and all mechanical services.</p>
                  <p>We use 100% genuine spare parts, modern diagnostic tools, and employ certified technicians to deliver the best results. Our commitment to transparency means no hidden charges — you only pay for what you need.</p>
                  <p>With complimentary pickup & drop services and insurance claim assistance, we make car care hassle-free for thousands of satisfied customers across Delhi NCR.</p>
                </div>

                {/* Checklist */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {checklist.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#0A5BFF] flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OWNER'S INSIGHT */}
        <section className="py-14 md:py-20 bg-[#F5F5F5]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-0 items-stretch bg-white rounded-2xl overflow-hidden shadow-sm">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 md:p-12 lg:p-16 flex flex-col justify-center"
              >
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight">
                  <span className="text-[#0A5BFF]">OWNER&apos;S</span>{" "}
                  <span className="text-gray-900">INSIGHT</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-6">
                  &quot;The workshop owner has 40 years of experience in the industry and earned a diploma in automobile in 1985. He believes in prioritizing customer satisfaction and is dedicated to helping and guiding customers, whether or not they choose to have their work done at the workshop. His main goal is to assist others and resolve their car-related problems.&quot;
                </p>
                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-8">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-[#0A5BFF] hover:border-[#0A5BFF] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-[#0A5BFF] hover:border-[#0A5BFF] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-[#0A5BFF] hover:border-[#0A5BFF] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-[#0A5BFF] hover:border-[#0A5BFF] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </motion.div>

              {/* Right - Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-[#F5A623] min-h-[350px] md:min-h-[450px]"
              >
                <img
                  src="/images/owner.jpeg"
                  alt="Owner - Mittal Car Care"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Why Customers Choose Mittal Car Care</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">Compare our service quality with local workshops and authorized service centers.</p>
            </div>

            {/* Desktop Comparison */}
            <div className="hidden lg:block">
              {/* Column Headers */}
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 mb-6">
                <div />
                <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm">
                  <p className="text-sm font-bold text-gray-900">Local Workshop</p>
                </div>
                <div className="bg-[#0A5BFF] rounded-2xl p-5 text-center shadow-lg shadow-blue-200">
                  <p className="text-sm font-bold text-white">Mittal Car Care</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm">
                  <p className="text-sm font-bold text-gray-900">Authorized Service Center</p>
                </div>
              </div>

              {/* Comparison Rows */}
              {comparisonFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 mb-4"
                >
                  <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-[#0A5BFF]/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon size={18} className="text-[#0A5BFF]" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{feature.title}</p>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    {feature.local ? (
                      <CheckCircle2 size={22} className="text-green-500" />
                    ) : (
                      <X size={22} className="text-red-400" />
                    )}
                  </div>
                  <div className="bg-[#0A5BFF] rounded-2xl p-5 flex items-center justify-center shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                    {feature.mittal ? (
                      <CheckCircle2 size={22} className="text-white" />
                    ) : (
                      <X size={22} className="text-white/50" />
                    )}
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    {feature.authorized ? (
                      <CheckCircle2 size={22} className="text-green-500" />
                    ) : (
                      <X size={22} className="text-red-400" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Comparison - Stacked Cards */}
            <div className="lg:hidden space-y-4">
              {comparisonFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-[#0A5BFF]/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon size={18} className="text-[#0A5BFF]" />
                    </div>
                    <p className="text-sm font-bold text-gray-900">{feature.title}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <p className="text-[10px] font-semibold text-gray-500 uppercase mb-2">Local</p>
                      <div className="w-10 h-10 rounded-full mx-auto flex items-center justify-center bg-gray-50">
                        {feature.local ? (
                          <CheckCircle2 size={18} className="text-green-500" />
                        ) : (
                          <X size={18} className="text-red-400" />
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-semibold text-[#0A5BFF] uppercase mb-2">Mittal</p>
                      <div className="w-10 h-10 rounded-full mx-auto flex items-center justify-center bg-[#0A5BFF]">
                        {feature.mittal ? (
                          <CheckCircle2 size={18} className="text-white" />
                        ) : (
                          <X size={18} className="text-white/50" />
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-semibold text-gray-500 uppercase mb-2">Authorized</p>
                      <div className="w-10 h-10 rounded-full mx-auto flex items-center justify-center bg-gray-50">
                        {feature.authorized ? (
                          <CheckCircle2 size={18} className="text-green-500" />
                        ) : (
                          <X size={18} className="text-red-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Below Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-gradient-to-r from-[#0A5BFF] to-[#0047CC] rounded-2xl px-6 md:px-12 py-10 md:py-12 text-center"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white">Get Premium Service at Honest Prices</h3>
              <p className="text-blue-100 mt-2 text-sm max-w-md mx-auto">Experience the Mittal Car Care difference — quality work, genuine parts, and zero hidden charges.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#0A5BFF] text-sm font-bold px-8 py-3.5 rounded-xl mt-6 hover:bg-gray-50 transition-colors shadow-lg">
                <CalendarCheck size={16} /> Book Your Service Now
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 4. STATS SECTION */}
        <section className="py-14 md:py-20 bg-[#0A5BFF]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "5000+", label: "Cars Serviced" },
                { value: "10+", label: "Years Experience" },
                { value: "98%", label: "Customer Satisfaction" },
                { value: "15+", label: "Expert Technicians" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-blue-100 text-sm mt-2 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. OUR PROCESS */}
        <section className="py-14 md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">How We Work</h2>
              <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">Simple, transparent process from booking to delivery.</p>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:flex items-start justify-between relative">
              <div className="absolute top-8 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-200" />
              {processSteps.map((step, i) => (
                <motion.div key={step.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative flex flex-col items-center text-center w-1/4 px-3">
                  <div className="w-16 h-16 rounded-full bg-[#0A5BFF] flex items-center justify-center mb-4 relative z-10 shadow-lg shadow-blue-200">
                    <step.icon size={24} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-[#0A5BFF] mb-1">STEP {step.step}</span>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {processSteps.map((step, i) => (
                <motion.div key={step.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#0A5BFF] flex items-center justify-center shadow-lg shadow-blue-200">
                      <step.icon size={20} className="text-white" />
                    </div>
                    {i < processSteps.length - 1 && <div className="w-[2px] h-12 border-l-2 border-dashed border-gray-200 mt-2" />}
                  </div>
                  <div className="pt-1">
                    <span className="text-xs font-bold text-[#0A5BFF]">STEP {step.step}</span>
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. OUR TEAM */}
        <section className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Meet Our Experts</h2>
              <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">Dedicated professionals committed to excellence in car care.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, i) => (
                <motion.div key={member.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0A5BFF] to-blue-400 mx-auto mb-4 flex items-center justify-center">
                    <Users size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                  <p className="text-[#0A5BFF] text-sm font-medium mt-1">{member.position}</p>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">{member.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CUSTOMER TRUST */}
        <section className="py-14 md:py-20 bg-blue-50/50">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">Trusted By Thousands of Car Owners</h2>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">Over 5000+ vehicles serviced with a 98% satisfaction rate. Our commitment to quality, genuine parts, and transparent pricing has earned the trust of car owners across Delhi NCR.</p>
              </motion.div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {trustBadges.map((badge, i) => (
                  <motion.div key={badge.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                    <badge.icon size={24} className="text-[#0A5BFF] mx-auto mb-2" />
                    <p className="text-xs font-semibold text-gray-700">{badge.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA SECTION */}
        <section className="py-14 md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gradient-to-r from-[#0A5BFF] to-[#0047CC] rounded-2xl px-6 md:px-12 py-12 md:py-16 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Experience Premium Car Care Services Today</h2>
              <p className="text-blue-100 mt-3 max-w-md mx-auto text-sm">Book your car service with trusted experts at Mittal Car Care.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#0A5BFF] text-sm font-bold px-8 py-3.5 rounded-xl mt-8 hover:bg-gray-50 transition-colors shadow-lg">
                <CalendarCheck size={16} /> Book Service Now
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
