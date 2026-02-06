"use client";

export default function MapSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-lg">
        {/* Google Map Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.050892648518!2d90.37438221542958!3d23.8103319845639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7451c0f0b0b%3A0x33e6f4a3f5a0e6f!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
          className="w-full h-full object-cover"
          allowFullScreen
          loading="lazy"
          title="QuickCart Office - Dhaka"
        ></iframe>

        {/* Overlay Info Box */}
        <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-lg">
          <h3 className="font-bold text-lg text-slate-900">Our Dhaka Office</h3>
          <p className="text-sm text-slate-600">Savar, Dhaka, Bangladesh</p>
        </div>
      </div>
    </section>
  );
}
