import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto px-4 animate-fade-in">
      <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12">
        ABOUT <span className="font-script text-accent text-5xl md:text-7xl">Me</span>
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
          <div className="relative group">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Vipul Vadhe Profile Picture"
              width={300}
              height={300}
              className="rounded-full border-4 border-primary shadow-lg transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="profile photo"
            />
            <Sparkles className="absolute top-0 left-0 w-8 h-8 text-accent animate-twinkle" />
             <Sparkles className="absolute bottom-8 right-0 w-6 h-6 text-primary animate-twinkle" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
