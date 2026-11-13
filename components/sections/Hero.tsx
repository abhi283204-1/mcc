"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Phone, CalendarCheck, Shield, ChevronRight } from "lucide-react";
import { STATS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  const router = useRouter();

  const goToVehicleSelection = () => {
    router.push("/select-car");
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20 lg:pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60 z-10" />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />

      <div className="container relative z-20 mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
        <div className="grid grid-cols-1 items-start gap-8 md:gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] xl:items-center xl:gap-12">
          {/* Left Content */}
          <motion.div className="min-w-0" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary-dark border border-primary/30 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5" /> MULTI-BRAND CAR SERVICE CENTER
            </span>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl xl:mb-6 xl:text-6xl">
              Trusted Car Repair & Multi-Brand Service Center{" "}
              <span className="text-primary">in Delhi</span>
            </h1>
            <p className="mb-6 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg xl:mb-7">
              Professional diagnostics, repair, detailing, denting-painting and premium car care services under one roof.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" onClick={goToVehicleSelection}>
                <CalendarCheck className="w-5 h-5" /> Book Service
              </Button>
              <Button variant="secondary" size="lg">
                <Phone className="w-5 h-5" /> Call Now
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                  <p className="text-white font-bold text-lg">{stat.value}</p>
                  <p className="text-gray-300 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Quote Form */}
          <motion.div className="mx-auto w-full min-w-0 max-w-2xl xl:max-w-none" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="w-full min-w-0 rounded-2xl bg-white p-5 shadow-2xl sm:p-6 xl:p-6 2xl:p-7">
              <h3 className="mb-1 text-lg font-bold leading-snug text-gray-900 sm:text-xl">Get Instant <span className="text-primary">Car Service Quote</span></h3>
              <p className="text-gray-500 text-sm mb-6">Follow 4 simple steps to get your estimated quote</p>

              {/* Steps indicator */}
              <div className="mb-5 flex min-w-0 items-center gap-2 sm:gap-3">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${step === 1 ? "bg-primary text-white" : "bg-gray-100 text-gray-400"}`}>
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

              <Button className="w-full" size="lg" onClick={goToVehicleSelection}>
                Start Booking <ChevronRight className="w-4 h-4" />
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
