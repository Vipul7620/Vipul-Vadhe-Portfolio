
'use client';

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader = ({ onLoadingComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Random duration between 3000ms and 4000ms
    const randomDuration = Math.random() * 1000 + 3000;
    const intervalTime = randomDuration / 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(onLoadingComplete, 500); // Wait for fade-out to complete
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime); 

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm transition-opacity duration-500",
        isFadingOut ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="text-center">
        <p className="font-script text-2xl text-primary/80 mb-2">Welcome To</p>
        <h1 className="text-6xl md:text-8xl font-headline font-extrabold">
          <span className="font-script text-accent text-7xl md:text-9xl normal-case mr-4">Vipul</span>
          <span className="font-script text-primary text-7xl md:text-9xl normal-case">Vadhe</span>
        </h1>
        <p className="font-script text-2xl text-primary/80 mt-2 tracking-widest">Portfolio</p>

        <div className="relative w-64 md:w-96 h-4 mt-8 mx-auto">
            <Progress value={progress} className="w-full h-full bg-primary/20" />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary-foreground">
                {Math.round(progress)}%
            </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
