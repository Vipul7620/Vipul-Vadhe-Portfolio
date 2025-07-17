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
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative">
          <Card className="p-8 border-primary/20 bg-card/80">
            <p className="text-lg leading-relaxed text-foreground/90">
              I’m Vipul Vadhe – a creative technologist who merges design aesthetics with coding logic to craft digital experiences that are both functional and beautiful. With an MCA and a passion for building impactful solutions, I’ve developed AI tools, educational games, and web platforms while designing visuals that communicate stories powerfully. I believe in creating work that not only solves problems but also sparks curiosity and emotion, blending my love for technology, design, and continuous learning into everything I build.
            </p>
          </Card>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative group flex items-center justify-center">
            {/* Soft gradient background squircle */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/80 via-primary/60 to-background blur-2xl scale-110 z-0" />
            <Image
              src="/vipul.png"
              alt="Vipul Vadhe Profile Picture"
              width={320}
              height={320}
              className="relative z-10 rounded-3xl border-4 border-accent shadow-2xl object-cover transition-transform duration-300 group-hover:scale-105 bg-background"
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
