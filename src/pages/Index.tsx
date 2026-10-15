import "@/lib/languages/i18n";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useEffect, useState } from "react";
import { ResumeProvider } from "@/components/ResumeProvider";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ResumeProvider>
      <div className="min-h-screen bg-background overflow-x-clip">
        <Navbar isDark={isDark} toggleDark={() => setIsDark((prev) => !prev)} />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperiencesSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ResumeProvider>
  );
};

export default Index;
