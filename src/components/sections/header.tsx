
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkle, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const navItems = [
  { name: 'About Me', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'My Work', href: '#work' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSparkleClicked, setIsSparkleClicked] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setIsSparkleClicked(true);
    setTimeout(() => {
        setIsSparkleClicked(false);
    }, 500); // Duration of the animation
  };


  return (
    <header className={cn("sticky top-0 z-50 transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-sm shadow-lg" : "bg-transparent")}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="flex items-center gap-2 text-xl font-bold group">
              <Sparkle className="w-5 h-5 text-accent transition-all duration-300 -rotate-45 group-hover:rotate-0 group-hover:scale-125" />
              <span className="font-headline">
                <span className="font-script text-accent text-3xl normal-case mr-2">Vipul</span>
                <span className="font-script text-primary text-3xl normal-case">Vadhe</span>
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
                  <span className="absolute bottom-1 left-0 w-full h-0.5 bg-accent origin-left animate-scale-in"></span>
                }
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-2">
            <div className="w-px h-6 bg-primary/30" />
             <button onClick={handleThemeToggle} className="focus:outline-none">
              {mounted && (
                theme === 'dark' ? (
                  <Sun className={cn("w-5 h-5 text-accent transition-transform", isSparkleClicked && "animate-pop-rotate")} />
                ) : (
                  <Moon className={cn("w-5 h-5 text-accent transition-transform", isSparkleClicked && "animate-pop-rotate")} />
                )
              )}
            </button>
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
                   <Link href="#home" className="text-2xl font-bold self-center">
                     <span className="font-script text-accent text-3xl normal-case mr-2">Vipul</span>
                     <span className="font-script text-primary text-3xl normal-case">Vadhe</span>
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
                  <div className="flex justify-center">
                    <button onClick={handleThemeToggle} className="focus:outline-none p-2">
                      {mounted && (
                        theme === 'dark' ? (
                          <Sun className={cn("w-6 h-6 text-accent transition-transform", isSparkleClicked && "animate-pop-rotate")} />
                        ) : (
                          <Moon className={cn("w-6 h-6 text-accent transition-transform", isSparkleClicked && "animate-pop-rotate")} />
                        )
                      )}
                    </button>
                  </div>
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
