import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Paintbrush } from 'lucide-react';

const technicalSkills = {
  "Programming Languages": ["Python", "Core Java", "PHP", "JavaScript"],
  "Frontend Development": ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
  "Backend Development": ["PHP", "Django (Python Framework)"],
  "Database Management": ["MySQL", "SQLite"],
  "Frameworks & Tools": ["Django", "Bootstrap", "Spring (learning basics)"],
  "Cloud & Data Tools": ["AWS Fundamentals", "Azure Fundamentals", "Power BI"],
  "Version Control": ["Git", "GitHub"],
  "Software & IDEs": ["Visual Studio Code", "PyCharm", "Eclipse", "Postman"],
};

const designSkills = {
  "Design Tools": ["Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "Canva"],
  "Video Editing Tools": ["Adobe Premiere Pro", "Filmora", "CapCut"],
  "Design Areas": ["Logo Design", "Poster Design", "Social Media Creatives", "YouTube Thumbnails", "Branding & Identity Design", "Event & Fest Banners"],
  "UI/UX Design Basics": ["Figma"],
  "Other Creative Skills": ["Motion Graphics (basic intros, transitions, typography animation)", "Reels Editing", "Storyboard and Visual Planning"],
};


const SkillsSection = () => {
  return (
    <section id="skills" className="container mx-auto px-4 animate-fade-in">
      <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12 uppercase">Skills</h2>
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Technical Skills */}
        <Card className="bg-card border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-4 text-2xl font-bold font-headline text-primary">
              <Code className="w-8 h-8 text-accent" />
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category}>
                <h4 className="font-bold text-lg mb-2 text-primary/90">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Design Skills */}
        <Card className="bg-card border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-4 text-2xl font-bold font-headline text-primary">
              <Paintbrush className="w-8 h-8 text-accent" />
              Graphic Design Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(designSkills).map(([category, skills]) => (
              <div key={category}>
                <h4 className="font-bold text-lg mb-2 text-primary/90">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default SkillsSection;
