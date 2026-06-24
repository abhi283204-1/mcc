"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Shield,
  Car,
  CheckCircle,
  ChevronDown,
  Lock,
  ArrowRight,
} from "lucide-react";

const brandModels: Record<string, string[]> = {
  "Maruti Suzuki": ["Swift", "Baleno", "Dzire", "Brezza", "Alto", "WagonR", "Ertiga", "Ciaz", "Ignis", "S-Cross", "XL6"],
  "Hyundai": ["i20", "Creta", "Venue", "Verna", "i10 Grand", "Tucson", "Alcazar", "Aura", "Santro", "Exter"],
  "Tata": ["Nexon", "Punch", "Harrier", "Safari", "Altroz", "Tiago", "Tigor", "Zest"],
  "Honda": ["City", "Amaze", "WR-V", "Jazz", "Civic", "Elevate"],
  "Toyota": ["Innova", "Fortuner", "Glanza", "Urban Cruiser", "Camry", "Hilux"],
  "Kia": ["Seltos", "Sonet", "Carens", "EV6", "Carnival"],
  "Mahindra": ["XUV700", "Thar", "Scorpio", "XUV300", "Bolero", "XUV400"],
  "BMW": ["3 Series", "5 Series", "X1", "X3", "X5", "7 Series"],
  "Mercedes-Benz": ["C-Class", "E-Class", "GLC", "GLE", "A-Class", "S-Class"],
  "Audi": ["A3", "A4", "A6", "Q3", "Q5", "Q7", "A8", "Q8", "RS5"],
  "MG": ["Hector", "Astor", "ZS EV", "Gloster", "Comet"],
  "Skoda": ["Kushaq", "Slavia", "Octavia", "Superb", "Kodiaq"],
};

const fuelTypes = ["Petrol", "Diesel", "CNG", "Electric"];

