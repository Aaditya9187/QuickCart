"use client";

import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute top-20 right-1/4 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 leading-tight">
          Get in Touch with{" "}
          <span className="text-orange-500">
            QuickCart Support
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-800 mb-10 leading-relaxed drop-shadow-sm">
          Have a question or need assistance? Our friendly team is here to help you. Reach out and we’ll respond quickly to get you back shopping smoothly.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="#contact-form"
          className="inline-flex items-center gap-3 bg-orange-500 text-white font-bold px-10 py-4 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 text-lg"
        >
          Contact Us <ArrowRight size={22} />
        </a>
      </div>
    </section>
  );
}
