// src/app/page.tsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import SkillsSection from '@/components/SkillsSection';
import ResearchSection from '@/components/ResearchSection';
import AchievementsSection from '@/components/AchievementsSection';
import LeadershipSection from '@/components/LeadershipSection';
import LanguagesSection from '@/components/LanguagesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const { toast } = useToast();

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Success!', description: "Your message was sent. I'll reply soon!" });
  };

  return (
    <ScrollArea>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <CertificationsSection />
      <SkillsSection />
      <ResearchSection />
      <AchievementsSection />
      <LeadershipSection />
      <LanguagesSection />
      <ProjectsSection />
      <ContactSection onSubmit={handleSubmit} />
    </ScrollArea>
  );
}
