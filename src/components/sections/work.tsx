import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const developerProjects = [
  {
    title: 'AI Healthcare Bot',
    description: 'A conversational AI to assist with healthcare queries.',
    image: 'https://placehold.co/600x400.png',
    hint: 'abstract code',
    longDescription: 'This project features a sophisticated conversational AI designed to answer healthcare-related questions, provide symptom analysis, and offer initial guidance. It leverages natural language processing to understand user queries and deliver accurate, reliable information.',
    techStack: ['Next.js', 'Genkit AI', 'Tailwind CSS', 'ShadCN UI'],
    liveLink: '#',
  },
  {
    title: 'Cloud Classroom',
    description: 'An online platform for virtual learning and collaboration.',
    image: 'https://placehold.co/600x400.png',
    hint: 'technology screen',
    longDescription: 'Cloud Classroom is a comprehensive e-learning platform that facilitates remote education. It includes features for video conferencing, assignment submission, real-time collaboration on documents, and progress tracking for students.',
    techStack: ['React', 'Firebase', 'Node.js', 'WebRTC'],
    liveLink: '#',
  },
  {
    title: 'BookStore',
    description: 'An e-commerce application for buying and selling books.',
    image: 'https://placehold.co/600x400.png',
    hint: 'books library',
    longDescription: 'A fully functional e-commerce website for a bookstore, complete with user authentication, a product catalog, shopping cart, and a secure checkout process. The backend is built to handle inventory management and order processing.',
    techStack: ['Django', 'Python', 'MySQL', 'Bootstrap'],
    liveLink: '#',
  },
  {
    title: 'Esports Tournament App',
    description: 'A platform for organizing and participating in gaming tournaments.',
    image: 'https://placehold.co/600x400.png',
    hint: 'gaming esports',
    longDescription: 'This application allows users to create, manage, and join esports tournaments. It features bracket generation, match scheduling, real-time score updates, and user profiles to track performance and rankings.',
    techStack: ['PHP', 'JavaScript', 'MySQL', 'jQuery'],
    liveLink: '#',
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

        <Tabs defaultValue="developer" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto bg-transparent border border-primary/20 rounded-lg mb-8 p-0 h-auto">
            <TabsTrigger value="developer" className="font-headline text-lg py-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=inactive]:text-muted-foreground hover:bg-accent/10 hover:text-primary transition-colors duration-300 rounded-l-md">Developer Projects</TabsTrigger>
            <TabsTrigger value="designer" className="font-headline text-lg py-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=inactive]:text-muted-foreground hover:bg-accent/10 hover:text-primary transition-colors duration-300 rounded-r-md">Design Works</TabsTrigger>
          </TabsList>

          <TabsContent value="developer">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {developerProjects.map((project) => (
                <Dialog key={project.title}>
                  <DialogTrigger asChild>
                    <Card className="bg-card/80 border-primary/20 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2 cursor-pointer">
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
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[625px] bg-card border-primary/30">
                    <DialogHeader>
                      <DialogTitle className="font-headline text-3xl text-primary">{project.title}</DialogTitle>
                      <DialogDescription className="text-foreground/80 pt-2">
                        {project.longDescription}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <h4 className="font-bold text-lg mb-2 text-primary/90">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                      </div>
                    </div>
                    <DialogFooter>
                      <Button asChild variant="outline">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> View Live
                        </a>
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="designer">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {designWorks.map((work, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="relative rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2 cursor-pointer">
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
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[80vw] w-auto h-auto bg-card border-primary/30 p-2">
                     <Image
                        src={work.image}
                        alt={work.title}
                        width={1200}
                        height={1800}
                        className="w-full h-full object-contain rounded-md"
                      />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default WorkSection;
