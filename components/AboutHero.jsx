import { Rocket, ShieldCheck, ShoppingCart } from "lucide-react";

export default function AboutHero() {
  const features = [
    {
      icon: <Rocket size={28} />,
      title: "Fast Experience",
      text: "Blazing-fast shopping powered by a modern tech stack.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Trusted Platform",
      text: "Secure payments with verified and reliable sellers.",
    },
    {
      icon: <ShoppingCart size={28} />,
      title: "Smart Commerce",
      text: "Personalized, AI-driven product recommendations.",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Tag Label */}
        <span className="inline-block bg-orange-600 font-semibold tracking-widest uppercase text-sm mb-5 px-5 py-2 text-white rounded-full">
          About QuickCart
        </span>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
          Empowering Your <br className="hidden md:block" />
          <span className="text-orange-600">Digital Lifestyle</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-slate-700 mb-14 leading-relaxed">
          QuickCart is transforming e-commerce with speed, security, and
          intelligent technology — ensuring premium products are within reach
          for everyone.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
