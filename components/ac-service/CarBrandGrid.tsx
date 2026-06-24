"use client";

import { useState } from "react";
import Image from "next/image";
import { BRANDS } from "@/lib/constants";
import { useCart } from "@/lib/CartContext";
import { ArrowLeft } from "lucide-react";

const brandModels: Record<string, string[]> = {
  "Maruti Suzuki": ["Swift", "Baleno", "Dzire", "Brezza", "Alto", "WagonR", "Ertiga", "Ciaz", "Ignis", "XL6"],
  "Hyundai": ["i20", "Creta", "Venue", "Verna", "i10 Grand", "Tucson", "Alcazar", "Aura", "Santro", "Exter"],
  "Tata": ["Nexon", "Punch", "Harrier", "Safari", "Altroz", "Tiago", "Tigor"],
  "Honda": ["City", "Amaze", "WR-V", "Jazz", "Civic", "Elevate"],
  "Toyota": ["Innova", "Fortuner", "Glanza", "Urban Cruiser", "Camry", "Hilux"],
  "KIA": ["Seltos", "Sonet", "Carens", "EV6", "Carnival"],
  "Mahindra": ["XUV700", "Thar", "Scorpio", "XUV300", "Bolero", "XUV400"],
  "BMW": ["3 Series", "5 Series", "X1", "X3", "X5", "7 Series"],
  "Mercedes-Benz": ["C-Class", "E-Class", "GLC", "GLE", "A-Class", "S-Class"],
  "Audi": ["A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7", "Q8", "e-tron"],
  "MG": ["Hector", "Astor", "ZS EV", "Gloster", "Comet"],
  "Skoda": ["Kushaq", "Slavia", "Octavia", "Superb", "Kodiaq"],
  "Ford": ["EcoSport", "Endeavour", "Figo", "Aspire"],
  "Volkswagen": ["Polo", "Vento", "Taigun", "Virtus", "Tiguan"],
  "Renault": ["Kwid", "Triber", "Kiger", "Duster"],
  "Nissan": ["Magnite", "Kicks"],
  "Jeep": ["Compass", "Meridian", "Wrangler", "Grand Cherokee"],
};

const fuelTypes = ["Petrol", "Diesel", "CNG", "Electric"];

export default function CarBrandGrid() {
  const { setSelectedCar } = useCart();
  const [step, setStep] = useState<"brand" | "model" | "fuel" | "selected">("brand");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");

  const handleBrandSelect = (name: string) => {
    setBrand(name);
    setStep("model");
  };

  const handleModelSelect = (m: string) => {
    setModel(m);
    setStep("fuel");
  };

  const handleFuelSelect = (f: string) => {
    setFuel(f);
    setSelectedCar({ brand, model, fuel: f });
    setStep("selected");
  };

  const handleReset = () => {
    setBrand("");
    setModel("");
    setFuel("");
    setSelectedCar(null);
    setStep("brand");
  };

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden sticky top-[90px]">
      {/* Brand Selection */}
      {step === "brand" && (
        <>
          <h3 className="font-bold text-gray-900 text-lg text-center py-4 border-b border-gray-200">Select Car Brand</h3>
          <div className="h-[500px] overflow-y-auto p-4">
            <div className="grid grid-cols-3 gap-3">
              {BRANDS.map((b) => (
                <button key={b.name} onClick={() => handleBrandSelect(b.name)} className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all">
                  <div className="w-10 h-10 relative mb-1.5">
                    <Image src={b.logo} alt={b.name} fill className="object-contain" sizes="40px" />
                  </div>
                  <span className="text-[11px] text-gray-700 font-medium text-center leading-tight">{b.name}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Model Selection */}
      {step === "model" && (
        <>
          <div className="px-4 pt-3">
            <button onClick={() => setStep("brand")} className="text-primary text-sm font-medium flex items-center gap-1"><ArrowLeft size={14} /> Back</button>
          </div>
          <h3 className="font-bold text-gray-900 text-lg text-center py-3">Select {brand} Model</h3>
          <div className="h-[460px] overflow-y-auto p-4">
            <div className="grid grid-cols-2 gap-3">
              {(brandModels[brand] || []).map((m) => (
                <button key={m} onClick={() => handleModelSelect(m)} className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all">
                  <span className="text-sm font-medium text-gray-800">{m}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Fuel Selection */}
      {step === "fuel" && (
        <>
          <div className="px-4 pt-3">
            <button onClick={() => setStep("model")} className="text-primary text-sm font-medium flex items-center gap-1"><ArrowLeft size={14} /> Back</button>
          </div>
          <h3 className="font-bold text-gray-900 text-lg text-center py-3">Select Fuel Type</h3>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3">
              {fuelTypes.map((f) => (
                <button key={f} onClick={() => handleFuelSelect(f)} className="flex flex-col items-center justify-center p-5 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all">
                  <span className="text-sm font-bold text-gray-800">{f}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Selected Car */}
      {step === "selected" && (
        <>
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <h3 className="font-bold text-gray-900 text-lg">Selected Car</h3>
            <button onClick={handleReset} className="text-primary text-sm font-semibold">Change Car?</button>
          </div>
          <div className="p-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="font-bold text-gray-900">{brand}</p>
              <p className="text-gray-600 text-sm">{model} ({fuel})</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
