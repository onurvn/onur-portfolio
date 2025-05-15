'use client';

import { useEffect, useState, ElementType } from 'react';

interface AnimatedTextProps {
  text: string | string[];
  el?: ElementType;
  className?: string;
  once?: boolean;
  animation?: 'typewriter' | 'fade' | 'bounce';
}

const AnimatedText = ({
  text,
  el: Wrapper = 'div',
  className,
  animation = 'fade',
}: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const letters = Array.isArray(text) ? text : [text];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const Component = Wrapper as ElementType;
  
  const getAnimationClass = () => {
    switch (animation) {
      case 'typewriter':
        return isVisible ? 'animate-typewriter' : 'opacity-0';
      case 'bounce':
        return isVisible ? 'animate-bounce-in' : 'opacity-0 scale-90';
      case 'fade':
      default:
        return isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-4';
    }
  };

  return (
    <Component className={className}>
      <span className={`transition-all duration-700 inline-block ${getAnimationClass()}`}>
        {animation === 'typewriter' ? (
          <span className="inline-block whitespace-nowrap overflow-hidden w-full">
            {letters.join(' ')}
          </span>
        ) : (
          letters.map((item, i) => (
            <span 
              key={i}
              className="inline-block transition-all"
              style={{ 
                transitionDelay: `${i * 50}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateY(10px)'
              }}
            >
              {item}
              {i < letters.length - 1 && ' '}
            </span>
          ))
        )}
      </span>
    </Component>
  );
};

export default AnimatedText; 