'use client';

import { useRef, useEffect, useState, useCallback, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  baseOpacity?: number;
  baseRotation?: number;
  rotationEnd?: string;
  blurStrength?: number;
  enableBlur?: boolean;
  wordAnimationEnd?: string;
};

const ScrollReveal = ({
  children,
  className,
  baseOpacity = 0.5,
  baseRotation = 0,
  rotationEnd = 'center 60%',
  blurStrength = 5,
  enableBlur = true,
  wordAnimationEnd = 'center 40%',
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    if (typeof children === 'string') {
      setWords(children.split(' '));
    }
  }, [children]);

  const getScrollProgress = useCallback((ref: React.RefObject<HTMLElement>, start: string, end: string) => {
    if (!ref.current) return 0;
    const { top, bottom, height } = ref.current.getBoundingClientRect();
    const viewHeight = window.innerHeight;

    const parseAnchor = (anchor: string) => {
        if (typeof anchor === 'number') return anchor;
        if (anchor.endsWith('%')) {
            return parseFloat(anchor) / 100;
        }
        return 0.5; // Default to center
    };

    const getPixelValue = (point: string, elementHeight: number, viewportHeight: number) => {
        const [p1, p2] = point.split(' ');
        if(p1 === 'top') return 0;
        if(p1 === 'bottom') return elementHeight;
        if(p1 === 'center') return elementHeight / 2;
        if(p2.endsWith('%')) return viewportHeight * (parseFloat(p2) / 100);
        return 0;
    };
    
    const [startPoint, startOffset] = start.split(" ");
    const [endPoint, endOffset] = end.split(" ");

    const startPx = top + getPixelValue(start, height, viewHeight);
    const endPx = top + getPixelValue(end, height, viewHeight);

    const progress = (viewHeight - startPx) / (endPx - startPx);

    return Math.max(0, Math.min(1, progress));
  }, []);

  const Word = ({ children, progress }: { children: string; progress: number }) => {
    const opacity = baseOpacity + (1 - baseOpacity) * progress;
    const rotation = baseRotation - baseRotation * progress;
    const filter = enableBlur ? `blur(${(1 - progress) * blurStrength}px)` : 'none';

    return (
      <span style={{
        opacity,
        transform: `rotateX(${rotation}deg)`,
        filter,
        transition: 'opacity 0.1s, transform 0.1s, filter 0.1s',
        display: 'inline-block'
      }}>
        {children}&nbsp;
      </span>
    );
  };

  const [progress, setProgress] = useState(0);
  const [wordProgress, setWordProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setProgress(getScrollProgress(containerRef, 'top bottom', rotationEnd));
      setWordProgress(getScrollProgress(containerRef, 'top bottom', wordAnimationEnd));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [getScrollProgress, rotationEnd, wordAnimationEnd]);


  if (typeof children !== 'string') {
    return (
        <span ref={containerRef} className={className} style={{
            opacity: baseOpacity + (1 - baseOpacity) * progress,
            transform: `rotateX(${baseRotation - baseRotation * progress}deg)`,
            filter: enableBlur ? `blur(${(1 - progress) * blurStrength}px)` : 'none',
            transition: 'opacity 0.2s, transform 0.2s, filter 0.2s',
            display: 'inline-block'
        }}>
            {children}
        </span>
    );
  }

  return (
    <span ref={containerRef} className={cn('whitespace-pre-wrap', className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        const wordProg = (wordProgress - start) / (end - start);
        return <Word key={i} progress={Math.max(0, Math.min(1, wordProg))}>{word}</Word>;
      })}
    </span>
  );
};

export default ScrollReveal;
