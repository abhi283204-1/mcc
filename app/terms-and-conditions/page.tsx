import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Mittal Car Care",
  description: "Terms and Conditions for Mittal Car Care services. Please read these terms carefully before using our services.",
};

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="pt-[74px] bg-white min-h-screen">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Terms and Conditions
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            <strong>Last Updated:</strong> 01 July 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Welcome to Mittal Car Care (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; &quot;us&quot;). By accessing or using our website, products, or services (collectively, the &quot;Services&quot;), you agree to comply with and be bound by these Terms and Conditions (&quot;Terms&quot;). Please read them carefully. If you do not agree, you must not use our Services.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Minimum Age Requirement:</strong> You must be at least 18 years old to access or use our Services. By using our Services, you represent that you meet this age requirement.</li>
                <li><strong>Legal Capacity:</strong> You must have the legal authority, right, and freedom to enter into an agreement with us. Individuals under guardianship or with restricted legal capacity may only use our Services with the consent of their legal guardian.</li>
                <li><strong>Business Use:</strong> If you are registering or booking on behalf of a company, organization, or other entity, you represent that you are authorized to bind such entity to these Terms.</li>
                <li><strong>Local Law Compliance:</strong> You are solely responsible for ensuring that your use of our Services is in compliance with all applicable local, state, national, and international laws and regulations.</li>
                <li><strong>False Information:</strong> Providing false, inaccurate, or misleading information during registration or booking may lead to immediate suspension or termination of your account without notice.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Services Provided</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Nature of Services:</strong> Mittal Car Care is a multi-brand car service center providing automotive services including repairs, maintenance, diagnostics, detailing, denting & painting, and emergency breakdown assistance.</li>
                <li><strong>Service Fulfilment:</strong> All services are performed by our trained and certified technicians at our authorized service centers in Ghaziabad and Delhi.</li>
                <li><strong>Scope & Limitations:</strong> Service availability depends on vehicle type, parts availability, and workshop capacity. We cannot guarantee availability of specific parts or services at all times. Pricing and availability may change without prior notice.</li>
                <li><strong>Customer Support:</strong> Our support team assists with bookings, service queries, and follow-ups. We are committed to providing transparent and quality services.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Accurate Information:</strong> You agree to provide true, complete, and up-to-date details when booking services or submitting any information through our website.</li>
                <li><strong>Lawful Use:</strong> You may only use our Services for legal purposes and in accordance with these Terms. Any misuse of the platform, including fraudulent bookings or unlawful activity, is strictly prohibited.</li>
                <li><strong>Vehicle Information:</strong> It is your responsibility to ensure that the details of your vehicle (such as model, brand, registration, and service requirements) are correct while placing a booking.</li>
                <li><strong>Respectful Conduct:</strong> You must interact respectfully with our service providers and staff. Abusive behavior or harassment may result in refusal of service.</li>
                <li><strong>Prohibited Actions:</strong> You must not attempt to disrupt, compromise, or manipulate the functionality of our website by introducing malware, bots, or automated systems, scraping content, or engaging in any unauthorized data collection.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Bookings & Payments</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Booking Process:</strong> When you make a booking through our website or phone, you are submitting a request for services, which will be confirmed by our team.</li>
                <li><strong>Service Pricing:</strong> Prices shown on the website are indicative and may vary based on your vehicle, service requirements, and parts availability. Final pricing will be confirmed before service commencement.</li>
                <li><strong>Taxes & Fees:</strong> All prices are inclusive of applicable taxes, unless otherwise stated. Additional fees for spare parts or additional services will be communicated to you in advance.</li>
                <li><strong>Payment Methods:</strong> Payments may be made via debit/credit cards, UPI, net banking, wallets, or cash. Some services may require advance or partial payments.</li>
                <li><strong>Payment Responsibility:</strong> You are responsible for ensuring that payment details are accurate and valid. Mittal Car Care will not be liable for failed transactions due to incorrect information or bank errors.</li>
                <li><strong>Non-Payment:</strong> Failure to make timely payments may result in cancellation of your booking or withholding of vehicle until outstanding payments are cleared.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Warranty & Guarantees</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Warranty:</strong> We provide warranty on parts and services as specified for each service package. The warranty period varies depending on the type of repair.</li>
                <li><strong>Warranty Coverage:</strong> Warranty covers defects in parts and workmanship under normal use conditions. It does not cover damage due to accidents, misuse, modifications, or neglect.</li>
                <li><strong>Warranty Claims:</strong> To claim warranty, you must present the original service invoice and the vehicle must be brought to our service center for inspection.</li>
                <li><strong>Genuine Parts:</strong> We use 100% genuine OEM parts for all repairs and replacements. Parts are sourced from authorized dealers to ensure quality.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cancellations & Refunds</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Customer Cancellations:</strong> You may cancel a booking before the service has commenced. Cancellation after parts have been ordered may attract charges.</li>
                <li><strong>Refund Eligibility:</strong> Refunds will be processed for services not rendered. Services that have commenced or where parts have been procured may not be eligible for full refund.</li>
                <li><strong>Refund Timeline:</strong> Approved refunds will be credited back to your original method of payment within 7 to 10 business days.</li>
                <li><strong>No-Show Policy:</strong> If you fail to present your vehicle at the scheduled time without prior notice, you may forfeit your advance payment.</li>
                <li><strong>Partial Refunds:</strong> In cases where only part of the service was delivered, a partial refund may be issued at the discretion of Mittal Car Care.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Ownership of Content:</strong> All content available on our website, including text, graphics, logos, icons, images, videos, and design elements, is the intellectual property of Mittal Car Care and is protected under applicable copyright and trademark laws.</li>
                <li><strong>Limited License:</strong> Users are granted a limited, non-exclusive, non-transferable license to access and use the website for personal, non-commercial purposes.</li>
                <li><strong>Restrictions:</strong> You may not copy, reproduce, distribute, modify, or sell any content from our website without prior written permission.</li>
                <li><strong>User Content:</strong> If you submit reviews or feedback, you grant us a royalty-free license to use such content for promotional and service-related purposes.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Limitation of Liability</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>No Guarantee of Service:</strong> Mittal Car Care does not guarantee that the website will always be available, uninterrupted, or error-free.</li>
                <li><strong>Indirect Damages:</strong> We shall not be liable for any indirect, incidental, consequential, or special damages arising from the use of our Services.</li>
                <li><strong>Vehicle Safety:</strong> While we perform services to the highest standards, we do not warrant that any repair will make your vehicle fully safe or roadworthy. Customers are advised to conduct their own inspection.</li>
                <li><strong>Force Majeure:</strong> Mittal Car Care shall not be liable for failure to provide services due to causes beyond our control, including natural disasters, strikes, war, or internet outages.</li>
                <li><strong>Total Liability Cap:</strong> In no event shall our total liability exceed the amount paid by you for the specific service that gave rise to the claim.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Privacy</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Data Collection:</strong> We may collect personal information including your name, contact details, vehicle details, and service history when you use our Services.</li>
                <li><strong>Use of Data:</strong> Your data is used to facilitate bookings, process payments, provide customer support, and improve our Services.</li>
                <li><strong>Data Security:</strong> We employ reasonable security measures to protect your data. However, we cannot guarantee complete protection against unauthorized access.</li>
                <li><strong>Consent:</strong> By using our Services, you consent to the collection, storage, and use of your data as described above.</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to Terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Right to Modify:</strong> Mittal Car Care reserves the right to update or modify these Terms at any time without prior notice. Changes will be effective immediately upon posting on our website.</li>
                <li><strong>Continued Use:</strong> By continuing to use our Services after changes have been made, you acknowledge and agree to the revised Terms.</li>
                <li><strong>Version Control:</strong> The &quot;Last Updated&quot; date at the top of this page indicates when the Terms were last modified.</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Governing Law & Jurisdiction</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Applicable Law:</strong> These Terms shall be governed by and construed in accordance with the laws of India.</li>
                <li><strong>Jurisdiction:</strong> Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Ghaziabad, Uttar Pradesh, India.</li>
                <li><strong>Dispute Resolution:</strong> We encourage customers to resolve disputes amicably by contacting our support team first.</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact Us</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Email:</strong> mittalcarscanning@gmail.com</li>
                <li><strong>Phone:</strong> +91 9873370404, +91 9873492828, +91 9650407276</li>
                <li><strong>Address:</strong> 251-A, Block-E, Dilshad Garden, Delhi-110095 (Opp. St Lawrence Public School)</li>
                <li><strong>Working Hours:</strong> Monday to Sunday, 9:30 AM – 7:00 PM (Tuesday Closed)</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
