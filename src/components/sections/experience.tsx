import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';

const experiences = [
  {
    title: 'Design & Development Intern',
    company: 'Koushiki Innovision',
    duration: 'Jan 2025 – June 2025',
    points: [
      'Designed customizable Ludo game with educational features.',
      'Built theme selector, multi-dice logic, and animations.',
      'Hands-on experience with Unity, Blender 3D, UI/UX, and deployment.',
    ],
  },
  {
    title: 'Freelance Graphic Designer & Video Editor',
    company: 'Remote',
    duration: '2024 – Present',
    points: [
      'Designed 100+ social media creatives for promotions, events, and business branding.',
      'Edited Instagram reels, YouTube intros, and promotional videos with transitions and synced audio.',
      'Created brand identities including logos and style guides for startups and local businesses.',
      'Developed YouTube thumbnails for tech channels, increasing viewer engagement.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12 uppercase">
            <ScrollReveal
                baseOpacity={0.2}
                enableBlur={false}
                baseRotation={2}
            >
                Experience
            </ScrollReveal>
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/80 border-primary/20 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-accent mt-1"/>
                  <div>
                    <CardTitle className="text-2xl font-bold font-headline text-primary">{exp.title}</CardTitle>
                    <p className="text-lg text-foreground/80">{exp.company}</p>
                    <p className="text-md text-accent">{exp.duration}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 text-lg">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
