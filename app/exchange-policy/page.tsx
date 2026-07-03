import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Exchange Policy | Mittal Car Care",
  description: "Exchange Policy for Mittal Car Care. Learn about our exchange process for defective, damaged, or incorrect products.",
};

export default function ExchangePolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-[74px] bg-white min-h-screen">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Exchange Policy
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            <strong>Last Updated:</strong> 01 July 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed">
              We want you to be completely satisfied with your purchase. If you receive a product that is defective, damaged, or simply not what you expected, our exchange policy is designed to make things right.
            </p>

            <p className="text-gray-700 leading-relaxed">
              In case of an exchange or replacement request, the new product will be delivered within <strong>5–7 working days</strong> after the request is approved.
            </p>

            {/* Exchange Process */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Our Exchange Process</h2>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li><strong>Request Submission:</strong> Contact our support team via phone, WhatsApp, or email to initiate an exchange or replacement request.</li>
                <li><strong>Approval:</strong> Our team will review your request and check the product&apos;s availability. Approval is usually completed within 24–48 hours.</li>
                <li><strong>Pickup & Delivery:</strong> Once approved, we will arrange for the pickup of the item (if applicable) and schedule the delivery of your replacement product.</li>
              </ol>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Eligibility for Exchange</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The product must be reported as defective, damaged, or incorrect within <strong>7 days</strong> of delivery or installation.</li>
                <li>The product must be in its original condition (unused and unmodified) unless it is defective.</li>
                <li>Exchange requests are subject to the availability of the replacement product.</li>
                <li>Products must be accompanied by the original invoice or service receipt.</li>
              </ul>
            </section>

            {/* Non-Exchangeable Items */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Non-Exchangeable Items</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Consumables such as engine oil, coolant, brake fluid, and other fluids once opened or used.</li>
                <li>Customized or specially ordered parts made specifically for your vehicle.</li>
                <li>Products with physical damage caused by misuse, improper installation, or accidents after delivery.</li>
                <li>Electrical components that have been installed and used.</li>
              </ul>
            </section>

            {/* Warranty Exchanges */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Warranty Exchanges</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Parts and products covered under manufacturer warranty will be exchanged as per the warranty terms.</li>
                <li>Warranty claims require the original invoice and the defective part for inspection.</li>
                <li>Warranty exchanges may take additional time depending on the manufacturer&apos;s processing.</li>
              </ul>
            </section>

            {/* Important Notes */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Important Notes</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Exchange requests are subject to verification of any defects or issues reported.</li>
                <li>If the same product is not available, we may offer an equivalent alternative or a refund.</li>
                <li>Any price difference between the original and replacement product will be charged or refunded accordingly.</li>
                <li>This policy is subject to change without prior notice.</li>
              </ul>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">How to Request an Exchange</h2>
              <p className="text-gray-700 mb-3">
                Our support team is always available to guide you through the process:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Phone:</strong> +91 9873370404, +91 9873492828, +91 9650407276</li>
                <li><strong>Email:</strong> mittalcarscanning@gmail.com</li>
                <li><strong>Visit Us:</strong> 251-A, Block-E, Dilshad Garden, Delhi-110095 (Opp. St Lawrence Public School)</li>
                <li><strong>Working Hours:</strong> Monday to Sunday, 9:30 AM – 7:00 PM (Tuesday Closed)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                We aim for total customer satisfaction and will do our best to resolve your concerns promptly.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
