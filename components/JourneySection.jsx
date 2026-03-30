import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import OurStory from "../assets/images/ourstory.jpg";

export default function JourneySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image Block */}
        <div className="relative w-full h-96 md:h-[28rem]">
          <Image
            src={OurStory}
            alt="E-commerce Shopping Illustration"
            className="rounded-2xl shadow-2xl object-cover"
            fill
            style={{ objectFit: "cover", borderRadius: "1rem" }}
          />

          {/* Decorative Accent Box */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-50 rounded-2xl -z-10"></div>
        </div>

        {/* Right Content Block */}
        <div>
          <span className="inline-block text-orange-600 font-semibold uppercase text-sm tracking-widest mb-4">
            Our Story
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            From Local Shop to <br />
            Global Marketplace
          </h2>

          <p className="text-slate-700 text-lg mb-6 leading-relaxed">
            What began as a small neighborhood electronics store has evolved into
            a trusted global e-commerce platform serving thousands of tech
            enthusiasts worldwide.
          </p>

          <p className="text-slate-700 text-lg mb-8 leading-relaxed">
            We partner with top technology brands to bring cutting-edge products,
            fast delivery, and reliable service — all in one seamless shopping
            experience.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full shadow-sm">
              <CheckCircle size={18} className="text-orange-600" />
              <span className="text-sm font-semibold text-slate-900">
                Authorized Retailer
              </span>
            </div>

            <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full shadow-sm">
              <CheckCircle size={18} className="text-orange-600" />
              <span className="text-sm font-semibold text-slate-900">
                Fast Global Delivery
              </span>
            </div>
          </div>

          {/* CTA Link */}
          <div className="mt-8 flex items-center gap-2 text-orange-600 font-semibold cursor-pointer hover:gap-3 transition-all">
            <span>Learn more about us</span>
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </section>
  );
}
