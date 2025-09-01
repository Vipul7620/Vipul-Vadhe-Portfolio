import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';

const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto px-4 animate-fade-in">
      <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12">
        <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={3}
            blurStrength={4}
        >
            ABOUT <span className="font-script text-accent text-5xl md:text-7xl">Me</span>
        </ScrollReveal>
      </h2>
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        <div className="relative w-full md:w-[65%]">
          <Card className="p-8 border-primary/20 bg-card/80 w-full">
            <ul className="list-disc pl-6 space-y-3 text-lg leading-relaxed text-foreground/90">
              <li>
                <strong>Vipul Vadhe</strong> – passionate Graphic Designer & Creative Technologist with a strong foundation in design, development, and storytelling.
              </li>
              <li>
                Designed impactful logos, brand identities, social media creatives, and promotional campaigns; expanded into video editing, motion graphics, and 3D design.
              </li>
              <li>
                Professional experience at Aryan Advertising and as a Freelance Graphic Designer & Video Editor: delivered 100+ digital assets, branding solutions, and video edits for businesses, startups, and events.
              </li>
              <li>
                Internship at Koushiki Innovision: designed 3D game assets, UI/UX elements, and animations for an educational Ludo game, blending creativity with technology.
              </li>
              <li>
                Skilled with Adobe Photoshop, Illustrator, Figma, Premiere Pro, and Blender; merge technical precision with design thinking (MCA background) to create functional, innovative, and visually engaging digital experiences.
              </li>
              <li>
                Believe in design that tells a story, sparks curiosity, and leaves a lasting impact. Aim to bring ideas to life with creativity, adaptability, and professionalism.
              </li>
            </ul>
          </Card>
        </div>
        <div className="flex flex-col items-center w-full md:w-[35%]">
          <div className="relative group flex items-center justify-center w-full">
            {/* Removed background gradient/blur squircle */}
            <Image
              src="/vipul.png"
              alt="Vipul Vadhe Profile Picture"
              width={320}
              height={320}
              className="relative z-10 rounded-3xl border-4 border-accent shadow-2xl object-cover transition-transform duration-300 group-hover:scale-105 bg-background w-full md:w-[90%]"
              style={{ background: 'linear-gradient(135deg, #fff 60%, #e0e7ff 100%)' }}
              data-ai-hint="profile photo main squircle"
              priority
            />
            <Sparkles className="absolute top-2 left-2 w-10 h-10 text-accent animate-twinkle z-20" />
            <Sparkles className="absolute bottom-8 right-4 w-8 h-8 text-primary animate-twinkle z-20" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
