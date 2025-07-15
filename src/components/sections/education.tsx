import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="bg-background animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12 uppercase">Education</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Card className="w-full max-w-md bg-card border-primary/20 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-accent/20">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <GraduationCap className="w-8 h-8 text-accent" />
                <CardTitle className="text-2xl font-bold font-headline text-primary">Master of Computer Applications (MCA)</CardTitle>
              </div>
              <CardDescription className="text-lg text-foreground/80">MIT World Peace University, Pune</CardDescription>
              <CardDescription className="text-md text-accent">Completed June 2025</CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full max-w-md bg-card border-primary/20 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-accent/20">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <GraduationCap className="w-8 h-8 text-accent" />
                <CardTitle className="text-2xl font-bold font-headline text-primary">Bachelor of Computer Science (BCS)</CardTitle>
              </div>
              <CardDescription className="text-lg text-foreground/80">Sinhgad College of Science, Pune</CardDescription>
              <CardDescription className="text-md text-accent">Graduated 2023</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
