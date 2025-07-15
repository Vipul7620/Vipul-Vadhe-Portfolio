import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const developerProjects = [
  {
    title: 'AI Healthcare Bot',
    description: 'A conversational AI to assist with healthcare queries.',
    image: 'https://placehold.co/600x400.png',
    hint: 'abstract code',
  },
  {
    title: 'Cloud Classroom',
    description: 'An online platform for virtual learning and collaboration.',
    image: 'https://placehold.co/600x400.png',
    hint: 'technology screen',
  },
  {
    title: 'BookStore',
    description: 'An e-commerce application for buying and selling books.',
    image: 'https://placehold.co/600x400.png',
    hint: 'books library',
  },
  {
    title: 'Esports Tournament App',
    description: 'A platform for organizing and participating in gaming tournaments.',
    image: 'https://placehold.co/600x400.png',
    hint: 'gaming esports',
  },
];

const designWorks = [
  { title: 'Poster Design', image: 'https://placehold.co/400x600.png', hint: 'poster design' },
  { title: 'Logo Design', image: 'https://placehold.co/400x400.png', hint: 'logo design' },
  { title: 'Branding Mockup', image: 'https://placehold.co/600x400.png', hint: 'branding identity' },
  { title: 'Social Media Reel Cover', image: 'https://placehold.co/400x700.png', hint: 'social media' },
  { title: 'Logo Collection', image: 'https://placehold.co/600x400.png', hint: 'logo collection' },
  { title: 'Poster Series', image: 'https://placehold.co/400x500.png', hint: 'poster series' },
];

const WorkSection = () => {
  return (
    <section id="my-work" className="animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12 uppercase relative inline-block left-1/2 -translate-x-1/2">
          My Work
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent"></span>
        </h2>

        {/* Developer Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-headline font-bold mb-8 text-center">Developer Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {developerProjects.map((project) => (
              <Card key={project.title} className="bg-background/80 border-primary/20 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.hint}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-accent/70 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-primary text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Design Works */}
        <div>
          <h3 className="text-3xl font-headline font-bold mb-8 text-center">Design Works</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {designWorks.map((work, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={400}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={work.hint}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-accent/70 transition-colors duration-300 flex items-center justify-center p-4">
                  <span className="text-primary text-lg font-bold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Full Design</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
