"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How can I track my order?",
      answer: "Track your order via the 'Track Order' link in your confirmation email or QuickCart dashboard.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items in their original condition and packaging.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, QuickCart ships to over 50 countries worldwide. Shipping cost varies by location.",
    },
    {
      question: "How do I become a seller?",
      answer: "Go to 'Seller Dashboard' in the header → 'Register as Seller' → follow instructions to set up your store.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-indigo-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-700">
            Quick answers to common questions for a smooth shopping experience.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 cursor-pointer transition-all hover:shadow-lg"
              onClick={() => toggleFAQ(i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <div className="text-primary">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>
              <div
                className={`mt-4 text-slate-700 transition-all duration-300 overflow-hidden ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
