import FloatingBubbles from "@/components/FloatingBubbles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CodingProfilesSection from "@/components/CodingProfilesSection";
import ThoughtsSection from "@/components/ThoughtsSection";
import FunFactsSection from "@/components/FunFactsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden">
      <FloatingBubbles />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <AchievementsSection />
        <CodingProfilesSection />
        <ThoughtsSection />
        <FunFactsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
