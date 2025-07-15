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
          <Card className="p-8 border-primary/20 bg-card">
            <p className="text-lg leading-relaxed text-foreground/90">
              Passionate and dedicated Full-Stack Developer with an MCA from MIT World Peace University (June 2025). Skilled in Python, Java, PHP, JavaScript, REST APIs, and modern backend frameworks. Also a creative Graphic Designer delivering branding, posters, social content, and UI/UX elements for diverse projects.
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
            <div className="absolute -bottom-4 -right-4">
              <Button size="icon" className="rounded-full bg-accent hover:bg-accent/90 w-16 h-16">
                <ArrowRight className="w-8 h-8 text-primary" />
              </Button>
            </div>
            <Sparkles className="absolute top-0 left-0 w-8 h-8 text-accent animate-twinkle" />
             <Sparkles className="absolute bottom-8 right-0 w-6 h-6 text-primary animate-twinkle" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
