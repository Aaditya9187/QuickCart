import { Lightbulb, Users, ShieldCheck } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: <Lightbulb size={28} />,
      title: "Innovation",
      text: "We constantly explore new technologies to deliver smarter and more efficient solutions for our customers.",
    },
    {
      icon: <Users size={28} />,
      title: "Customer First",
      text: "Every decision we make is driven by the needs and satisfaction of our users.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Quality Assurance",
      text: "Every product and service goes through strict quality checks before reaching you.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Label */}
        <span className="inline-block text-indigo-600 font-semibold uppercase text-sm tracking-widest mb-4">
          What We Stand For
        </span>

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Our Core Values
        </h2>

        <p className="max-w-xl mx-auto text-slate-700 mb-12">
          The principles that guide every product, partnership, and experience at QuickCart.
        </p>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Badge */}
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
