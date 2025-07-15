import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-background/50 to-background"></div>
      
      <div className="absolute top-1/4 left-1/4 w-8 h-8 text-accent animate-twinkle" style={{ animationDelay: '0s' }}>
        <Sparkles className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 right-1/4 w-6 h-6 text-primary animate-twinkle" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-full h-full" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 text-accent animate-twinkle" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-20 w-10 h-10 text-primary animate-twinkle" style={{ animationDelay: '0.5s' }}>
        <Sparkles className="w-full h-full" />
      </div>

      <div className="relative z-10 p-4 animate-fade-in">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-extrabold tracking-tighter">
          <span className="font-script text-accent text-7xl md:text-9xl lg:text-[10rem] block -mb-4 md:-mb-8">VIPUL</span>
          PORTFOLIO
        </h1>
        <p className="text-2xl md:text-3xl font-bold tracking-widest uppercase font-headline mt-4">
          Vipul Vadhe
        </p>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-foreground/80 leading-relaxed">
          Welcome to my Online Portfolio! I am a passionate Graphic Designer & Full-Stack Developer, blending creative vision with technical skill. I craft digital experiences and stunning visuals that bring ideas to life. Explore my work and let’s build something amazing together.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
