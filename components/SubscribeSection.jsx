export default function SubscribeSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-2xl mx-auto px-6 text-center relative bg-white rounded-3xl shadow-xl p-12">
        
        {/* Decorative Circle */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-indigo-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-100 rounded-full opacity-30 animate-pulse"></div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">
          Subscribe now & get <span className="text-primary">20% off</span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 mb-8 text-lg">
          Stay updated with the latest tech releases and exclusive member offers.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-6 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900"
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-orange-600 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
