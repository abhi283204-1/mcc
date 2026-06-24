import Navbar from "@/components/navbar";
import HeroBanner from "@/sections/hero-banner";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Process from "@/components/sections/Process";
import Areas from "@/components/sections/Areas";
import Brands from "@/components/sections/Brands";
import VideoReviews from "@/components/sections/VideoReviews";
import CTAStrip from "@/components/sections/CTAStrip";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[74px]">
        <HeroBanner />
        <Services />
        <BeforeAfter />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Process />
        <Areas />
        <Brands />
        <VideoReviews />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
