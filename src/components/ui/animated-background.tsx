'use client';
import { useMemo } from 'react';

const Starfield = ({
  starCount = 500,
  starColor,
  className
}: {
  starCount?: number;
  starColor: string;
  className: string;
}) => {
  const stars = useMemo(() => {
    let styles = {};
    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * 2000;
      const y = Math.random() * 2000;
      const size = Math.random() + 1;

      // Using a CSS variable for the color
      styles = {
        ...styles,
        [`${x}px ${y}px var(${starColor})`]: '',
      };
    }
    const styleString = Object.keys(styles).join(', ');
    return { boxShadow: styleString };
  }, [starCount, starColor]);

  return <div className={className} style={stars}></div>;
};

const AnimatedBackground = () => {
  return (
    <div className="gradient-bg">
      <Starfield starColor="--primary" className="stars" starCount={800}/>
      <Starfield starColor="--accent" className="stars2" starCount={400}/>
      <Starfield starColor="--secondary" className="stars3" starCount={200}/>
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
    </div>
  );
};

export default AnimatedBackground;
