import { Users, ShoppingBag, Globe, Clock } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Users size={28} />,
      value: "500k+",
      label: "Happy Customers",
      description: "Trusted by shoppers worldwide",
    },
    {
      icon: <ShoppingBag size={28} />,
      value: "15k+",
      label: "Products Sold",
      description: "Across multiple categories",
    },
    {
      icon: <Globe size={28} />,
      value: "120+",
      label: "Global Brands",
      description: "Official partnerships",
    },
    {
      icon: <Clock size={28} />,
      value: "9+",
      label: "Years in Business",
      description: "Since 2015",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-5">
                {item.icon}
              </div>

              {/* Number */}
              <div className="text-4xl font-extrabold text-slate-900 mb-2">
                {item.value}
              </div>

              {/* Label */}
              <div className="text-base font-semibold text-slate-900 mb-1">
                {item.label}
              </div>

              {/* Small description */}
              <div className="text-sm text-slate-600">
                {item.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
