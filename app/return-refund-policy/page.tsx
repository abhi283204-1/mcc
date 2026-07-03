import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Return & Refund Policy | Mittal Car Care",
  description: "Return and Refund Policy for Mittal Car Care. Learn about our return process, refund timelines, and conditions.",
};

export default function ReturnRefundPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-[74px] bg-white min-h-screen">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Return & Refund Policy
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            <strong>Last Updated:</strong> 01 July 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed">
              At Mittal Car Care, we strive to ensure a seamless and satisfactory experience for all our customers. If you are not entirely satisfied with your service or product, we are here to help.
            </p>

            {/* Return Window */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Return Window</h2>
              <p className="text-gray-700">
                We accept return requests within <strong>7 days</strong> from the date of product delivery or service completion.
              </p>
            </section>

            {/* Refund Processing */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Refund Processing</h2>
              <p className="text-gray-700">
                Once the returned product is received and verified by our team, the refund will be processed and credited to the original mode of payment within <strong>5–7 working days</strong>.
              </p>
            </section>

            {/* Key Terms */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Key Terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Return requests must be initiated through our official support channels (phone, WhatsApp, or email).</li>
                <li>The product must be in its original condition and packaging.</li>
                <li>Refund timelines may vary slightly based on your bank&apos;s processing schedule.</li>
                <li>Certain services or products may have specific conditions mentioned at the time of purchase.</li>
                <li>The timeline can be adjusted as per our business policy and is subject to change without prior notice.</li>
              </ul>
            </section>

            {/* Service Refunds */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Service Refunds</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Before Service Commencement:</strong> If you cancel a booking before the service has started, a full refund will be provided for any advance payment made.</li>
                <li><strong>After Service Commencement:</strong> If the service has already begun or spare parts have been ordered/installed, a partial refund may be issued at the discretion of Mittal Car Care.</li>
                <li><strong>Unsatisfactory Service:</strong> If you are not satisfied with the quality of service, please contact us within 7 days. We will inspect the issue and offer a redo or appropriate refund.</li>
                <li><strong>Warranty Claims:</strong> Issues covered under service warranty will be resolved free of charge within the warranty period. These are not eligible for monetary refunds.</li>
              </ul>
            </section>

            {/* Parts & Products */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Parts & Products</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Defective Parts:</strong> If a part installed is found to be defective, we will replace it free of cost within the warranty period.</li>
                <li><strong>Wrong Parts:</strong> If an incorrect part is delivered or installed, we will arrange for the correct part and process a refund for the difference (if any).</li>
                <li><strong>Non-Returnable Items:</strong> Customized parts, fluids (engine oil, coolant, etc.), and consumables that have been used or opened are not eligible for return.</li>
              </ul>
            </section>

            {/* Non-Refundable Services */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Non-Refundable Services</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Diagnostic and inspection services once completed.</li>
                <li>Services where spare parts have been specially ordered for your vehicle.</li>
                <li>Emergency/SOS services once the assistance has been provided.</li>
                <li>Insurance claim processing services.</li>
              </ul>
            </section>

            {/* How to Request a Refund */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">How to Request a Refund</h2>
              <p className="text-gray-700 mb-3">
                To initiate a return or refund request, please contact us through any of the following channels:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Phone:</strong> +91 9873370404, +91 9873492828, +91 9650407276</li>
                <li><strong>Email:</strong> mittalcarscanning@gmail.com</li>
                <li><strong>Visit Us:</strong> 251-A, Block-E, Dilshad Garden, Delhi-110095 (Opp. St Lawrence Public School)</li>
                <li><strong>Working Hours:</strong> Monday to Sunday, 9:30 AM – 7:00 PM (Tuesday Closed)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Please have your service invoice or booking reference ready when contacting us. Our team will review your request and respond within 24–48 hours.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
