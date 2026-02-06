// import Header from "@/components/Header";
// import AboutHero from "@/components/AboutHero";
// import JourneySection from "@/components/JourneySection";
// import StatsSection from "@/components/StatsSection";
// import ValuesSection from "@/components/ValuesSection";
// import TeamSection from "@/components/TeamSection";
// import SubscribeSection from "@/components/SubscribeSection";
// import Footer from "@/components/Footer";
// import DarkModeToggle from "@/components/DarkModeToggle";
import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import JourneySection from "@/components/JourneySection";
import Navbar from "@/components/Navbar";
import StatsSection from "@/components/StatsSection";
import SubscribeSection from "@/components/SubscribeSection";
import TeamSection from "@/components/TeamSection";
import ValuesSection from "@/components/ValuesSection";

export default function AboutPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Navbar/>
      <main>
        <AboutHero/>
        <JourneySection/>
        <StatsSection/>
        <ValuesSection/>
        <TeamSection/>
        <SubscribeSection/>
        {/* <AboutHero />
        <JourneySection />
        <StatsSection />
        <ValuesSection />
        <TeamSection />
        <SubscribeSection /> */}
      </main>
      <Footer/>
      {/* <Footer />
      <DarkModeToggle /> */}
    </div>
  );
}
