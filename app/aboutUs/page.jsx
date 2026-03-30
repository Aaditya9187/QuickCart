
import NewsLetter from "../../components/NewsLetter";
import AboutHero from "../../components/AboutHero";
import Footer from "../../components/Footer";
import JourneySection from "../../components/JourneySection";
import Navbar from "../../components/Navbar";
import StatsSection from "../../components/StatsSection";
import TeamSection from "../../components/TeamSection";
import ValuesSection from "../../components/ValuesSection";

export default function AboutPage() {
  return (
    <div className="bg-background-light text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Navbar/>
      <main>
        <AboutHero/>
        <JourneySection/>
        <StatsSection/>
        <ValuesSection/>
        <TeamSection/>
        <NewsLetter/>
      </main>
      <Footer/>
    </div>
  );
}
