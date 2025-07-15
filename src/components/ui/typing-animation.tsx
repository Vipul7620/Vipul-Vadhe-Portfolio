'use client';

import { useState, useEffect } from 'react';

const titles = ['Graphic Designer', 'Developer', 'Innovator'];

const TypingAnimation = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');

  // Typing effect
  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000); // Pause before deleting
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Update text
  useEffect(() => {
    setText(titles[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <span className="relative">
      {text}
      <span className="animate-ping absolute right-[-4px] top-0 bottom-0 w-1 bg-accent"></span>
    </span>
  );
};

export default TypingAnimation;
