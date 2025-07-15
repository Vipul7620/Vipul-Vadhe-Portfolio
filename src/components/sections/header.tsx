'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About Me', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'My Work', href: '#my-work' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-sm shadow-lg" : "bg-transparent")}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="flex items-center gap-2 text-xl font-bold uppercase font-headline group">
              <Sparkle className="w-5 h-5 text-accent transition-all duration-300 -rotate-45 group-hover:rotate-0 group-hover:scale-125" />
              <span>
                <span className="font-script text-accent text-3xl normal-case">Vipul</span>
                <span className="text-primary">Vadhe</span>
              </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium uppercase transition-colors relative",
                  "text-primary/80 hover:text-primary",
                  activeSection === item.href && "text-primary"
                )}
              >
                {item.name}
                {activeSection === item.href && 
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent"></span>
                }
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-2">
            <div className="w-px h-6 bg-primary/30" />
            <Sparkle className="w-5 h-5 text-accent" />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l-primary/20 w-[250px]">
                <div className="flex flex-col space-y-6 pt-16">
                   <Link href="#home" className="text-2xl font-bold uppercase font-headline self-center">
                    Vipul Vadhe
                  </Link>
                  {navItems.map((item) => (
                    <SheetClose key={item.name} asChild>
                      <Link
                        href={item.href}
                        className="text-lg text-center uppercase text-primary/80 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
