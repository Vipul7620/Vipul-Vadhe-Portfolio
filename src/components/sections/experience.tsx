import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { ARYAN_EXPERIENCE_LETTER_URL } from '@/constants/experience';

const experiences = [
  {
    title: 'Graphic Designer',
    company: 'Aryan Advertising · Remote (Work from Home)',
    duration: 'Nov 2024 – Aug 2025',
    points: [
      'Designed creative assets using Adobe Photoshop, Illustrator, and Canva.',
      'Created engaging branding, advertising, and social media campaigns.',
      'Explored video editing using Adobe Premiere Pro to expand multimedia expertise.',
      'Successfully completed creative assignments through digital platforms.',
      'Demonstrated creativity, adaptability, and professionalism while meeting deadlines.',
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
            <Card key={index} className="">
              <CardHeader>
                <div className="flex items-start gap-4">
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
                {/* Button to view/download Aryan Advertising experience letter */}
                {exp.title === 'Graphic Designer' && exp.company.includes('Aryan Advertising') && (
                  <a
                    href={ARYAN_EXPERIENCE_LETTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4"
                  >
                    <button className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      View Experience Letter
                    </button>
                  </a>
                )}
                {/* Add Live Demo button for Koushiki Innovision Ludo game */}
                {exp.title === 'Design & Development Intern' && exp.company === 'Koushiki Innovision' && exp.duration.includes('Jan 2025') && (
                  <a
                    href="https://ludo-learn-play.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4"
                  >
                    <button className="bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-500 hover:from-blue-800 hover:to-indigo-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      Live Demo
                    </button>
                  </a>
                )}
                {/* Button for Freelance Graphic Designer & Video Editor to scroll to My Work - Design Works */}
                {exp.title === 'Freelance Graphic Designer & Video Editor' && exp.company === 'Remote' && exp.duration.includes('2024') && (
                  <div className="mt-4">
                    <a
                      href="#work"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      View My Work
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
