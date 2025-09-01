
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import WorkSection from '@/components/sections/work';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experience';
import EducationSection from '@/components/sections/education';
import Footer from '@/components/sections/footer';
import ContactSection from '@/components/sections/contact';
import Preloader from '@/components/ui/preloader';
import { cn } from '@/lib/utils';
import AnimatedBackground from '@/components/ui/animated-background';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Main background video with 50% opacity (landing page.mp4) */}
      <div className="fixed inset-0 w-full h-full z-0" style={{ background: '#111' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.5, filter: 'brightness(1.1) contrast(1.15)' }}
          key="main-bg"
        >
          <source src="/landing%20page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <AnimatedBackground />
      {loading && <Preloader onLoadingComplete={() => setLoading(false)} />}
      <div className={cn("relative z-10 flex flex-col min-h-screen transition-opacity duration-500", loading ? "opacity-0" : "opacity-100")}> 
        <Header />
        <main className="flex flex-col w-full gap-8 md:gap-12 lg:gap-16">
          <HeroSection />
          <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <AboutSection />
            <ExperienceSection />
            <WorkSection />
            <SkillsSection />
            <EducationSection />
            {/* Certificates Section */}
            {require('@/components/sections/certificates').default && (
              require('@/components/sections/certificates').default()
            )}
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
