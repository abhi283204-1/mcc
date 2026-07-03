import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Mittal Car Care",
  description: "Privacy Policy for Mittal Car Care. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-[74px] bg-white min-h-screen">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            <strong>Last Updated:</strong> 01 July 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed">
              At Mittal Car Care (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; &quot;us&quot;), your privacy is very important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services (&quot;Services&quot;). By using our website, you agree to the practices described in this policy. If you do not agree, please do not use our Services.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Personal Information:</strong> When you book a service or contact us, we may collect personal details such as your name, email address, phone number, billing address, and vehicle details (brand, model, registration number, etc.).</li>
                <li><strong>Payment Information:</strong> If you make payments through our platform, we may collect limited payment-related details (processed securely through third-party payment gateways). Mittal Car Care does not store your full card/banking details.</li>
                <li><strong>Usage Data:</strong> We may collect information about how you interact with our website, such as pages visited, time spent, referral sources, and device/browser information.</li>
                <li><strong>Cookies & Tracking:</strong> Our website may use cookies, pixels, and similar technologies to improve user experience, analyze traffic, and personalize content.</li>
                <li><strong>Third-Party Data:</strong> We may receive information from third parties (e.g., service providers or marketing platforms) to enhance our Services.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>To Provide Services:</strong> We use your information to process bookings, schedule appointments, and deliver requested automotive services.</li>
                <li><strong>To Improve User Experience:</strong> Usage data helps us enhance our website performance, optimize navigation, and personalize your overall experience.</li>
                <li><strong>To Communicate with You:</strong> We may contact you with booking confirmations, service updates, reminders, promotional offers, or customer support messages.</li>
                <li><strong>To Process Payments:</strong> Limited financial information is used for payment processing, refunds, and fraud prevention (handled securely via third-party payment gateways).</li>
                <li><strong>To Ensure Safety & Compliance:</strong> We may use your data to prevent unauthorized access, fraud, or illegal activities and comply with applicable legal and regulatory requirements.</li>
                <li><strong>For Marketing & Promotions:</strong> With your consent, we may use your details to send you newsletters, promotional campaigns, or service recommendations tailored to your preferences.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Share Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>With Payment Gateways:</strong> Payment-related details are shared with trusted third-party gateways for secure transactions. Mittal Car Care does not store your full payment credentials.</li>
                <li><strong>With Third-Party Tools:</strong> We may share limited data with analytics, advertising, and cloud hosting providers to help improve our Services.</li>
                <li><strong>For Legal Compliance:</strong> We may disclose your information if required by law, regulation, or government request, or to protect our rights, safety, and property.</li>
                <li><strong>In Case of Business Transfers:</strong> If Mittal Car Care undergoes a merger, acquisition, or asset sale, your information may be transferred as part of the business assets.</li>
                <li><strong>No Unauthorised Selling:</strong> We do not sell, rent, or trade your personal information to third parties for commercial purposes without your explicit consent.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Security</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Secure Storage:</strong> We implement industry-standard security measures such as encryption, firewalls, and secure servers to protect your personal data from unauthorized access.</li>
                <li><strong>Restricted Access:</strong> Only authorized employees who require access to perform their job duties are permitted to handle your data.</li>
                <li><strong>Payment Protection:</strong> All transactions are processed through secure third-party payment gateways. We do not store your full credit/debit card information on our servers.</li>
                <li><strong>Regular Monitoring:</strong> Our systems are monitored for vulnerabilities, unauthorized access attempts, and potential threats to ensure the ongoing security of your data.</li>
                <li><strong>No Guarantee:</strong> While we take significant precautions, no electronic transmission or storage method can be 100% secure. Therefore, we cannot guarantee absolute data security.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Your Data Rights</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Right to Access:</strong> You have the right to request details of the personal data we hold about you.</li>
                <li><strong>Right to Rectification:</strong> You may correct or update inaccurate or incomplete personal information at any time.</li>
                <li><strong>Right to Deletion:</strong> You can request that we delete your personal data, subject to certain legal and contractual obligations.</li>
                <li><strong>Right to Restrict Processing:</strong> You may request that we limit the use of your data in specific situations.</li>
                <li><strong>Right to Withdraw Consent:</strong> If you previously consented to data collection (e.g., for marketing), you may withdraw this consent at any time.</li>
                <li><strong>Right to Lodge a Complaint:</strong> You may file a complaint with the relevant data protection authority if you believe your privacy rights have been violated.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cookies & Tracking Technologies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Use of Cookies:</strong> Mittal Car Care uses cookies, pixels, and similar tracking technologies to enhance user experience, analyze website traffic, and improve our Services.</li>
                <li><strong>Types of Cookies:</strong> These may include essential cookies (for site functionality), performance cookies (to measure usage), and marketing cookies (for personalized content).</li>
                <li><strong>Third-Party Cookies:</strong> We may allow trusted third-party partners, such as analytics providers, to set cookies on your device to collect usage data.</li>
                <li><strong>Managing Cookies:</strong> You can choose to accept, reject, or delete cookies through your browser settings. Disabling cookies may impact the functionality of some features.</li>
                <li><strong>Tracking & Analytics:</strong> We may use tools like Google Analytics or similar services to understand website performance and user behavior.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Third-Party Links & Services</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>External Websites:</strong> Our website may contain links to third-party websites, apps, or services. These are provided for your convenience but are not under our control.</li>
                <li><strong>No Responsibility:</strong> Mittal Car Care is not responsible for the content, privacy practices, or policies of third-party platforms. We encourage you to review their privacy policies before sharing personal data.</li>
                <li><strong>User Discretion:</strong> If you choose to interact with any third-party service linked from our platform, you do so at your own risk.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Data Retention</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Retention Period:</strong> We retain your personal data only as long as necessary to provide our Services, comply with legal obligations, resolve disputes, and enforce agreements.</li>
                <li><strong>Booking & Transaction Data:</strong> Records of services booked, payments, and invoices may be retained for tax, regulatory, or accounting purposes.</li>
                <li><strong>Deleted Data:</strong> When you request deletion of your personal data, we will remove it from our active systems, but it may remain in backup archives for a limited period.</li>
                <li><strong>Anonymized Data:</strong> We may retain and use aggregated or anonymized data (that cannot identify you) indefinitely for analytical and business purposes.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Children&apos;s Privacy</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Age Restriction:</strong> Our Services are not directed toward children under the age of 13. We do not knowingly collect personal information from children.</li>
                <li><strong>Parental Consent:</strong> If you are between 13 and 18 years old, you may use our Services only under the supervision of a parent or legal guardian.</li>
                <li><strong>Accidental Collection:</strong> If we become aware that we have collected personal information from a child without proper consent, we will take immediate steps to delete such data.</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Updates to This Privacy Policy</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Policy Changes:</strong> We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or other operational reasons.</li>
                <li><strong>Notification:</strong> Any changes will be posted on this page with the &quot;Last Updated&quot; date revised accordingly.</li>
                <li><strong>Significant Updates:</strong> For major changes affecting how we process your personal data, we may notify you by email or through a notice on our website.</li>
                <li><strong>Review Encouraged:</strong> We encourage you to review this page regularly to stay informed about how we protect your information.</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
              <p className="text-gray-700 mb-3">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact us at:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Email:</strong> mittalcarscanning@gmail.com</li>
                <li><strong>Phone:</strong> +91 9873370404, +91 9873492828, +91 9650407276</li>
                <li><strong>Address:</strong> 251-A, Block-E, Dilshad Garden, Delhi-110095 (Opp. St Lawrence Public School)</li>
                <li><strong>Working Hours:</strong> Monday to Sunday, 9:30 AM – 7:00 PM (Tuesday Closed)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                We will make every effort to respond to your inquiry within a reasonable timeframe.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
