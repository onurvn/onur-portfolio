"use client";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import ParticleBackground from "../components/ParticleBackground";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  technologies: string[];
  viewLink: string;
  githubLink: string;
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [moreProjectsHovered, setMoreProjectsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "JustEat Clone",
      subtitle: "Food Delivery Platform",
      image: "/images/justeat-clone.png",
      description: "A comprehensive clone of the Just Eat site, replicating the home page and restaurant listing functionality with responsive design and smooth animations.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      viewLink: "https://justeat-clone-demo.vercel.app",
      githubLink: "https://github.com/onurozcan/justeat-clone"
    },
    {
      id: 2,
      title: "RTFKT Website",
      subtitle: "Digital Fashion Platform",
      image: "/images/rtfkt-clone.png",
      description: "A pixel-perfect replication of the rtfkt.com site, featuring advanced animations and responsive layouts. Led team development as Team Leader.",
      technologies: ["React", "Next.js", "Sass", "JavaScript", "Framer Motion"],
      viewLink: "https://rtfkt-clone-demo.vercel.app",
      githubLink: "https://github.com/onurozcan/rtfkt-clone"
    },
    {
      id: 3,
      title: "Alpha Spy",
      subtitle: "Discord Integration Bot",
      image: "/images/alpha-spy.png",
      description: "A powerful Discord bot that synchronizes messages between servers. Features custom commands, message filtering, and administrative controls.",
      technologies: ["Node.js", "Discord.js", "JavaScript", "MongoDB", "Express"],
      viewLink: "https://alpha-spy-demo.vercel.app",
      githubLink: "https://github.com/onurozcan/alpha-spy"
    }
  ];

  return (
    <div className="py-12 px-4 relative min-h-screen flex flex-col items-center">
      <ParticleBackground count={40} color="#FE5D26" />
      
      <div className={`transition-all duration-500 w-full max-w-6xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <AnimatedText 
          text="// Featured Projects" 
          el="h1" 
          className="text-4xl font-bold mb-8 text-[#FE5D26]"
          animation="fade"
        />
        
        <p className="text-lg mb-12 max-w-2xl opacity-80">
          A selection of my recent work. Each project represents different challenges and technologies I&apos;ve worked with.
        </p>

        <div className="space-y-24 mb-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} transition-all duration-700`}
              style={{ 
                transitionDelay: `${200 + index * 200}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
              }}
            >
              {/* Project Card */}
              <div 
                className={`bg-gradient-to-br from-[#111] to-[#1a1a1a] rounded-xl overflow-hidden border border-[#333] shadow-xl transition-all duration-300 ${
                  hoveredCard === project.id ? 'border-[#FE5D26] shadow-[#FE5D2630]' : ''
                }`}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Project Image Section */}
                  <div className="relative h-72 md:h-auto overflow-hidden group">
                    <div className="absolute inset-0 bg-[#333] flex items-center justify-center">
                      {/* In a real project you would use next/image instead of this placeholder */}
                      <div className="text-white text-center transition-all transform group-hover:scale-110 duration-300">
                        <span className="text-[#FE5D26] text-5xl font-bold">{`{`}</span>
                        <span className="text-3xl font-bold px-3">{project.title}</span>
                        <span className="text-[#FE5D26] text-5xl font-bold">{`}`}</span>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <Link 
                        href={project.viewLink} 
                        className="bg-[#FE5D26] text-white py-2 px-4 rounded-md hover:bg-[#e54a14] transition-all transform hover:scale-105 mb-2 text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Link>
                      <Link 
                        href={project.githubLink} 
                        className="bg-[#222] text-white py-2 px-4 rounded-md hover:bg-[#333] transition-all border border-[#444] text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </Link>
                    </div>
                  </div>
                  
                  {/* Project Content Section */}
                  <div className="p-8 flex flex-col">
                    <div className="mb-3">
                      <h2 className="text-2xl font-bold text-[#FE5D26]">{project.title}</h2>
                      <p className="text-gray-400">{project.subtitle}</p>
                    </div>
                    
                    <p className="text-gray-300 mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-sm text-[#FE5D26] mb-2 font-mono">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 bg-[#222] text-xs font-medium rounded-full border border-[#444] text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <Link 
                        href={project.viewLink} 
                        className={`py-2 px-4 rounded-md transition-colors flex-1 text-center ${
                          hoveredCard === project.id
                            ? 'bg-[#FE5D26] text-white'
                            : 'bg-[#1a1a1a] text-[#FE5D26] border border-[#FE5D26]'
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Link>
                      <Link 
                        href={project.githubLink} 
                        className="py-2 px-4 bg-[#1a1a1a] border border-[#333] rounded-md hover:bg-[#252525] text-center flex-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Progress Indicator */}
                <div className={`h-1 bg-[#FE5D26] transition-all duration-700 ${
                  hoveredCard === project.id ? 'w-full' : 'w-0'
                }`}></div>
              </div>
              
              {/* Project Number */}
              <div className="absolute -top-10 -left-4 opacity-20 select-none pointer-events-none z-0">
                <span className="text-[8rem] font-bold text-[#FE5D26]">{project.id}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-xl mx-auto text-center mb-12">
          <Link 
            href="https://github.com/onurozcan" 
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block relative group overflow-hidden font-mono text-lg border border-[#FE5D26] rounded-lg px-8 py-3 transition-all duration-300 ${
              moreProjectsHovered ? 'bg-[#FE5D26] text-white' : 'bg-transparent text-[#FE5D26]'
            }`}
            onMouseEnter={() => setMoreProjectsHovered(true)}
            onMouseLeave={() => setMoreProjectsHovered(false)}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              See more projects on GitHub
            </span>
            <div 
              className={`absolute inset-0 bg-[#FE5D26] transition-transform duration-300 ${
                moreProjectsHovered ? 'translate-x-0' : 'translate-x-[-100%]'
              }`}
            ></div>
          </Link>
        </div>
      </div>
    </div>
  );
} 