

'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import FullscreenConfetti from '@/components/ui/fullscreen-confetti';
import ScrollReveal from '@/components/ui/scroll-reveal';

const developerProjects = [
  {
    title: 'This Portfolio Website',
    description: 'A modern, animated portfolio built with Next.js and Tailwind CSS to showcase my skills and projects.',
    image: 'https://placehold.co/600x400.png',
    hint: 'portfolio website',
    longDescription: 'Wait a second... you\'re already here! You are currently viewing the portfolio project. It\'s a bit meta, isn\'t it?',
    contributions: [
        'Designed the entire UI/UX with a focus on a clean, futuristic aesthetic.',
        'Built with Next.js for server-side rendering and performance.',
        'Styled with Tailwind CSS and ShadCN UI components.',
        'Implemented subtle animations and a flowing background for an engaging user experience.',
        'Added this cool easter egg you\'re looking at right now!',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'ShadCN UI'],
    liveLink: '#',
  },
  {
    title: 'Cloud Classroom',
    description: 'A web-based platform for virtual learning and collaboration.',
    image: 'https://placehold.co/600x400.png',
    hint: 'technology screen',
    longDescription: 'Built a web-based platform for virtual learning and collaboration, enabling students and teachers to manage courses, upload notes, conduct tests, and interact efficiently online.',
    contributions: [
        'Designed database schema for user roles and course management.',
        'Developed the entire front-end and back-end integration.',
        'Created features for uploading notes, assignments, and announcements.',
        'Ensured secure user authentication and session management.',
    ],
    techStack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'VS Code', 'XAMPP', 'MySQL Workbench'],
    liveLink: '#',
  },
  {
    title: 'AI Healthcare Bot',
    description: 'A conversational AI to assist with healthcare queries, disease prediction, and preventive measures.',
    image: 'https://placehold.co/600x400.png',
    hint: 'abstract code',
    longDescription: 'Developed a conversational AI chatbot to assist users with healthcare queries, provide basic disease risk predictions, and suggest possible preventive measures. Designed for rural healthcare access, ensuring users can get primary guidance before visiting a doctor.',
    contributions: [
        'Designed the conversation flow and intents.',
        'Implemented disease prediction logic based on user symptoms.',
        'Developed user-friendly UI for interaction.',
        'Integrated database for storing conversation history and user data securely.',
    ],
    techStack: ['Python', 'Django', 'NLTK', 'scikit-learn', 'MySQL', 'VS Code', 'MySQL Workbench'],
    liveLink: '#',
  },
  {
    title: 'BookStore',
    description: 'A responsive e-commerce application for buying and selling books.',
    image: 'https://placehold.co/600x400.png',
    hint: 'books library',
    longDescription: 'Developed a responsive e-commerce application for buying and selling books, featuring an admin panel to manage inventory, view orders, and update product details.',
    contributions: [
        'Designed the entire website layout and responsive UI.',
        'Implemented product listing, search, cart, and order modules.',
        'Developed admin login, CRUD functionalities, and secure data handling.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'VS Code', 'XAMPP'],
    liveLink: '#',
  },
  {
    title: 'Esports Tournament App',
    description: 'An Android app for organizing and participating in gaming tournaments.',
    image: 'https://placehold.co/600x400.png',
    hint: 'gaming esports',
    longDescription: 'Created an Android application for organizing and participating in esports gaming tournaments, allowing players to register, view schedules, and get results instantly.',
    contributions: [
        'Developed UI components for tournament listings and registration.',
        'Integrated Firebase for real-time data management.',
        'Handled user authentication, data storage, and notifications.',
    ],
    techStack: ['Java', 'Android Studio', 'Firebase'],
    liveLink: '#',
  },
  {
    title: 'Hotel Management System',
    description: 'A system to streamline hotel operations like booking, check-in/out, and billing.',
    image: 'https://placehold.co/600x400.png',
    hint: 'hotel lobby',
    longDescription: 'Developed a Hotel Management System to streamline operations including room booking, customer check-in/check-out, billing, and room availability management. The system allows hotel staff to efficiently handle guest details, reservations, and payments through a user-friendly interface.',
    contributions: [
      'Designed the database schema for managing rooms, customers, bookings, and payments.',
      'Developed login and authentication modules for admin and staff.',
      'Implemented CRUD functionalities for room management (add, update, delete rooms).',
      'Integrated booking functionality with automatic room availability updates.',
      'Designed invoice and billing modules to generate customer bills upon checkout.',
    ],
    techStack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'VS Code', 'XAMPP', 'MySQL Workbench'],
    liveLink: '#',
  },
];

