
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import EducationSection from '@/components/sections/education';
import ExperienceSection from '@/components/sections/experience';
import WorkSection from '@/components/sections/work';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/sections/footer';
import Preloader from '@/components/ui/preloader';
import { cn } from '@/lib/utils';
import AnimatedBackground from '@/components/ui/animated-background';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatedBackground />
      {loading && <Preloader onLoadingComplete={() => setLoading(false)} />}
      <div className={cn("relative z-10 flex flex-col min-h-screen transition-opacity duration-500", loading ? "opacity-0" : "opacity-100")}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <WorkSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
