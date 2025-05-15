'use client';

import { useRef, useState, ReactNode, useEffect } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  perspective?: number;
  scale?: number;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  glareOpacity?: number;
}

const TiltCard = ({
  children,
  className = '',
  glareColor = 'rgba(255, 255, 255, 0.4)',
  perspective = 1000,
  scale = 1.05,
  tiltMaxAngleX = 20,
  tiltMaxAngleY = 20,
  glareOpacity = 0.2,
}: TiltCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [transform, setTransform] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (normalized -1 to 1)
    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);

    setMousePosition({ x: normalizedX, y: normalizedY });
  };

  useEffect(() => {
    if (isHovered) {
      const rotateX = mousePosition.y * -tiltMaxAngleY;
      const rotateY = mousePosition.x * tiltMaxAngleX;
      const scaleValue = isHovered ? scale : 1;
      
      setTransform(`
        perspective(${perspective}px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale(${scaleValue})
      `);
    } else {
      setTransform(`
        perspective(${perspective}px) 
        rotateX(0deg) 
        rotateY(0deg) 
        scale(1)
      `);
    }
  }, [isHovered, mousePosition, tiltMaxAngleX, tiltMaxAngleY, perspective, scale]);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-transform duration-100 ${className}`}
      style={{ 
        transform,
        transformStyle: 'preserve-3d'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      {/* The card content */}
      <div className="relative z-10">{children}</div>

      {/* Glare effect */}
      {isHovered && (
        <div
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x * 30}% ${
              50 + mousePosition.y * 30
            }%, ${glareColor}, transparent)`,
            opacity: glareOpacity,
          }}
        />
      )}
    </div>
  );
};

export default TiltCard; 