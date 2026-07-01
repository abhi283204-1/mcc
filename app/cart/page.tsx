"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/CartContext";
import { X, ShieldCheck, ChevronRight, ArrowRight, MapPin, ArrowLeft } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, total, selectedCar } = useCart();
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("5 - 6PM");
  const [step, setStep] = useState<"datetime" | "address" | "payment">("datetime");
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [locality, setLocality] = useState("");
  const [flatNo, setFlatNo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const days = Array.from({ length: 6 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return { date: d.getDate(), day: d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(), full: d.toISOString().split("T")[0] };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="max-w-[1280px] mx-auto flex items-center gap-3">
          <ShieldCheck className="text-primary" size={28} />
          <h1 className="text-xl font-bold text-gray-900">Secure Checkout</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Logged In */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-1">Logged In</h2>
              <p className="text-gray-500">Abhishek sharma | 8800752884</p>
            </div>

            {/* Date & Time Section */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              {step === "datetime" ? (
                <div className="border-l-4 border-primary pl-4">
                  <h2 className="text-lg font-bold text-gray-900 mb-6">Select Date and Time of Service :</h2>
                  <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                    {days.map((d, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedDate(i)}
                        className={`flex flex-col items-center justify-center w-16 h-16 rounded-lg border-2 transition-all flex-shrink-0 ${
                          selectedDate === i ? "border-primary text-primary" : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        <span className="text-lg font-bold">{d.date}</span>
                        <span className="text-xs">{d.day}</span>
                      </button>
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Time Slot <span className="text-sm font-normal text-gray-500">(5 slots available)</span></h3>
                  <div className="mt-4 space-y-5">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">🌅</span>
                        <span className="font-semibold text-gray-800">Morning Slots</span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {["9 - 10AM", "10 - 11AM"].map((slot) => (
                          <button key={slot} onClick={() => setSelectedSlot(slot)} className={`px-8 py-3 rounded-lg border-2 text-sm font-medium transition-all ${selectedSlot === slot ? "border-primary bg-primary/5 text-primary" : "border-gray-200 text-gray-600"}`}>{slot}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">☀️</span>
                        <span className="font-semibold text-gray-800">Afternoon Slots</span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {["12 - 1PM", "1 - 2PM"].map((slot) => (
                          <button key={slot} onClick={() => setSelectedSlot(slot)} className={`px-8 py-3 rounded-lg border-2 text-sm font-medium transition-all ${selectedSlot === slot ? "border-primary bg-primary/5 text-primary" : "border-gray-200 text-gray-600"}`}>{slot}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">🌇</span>
                        <span className="font-semibold text-gray-800">Evening Slots</span>
                      </div>
                      <button onClick={() => setSelectedSlot("5 - 6PM")} className={`px-8 py-3 rounded-lg border-2 text-sm font-medium transition-all ${selectedSlot === "5 - 6PM" ? "border-primary bg-primary/5 text-primary" : "border-gray-200 text-gray-600"}`}>5 - 6PM</button>
                    </div>
                  </div>
                  <div className="flex justify-end mt-8">
                    <button onClick={() => setStep("address")} className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
                      CONTINUE <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Select Date and Time of Service</h2>
                    <p className="text-gray-500 text-sm mt-1">Date: {days[selectedDate].full}</p>
                    <p className="text-gray-500 text-sm">Time: {selectedSlot}</p>
                  </div>
                  <button onClick={() => setStep("datetime")} className="text-primary font-bold text-sm hover:underline">CHANGE</button>
                </div>
              )}
            </div>

            {/* Address Section */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              {step === "address" ? (
                <div className="border-l-4 border-primary pl-4">
                  <h2 className="text-lg font-bold text-gray-900">Select/ Add Address</h2>
                  <p className="text-sm text-gray-500 mt-2 mb-4">Select from saved address or add a new address</p>

                  <h3 className="font-semibold text-gray-800 text-sm mb-3">Enter a New Address</h3>
                  <div className="space-y-4 mb-6">
                    <input
                      type="text"
                      placeholder="Enter Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
                    />
                    <input
                      type="tel"
                      placeholder="Enter Mobile Number *"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
                    />
                    <input
                      type="text"
                      placeholder="Enter Locality *"
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
                    />
                    <input
                      type="text"
                      placeholder="Flat Number/Room Number/Suite(Optional)"
                      value={flatNo}
                      onChange={(e) => setFlatNo(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>

                  <h3 className="font-semibold text-gray-800 text-sm mb-3">Choose from Saved Addresses</h3>
                  <div className="border border-gray-200 rounded-lg p-4 max-w-xs">
                    <div className="flex items-start gap-2 mb-4">
                      <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Lalkuan, Lucknow, Uttar Pradesh, India, 104, ,</p>
                    </div>
                    <button className="border border-gray-800 text-gray-800 font-semibold text-sm px-6 py-2 rounded hover:bg-gray-50 transition-colors">
                      SELECT
                    </button>
                  </div>

                  <div className="flex justify-end mt-8">
                    <button onClick={() => setStep("payment")} className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
                      CONTINUE <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ) : step === "payment" ? (
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Select/ Add Address</h2>
                    <p className="text-gray-500 text-sm mt-1">{locality || "Lalkuan, Lucknow, Uttar Pradesh, India"} {flatNo || "104"}</p>
                  </div>
                  <button onClick={() => setStep("address")} className="text-primary font-bold text-sm hover:underline">CHANGE</button>
                </div>
              ) : (
                <h2 className="text-lg font-bold text-gray-400">Select/ Add Address</h2>
              )}
            </div>

            {/* Payment Section */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              {step === "payment" ? (
                <div className="border-l-4 border-primary pl-4">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">Payment</h2>
                  <p className="text-sm text-gray-500 mb-6">Select a payment method and place Order:</p>

                  <div className="space-y-4">
                    <label className="flex items-center justify-between py-3 cursor-pointer">
                      <span className="text-sm font-medium text-gray-800">Pay cash</span>
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 accent-primary"
                      />
                    </label>
                    <label className="flex items-center justify-between py-3 cursor-pointer">
                      <div>
                        <span className="text-sm font-medium text-gray-800">Pay Online</span>
                        <p className="text-xs text-green-600 mt-0.5">Extra discount of Rs 200 on orders above 2000</p>
                      </div>
                      <input
                        type="radio"
                        name="payment"
                        value="online"
                        checked={paymentMethod === "online"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 accent-primary"
                      />
                    </label>
                  </div>

                  <div className="flex justify-end mt-8">
                    <button onClick={() => {
                      const orderTotal = couponApplied ? total - 500 : total;
                      const message = `New Order - Mittal Car Care%0A%0AName: ${name}%0AMobile: ${mobile}%0ACar: ${selectedCar ? `${selectedCar.brand} ${selectedCar.model} (${selectedCar.fuel})` : "Not selected"}%0AServices: ${items.map(i => `${i.name} - ₹${i.price}`).join(", ")}%0ADate: ${days[selectedDate].full}%0ATime: ${selectedSlot}%0AAddress: ${locality} ${flatNo}%0APayment: ${paymentMethod}%0ATotal: ₹${orderTotal}`;
                      window.open(`https://wa.me/919873370404?text=${message}`, "_blank");
                      router.push("/order");
                    }} className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
                      Place Order <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <h2 className="text-lg font-bold text-gray-400">Payment</h2>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN - Cart Summary */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Cart</h2>
              {selectedCar && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500">Selected Car</p>
                  <p className="font-semibold text-gray-900 text-sm">{selectedCar.brand} {selectedCar.model} ({selectedCar.fuel})</p>
                </div>
              )}
              <div className="space-y-3 mb-4">
                {items.length === 0 && <p className="text-gray-400 text-sm">Your cart is empty</p>}
                {items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-800">{item.name}</span>
                    <div className="flex items-center gap-2">
                      {item.originalPrice && <span className="text-xs text-gray-400 line-through">₹{item.originalPrice}</span>}
                      <span className="text-sm font-bold text-gray-900">₹ {item.price}</span>
                      <button onClick={() => removeItem(item.name)} className="text-gray-400 hover:text-red-500"><X size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Apply Coupon */}
              {couponApplied ? (
                <div className="flex items-center justify-between py-3 px-4 border border-gray-200 rounded-lg mb-4 bg-green-50">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🎟️</span>
                    <span className="font-semibold text-gray-800">SAVINGS25 - Coupon Applied</span>
                  </div>
                  <button onClick={() => setCouponApplied(false)} className="text-gray-400 hover:text-red-500"><X size={16} /></button>
                </div>
              ) : (
                <button onClick={() => setShowCoupon(true)} className="w-full flex items-center justify-between py-3 px-4 border border-gray-200 rounded-lg mb-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🎟️</span>
                    <span className="font-semibold text-gray-800">Apply Coupon</span>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>
              )}

              {/* Bill Details */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-bold text-gray-900 mb-3">Bill Details</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Item Total</span>
                  <span>₹ {total}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-sm text-green-600 mb-2">
                    <span>Coupon Discount</span>
                    <span>- ₹ 500</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-gray-900 text-base pt-3 border-t border-gray-200">
                  <span>You Pay</span>
                  <span>{couponApplied ? total - 500 : total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coupon Sidebar */}
      {showCoupon && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setShowCoupon(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl overflow-y-auto">
            <div className="sticky top-0 bg-gray-800 text-white px-5 py-4 flex items-center gap-3">
              <button onClick={() => setShowCoupon(false)}><ArrowLeft size={20} /></button>
              <h2 className="font-bold">Apply Coupon | MCC Money</h2>
            </div>

            <div className="p-5">
              {/* Coupon input */}
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-6">
                <input type="text" placeholder="Enter coupon code" className="flex-1 px-4 py-3 text-sm focus:outline-none" />
                <button className="px-4 py-3 text-primary font-bold text-sm hover:bg-gray-50">APPLY</button>
              </div>

              {/* MCC Money */}
              <h3 className="font-bold text-gray-900 mb-3">MCC Money</h3>
              <div className="border border-gray-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 font-bold text-sm">M</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Available Balance</p>
                      <p className="font-bold text-gray-900">₹ 4500</p>
                    </div>
                  </div>
                  <button className="text-primary font-bold text-sm">APPLY</button>
                </div>
                <p className="text-xs text-gray-500 mt-2">You Can Use 50% Of MCC Money On An Order</p>
              </div>

              {/* Available Offers */}
              <h3 className="font-bold text-gray-900 mb-3">Available Offers</h3>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/images/logo.png" alt="MCC" className="h-6" />
                </div>
                <p className="font-bold text-sm text-gray-900 mb-1">25% OFF (Up To ₹500) On All Services.</p>
                <button className="text-xs text-gray-500 hover:text-gray-700 mb-3">View T&C ∨</button>
                <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
                  <span className="border-2 border-dashed border-gray-400 px-3 py-1 rounded text-sm font-bold text-gray-800">SAVINGS25</span>
                  <button onClick={() => { setCouponApplied(true); setShowCoupon(false); }} className="text-primary font-bold text-sm">APPLY</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
