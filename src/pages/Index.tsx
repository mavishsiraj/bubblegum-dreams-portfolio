import FloatingBubbles from "@/components/FloatingBubbles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CodingStatsSection from "@/components/CodingStatsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CodingProfilesSection from "@/components/CodingProfilesSection";
import ThoughtsSection from "@/components/ThoughtsSection";
import FunFactsSection from "@/components/FunFactsSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden grain-overlay">
      <CustomCursor />
      <ScrollProgress />
      <FloatingBubbles />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CodingStatsSection />
        <ProjectsSection />
        <AchievementsSection />
        <CodingProfilesSection />
        <ThoughtsSection />
        <FunFactsSection />
        <ContactSection />
      </main>
      <BackToTop />
    </div>
  );
};

export default Index;
