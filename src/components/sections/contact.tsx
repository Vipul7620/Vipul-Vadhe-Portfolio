'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Linkedin, Briefcase, Github } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

const ContactSection = () => {
    const { toast } = useToast()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        })
        const form = e.target as HTMLFormElement;
        form.reset();
    };


  return (
    <section id="contact" className="container mx-auto px-4 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase">Contact Me</h2>
        <p className="font-script text-accent text-3xl mt-2">Get In Touch With Me</p>
      </div>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <p className="text-lg text-center md:text-left text-foreground/90">
            Ready to collaborate? Let’s discuss your next project. Drop me a message below!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" placeholder="Name" required className="bg-input/80 border-primary/20 focus:ring-accent" />
            <Input type="email" placeholder="Email" required className="bg-input/80 border-primary/20 focus:ring-accent"/>
            <Textarea placeholder="Message" required className="bg-input/80 border-primary/20 min-h-[150px] focus:ring-accent"/>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 rounded-full">
              Send Message
            </Button>
          </form>
        </div>
        <div className="space-y-6">
          <Card className="bg-card/80 border-primary/20">
            <CardContent className="p-6 space-y-4">
              <a href="#" className="flex items-center gap-4 group">
                <MapPin className="w-6 h-6 text-accent" />
                <span className="text-foreground/90 group-hover:text-primary">Pune, Maharashtra</span>
              </a>
              <div className="border-t border-primary/20"></div>
              <a href="tel:+917620403834" className="flex items-center gap-4 group">
                <Phone className="w-6 h-6 text-accent" />
                <span className="text-foreground/90 group-hover:text-primary">+91-7620403834</span>
              </a>
               <div className="border-t border-primary/20"></div>
              <a href="mailto:vipulmilindvadhe@gmail.com" className="flex items-center gap-4 group">
                <Mail className="w-6 h-6 text-accent" />
                <span className="text-foreground/90 group-hover:text-primary">vipulmilindvadhe@gmail.com</span>
              </a>
            </CardContent>
          </Card>
           <Card className="bg-card/80 border-primary/20">
            <CardContent className="p-6 flex justify-around">
               <a href="https://linkedin.com/in/vipul-vadhe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <Linkedin className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
              </a>
               <a href="https://github.com/Vipul7620" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <Github className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
              </a>
               <a href="https://portfolio-hazel-one-85.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <Briefcase className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
