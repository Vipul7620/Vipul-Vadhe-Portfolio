import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import EducationSection from '@/components/sections/education';
import ExperienceSection from '@/components/sections/experience';
import WorkSection from '@/components/sections/work';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
  );
}
