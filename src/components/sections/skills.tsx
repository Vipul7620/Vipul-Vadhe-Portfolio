import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Paintbrush } from 'lucide-react';
import { SkillBadge } from '@/components/ui/skill-badge';

const technicalSkills = {
  "Programming Languages": ["Python", "Java", "PHP", "JavaScript"],
  "Frontend Development": ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap", "jQuery"],
  "Backend Development": ["Node.js", "Django", "Spring"],
  "Database Management": ["MySQL", "SQLite", "MongoDB"],
  "Cloud & Data Tools": ["AWS", "Azure", "Power BI", "Firebase"],
  "Version Control": ["Git", "GitHub"],
  "Software & IDEs": ["Visual Studio Code", "PyCharm", "Eclipse", "Postman", "Android Studio"],
};

const designSkills = {
  "Design Tools": ["Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "Canva", "Figma"],
  "Video Editing Tools": ["Adobe Premiere Pro", "Filmora", "CapCut"],
  "Design Areas": ["Logo Design", "Poster Design", "Social Media Creatives", "UI/UX Design", "Branding"],
  "Other Creative Skills": ["Motion Graphics", "Reels Editing", "Storyboarding"],
};


const SkillsSection = () => {
  return (
    <section id="skills" className="container mx-auto px-4 animate-fade-in">
      <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12 uppercase">Skills</h2>
      <div className="grid md:grid-cols-2 gap-12">
        
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
                <div className="flex flex-wrap gap-3">
                  {skills.map(skill => <SkillBadge key={skill} skillName={skill} />)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

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
                <div className="flex flex-wrap gap-3">
                  {skills.map(skill => <SkillBadge key={skill} skillName={skill} />)}
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