const designWorks = [
  { 
    title: 'Sample 1', 
    coverImage: 'https://placehold.co/400x400.png', 
    hint: 'poster design',
    images: [
      { src: 'https://placehold.co/800x800.png', hint: 'poster design' },
      { src: 'https://placehold.co/800x800.png', hint: 'event poster' },
      { src: 'https://placehold.co/800x800.png', hint: 'movie poster' },
      { src: 'https://placehold.co/800x800.png', hint: 'creative poster' },
      { src: 'https://placehold.co/800x800.png', hint: 'artistic poster' },
    ]
  },
  { 
    title: 'Sample 2', 
    coverImage: 'https://placehold.co/400x400.png',
    hint: 'logo design',
    images: [
      { src: 'https://placehold.co/800x800.png', hint: 'modern logo' },
      { src: 'https://placehold.co/800x800.png', hint: 'minimalist logo' },
      { src: 'https://placehold.co/800x800.png', hint: 'company logo' },
    ]
  },
  { 
    title: 'Sample 3', 
    coverImage: 'https://placehold.co/400x400.png', 
    hint: 'branding identity',
    images: [
      { src: 'https://placehold.co/800x800.png', hint: 'stationery mockup' },
      { src: 'https://placehold.co/800x800.png', hint: 'brand guide' },
      { src: 'https://placehold.co/800x800.png', hint: 'product branding' },
    ]
  },
  { 
    title: 'Sample 4', 
    coverImage: 'https://placehold.co/400x400.png', 
    hint: 'social media',
    images: [
      { src: 'https://placehold.co/800x800.png', hint: 'instagram post' },
      { src: 'https://placehold.co/800x800.png', hint: 'facebook ad' },
      { src: 'https://placehold.co/800x800.png', hint: 'twitter graphic' },
    ]
  },
  { 
    title: 'Sample 5', 
    coverImage: 'https://placehold.co/400x400.png', 
    hint: 'logo collection',
    images: [
      { src: 'https://placehold.co/800x800.png', hint: 'assorted logos' },
      { src: 'https://placehold.co/800x800.png', hint: 'logo variations' },
      { src: 'https://placehold.co/800x800.png', hint: 'logo concepts' },
    ]
  },
  { 
    title: 'Sample 6', 
    coverImage: 'https://placehold.co/400x400.png', 
    hint: 'poster series',
    images: [
      { src: 'https://placehold.co/800x800.png', hint: 'minimalist poster' },
      { src: 'https://placehold.co/800x800.png', hint: 'typographic poster' },
      { src: 'https://placehold.co/800x800.png', hint: 'abstract poster' },
    ]
  },
];


const WorkSection = () => {
    const [isExploding, setIsExploding] = useState(false);

    const handlePortfolioClick = () => {
        setIsExploding(true);
    };

  return (
    <section id="work" className="animate-fade-in">
      {isExploding && <FullscreenConfetti onComplete={() => setIsExploding(false)} />}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12 uppercase relative inline-block left-1/2 -translate-x-1/2">
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
            >
                My Work
            </ScrollReveal>
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent"></span>
        </h2>

        <Tabs defaultValue="designer" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto bg-transparent border border-primary/20 rounded-lg mb-8 p-0 h-auto">
            <TabsTrigger value="designer" className="font-headline text-lg py-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=inactive]:text-muted-foreground hover:bg-accent/10 hover:text-primary transition-colors duration-300 rounded-l-md">Design Works</TabsTrigger>
            <TabsTrigger value="developer" className="font-headline text-lg py-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=inactive]:text-muted-foreground hover:bg-accent/10 hover:text-primary transition-colors duration-300 rounded-r-md">Developer Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="developer">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developerProjects.map((project) => (
                <Dialog key={project.title}>
                  <DialogTrigger asChild>
                    <Card 
                      onClick={project.title === 'This Portfolio Website' ? handlePortfolioClick : undefined}
                      className="bg-card/80 border-primary/20 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2 cursor-pointer"
                    >
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
                     {project.title === 'This Portfolio Website' ? (
                       <>
                        <DialogHeader>
                          <DialogTitle className="font-headline text-3xl text-primary text-center">{project.title}</DialogTitle>
                           <DialogDescription className="text-foreground/80 pt-4 text-center text-lg relative">
                             {project.longDescription}
                           </DialogDescription>
                         </DialogHeader>
                         <div className="py-2">
                            <h4 className="font-bold text-lg mb-3 text-primary/90 text-center">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2 justify-center">
                              {project.techStack.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                            </div>
                          </div>
                         <DialogFooter>
                          <Button variant="outline" disabled>
                            You're already here!
                          </Button>
                         </DialogFooter>
                       </>
                     ) : (
                       <>
                        <DialogHeader>
                          <DialogTitle className="font-headline text-3xl text-primary">{project.title}</DialogTitle>
                           <DialogDescription className="text-foreground/80 pt-2">
                             {project.longDescription}
                           </DialogDescription>
                         </DialogHeader>

                          <div className="py-2">
                             <h4 className="font-bold text-lg mb-3 text-primary/90">My Contributions</h4>
                             <ul className="space-y-2">
                               {project.contributions.map((point, index) => (
                                 <li key={index} className="flex items-start gap-2">
                                   <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                   <span className="text-foreground/90">{point}</span>
                                 </li>
                               ))}
                             </ul>
                         </div>

                         <div className="py-2">
                           <h4 className="font-bold text-lg mb-3 text-primary/90">Tech Stack</h4>
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
                       </>
                     )}
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
                    <div className="relative rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2 cursor-pointer aspect-square">
                      <Image
                        src={work.coverImage}
                        alt={work.title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={work.hint}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-accent/70 transition-colors duration-300 flex items-center justify-center p-4">
                         <span className="text-primary text-lg font-bold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">{work.title}</span>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl h-[90vh] bg-card/90 border-primary/30 p-4 flex flex-col">
                     <DialogHeader>
                      <DialogTitle className="font-headline text-3xl text-primary">{work.title}</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="flex-grow">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-1 pr-4">
                        {work.images.map((image, i) => (
                          <Dialog key={i}>
                            <DialogTrigger asChild>
                              <div className="relative rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 cursor-pointer aspect-square">
                                <Image
                                  src={image.src}
                                  alt={`${work.title} - Image ${i + 1}`}
                                  layout="fill"
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                  data-ai-hint={image.hint}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-accent/50 transition-colors duration-300" />
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl h-auto bg-transparent border-none shadow-none p-0">
                               <DialogTitle className="sr-only">{`${work.title} - Image ${i + 1}`}</DialogTitle>
                               <Image
                                  src={image.src}
                                  alt={`${work.title} - Image ${i + 1}`}
                                  width={1200}
                                  height={1200}
                                  className="w-full h-full object-contain rounded-lg"
                                />
                            </DialogContent>
                          </Dialog>
                        ))}
                      </div>
                    </ScrollArea>
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
