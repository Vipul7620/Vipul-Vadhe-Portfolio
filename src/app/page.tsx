
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
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ opacity: 0.5 }}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
