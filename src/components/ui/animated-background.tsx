'use client';
import { useState, useEffect, useMemo } from 'react';

const Starfield = ({
  starCount = 500,
  starColor,
  className
}: {
  starCount?: number;
  starColor: string;
  className: string;
}) => {
  const [stars, setStars] = useState<React.CSSProperties>({});

  useEffect(() => {
    let styles = {};
    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * 2000;
      const y = Math.random() * 2000;
      
      styles = {
        ...styles,
        [`${x}px ${y}px var(${starColor})`]: '',
      };
    }
    const styleString = Object.keys(styles).join(', ');
    setStars({ boxShadow: styleString });
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
