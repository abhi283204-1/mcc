"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import { BRANDS, BRAND_MODELS, FUEL_TYPES } from "@/lib/constants";

/**
 * Standalone vehicle-selection page.
 *
 * Used by:
 *  - Mobile Hero "Book Service" button  → navigates here, then to /services/car-services
 *  - PackageCard "Add to Cart" gate     → ?next=/cart (service already in CartContext)
 *  - Cart page safety gate              → ?next=/cart
 *
 * The ?next= query param controls where the user lands after completing
 * vehicle selection. Only internal paths are accepted (open-redirect guard).
 *
 * All vehicle data comes from lib/constants — no local duplication.
 */
export default function SelectCarPage() {
  const router = useRouter();
  const { setSelectedCar } = useCart();
  const [step, setStep] = useState<"brand" | "model" | "fuel">("brand");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const getNextPath = (): string => {
    if (typeof window === "undefined") return "/services/car-services";
    const next = new URLSearchParams(window.location.search).get("next");
    // Only allow same-origin paths — prevent open redirect
    if (next && /^\/[^/]/.test(next)) return next;
    return "/services/car-services";
  };

  const handleBrandSelect = (name: string) => {
    setBrand(name);
    setStep("model");
  };

  const handleModelSelect = (m: string) => {
    setModel(m);
    setStep("fuel");
  };

  const handleFuelSelect = (f: string) => {
    setSelectedCar({ brand, model, fuel: f });
    router.push(getNextPath());
  };

  const handleBack = () => {
    if (step === "model") { setStep("brand"); return; }
    if (step === "fuel")  { setStep("model"); return; }
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <button
            onClick={handleBack}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>
          <div>
            <h1 className="text-base font-bold text-gray-900">Select Your Car</h1>
            <p className="text-xs text-gray-500">
              {step === "brand" && "Choose your car brand"}
              {step === "model" && `Choose ${brand} model`}
              {step === "fuel"  && "Choose fuel type"}
            </p>
          </div>
        </div>
      </div>

      {/* Step breadcrumb */}
      <div className="bg-white border-b border-gray-100 px-4 py-2">
        <div className="max-w-lg mx-auto flex items-center gap-2 text-xs">
          <span className={step === "brand" ? "text-primary font-semibold" : "text-gray-400"}>Brand</span>
          <span className="text-gray-300">›</span>
          <span className={step === "model" ? "text-primary font-semibold" : "text-gray-400"}>Model</span>
          <span className="text-gray-300">›</span>
          <span className={step === "fuel"  ? "text-primary font-semibold" : "text-gray-400"}>Fuel</span>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6">

        {/* STEP 1 — Brand */}
        {step === "brand" && (
          <div>
            <h2 className="font-bold text-gray-900 mb-4">Select Car Brand</h2>
            <div className="grid grid-cols-3 gap-3">
              {BRANDS.map((b) => (
                <button
                  key={b.name}
                  onClick={() => handleBrandSelect(b.name)}
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-200 bg-white hover:border-primary hover:bg-primary/5 active:scale-95 transition-all"
                >
                  <div className="w-10 h-10 relative mb-1.5">
                    <Image src={b.logo} alt={b.name} fill className="object-contain" sizes="40px" />
                  </div>
                  <span className="text-[11px] text-gray-700 font-medium text-center leading-tight">{b.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 — Model */}
        {step === "model" && (
          <div>
            <h2 className="font-bold text-gray-900 mb-4">Select {brand} Model</h2>
            <div className="grid grid-cols-2 gap-3">
              {(BRAND_MODELS[brand] || []).map((m) => (
                <button
                  key={m}
                  onClick={() => handleModelSelect(m)}
                  className="flex items-center justify-center p-4 rounded-xl border border-gray-200 bg-white hover:border-primary hover:bg-primary/5 active:scale-95 transition-all text-sm font-medium text-gray-800"
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3 — Fuel */}
        {step === "fuel" && (
          <div>
            <h2 className="font-bold text-gray-900 mb-4">Select Fuel Type</h2>
            <div className="grid grid-cols-2 gap-4">
              {FUEL_TYPES.map((f) => (
                <button
                  key={f}
                  onClick={() => handleFuelSelect(f)}
                  className="flex items-center justify-center p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-primary hover:bg-primary/5 active:scale-95 transition-all text-sm font-bold text-gray-800"
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
