"use client";
import { motion } from "framer-motion";
import { ArrowRight, Car } from "lucide-react";

export default function CTAStrip() {
  return (
    <section className="bg-primary py-6">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 text-white">
            <Car className="w-8 h-8" />
            <div>
              <h3 className="font-bold text-lg md:text-xl">#ABB AAPKI GAADI HUMARI JIMMEVARI</h3>
              <p className="text-white/80 text-sm">Book your car service today and experience the best car care in Delhi.</p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-lg">
            Book Service Now <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
