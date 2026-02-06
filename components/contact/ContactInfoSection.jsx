"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: "Our Office",
    details: "123 Tech Avenue, Silicon Valley, CA 94025, USA",
  },
  {
    icon: <Phone size={24} />,
    title: "Phone",
    details: "+1 (234) 567-890\nMon-Fri 9am-6pm",
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    details: "support@quickcart.com\nsales@quickcart.com",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Contact Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              Contact Information
            </h2>
            <p className="text-slate-700 text-lg mb-8">
              Have a question or need support? Our friendly team is here to help. Reach out via phone, email, or visit our office.
            </p>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 whitespace-pre-line text-sm">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

{/* Right Contact Form */}
<div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
  <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">
    Send Us a Message
  </h2>
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full rounded-2xl px-6 py-4 border-2 border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary outline-none transition-all"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full rounded-2xl px-6 py-4 border-2 border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary outline-none transition-all"
        required
      />
    </div>

    <input
      type="text"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      placeholder="Subject"
      className="w-full rounded-2xl px-6 py-4 border-2 border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary outline-none transition-all"
      required
    />

    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Your Message"
      rows="6"
      className="w-full rounded-2xl px-6 py-4 border-2 border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary outline-none transition-all"
      required
    />

    <button
      type="submit"
      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-3xl bg-indigo-500 text-white font-bold hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
    >
      Send Message <Send size={20} />
    </button>
  </form>
</div>

        </div>
      </div>
    </section>
  );
}
