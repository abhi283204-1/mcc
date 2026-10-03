"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/lib/CartContext";
import { Car, Calendar, CreditCard, FileText, ChevronDown, ChevronUp } from "lucide-react";

// Basic GSTIN format: 2-digit state code + 10-char PAN + 1 digit + Z + 1 alphanumeric
const GSTIN_REGEX = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

const faqs = [
  { q: "How should I proceed after booking my car service?", a: "You can relax now! Our Service Buddy will assign the nearest workshop and a dedicated valet for the pickup of your car. Moreover, you can also take advantage of real-time service updates available right on the app." },
  { q: "How can I track my order/booking?", a: "You can track your order status on this page. We will also send you updates via WhatsApp and SMS." },
  { q: "How can I reschedule my car service booking?", a: "Please call our helpline at +91 9873370404 to reschedule your booking." },
  { q: "How can I add more services to my ongoing order?", a: "Contact our service buddy or call our helpline to add more services to your existing order." },
  { q: "How can I cancel my order/Booking?", a: "You can cancel your order by calling our helpline. Cancellation is free if done 4 hours before the scheduled pickup." },
  { q: "What if something happens to my car during pick-up/delivery?", a: "Your car is fully insured during transit. Any damage during pick-up or delivery will be covered by us." },
];

export default function OrderPage() {
  const { selectedCar } = useCart();
  const [openFaq, setOpenFaq] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Customer name — written by cart page after successful booking
  const [customerName, setCustomerName] = useState<string>("");

  // Server-authoritative financial figures — written by cart page from booking API response.
  // These come from the WordPress booking record (_mcc_total_amount, _mcc_coupon_discount,
  // _mcc_cart_subtotal) and are stored in sessionStorage immediately after booking creation.
  const [orderTotal, setOrderTotal] = useState<number>(0);
  const [couponDiscount, setCouponDiscount] = useState<number>(0);
  const [couponCode, setCouponCode] = useState<string>("");
  const [bookingId, setBookingId] = useState<string>("");

  // GSTIN state
  const [gstin, setGstin] = useState("");
  const [gstinSaved, setGstinSaved] = useState(false);
  const [gstinError, setGstinError] = useState("");
  const [savedGstin, setSavedGstin] = useState<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("mcc_customer_name");
    if (stored) setCustomerName(stored);

    // Server-side financial figures stored by cart page after booking API response.
    // total_amount is the server-calculated final total (after coupon deduction).
    const storedTotal    = sessionStorage.getItem("mcc_order_total");
    const storedDiscount = sessionStorage.getItem("mcc_order_coupon_discount");
    const storedCode     = sessionStorage.getItem("mcc_order_coupon_code");
    const storedId       = sessionStorage.getItem("mcc_order_booking_id");

    if (storedTotal    !== null) setOrderTotal(parseFloat(storedTotal) || 0);
    if (storedDiscount !== null) setCouponDiscount(parseFloat(storedDiscount) || 0);
    if (storedCode     !== null) setCouponCode(storedCode);
    if (storedId       !== null) setBookingId(storedId);

    // Restore any previously saved GSTIN for this session
    const storedGstin = sessionStorage.getItem("mcc_order_gstin");
    if (storedGstin) {
      setSavedGstin(storedGstin);
      setGstin(storedGstin);
      setGstinSaved(true);
    }
  }, []);

  const handleGstinSubmit = () => {
    const trimmed = gstin.trim().toUpperCase();
    if (!trimmed) {
      setGstinError("Please enter your GSTIN.");
      return;
    }
    if (!GSTIN_REGEX.test(trimmed)) {
      setGstinError("Invalid GSTIN format. Please check and re-enter.");
      return;
    }
    sessionStorage.setItem("mcc_order_gstin", trimmed);
    setSavedGstin(trimmed);
    setGstinSaved(true);
    setGstinError("");
  };

  // Use the real booking ID from the server when available; otherwise
  // generate a display-only ID. bookingId is stable because it is read
  // once from sessionStorage inside useEffect.
  const displayOrderId = bookingId ? `MCC${bookingId}` : "";
  const now = new Date();
  const dateStr = `${now.getDate()} ${now.toLocaleDateString("en-US", { month: "short" })} ${now.getFullYear()}, ${now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <img src="/images/logo.png" alt="Mittal Car Care" className="h-14" />
          <a href="tel:+919873370404" className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg">
            24x7 Helpline: 9873370404
          </a>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8">
        <p className="text-sm mb-6">
          <span className="text-primary font-bold">ONGOING ORDERS</span>
          <span className="text-gray-500"> &gt; </span>
          <span className="font-bold text-gray-900">
            {displayOrderId ? `ORDER # ${displayOrderId}` : "ORDER CONFIRMED"}
          </span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-primary font-bold text-lg mb-1">
              Hi {customerName || "Customer"}!
            </h2>
            <p className="text-gray-700 mb-8">We are working on your order.</p>

            {/* Order Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Car size={24} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Car details</p>
                  <p className="font-medium text-gray-900">
                    {selectedCar ? `${selectedCar.brand} ${selectedCar.model}, ${selectedCar.fuel}` : "Selected Car"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar size={24} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Pickup Date</p>
                  <p className="font-medium text-gray-900">
                    {now.getDate()} {now.toLocaleDateString("en-US", { month: "long" })}, {now.getFullYear()}, 17:00:00
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CreditCard size={24} className="text-gray-400 mt-0.5" />
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Payment History</p>
                    <p className="font-medium text-gray-900">
                      Amount Pending: ₹{orderTotal.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowPaymentModal(true)}
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    View details
                  </button>
                </div>
              </div>

              {/* GSTIN input */}
              <div className="flex items-start gap-4">
                <FileText size={24} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Save GST on this Booking</p>
                  {gstinSaved && savedGstin ? (
                    <div className="mt-1">
                      <p className="text-sm text-green-700 font-medium">GSTIN saved: {savedGstin}</p>
                      <button
                        onClick={() => {
                          setGstinSaved(false);
                          setSavedGstin(null);
                          setGstin("");
                          setGstinError("");
                          sessionStorage.removeItem("mcc_order_gstin");
                        }}
                        className="text-xs text-primary underline mt-1"
                      >
                        Change GSTIN
                      </button>
                    </div>
                  ) : (
                    <div className="mt-1">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Enter GSTIN"
                          value={gstin}
                          onChange={(e) => {
                            setGstin(e.target.value.toUpperCase());
                            setGstinError("");
                          }}
                          className="border border-gray-300 rounded px-3 py-2 text-sm w-48 focus:outline-none focus:border-primary"
                          maxLength={15}
                        />
                        <button
                          onClick={handleGstinSubmit}
                          className="text-primary font-semibold text-sm hover:underline"
                        >
                          Submit
                        </button>
                      </div>
                      {gstinError && (
                        <p className="text-xs text-red-600 mt-1">{gstinError}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Service Buddy */}
            <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                <img src="/images/Icons/mechanic.svg" alt="Service Buddy" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Service Buddy</p>
                <p className="font-medium text-gray-900 mb-1">
                  A service buddy will be assigned soon. For any queries, call 9873370404
                </p>
                <p className="text-sm text-gray-600">
                  Mittal Car Care Service Buddy is your eyes and ears on the ground and will be managing
                  your complete service experience. Please get in touch in case of any queries.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Timeline + FAQ */}
          <div className="space-y-6">
            {/* Order Timeline */}
            <div className="relative pl-6">
              {["Order Placed", "At Workshop", "Estimate After Inspection", "Work in Progress", "Ready For Delivery", "Delivered"].map((step, i) => (
                <div key={step} className="flex items-start gap-4 pb-8 last:pb-0 relative">
                  <div className={`absolute left-0 w-3 h-3 rounded-full border-2 ${i === 0 ? "bg-primary border-primary" : "bg-white border-gray-300"}`} />
                  {i < 5 && <div className="absolute left-[5px] top-4 w-0.5 h-full bg-gray-200" />}
                  <div className="ml-4">
                    <p className={`font-medium ${i === 0 ? "text-gray-900" : "text-gray-500"}`}>{step}</p>
                    {i === 0 && <p className="text-sm text-gray-500">{dateStr}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-4">FREQUENTLY ASKED QUESTIONS</h3>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left"
                    >
                      <span className="text-sm font-medium text-gray-800 pr-4">{faq.q}</span>
                      {openFaq === i ? <ChevronUp size={16} className="flex-shrink-0" /> : <ChevronDown size={16} className="flex-shrink-0" />}
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-3">
                        <p className="text-sm text-gray-600">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment History Modal */}
      {showPaymentModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setShowPaymentModal(false)}
        >
          <div
            className="bg-white rounded-xl w-[90%] max-w-[700px] p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Payment History</h3>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            <hr className="border-gray-200 mb-5" />
            <div className="grid grid-cols-2 gap-y-5 gap-x-8">
              <div>
                <p className="text-sm text-gray-500">Order #</p>
                <p className="font-medium text-gray-900">{displayOrderId || "—"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Bill</p>
                <p className="font-medium text-gray-900">₹{orderTotal.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Amount Paid</p>
                <p className="font-medium text-gray-900">₹0.00</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Amount Pending</p>
                <p className="font-medium text-gray-900">₹{orderTotal.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Discount Applied</p>
                <p className="font-medium text-gray-900">
                  {couponDiscount > 0
                    ? `₹${couponDiscount.toFixed(2)}${couponCode ? ` (${couponCode})` : ""}`
                    : "₹0.00"}
                </p>
              </div>
              {savedGstin && (
                <div>
                  <p className="text-sm text-gray-500">GSTIN</p>
                  <p className="font-medium text-gray-900">{savedGstin}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
