"use client";

import ContactInfoSection from "../../components/contact/ContactInfoSection";
import FAQSection from "../../components/contact/FAQSection";
import HeroSection from "../../components/contact/HeroSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function ContactPage() {
  return (
    <div className="bg-slate-50  text-slate-900 transition-colors duration-200">
      <Navbar/>
      <main>
        <HeroSection/>
        <FAQSection/>
        <ContactInfoSection/>
        
      </main>
      <Footer/>
    

    </div>
  );
}
