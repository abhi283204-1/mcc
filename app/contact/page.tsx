"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CalendarCheck,
  Shield,
  Wrench,
  IndianRupee,
  Truck,
  ChevronDown,
  ParkingCircle,
  Accessibility,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/sections/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const contactCards = [
  { icon: MapPin, title: "Workshop Address", detail: "251-A, Block-E, Dilshad Garden,\nDelhi-110095" },
  { icon: Phone, title: "Phone Number", detail: "+91 98733 70404\n+91 98734 92828" },
  { icon: Mail, title: "Email Address", detail: "mittalcarscanning@gmail.com" },
  { icon: Clock, title: "Working Hours", detail: "Mon - Sun: 9:30 AM - 7:00 PM\n(Tuesday Closed)" },
];

const services = ["Car Service", "Denting & Painting", "Detailing", "Ceramic Coating", "Insurance Claims", "AC Repair"];

const trustCards = [
  { icon: Shield, title: "Genuine Spare Parts", desc: "100% OEM genuine parts sourced from authorized dealers." },
  { icon: Wrench, title: "Expert Mechanics", desc: "Certified professionals with multi-brand expertise." },
  { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden charges — upfront estimates before work begins." },
  { icon: Truck, title: "Fast Turnaround", desc: "On-time delivery with quality assurance on every service." },
];

const faqs = [
  { q: "How can I book a service?", a: "You can book a service by calling us, sending a WhatsApp message, or using the contact form on this page. We also accept walk-in appointments." },
  { q: "Do you provide pickup & drop?", a: "Yes, we offer free pickup and drop service within a 10km radius of our workshop. For locations beyond that, a nominal charge applies." },
  { q: "Which car brands do you service?", a: "We are a multi-brand service center. We service all major brands including Maruti, Hyundai, Honda, Toyota, Tata, Mahindra, Kia, BMW, Mercedes, Audi, and more." },
  { q: "Do you use genuine parts?", a: "Yes, we only use 100% genuine OEM spare parts sourced directly from authorized dealers to ensure quality and warranty." },
  { q: "How long does servicing take?", a: "A standard service takes 4-6 hours. For major repairs or denting-painting, it may take 1-2 days. We always inform you about the timeline upfront." },
  { q: "Do you handle insurance claims?", a: "Yes, we handle all types of insurance claims including cashless and reimbursement. We assist with complete paperwork and work with all major insurance companies." },
];

const areas = ["Dilshad Garden", "Shahdara", "Vivek Vihar", "East Delhi", "Ghaziabad", "Vaishali", "Preet Vihar", "Mayur Vihar"];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden transition-shadow hover:shadow-sm">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left">
        <span className="font-semibold text-gray-900 text-sm md:text-base">{q}</span>
        <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ml-3 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[74px]">
        {/* 1. HERO BANNER */}
        <section className="relative h-[320px] md:h-[420px] overflow-hidden">
          <img src="/images/mcc-banner.jpg" alt="Mittal Car Care Workshop" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 h-full flex flex-col justify-center">
            <nav className="mb-4 text-sm text-gray-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Contact Us</span>
            </nav>
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 w-fit">
              CONTACT MITTAL CAR CARE
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-2xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight max-w-2xl">
              Get In Touch With Delhi&apos;s Trusted Car Care Experts
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-200 text-sm md:text-base mt-4 max-w-xl leading-relaxed">
              Book your car service, request a callback, or visit our workshop for professional multi-brand car care solutions.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex gap-3 mt-6">
              <Link href="#enquiry-form" className="inline-flex items-center gap-2 bg-[#0A5BFF] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#0047CC] transition-colors">
                <CalendarCheck size={16} /> Book Service
              </Link>
              <a href="tel:+919873370404" className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                <Phone size={16} /> Call Now
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. CONTACT INFO + ENQUIRY FORM */}
        <section className="py-14 md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
              {/* Left - Contact Info */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <span className="text-[#0A5BFF] text-sm font-semibold">Contact Information</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3">We&apos;re Here To Help You</h2>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">Reach out to our support team for bookings, service queries, insurance claims, or workshop assistance.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactCards.map((card, i) => (
                    <motion.div key={card.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border border-gray-100 rounded-2xl p-5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-shadow duration-300">
                      <div className="w-10 h-10 rounded-xl border-2 border-[#0A5BFF]/20 flex items-center justify-center mb-3">
                        <card.icon size={18} className="text-[#0A5BFF]" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">{card.title}</h3>
                      <p className="text-sm text-gray-500 whitespace-pre-line leading-relaxed">{card.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right - Enquiry Form */}
              <motion.div id="enquiry-form" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-10">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Request a Callback</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Full Name" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#0A5BFF] transition-colors" />
                  <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#0A5BFF] transition-colors" />
                  <input type="email" placeholder="Email Address" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#0A5BFF] transition-colors" />
                  <input type="text" placeholder="Car Brand (e.g., Hyundai, Maruti)" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#0A5BFF] transition-colors" />
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#0A5BFF] transition-colors text-gray-500">
                    <option value="">Select Service</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <textarea placeholder="Message (optional)" rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#0A5BFF] transition-colors resize-none" />
                  <button type="submit" className="w-full bg-[#0A5BFF] text-white font-semibold text-sm h-[54px] rounded-xl hover:bg-[#0047CC] transition-colors">
                    Submit Enquiry
                  </button>
                  <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                    <Shield size={12} /> Your information is safe with us.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. MAP SECTION */}
        <section className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Visit Our Workshop</h2>
              <p className="text-gray-500 mt-3 text-sm">Conveniently located in Dilshad Garden, Delhi.</p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-gray-200 h-[320px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9!2d77.3120!3d28.6800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5a5e5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sDilshad%20Garden%2C%20Delhi!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mittal Car Care Location"
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { icon: ParkingCircle, label: "Parking Available" },
                { icon: Accessibility, label: "Easy Accessibility" },
                { icon: Truck, label: "Pickup & Drop Available" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-5 py-4">
                  <item.icon size={20} className="text-[#0A5BFF]" />
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHY CONTACT US */}
        <section className="py-14 md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Why Customers Trust Mittal Car Care</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustCards.map((card, i) => (
                <motion.div key={card.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white border border-gray-100 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl border-2 border-[#0A5BFF]/20 flex items-center justify-center mb-4">
                    <card.icon size={22} className="text-[#0A5BFF]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq) => <AccordionItem key={faq.q} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        </section>

        {/* 6. SERVICE AREAS */}
        <section className="py-14 md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Areas We Serve</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((area) => (
                <span key={area} className="group inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-[#0A5BFF] hover:text-white hover:border-[#0A5BFF] transition-all duration-300 cursor-default">
                  <MapPin size={14} className="text-[#0A5BFF] group-hover:text-white transition-colors" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTA SECTION */}
        <section className="py-14 md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-[#0A5BFF] to-[#0047CC] rounded-3xl px-6 md:px-12 py-12 md:py-16 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Need Professional Car Care Services?</h2>
              <p className="text-blue-100 mt-3 max-w-md mx-auto text-sm">Book your appointment today and experience premium automotive care.</p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <Link href="#enquiry-form" className="inline-flex items-center gap-2 bg-white text-[#0A5BFF] text-sm font-bold px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
                  <CalendarCheck size={16} /> Book Service Now
                </Link>
                <a href="tel:+919873370404" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-colors">
                  <Phone size={16} /> Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
