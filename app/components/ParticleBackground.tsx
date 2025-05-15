'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

interface ParticleBackgroundProps {
  count?: number;
  color?: string;
  particleSize?: number;
  minSpeed?: number;
  maxSpeed?: number;
  className?: string;
}

const ParticleBackground = ({
  count = 50,
  color = '#4d61ff',
  particleSize = 2,
  minSpeed = 0.1,
  maxSpeed = 0.3,
  className = '',
}: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const [opacity, setOpacity] = useState(0);

  // Handle fade in effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle resize
  useEffect(() => {
    const updateDimensions = () => {
      if (!canvasRef.current || !canvasRef.current.parentElement) return;
      const { width, height } = canvasRef.current.parentElement.getBoundingClientRect();
      setDimensions({ width, height });
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Initialize particles
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const particles: Particle[] = [];
    const opacities = [0.1, 0.2, 0.3, 0.5];

    for (let i = 0; i < count; i++) {
      const randomOpacity = opacities[Math.floor(Math.random() * opacities.length)];
      const sizeVariation = Math.random() * particleSize + 1;
      
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: sizeVariation,
        speedX: (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1),
        speedY: (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1),
        color: color.replace(')', `, ${randomOpacity})`).replace('rgb', 'rgba'),
      });
    }

    particlesRef.current = particles;
  }, [dimensions, count, particleSize, minSpeed, maxSpeed, color]);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || !particlesRef.current.length) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      particlesRef.current.forEach((particle) => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off walls
        if (particle.x > dimensions.width || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y > dimensions.height || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  return (
    <div 
      className={`absolute inset-0 -z-10 transition-opacity duration-1500 ${className}`}
      style={{ opacity }}
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default ParticleBackground; 