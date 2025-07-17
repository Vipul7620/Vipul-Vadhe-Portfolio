'use client';
import { useState, useRef, useEffect } from 'react';
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
    image: '/This Portfolio Website.png',
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
    image: '/cloud classroom.jpg',
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
    image: '/AI Healthcare Bot.png',
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
    image: '/BookStore (2).png',
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
    image: '/Esports Tournament App.jpg',
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
    image: '/Hotel Management System.jpg',
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
    title: 'Stories',
    coverImage: '/Stories/01.png',
    hint: 'story design',
    images: [
      { src: '/Stories/01.png', hint: 'story design' },
      { src: '/Stories/010.png', hint: 'story design' },
      { src: '/Stories/012.png', hint: 'story design' },
      { src: '/Stories/013.png', hint: 'story design' },
      { src: '/Stories/019.png', hint: 'story design' },
      { src: '/Stories/01x.png', hint: 'story design' },
      { src: '/Stories/025.png', hint: 'story design' },
      { src: '/Stories/029.png', hint: 'story design' },
      { src: '/Stories/03.png', hint: 'story design' },
      { src: '/Stories/040.png', hint: 'story design' },
      { src: '/Stories/041.png', hint: 'story design' },
      { src: '/Stories/042.png', hint: 'story design' },
      { src: '/Stories/043.png', hint: 'story design' },
      { src: '/Stories/044.png', hint: 'story design' },
      { src: '/Stories/049.png', hint: 'story design' },
      { src: '/Stories/050.png', hint: 'story design' },
      { src: '/Stories/052.png', hint: 'story design' },
      { src: '/Stories/054.png', hint: 'story design' },
      { src: '/Stories/058x.png', hint: 'story design' },
      { src: '/Stories/08.png', hint: 'story design' },
      { src: '/Stories/35.png', hint: 'story design' },
      { src: '/Stories/50.png', hint: 'story design' },
      { src: '/Stories/61.png', hint: 'story design' },
      { src: '/Stories/BPD_S2_AC (5).png', hint: 'story design' },
      { src: '/Stories/BPD_S2_V (107).png', hint: 'story design' },
    ]
  },
  {
    title: 'Banner',
    coverImage: '/Banner/010.png',
    hint: 'banner design',
    images: [
      { src: '/Banner/010.png', hint: 'banner design' },
      { src: '/Banner/012.png', hint: 'banner design' },
      { src: '/Banner/015.png', hint: 'banner design' },
      { src: '/Banner/015 (1).png', hint: 'banner design' },
      { src: '/Banner/018.png', hint: 'banner design' },
      { src: '/Banner/0192.png', hint: 'banner design' },
      { src: '/Banner/02.png', hint: 'banner design' },
      { src: '/Banner/024.png', hint: 'banner design' },
      { src: '/Banner/025.png', hint: 'banner design' },
      { src: '/Banner/029.png', hint: 'banner design' },
      { src: '/Banner/04.png', hint: 'banner design' },
      { src: '/Banner/05.png', hint: 'banner design' },
      { src: '/Banner/057.png', hint: 'banner design' },
      { src: '/Banner/073.png', hint: 'banner design' },
    ]
  },
  {
    title: 'Facebook Covers',
    coverImage: '/Facebook Covers/Artistic Timeline.png',
    hint: 'facebook cover',
    images: [
      { src: '/Facebook Covers/Artistic Timeline.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/Best Deals Online.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/Body Building 3.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/Body Building 4.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/Body-building-V2.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/Delivery in time.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/Desktop-1-Dark.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/Fall Sale.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/fb cover-01.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/fb cover-05.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/Freelance-Cover.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/Guru-Cover.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/Map Finder (1).png', hint: 'facebook cover' },
      { src: '/Facebook Covers/Map Finder.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/Marketing 1.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/Mexican-Fast-Food-2.png', hint: 'facebook cover' },
      { src: '/Facebook Covers/web-coding.png', hint: 'facebook cover' },
    ]
  },
  {
    title: 'Flyers',
    coverImage: '/Flyers/010.png',
    hint: 'flyer design',
    images: [
      { src: '/Flyers/010.png', hint: 'flyer design' },
      { src: '/Flyers/0104.png', hint: 'flyer design' },
      { src: '/Flyers/0123.png', hint: 'flyer design' },
      { src: '/Flyers/013.png', hint: 'flyer design' },
      { src: '/Flyers/0164.png', hint: 'flyer design' },
      { src: '/Flyers/018.png', hint: 'flyer design' },
      { src: '/Flyers/025.png', hint: 'flyer design' },
      { src: '/Flyers/0289.png', hint: 'flyer design' },
      { src: '/Flyers/03.png', hint: 'flyer design' },
      { src: '/Flyers/042.png', hint: 'flyer design' },
      { src: '/Flyers/044.png', hint: 'flyer design' },
      { src: '/Flyers/05.png', hint: 'flyer design' },
      { src: '/Flyers/050.png', hint: 'flyer design' },
      { src: '/Flyers/086.png', hint: 'flyer design' },
      { src: '/Flyers/094.png', hint: 'flyer design' },
      { src: '/Flyers/31.png', hint: 'flyer design' },
      { src: '/Flyers/37.png', hint: 'flyer design' },
      { src: '/Flyers/53.png', hint: 'flyer design' },
      { src: '/Flyers/63.png', hint: 'flyer design' },
      { src: '/Flyers/68.png', hint: 'flyer design' },
      { src: '/Flyers/ARTES MACIAIS.png', hint: 'flyer design' },
      { src: '/Flyers/PERSONAL.png', hint: 'flyer design' },
    ]
  },
  {
    title: '3D Logo',
    coverImage: '/3D Logo/01.png',
    hint: '3D logo design',
    images: [
      { src: '/3D Logo/500PX 1.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 2.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 3.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 4.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 5.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 6.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 7.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 8.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 9.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 10.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 11.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 12.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 13.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 14.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 15.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 16.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 17.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 18.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 19.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 20.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 21.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 22.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 23.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 24.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 25.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 26.png', hint: '3D logo design' },
      { src: '/3D Logo/500PX 27.png', hint: '3D logo design' },
    ]
  },
  {
    title: 'Visit Cards',
    coverImage: '/Visit Cards/01.png',
    hint: 'visit card design',
    images: [
      { src: '/Visit Cards/01.png', hint: 'visit card design' },
      { src: '/Visit Cards/02.png', hint: 'visit card design' },
      { src: '/Visit Cards/03.png', hint: 'visit card design' },
      { src: '/Visit Cards/04.png', hint: 'visit card design' },
      { src: '/Visit Cards/05.png', hint: 'visit card design' },
      { src: '/Visit Cards/06.png', hint: 'visit card design' },
      { src: '/Visit Cards/07.png', hint: 'visit card design' },
      { src: '/Visit Cards/08.png', hint: 'visit card design' },
      { src: '/Visit Cards/09.png', hint: 'visit card design' },
      { src: '/Visit Cards/10.png', hint: 'visit card design' },
      { src: '/Visit Cards/11.png', hint: 'visit card design' },
      { src: '/Visit Cards/13.png', hint: 'visit card design' },
      { src: '/Visit Cards/14.png', hint: 'visit card design' },
      { src: '/Visit Cards/15.png', hint: 'visit card design' },
      { src: '/Visit Cards/16.png', hint: 'visit card design' },
      { src: '/Visit Cards/17.png', hint: 'visit card design' },
      { src: '/Visit Cards/18.png', hint: 'visit card design' },
      { src: '/Visit Cards/19.png', hint: 'visit card design' },
      { src: '/Visit Cards/20.png', hint: 'visit card design' },
    ]
  },
  {
    title: 'BACKGROUNDS & TEXTURE',
    coverImage: '/BACKGROUNDS & TEXTURE/01.jpg',
    hint: 'backgrounds and textures',
    images: [
      { src: '/BACKGROUNDS & TEXTURE/01.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/02.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/03.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/04.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/05.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/06.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/07.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/08.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/09.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/010.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/011.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/012.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/013.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/014.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/015.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/016.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/017.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/018.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/019.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/020.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/021.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/022.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/023.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/024.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/025.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/026.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/027.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/028.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/029.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/030.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/031.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/032.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/033.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/034.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/035.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/036.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/037.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/038.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/039.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/040.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/041.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/042.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/043.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/044.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/045.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/046.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/047.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/048.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/049.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/050.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/051.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/052.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/053.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/054.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/055.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/056.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/057.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/058.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/059.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/060.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/061.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/062.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/063.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/064.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/065.jpg', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/066.png', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/067.png', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/068.png', hint: 'background texture' },
      { src: '/BACKGROUNDS & TEXTURE/069.png', hint: 'background texture' },
      // ...add more images as needed
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
                          className={
                            project.title === 'Cloud Classroom'
                              ? 'object-contain w-full h-64 bg-white transition-transform duration-300 group-hover:scale-105'
                              : 'object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105'
                          }
                          style={project.title === 'Cloud Classroom' ? { background: '#fff' } : {}}
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
                         {/* DialogFooter with View Live button removed as requested */}
                       </>
                     )}
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="designer">
            <div className="flex flex-wrap justify-center gap-6 py-6 w-full bg-gradient-to-r from-accent/10 via-transparent to-accent/10 rounded-2xl shadow-inner">
              {designWorks.map((work, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <button
                      className="relative flex flex-col items-center justify-center px-4 py-3 rounded-2xl bg-card/80 border-2 border-transparent group min-w-[160px] shadow-lg transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:border-gradient-to-br hover:from-accent hover:to-primary/70 hover:shadow-accent/30 focus:outline-none"
                      style={{ boxShadow: '0 4px 24px 0 rgba(80, 120, 255, 0.10)' }}
                    >
                      {/* Animated folder icon */}
                      <span
                        className="inline-block w-12 h-12 mb-1 bg-gradient-to-br from-primary via-accent to-primary/80 rounded-lg group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg transition-transform duration-300 mx-auto"
                        style={{ mask: 'url("/folder.svg") center/contain no-repeat', WebkitMask: 'url("/folder.svg") center/contain no-repeat', backgroundColor: 'currentColor' }}
                      />
                      {/* Preview grid of up to 2 images in 2 columns on mobile, 3 on desktop, above the folder name */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mb-0 w-20 md:w-24 place-items-center mx-auto">
                        {work.images.slice(0, 2).map((img, idx) => (
                          <span key={idx} className="block w-8 h-8 rounded-md overflow-hidden border border-primary/20 bg-muted mx-auto">
                            <Image
                              src={img.src}
                              alt={work.title + ' preview'}
                              width={32}
                              height={32}
                              className="object-cover w-full h-full"
                            />
                          </span>
                        ))}
                        {/* Show 3rd image only on md+ screens */}
                        {work.images.length > 2 && (
                          <span className="hidden md:block w-8 h-8 rounded-md overflow-hidden border border-primary/20 bg-muted mx-auto">
                            <Image
                              src={work.images[2].src}
                              alt={work.title + ' preview'}
                              width={32}
                              height={32}
                              className="object-cover w-full h-full"
                            />
                          </span>
                        )}
                        {/* '+N more' indicator, always last row, full width */}
                        {work.images.length > (typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 3) && (
                          <span className="flex items-center justify-center w-full col-span-2 md:col-span-3 h-6 rounded-md bg-accent text-primary font-bold text-xs border border-primary/20 mt-0 mx-auto">
                            +{work.images.length - (typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 3)} more
                          </span>
                        )}
                      </div>
                      {/* Decorative divider or icon between preview and name+count */}
                      <span className="w-8 h-1 rounded-full bg-gradient-to-r from-accent to-primary/70 opacity-70 my-1 mx-auto" />
                      {/* Folder title and image count, with less gap and a creative layout, all centered */}
                      <div className="flex flex-col items-center gap-1 mx-auto">
                        <span className="font-bold text-base md:text-lg text-primary uppercase tracking-wide text-center whitespace-pre-line drop-shadow-md mx-auto">
                          {work.title}
                        </span>
                        <span className="inline-block bg-gradient-to-br from-accent to-primary text-xs text-accent-foreground font-bold px-2 py-0.5 rounded-full shadow-md border border-white/30 mx-auto">
                          {work.images.length} images
                        </span>
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl h-[90vh] bg-card/90 border-primary/30 p-4 flex flex-col">
                    <DialogHeader>
                      <DialogTitle className="font-headline text-3xl text-primary">{work.title}</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="flex-grow">
                      <div className="columns-2 md:columns-3 gap-4 space-y-4 p-1 pr-4">
                        {work.images.map((image, i) => (
                          <Dialog key={i}>
                            <DialogTrigger asChild>
                              <div className="break-inside-avoid relative rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 cursor-pointer">
                                <Image
                                  src={image.src}
                                  alt={`${work.title} - Image ${i + 1}`}
                                  width={800}
                                  height={1200}
                                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                  data-ai-hint={image.hint}
                                />
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl h-auto bg-transparent border-none shadow-none p-0 flex flex-col items-center justify-center">
                              <DialogTitle className="sr-only">{`${work.title} - Image ${i + 1}`}</DialogTitle>
                              {/* Zoomable framed image */}
                              {(() => {
                                const ZoomableImage = () => {
                                  const [zoom, setZoom] = useState(1);
                                  const minZoom = 0.5;
                                  const maxZoom = 2.5;
                                  const step = 0.2;
                                  const containerRef = useRef<HTMLDivElement | null>(null);
                                  const lastTouchDistRef = useRef<number | null>(null);

                                  // Mouse wheel zoom
                                  const handleWheel = (e: WheelEvent) => {
                                    if (e.ctrlKey || e.metaKey || e.altKey) return; // let browser zoom
                                    e.preventDefault();
                                    const delta = e.deltaY;
                                    setZoom(z => {
                                      if (delta < 0) return Math.min(maxZoom, z + step);
                                      else return Math.max(minZoom, z - step);
                                    });
                                  };

                                  // Pinch zoom for mobile
                                  const handleTouchStart = (e: TouchEvent) => {
                                    if (e.touches.length === 2) {
                                      const dist = Math.hypot(
                                        e.touches[0].clientX - e.touches[1].clientX,
                                        e.touches[0].clientY - e.touches[1].clientY
                                      );
                                      lastTouchDistRef.current = dist;
                                    }
                                  };
                                  const handleTouchMove = (e: TouchEvent) => {
                                    if (e.touches.length === 2 && lastTouchDistRef.current != null) {
                                      const dist = Math.hypot(
                                        e.touches[0].clientX - e.touches[1].clientX,
                                        e.touches[0].clientY - e.touches[1].clientY
                                      );
                                      const diff = dist - lastTouchDistRef.current;
                                      if (Math.abs(diff) > 5) {
                                        setZoom(z => {
                                          let newZoom = z + (diff > 0 ? step : -step);
                                          newZoom = Math.max(minZoom, Math.min(maxZoom, newZoom));
                                          return newZoom;
                                        });
                                        lastTouchDistRef.current = dist;
                                      }
                                    }
                                  };
                                  const handleTouchEnd = (e: TouchEvent) => {
                                    if (e.touches.length < 2) {
                                      lastTouchDistRef.current = null;
                                    }
                                  };

                                  // Attach listeners
                                  useEffect(() => {
                                    const el = containerRef.current;
                                    if (!el) return;
                                    el.addEventListener('wheel', handleWheel, { passive: false });
                                    el.addEventListener('touchstart', handleTouchStart, { passive: false });
                                    el.addEventListener('touchmove', handleTouchMove, { passive: false });
                                    el.addEventListener('touchend', handleTouchEnd, { passive: false });
                                    return () => {
                                      el.removeEventListener('wheel', handleWheel);
                                      el.removeEventListener('touchstart', handleTouchStart);
                                      el.removeEventListener('touchmove', handleTouchMove);
                                      el.removeEventListener('touchend', handleTouchEnd);
                                    };
                                  }, []);

                                  return (
                                    <div className="flex flex-col items-center">
                                      <div className="mb-3 flex gap-2">
                                        <button
                                          onClick={() => setZoom(z => Math.max(minZoom, z - step))}
                                          className="px-3 py-1 rounded bg-card border border-primary/30 text-primary font-bold shadow hover:bg-accent/20 transition disabled:opacity-50"
                                          disabled={zoom <= minZoom}
                                          aria-label="Zoom out"
                                        >
                                          -
                                        </button>
                                        <span className="px-2 text-sm text-primary font-semibold">{Math.round(zoom * 100)}%</span>
                                        <button
                                          onClick={() => setZoom(z => Math.min(maxZoom, z + step))}
                                          className="px-3 py-1 rounded bg-card border border-primary/30 text-primary font-bold shadow hover:bg-accent/20 transition disabled:opacity-50"
                                          disabled={zoom >= maxZoom}
                                          aria-label="Zoom in"
                                        >
                                          +
                                        </button>
                                      </div>
                                      <div
                                        ref={containerRef}
                                        className="border-4 border-accent rounded-xl shadow-2xl bg-background flex items-center justify-center"
                                        style={{
                                          maxWidth: '90vw',
                                          maxHeight: '75vh',
                                          overflow: 'auto',
                                          background: 'rgba(255,255,255,0.03)',
                                        }}
                                      >
                                        <Image
                                          src={image.src}
                                          alt={`${work.title} - Image ${i + 1}`}
                                          width={1200}
                                          height={1200}
                                          style={{
                                            transform: `scale(${zoom})`,
                                            transition: 'transform 0.2s',
                                            maxWidth: '100%',
                                            maxHeight: '70vh',
                                            objectFit: 'contain',
                                          }}
                                          className="rounded-lg"
                                        />
                                      </div>
                                    </div>
                                  );
                                };
                                return <ZoomableImage />;
                              })()}
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
