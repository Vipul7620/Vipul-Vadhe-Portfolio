
'use client';

import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import TypingAnimation from '@/components/ui/typing-animation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { Star } from '@/components/ui/star';


const HeroSection = () => {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const starTypes: ('four' | 'six' | 'eight' | 'sparkle')[] = ['four', 'six', 'eight', 'sparkle'];
      
      const smallStars = Array.from({ length: 25 }).map((_, i) => ({
        id: `small-${i}`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 12 + 4}px`,
        height: `${Math.random() * 12 + 4}px`,
        color: Math.random() > 0.5 ? 'text-accent' : 'text-primary',
        animationDelay: `${Math.random() * 4}s`,
        opacity: `${Math.random() * 0.5 + 0.5}`,
        type: starTypes[Math.floor(Math.random() * starTypes.length)],
      }));
  
      const bigStars = Array.from({ length: 4 }).map((_, i) => ({
        id: `big-${i}`,
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
        width: `${Math.random() * 20 + 20}px`,
        height: `${Math.random() * 20 + 20}px`,
        color: Math.random() > 0.5 ? 'text-accent' : 'text-primary',
        animationDelay: `${Math.random() * 5}s`,
        opacity: `${Math.random() * 0.6 + 0.4}`,
        type: starTypes[Math.floor(Math.random() * starTypes.length)],
      }));
      
      setStars([...smallStars, ...bigStars]);
    };

    if (typeof window !== 'undefined') {
        generateStars();
    }
  }, []);


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-background/50 to-background"></div>
      
      {stars.map(s => (
        <div 
          key={s.id}
          className="absolute animate-twinkle" 
          style={{ top: s.top, left: s.left, width: s.width, height: s.height, animationDelay: s.animationDelay, opacity: s.opacity }}
        >
          <Star type={s.type} className={`w-full h-full ${s.color}`} />
        </div>
      ))}

      <div className="relative z-10 p-4 animate-fade-in -mt-20">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-extrabold tracking-tighter">
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={8}
                rotationEnd='bottom bottom'
                wordAnimationEnd='bottom bottom'
                className="font-script text-accent text-5xl md:text-7xl lg:text-[8rem] block -mb-4 md:-mb-8"
            >
                ChromatIQ
            </ScrollReveal>
             <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={8}
                rotationEnd='bottom bottom'
                wordAnimationEnd='bottom bottom'
            >
                VIPUL VADHE
            </ScrollReveal>
        </h1>
        <div className="text-2xl md:text-3xl font-bold tracking-widest uppercase font-headline mt-4 h-10">
          <TypingAnimation />
        </div>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-foreground/80 leading-relaxed">
          I am a passionate Graphic Designer & Full-Stack Developer, blending creative vision with technical skill. I craft digital experiences and stunning visuals that bring ideas to life. Explore my work and let’s build something amazing together.
        </p>
         <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 px-8 rounded-full transition-transform duration-300 hover:scale-105">
            <a href="/VIPUL MILIND VADHE.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg py-6 px-8 rounded-full border-primary/40 hover:bg-primary/10 hover:text-primary transition-transform duration-300 hover:scale-105">
            <Link href="#contact">
              <Send className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
