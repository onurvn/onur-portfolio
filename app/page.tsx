'use client';

import Link from "next/link";
import AnimatedText from "./components/AnimatedText";
import ParticleBackground from "./components/ParticleBackground";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [socialHovered, setSocialHovered] = useState<string | null>(null);
  const [techHovered, setTechHovered] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Organize technologies into categories
  const frontendTech = [
    "JavaScript", "TypeScript", "HTML", "CSS", 
    "Sass", "Tailwind CSS", "React.js", 
    "Next.js", "React Native", "Remix", "Astro", 
    "Shadcn", "Expo"
  ];

  const backendTech = [
    "Node.js", "Express.js", "Go Lang", "JWT",
    "MongoDB", "Supabase", "Prisma", "Firebase", 
    "MySQL", "PostgreSQL"
  ];

  const toolsTech = [
    "Git", "Vercel", "Figma", "Postman", 
    "Visual Studio Code", "RestAPI", "Swagger"
  ];

  // Social media links with icons
  const socialLinks = [
    {
      id: "phone",
      title: "Phone",
      value: "+90 555 123 4567",
      icon: "📱",
      href: "tel:+905551234567"
    },
    {
      id: "email",
      title: "Email",
      value: "onur@example.com",
      icon: "✉️",
      href: "mailto:onur@example.com"
    },
    {
      id: "github",
      title: "GitHub",
      value: "github.com/onurozcan",
      icon: "💻",
      href: "https://github.com/onurozcan"
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/yourusername",
      icon: "🔗",
      href: "https://www.linkedin.com/in/yourusername"
    }
  ];

  return (
    <div className="py-12 px-4 relative min-h-screen flex flex-col items-center">
      <ParticleBackground 
        count={60} 
        color="#FE5D26"
      />
      
      <div className={`transition-all duration-500 w-full max-w-6xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Hero Section */}
        <div className="mb-20">
          <div 
            className="transition-all duration-700"
            style={{ 
              transitionDelay: '300ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <p className="text-lg text-[#FE5D26] mb-3">Hello, I&apos;m</p>
            
            <AnimatedText 
              text="Onur Avan" 
              el="h1" 
              className="text-5xl md:text-7xl font-bold mb-4"
              animation="fade"
            />
            
            <div className="h-1.5 w-32 bg-[#FE5D26] rounded mb-6"></div>
            
            <AnimatedText 
              text="// Front-End Developer" 
              el="h2" 
              className="text-2xl md:text-3xl mb-8"
              animation="typewriter"
            />
            
            <p className="text-lg md:text-xl max-w-2xl opacity-80 mb-8">
             I create responsive and user-friendly web applications using modern technologies, with a focus on the React, Next.js, and Node.js ecosystems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/projects" 
                className="px-6 py-3 bg-[#FE5D26] text-white rounded-lg transition-all duration-300 hover:bg-[#e54a14] transform hover:scale-105 font-medium"
              >
                View My Projects
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-transparent border border-[#FE5D26] text-[#FE5D26] rounded-lg transition-all duration-300 hover:bg-[#FE5D2615] transform hover:scale-105 font-medium"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        
        {/* Social Links Section */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20"
          style={{ 
            transitionDelay: '600ms',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          {socialLinks.map((link, index) => (
            <Link 
              key={link.id}
              href={link.href}
              target={link.id !== 'phone' && link.id !== 'email' ? '_blank' : undefined}
              rel={link.id !== 'phone' && link.id !== 'email' ? 'noopener noreferrer' : undefined}
              className={`p-4 rounded-lg transition-all duration-300 flex items-center gap-4 ${
                socialHovered === link.id 
                  ? 'bg-gradient-to-r from-[#FE5D2615] to-[#1a1a1a] border border-[#FE5D26] shadow-lg' 
                  : 'bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-[#333]'
              }`}
              onMouseEnter={() => setSocialHovered(link.id)}
              onMouseLeave={() => setSocialHovered(null)}
              style={{ 
                transitionDelay: `${600 + index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <span className="text-3xl">{link.icon}</span>
              <div>
                <h3 className="text-[#FE5D26] font-medium">{link.title}</h3>
                <p className="text-sm opacity-80">{link.value}</p>
              </div>
              <div className={`ml-auto transition-all duration-300 opacity-80 ${
                socialHovered === link.id ? 'translate-x-0' : 'translate-x-2 opacity-0'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Tech Stack Section */}
        <div 
          className="bg-gradient-to-br from-[#111] to-[#1a1a1a] rounded-xl overflow-hidden border border-[#333] shadow-xl p-8 mb-12"
          style={{ 
            transitionDelay: '900ms',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h2 className="text-2xl font-bold mb-8 text-[#FE5D26]">{'// Tech Stack'}</h2>
          
          <div className="space-y-10">
            {/* Frontend */}
            <div>
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full"></span>
                <span>Frontend</span>
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {frontendTech.map((tech, index) => (
                  <div 
                    key={tech}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 cursor-default border ${
                      techHovered === tech 
                        ? 'border-[#FE5D26] bg-[#FE5D2615] scale-105 shadow-md' 
                        : 'border-[#333] bg-[#1d1d1d] hover:border-[#444]'
                    }`}
                    onMouseEnter={() => setTechHovered(tech)}
                    onMouseLeave={() => setTechHovered(null)}
                    style={{ 
                      transitionDelay: `${index * 50 + 1000}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'none' : 'translateY(10px)'
                    }}
                  >
                    <span className="text-orange-400">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Backend */}
            <div>
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                <span>Backend</span>
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {backendTech.map((tech, index) => (
                  <div 
                    key={tech}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 cursor-default border ${
                      techHovered === tech 
                        ? 'border-[#FE5D26] bg-[#FE5D2615] scale-105 shadow-md' 
                        : 'border-[#333] bg-[#1d1d1d] hover:border-[#444]'
                    }`}
                    onMouseEnter={() => setTechHovered(tech)}
                    onMouseLeave={() => setTechHovered(null)}
                    style={{ 
                      transitionDelay: `${index * 50 + 1500}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'none' : 'translateY(10px)'
                    }}
                  >
                    <span className="text-green-400">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools */}
            <div>
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Tools</span>
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {toolsTech.map((tech, index) => (
                  <div 
                    key={tech}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 cursor-default border ${
                      techHovered === tech 
                        ? 'border-[#FE5D26] bg-[#FE5D2615] scale-105 shadow-md' 
                        : 'border-[#333] bg-[#1d1d1d] hover:border-[#444]'
                    }`}
                    onMouseEnter={() => setTechHovered(tech)}
                    onMouseLeave={() => setTechHovered(null)}
                    style={{ 
                      transitionDelay: `${index * 50 + 2000}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'none' : 'translateY(10px)'
                    }}
                  >
                    <span className="text-blue-400">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
