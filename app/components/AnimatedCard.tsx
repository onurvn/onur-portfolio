'use client';

import { useEffect, useState, ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
}

const AnimatedCard = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);

  const getDirectionClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return 'translate-x-[-100px] opacity-0';
        case 'right':
          return 'translate-x-[100px] opacity-0';
        case 'up':
          return 'translate-y-[100px] opacity-0';
        case 'down':
          return 'translate-y-[-100px] opacity-0';
        default:
          return 'opacity-0';
      }
    }
    return 'translate-x-0 translate-y-0 opacity-100';
  };

  const getHoverClass = isHovered 
    ? 'scale-[1.02] shadow-lg' 
    : 'scale-100 shadow-none';

  return (
    <div
      className={`transition-all duration-500 ease-spring ${getDirectionClass()} ${getHoverClass} ${className}`}
      style={{ 
        transitionDelay: `${delay}s`,
        transitionProperty: 'transform, opacity, box-shadow',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default AnimatedCard; 