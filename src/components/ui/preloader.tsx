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
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500",
        isFadingOut ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-headline font-extrabold">
          <span className="font-script text-accent text-7xl md:text-9xl normal-case mr-4">Vipul</span>
          <span className="font-script text-primary text-7xl md:text-9xl normal-case">Vadhe</span>
        </h1>
        <Progress value={progress} className="w-64 md:w-96 h-2 mt-8 mx-auto bg-primary/20" />
      </div>
    </div>
  );
};

export default Preloader;
