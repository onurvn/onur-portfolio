'use client';

import { useState } from 'react';
import Image from 'next/image';

// Define the mapping between technology names and their icons
const techIcons: Record<string, { icon: string, color: string }> = {
  // Frontend
  'JavaScript': { icon: 'javascript', color: '#F7DF1E' },
  'TypeScript': { icon: 'typescript', color: '#3178C6' },
  'HTML': { icon: 'html', color: '#E34F26' },
  'CSS': { icon: 'css', color: '#1572B6' },
  'Sass': { icon: 'sass', color: '#CC6699' },
  'Less': { icon: 'less', color: '#1D365D' },
  'Tailwind CSS': { icon: 'tailwindcss', color: '#06B6D4' },
  'React.js': { icon: 'react', color: '#61DAFB' },
  'Next.js': { icon: 'nextjs', color: '#000000' },
  'React Native': { icon: 'react', color: '#61DAFB' },
  'Remix': { icon: 'remix', color: '#000000' },
  'Astro': { icon: 'astro', color: '#FF5D01' },
  'Shadcn': { icon: 'shadcn', color: '#000000' },
  'Expo': { icon: 'expo', color: '#000020' },

  // Backend
  'Node.js': { icon: 'nodejs', color: '#339933' },
  'Express.js': { icon: 'express', color: '#000000' },
  'Go Lang': { icon: 'go', color: '#00ADD8' },
  'JWT': { icon: 'jwt', color: '#000000' },
  'MongoDB': { icon: 'mongodb', color: '#47A248' },
  'Supabase': { icon: 'supabase', color: '#3ECF8E' },
  'Prisma': { icon: 'prisma', color: '#2D3748' },
  'Firebase': { icon: 'firebase', color: '#FFCA28' },
  'MySQL': { icon: 'mysql', color: '#4479A1' },
  'PostgreSQL': { icon: 'postgresql', color: '#4169E1' },

  // Tools
  'Git': { icon: 'git', color: '#F05032' },
  'Vercel': { icon: 'vercel', color: '#000000' },
  'Figma': { icon: 'figma', color: '#F24E1E' },
  'Postman': { icon: 'postman', color: '#FF6C37' },
  'Visual Studio Code': { icon: 'vscode', color: '#007ACC' },
  'RestAPI': { icon: 'api', color: '#009688' },
  'Axios': { icon: 'axios', color: '#5A29E4' },
  'Swagger': { icon: 'swagger', color: '#85EA2D' },
};

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, size = 40, className = '' }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  
  // Find the icon data or use a default
  const iconData = techIcons[name] || { icon: 'code', color: '#666666' };
  
  // Attempt to load the icon dynamically
  const iconSrc = `/icons/tech/${iconData.icon}.svg`;
  
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      <div 
        className="flex items-center justify-center rounded-lg p-2 transition-all duration-300 hover:scale-110"
        style={{ 
          backgroundColor: `${iconData.color}20`, 
          width: `${size}px`, 
          height: `${size}px`,
          boxShadow: tooltipVisible ? `0 0 15px 0 ${iconData.color}50` : 'none'
        }}
      >
        <div className="relative w-full h-full">
          <Image 
            src={iconSrc}
            alt={name} 
            fill
            className="object-contain p-1"
            onError={(e) => {
              // Fallback to default icon if the image fails to load
              (e.target as HTMLImageElement).src = '/icons/tech/code.svg';
            }}
          />
        </div>
      </div>
      
      {/* Tooltip */}
      {tooltipVisible && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#111] text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10 shadow-lg border border-[#333]">
          {name}
          <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-[#111] border-r border-b border-[#333]"></div>
        </div>
      )}
    </div>
  );
};

export default TechIcon; 