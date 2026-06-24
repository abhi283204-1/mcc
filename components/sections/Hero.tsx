"use client";
import { motion } from "framer-motion";
import { Phone, CalendarCheck, Shield, ChevronRight } from "lucide-react";
import { STATS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60 z-10" />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />

      <div className="container mx-auto max-w-7xl px-4 relative z-20 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary-dark border border-primary/30 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5" /> MULTI-BRAND CAR SERVICE CENTER
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Trusted Car Repair & Multi-Brand Service Center{" "}
              <span className="text-primary">in Delhi</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
              Professional diagnostics, repair, detailing, denting-painting and premium car care services under one roof.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg">
                <CalendarCheck className="w-5 h-5" /> Book Service
              </Button>
              <Button variant="secondary" size="lg">
                <Phone className="w-5 h-5" /> Call Now
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                  <p className="text-white font-bold text-lg">{stat.value}</p>
                  <p className="text-gray-300 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Quote Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Get Instant <span className="text-primary">Car Service Quote</span></h3>
              <p className="text-gray-500 text-sm mb-6">Follow 4 simple steps to get your estimated quote</p>

              {/* Steps indicator */}
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step === 1 ? "bg-primary text-white" : "bg-gray-100 text-gray-400"}`}>
                    {step}
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 mb-2">Step 1 of 4</p>
              <p className="font-semibold text-gray-900 mb-4">Select Your Car Brand</p>

              <div className="relative mb-6">
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-600 appearance-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10">
                  <option>Select Brand</option>
                  <option>Hyundai</option>
                  <option>Honda</option>
                  <option>Maruti Suzuki</option>
                  <option>Toyota</option>
                  <option>Tata</option>
                  <option>Mahindra</option>
                  <option>KIA</option>
                </select>
              </div>

              <Button className="w-full" size="lg">
                Next Step <ChevronRight className="w-4 h-4" />
              </Button>

              <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" /> Your information is safe with us
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
