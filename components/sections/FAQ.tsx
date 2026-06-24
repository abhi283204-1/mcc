"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

function AccordionItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-gray-200 rounded-xl mb-3">
      <button onClick={onClick} className="w-full flex items-center justify-between px-5 py-4 text-left">
        <span className="font-medium text-gray-900 text-[15px] pr-4">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-gray-900 flex-shrink-0" /> : <Plus className="w-5 h-5 text-gray-900 flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleFaqs = showAll ? FAQS : FAQS.slice(0, 6);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-5xl px-4">
        <SectionHeading subtitle="FAQ" title="Frequently Asked" highlight="Questions" />
        {/* Desktop - 2 column grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-4">
          {visibleFaqs.map((faq, i) => (
            <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} isOpen={activeIndex === i} onClick={() => handleClick(i)} />
          ))}
        </div>
        {/* Mobile - single column */}
        <div className="md:hidden">
          {visibleFaqs.map((faq, i) => (
            <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} isOpen={activeIndex === i} onClick={() => handleClick(i)} />
          ))}
        </div>
        {FAQS.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-[15px] border border-gray-200 text-primary font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              {showAll ? "Show Less" : "View All Questions"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