export default function HeroBanner() {
  const [step, setStep] = useState(1);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);

  const stepLabels = ["Brand", "Model", "Fuel", "Verify"];

  const handleSendOtp = () => {
    if (mobile.length === 10) setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    if (otp === "1234") setVerified(true);
  };

  const handleSubmit = () => {
    const msg = `New Lead:\nName: ${name}\nMobile: ${mobile}\nBrand: ${brand}\nModel: ${model}\nFuel: ${fuel}`;
    const url = `https://wa.me/918800752884?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };
  return (
    <>
      {/* MOBILE LAYOUT */}
      <section className="block md:hidden bg-gray-900">
        {/* Banner Image with overlaid content */}
        <div className="relative w-full aspect-[9/18] overflow-hidden">
          <Image
            src="/images/mobile-banner.png"
            alt="Mittal Car Care Workshop"
            fill
            className="object-cover"
            style={{ top: "-70px" }}
            priority
            sizes="100vw"
          />
          {/* Gradient overlay - darker at bottom for text readability, clear at top for brand name */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />

          {/* Content overlaid from middle downward */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 top-[50%] flex flex-col justify-end">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#0A5BFF]/80 px-4 py-[6px] text-[10px] font-semibold tracking-wide text-white">
              <Shield size={10} />
              MULTI-BRAND CAR SERVICE CENTER
            </span>

            <h1 className="mb-3 text-[30px] font-extrabold leading-[1.25] text-white">
              Trusted Car Repair &
              Multi-Brand Service
              Center <span className="text-[#0b46bf]">in Delhi</span>.
            </h1>

            <p className="mb-5 text-[13px] font-medium leading-[22px] text-white/80">
              Professional diagnostics, repair, detailing, denting-painting and premium car care services under one roof.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#book"
                className="flex-1 inline-flex h-[40px] items-center justify-center gap-2 rounded-lg bg-[#0A5BFF] px-5 py-[10px] text-[13px] font-semibold text-white"
              >
                <img src="/images/Icons/book-service.svg" alt="" className="w-5 h-5" />
                Book Service
              </a>
              <a
                href="tel:+919873370404"
                className="flex-1 inline-flex h-[40px] items-center justify-center gap-2 rounded-lg bg-white px-5 py-[10px] text-[13px] font-semibold text-[#5e5e60]"
              >
                <img src="/images/Icons/call-us.svg" alt="Call" className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Stats - 2x2 grid */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { img: "/images/Icons/experience-icon.svg", value: "10+", label: "Years Experience" },
                { img: "/images/Icons/car-icon.svg", value: "5000+", label: "Cars Serviced" },
                { icon: CheckCircle, value: "Multi-Brand", label: "Experts" },
                { icon: Shield, value: "100%", label: "Customer Satisfaction" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-md"
                >
                  {stat.img ? (
                    <img src={stat.img} alt={stat.label} className="w-7 h-7" />
                  ) : (
                    stat.icon && <stat.icon className="w-7 h-7 text-[#0A5BFF] flex-shrink-0" />
                  )}
                  <div>
                    <p className="text-[16px] font-bold leading-tight text-gray-900">{stat.value}</p>
                    <p className="text-[11px] leading-tight text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP LAYOUT */}
      <section className="relative w-full min-h-[480px] overflow-hidden bg-gray-900 hidden md:block">
        <Image
          src="/images/banner-image.png"
          alt="Mittal Car Care Workshop"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0) 75%)",
          }}
        />

        {/* Container */}
        <div className="relative z-10 mx-auto h-full max-w-[1280px] px-6 py-5 lg:py-6">
          <div className="grid h-full grid-cols-[1fr_340px] lg:grid-cols-[1fr_370px] gap-6 lg:gap-10">
            {/* LEFT COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex h-full flex-col justify-between"
            >
              <div>
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#0A5BFF]/80 px-4 py-[6px] text-[10px] font-semibold tracking-wide text-white">
                  <Shield size={10} />
                  MULTI-BRAND CAR SERVICE CENTER
                </span>

                <h1 className="mb-3 text-[36px] lg:text-[40px] font-extrabold leading-[1.25] text-white">
                  Trusted Car Repair &
                  <br /> Multi-Brand Service
                  <br /> Center{" "}
                  <span className="text-[#0b46bf]">in Delhi</span>.
                </h1>

                <p className="mb-5 max-w-[420px] text-[14px] leading-[22px] text-white/80">
                  Professional diagnostics, repair, detailing, denting-painting<br />and premium car care services under one roof.
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href="#book"
                    className="inline-flex h-[40px] items-center gap-2 rounded-lg bg-[#0A5BFF] px-[26px] py-[25px] text-[14px] font-semibold text-white hover:bg-blue-700 transition-colors"
                  >
                    <img src="/images/Icons/book-service.svg" alt="" className="w-5 h-5" />
                    Book Service
                  </a>
                  <a
                    href="tel:+919873370404"
                    className="inline-flex h-[40px] items-center gap-2 rounded-lg bg-white px-[26px] py-[25px] text-[14px] font-semibold text-[#5e5e60] hover:bg-gray-50 transition-colors"
                  >
                    <img src="/images/Icons/call-us.svg" alt="Call" className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>

              {/* Bottom: Stats */}
              <div className="flex items-center gap-2 lg:gap-3">
                {[
                  { icon: null, img: "/images/Icons/experience-icon.svg", value: "10+", label: "Years Experience" },
                  { icon: null, img: "/images/Icons/car-icon.svg", value: "5000+", label: "Cars Serviced" },
                  { icon: CheckCircle, img: null, value: "Multi-Brand", label: "Experts" },
                  { icon: Shield, img: null, value: "100%", label: "Customer Satisfaction" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-md lg:px-4 lg:py-3"
                  >
                    {stat.img ? (
                      <img src={stat.img} alt={stat.label} className="w-7 h-7"/>
                    ) : (
                      stat.icon && <stat.icon className="w-7 h-7 text-[#0A5BFF] flex-shrink-0" />
                    )}
                    <div>
                      <p className="text-[18px] font-bold leading-tight text-gray-900">{stat.value}</p>
                      <p className="text-[13px] leading-tight text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT COLUMN - FORM CARD */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-stretch"
            >
              <div className="w-full rounded-2xl bg-white p-6 lg:p-8 shadow-2xl flex flex-col justify-between">
                <div>
                  <h3 className="mb-2 text-[18px] font-bold text-gray-900">
                    Get Instant{" "}
                    <span className="text-[#0A5BFF]">Car Service Quote</span>
                  </h3>
                  <p className="mb-5 text-[12px] text-gray-400">
                    Follow 4 simple steps to get your estimated quote
                  </p>

                  {/* Step Indicators */}
                  <div className="mb-5 flex items-start justify-between">
                    {[1, 2, 3, 4].map((s, i) => (
                      <div key={s} className={`flex items-center ${i < 3 ? "flex-1" : ""}`}>
                        <div className="flex flex-col items-center">
                          <div className={`flex h-[32px] w-[32px] items-center justify-center rounded-full text-[12px] font-bold ${s <= step ? "bg-[#0A5BFF] text-white" : "border-2 border-gray-200 bg-white text-gray-400"}`}>
                            {s}
                          </div>
                          <span className={`text-[10px] mt-1 ${s <= step ? "text-[#0A5BFF] font-semibold" : "text-gray-400"}`}>{stepLabels[i]}</span>
                        </div>
                        {i < 3 && <div className={`mx-2 h-[2px] flex-1 self-center mt-[-12px] ${s < step ? "bg-[#0A5BFF]" : "bg-gray-200"}`} />}
                      </div>
                    ))}
                  </div>

                  {/* Step 1: Brand */}
                  {step === 1 && (
                    <>
                      <p className="mb-1.5 text-[11px] text-gray-400">Step 1 of 4</p>
                      <p className="mb-4 text-[14px] font-bold text-gray-900">Select Your Car Brand</p>
                      <div className="relative mb-5">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2"><Car size={16} className="text-gray-400" /></div>
                        <select value={brand} onChange={(e) => setBrand(e.target.value)} className="h-[48px] w-full cursor-pointer appearance-none rounded-lg border border-gray-200 bg-white pl-10 pr-10 text-[13px] font-medium text-gray-700 focus:border-[#0A5BFF] focus:outline-none focus:ring-2 focus:ring-[#0A5BFF]/10">
                          <option value="">Select Brand</option>
                          {Object.keys(brandModels).map((b) => (<option key={b}>{b}</option>))}
                        </select>
                        <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </>
                  )}

                  {/* Step 2: Model */}
                  {step === 2 && (
                    <>
                      <p className="mb-1.5 text-[11px] text-gray-400">Step 2 of 4</p>
                      <p className="mb-4 text-[14px] font-bold text-gray-900">Select {brand} Model</p>
                      <div className="relative mb-5">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2"><Car size={16} className="text-gray-400" /></div>
                        <select value={model} onChange={(e) => setModel(e.target.value)} className="h-[48px] w-full cursor-pointer appearance-none rounded-lg border border-gray-200 bg-white pl-10 pr-10 text-[13px] font-medium text-gray-700 focus:border-[#0A5BFF] focus:outline-none focus:ring-2 focus:ring-[#0A5BFF]/10">
                          <option value="">Select Model</option>
                          {(brandModels[brand] || []).map((m) => (<option key={m}>{m}</option>))}
                        </select>
                        <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </>
                  )}

                  {/* Step 3: Fuel */}
                  {step === 3 && (
                    <>
                      <p className="mb-1.5 text-[11px] text-gray-400">Step 3 of 4</p>
                      <p className="mb-4 text-[14px] font-bold text-gray-900">Select Fuel Type</p>
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        {fuelTypes.map((f) => (
                          <button key={f} onClick={() => setFuel(f)} className={`py-3 rounded-lg border-2 text-sm font-medium transition-all ${fuel === f ? "border-[#0A5BFF] bg-[#0A5BFF]/5 text-[#0A5BFF]" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}>{f}</button>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Step 4: Verify */}
                  {step === 4 && (
                    <>
                      <p className="mb-1.5 text-[11px] text-gray-400">Step 4 of 4</p>
                      <p className="mb-4 text-[14px] font-bold text-gray-900">Verify Your Details</p>
                      <div className="space-y-3 mb-5">
                        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="h-[48px] w-full rounded-lg border border-gray-200 px-4 text-[13px] focus:border-[#0A5BFF] focus:outline-none focus:ring-2 focus:ring-[#0A5BFF]/10" />
                        <div className="flex gap-2">
                          <input type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))} className="h-[48px] flex-1 rounded-lg border border-gray-200 px-4 text-[13px] focus:border-[#0A5BFF] focus:outline-none focus:ring-2 focus:ring-[#0A5BFF]/10" />
                          {!otpSent && <button type="button" onClick={handleSendOtp} disabled={mobile.length !== 10} className="h-[48px] px-4 rounded-lg bg-[#0A5BFF] text-white text-[12px] font-semibold disabled:opacity-50 whitespace-nowrap">Send OTP</button>}
                        </div>
                        {otpSent && !verified && (
                          <>
                            <p className="text-green-600 text-xs">OTP sent to {mobile}. Enter 1234 to verify.</p>
                            <div className="flex gap-2">
                              <input type="text" placeholder="Enter 4-digit OTP" value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))} className="h-[48px] flex-1 rounded-lg border border-gray-200 px-4 text-[13px] focus:border-[#0A5BFF] focus:outline-none focus:ring-2 focus:ring-[#0A5BFF]/10" />
                              <button type="button" onClick={handleVerifyOtp} disabled={otp.length !== 4} className="h-[48px] px-4 rounded-lg bg-[#0A5BFF] text-white text-[12px] font-semibold disabled:opacity-50">Verify</button>
                            </div>
                          </>
                        )}
                        {verified && <p className="text-green-600 text-sm font-medium flex items-center gap-1"><CheckCircle size={14} /> Mobile verified successfully!</p>}
                      </div>
                    </>
                  )}
                </div>

                <div>
                  {step < 4 ? (
                    <button
                      onClick={() => setStep(step + 1)}
                      disabled={(step === 1 && !brand) || (step === 2 && !model) || (step === 3 && !fuel)}
                      className="flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#0A5BFF] text-[14px] font-semibold text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next Step <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!verified || !name}
                      className="flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-green-600 text-[14px] font-semibold text-white hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Submit via WhatsApp <ArrowRight size={16} />
                    </button>
                  )}
                  <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
                    <Lock size={12} />
                    Your information is safe with us
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
