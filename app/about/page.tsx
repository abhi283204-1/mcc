"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Shield,
  Cpu,
  Truck,
  IndianRupee,
  Heart,
  CheckCircle2,
  CalendarCheck,
  Search,
  PackageCheck,
  Award,
  BadgeCheck,
  Car,
  Phone as PhoneIcon,
  Users,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/sections/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const whyChooseCards = [
  { icon: Wrench, title: "Experienced Mechanics", desc: "Skilled & certified professionals with years of expertise in multi-brand car repairs." },
  { icon: Shield, title: "Genuine Parts", desc: "100% genuine OEM spare parts sourced directly from authorized dealers." },
  { icon: Cpu, title: "Advanced Diagnostics", desc: "State-of-the-art diagnostic tools for accurate issue detection." },
  { icon: Truck, title: "Fast Delivery", desc: "On-time delivery with quality assurance on every service." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Premium quality services at transparent and fair prices." },
  { icon: Heart, title: "Customer Satisfaction", desc: "98% customer satisfaction rate with personalized care." },
];

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
              <Link href="#book" className="inline-flex items-center gap-2 bg-[#0A5BFF] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#0047CC] transition-colors">
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

        {/* 3. WHY CHOOSE US */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Why Customers Choose Mittal Car Care</h2>
              <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">Professional automotive services with quality, trust and transparency.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseCards.map((card, i) => (
                <motion.div key={card.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group border border-gray-100 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(10,91,255,0.08)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl border-2 border-[#0A5BFF]/20 flex items-center justify-center mb-4 group-hover:bg-[#0A5BFF]/5 transition-colors">
                    <card.icon size={22} className="text-[#0A5BFF]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
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
              <Link href="#book" className="inline-flex items-center gap-2 bg-white text-[#0A5BFF] text-sm font-bold px-8 py-3.5 rounded-xl mt-8 hover:bg-gray-50 transition-colors shadow-lg">
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
