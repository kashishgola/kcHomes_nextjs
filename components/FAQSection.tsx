"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title: string;
  subtitle?: string; // optional if needed
}

export default function FAQSection({ faqs, title, subtitle }: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="w-12 h-[2px] bg-amber-400 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-5 font-medium text-gray-800 hover:bg-gray-50 transition"
              >
                <span>{faq.question}</span>
                <span className="text-amber-500 text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-5 text-sm text-gray-600 transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 pb-5"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}