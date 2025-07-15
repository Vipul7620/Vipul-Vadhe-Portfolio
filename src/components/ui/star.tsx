
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface StarProps extends React.SVGProps<SVGSVGElement> {
  type?: 'four' | 'six' | 'eight' | 'sparkle';
}

const Star = React.forwardRef<SVGSVGElement, StarProps>(
  ({ type = 'sparkle', className, ...props }, ref) => {
    switch (type) {
      case 'four':
        return (
          <svg
            ref={ref}
            className={cn(className)}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
            {...props}
          >
            <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" />
          </svg>
        );
      case 'six':
        return (
          <svg
            ref={ref}
            className={cn(className)}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
            {...props}
          >
            <path d="M12 2 L15.5 12 L12 22 L8.5 12 Z" />
            <path d="M2 12 L12 8.5 L22 12 L12 15.5 Z" />
          </svg>
        );
      case 'eight':
        return (
            <svg
              ref={ref}
              className={cn(className)}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="currentColor"
              {...props}
            >
              <path d="M12,0 L14,10 L24,12 L14,14 L12,24 L10,14 L0,12 L10,10 Z" />
              <path d="M12,4 L13.5,10.5 L20,12 L13.5,13.5 L12,20 L10.5,13.5 L4,12 L10.5,10.5 Z" transform="rotate(45 12 12)" />
            </svg>
          );
      case 'sparkle':
      default:
        return <Sparkles ref={ref} className={cn(className)} {...props} />;
    }
  }
);
Star.displayName = 'Star';

export { Star };
