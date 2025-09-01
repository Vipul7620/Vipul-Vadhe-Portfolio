import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { GraduationCap } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';

const EducationSection = () => {
  return (
    <section id="education" className="container mx-auto px-4 animate-fade-in">
      <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12 uppercase">
        <ScrollReveal baseOpacity={0.2} enableBlur={false} baseRotation={2}>
          Education
        </ScrollReveal>
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {/* MCA with certificate dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="w-full bg-card/80 border-primary/20 shadow-lg rounded-xl p-4 flex flex-col items-center hover:scale-105 hover:shadow-accent/20 transition-transform duration-300 focus:outline-none">
              <div className="flex items-center gap-4 mb-2">
                <GraduationCap className="w-8 h-8 text-accent" />
                <CardTitle className="text-2xl font-bold font-headline text-primary">Master of Computer Applications (MCA)</CardTitle>
              </div>
              <CardDescription className="text-lg text-primary/90">MIT World Peace University, Pune</CardDescription>
              <CardDescription className="text-md text-yellow-500">Graduated 2025</CardDescription>
              <span className="block mt-2 text-sm text-accent underline">View Certificate</span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-card/95 border-primary/30 p-6 flex flex-col items-center">
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl text-primary text-center">Master of Computer Applications (MCA) Certificate</DialogTitle>
            </DialogHeader>
            <img src="/MCA.jpg" alt="MCA Certificate" className="rounded-lg w-full max-w-xl border border-primary/30 mt-4" />
          </DialogContent>
        </Dialog>
        {/* BCS with certificate dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="w-full bg-card/80 border-primary/20 shadow-lg rounded-xl p-4 flex flex-col items-center hover:scale-105 hover:shadow-accent/20 transition-transform duration-300 focus:outline-none">
              <div className="flex items-center gap-4 mb-2">
                <GraduationCap className="w-8 h-8 text-accent" />
                <CardTitle className="text-2xl font-bold font-headline text-primary">Bachelor of Computer Science (BCS)</CardTitle>
              </div>
              <CardDescription className="text-lg text-primary/90">Sinhgad College of Science, Pune</CardDescription>
              <CardDescription className="text-md text-yellow-500">Graduated 2023</CardDescription>
              <span className="block mt-2 text-sm text-accent underline">View Certificate</span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-card/95 border-primary/30 p-6 flex flex-col items-center">
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl text-primary text-center">Bachelor of Computer Science (BCS) Certificate</DialogTitle>
            </DialogHeader>
            <img src="/BSC.jpg" alt="BCS Certificate" className="rounded-lg w-full max-w-xl border border-primary/30 mt-4" />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default EducationSection;
