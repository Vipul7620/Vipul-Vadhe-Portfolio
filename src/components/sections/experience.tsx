import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-card/50 animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12 uppercase">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="bg-card border-primary/20 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Briefcase className="w-8 h-8 text-accent"/>
                <div>
                  <CardTitle className="text-2xl font-bold font-headline text-primary">Design & Development Intern</CardTitle>
                  <p className="text-lg text-foreground/80">Koushiki Innovision</p>
                  <p className="text-md text-accent">Jan 2025 – June 2025</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 text-lg">
                <li>Designed customizable Ludo game with educational features.</li>
                <li>Built theme selector, multi-dice logic, and animations.</li>
                <li>Hands-on experience with Unity, Blender 3D, UI/UX, and deployment.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
