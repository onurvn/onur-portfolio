'use client';

import AnimatedText from '../components/AnimatedText';
import ParticleBackground from '../components/ParticleBackground';
import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('bio');
  const [contentVisible, setContentVisible] = useState(true);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const skillsTimer = setTimeout(() => {
      setSkillsVisible(true);
    }, 800);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(skillsTimer);
    };
  }, []);

  // Handle tab switching with animation
  const handleSectionChange = (section: string) => {
    if (section !== activeSection) {
      // First hide content, then change section, then show content again
      setContentVisible(false);
      setTimeout(() => {
        setActiveSection(section);
        setContentVisible(true);
      }, 300);
    }
  };

  // Define different skill categories for organization
  const frontendTech = [
    { name: "JavaScript", checked: true },
    { name: "TypeScript", checked: true },
    { name: "HTML", checked: true },
    { name: "CSS", checked: true },
    { name: "Sass", checked: true },
    { name: "Less", checked: true },
    { name: "Tailwind CSS", checked: true },
    { name: "React.js", checked: true },
    { name: "Next.js", checked: true },
    { name: "React Native", checked: true },
    { name: "Remix", checked: true },
    { name: "Astro", checked: true },
    { name: "Shadcn", checked: true },
    { name: "Expo", checked: true },
  ];

  const backendTech = [
    { name: "Node.js", checked: true },
    { name: "Express.js", checked: true },
    { name: "Go Lang", checked: true },
    { name: "JWT", checked: true },
    { name: "MongoDB", checked: true },
    { name: "Supabase", checked: true },
    { name: "Prisma", checked: true },
    { name: "Firebase", checked: true },
    { name: "MySQL", checked: true },
    { name: "PostgreSQL", checked: true },
  ];

  const toolsTech = [
    { name: "Git", checked: true },
    { name: "Vercel", checked: true },
    { name: "Figma", checked: true },
    { name: "Postman", checked: true },
    { name: "Visual Studio Code", checked: true },
    { name: "RestAPI", checked: true },
    { name: "Axios", checked: true },
    { name: "Swagger", checked: true },
  ];

  return (
    <div className="py-12 px-4 relative min-h-screen flex flex-col items-center">
      <ParticleBackground count={40} color="#FE5D26" />
      
      <div className={`transition-all duration-500 w-full max-w-6xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <AnimatedText 
          text="// About Me" 
          el="h1" 
          className="text-4xl font-bold mb-8 text-[#FE5D26]"
          animation="fade"
        />
        
        <p className="text-lg mb-12 max-w-2xl opacity-80">
          Front-End developer passionate about creating modern, responsive, and user-friendly web applications using the latest technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column - Navigation */}
          <div className="md:col-span-1">
            <div 
              className="bg-gradient-to-br from-[#111] to-[#1a1a1a] rounded-xl overflow-hidden border border-[#333] shadow-xl transition-all duration-500 sticky top-8"
              style={{ 
                transitionDelay: '300ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="p-6 space-y-8">
                <div>
                  <h3 className="text-xl mb-4 text-[#FE5D26] font-semibold">Navigation</h3>
                  <ul className="space-y-4">
                    <li 
                      className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                        activeSection === 'bio' 
                          ? 'bg-[#FE5D2620] text-white font-medium border-l-2 border-[#FE5D26] pl-4' 
                          : 'text-gray-400 hover:bg-[#ffffff10] hover:pl-3'
                      }`}
                      onClick={() => handleSectionChange('bio')}
                    >
                      <span className="text-xl opacity-80">👤</span>
                      <span>Biography</span>
                    </li>
                    <li 
                      className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                        activeSection === 'interests' 
                          ? 'bg-[#FE5D2620] text-white font-medium border-l-2 border-[#FE5D26] pl-4' 
                          : 'text-gray-400 hover:bg-[#ffffff10] hover:pl-3'
                      }`}
                      onClick={() => handleSectionChange('interests')}
                    >
                      <span className="text-xl opacity-80">🌟</span>
                      <span>Interests</span>
                    </li>
                    <li 
                      className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                        activeSection === 'education' 
                          ? 'bg-[#FE5D2620] text-white font-medium border-l-2 border-[#FE5D26] pl-4' 
                          : 'text-gray-400 hover:bg-[#ffffff10] hover:pl-3'
                      }`}
                      onClick={() => handleSectionChange('education')}
                    >
                      <span className="text-xl opacity-80">🎓</span>
                      <span>Education</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-[#333]">
                  <h3 className="text-xl mb-4 text-[#FE5D26] font-semibold">Contact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 p-2 text-gray-300 hover:text-white transition-colors duration-200">
                      <span className="text-xl opacity-80">📧</span> 
                      <a href="mailto:onur@example.com" className="hover:text-[#FE5D26]">onur@example.com</a>
                    </li>
                    <li className="flex items-center gap-3 p-2 text-gray-300 hover:text-white transition-colors duration-200">
                      <span className="text-xl opacity-80">📱</span>
                      <a href="tel:+905551234567" className="hover:text-[#FE5D26]">+90 555 123 4567</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-3">
            {/* Bio Content */}
            <div 
              className={`transition-all duration-500 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: '400ms',
                opacity: isVisible && contentVisible ? 1 : 0
              }}
            >
              <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] rounded-xl overflow-hidden border border-[#333] shadow-xl mb-12">
                {activeSection === 'bio' && (
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-[#FE5D26]">Biography</h2>
                    <div className="space-y-4 text-gray-300">
                      <p className="text-lg">
                        Hi, and welcome to my portfolio. I&apos;m a front-end developer with a growing interest in modern web technologies like React, Next.js, and TypeScript.
                      </p>
                      <p className="text-lg">
                        Over time, I&apos;ve been building responsive and user-friendly web applications, with an emphasis on clean code and practical design choices.
                      </p>
                      <p className="text-lg">
                        Along the way, I&apos;ve worked with backend tools such as Node.js and used databases like PostgreSQL and MongoDB in various projects.
                      </p>
                      <p className="text-lg">
                        Lately, I&apos;ve been exploring Go and learning more about microservices as I continue to develop my skills and work on building more scalable applications.
                      </p>
                    </div>
                  </div>
                )}

                {activeSection === 'interests' && (
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-[#FE5D26]">Interests</h2>
                    <div className="space-y-4 text-gray-300">
                      <p className="text-lg">
                        I have a deep passion for front-end development, particularly creating fluid animations and interactive user interfaces using React and modern CSS frameworks.
                      </p>
                      <p className="text-lg">
                        I&apos;m enthusiastic about mobile development with React Native and Expo, building cross-platform applications with native-like experiences.
                      </p>
                      <p className="text-lg">
                        Recently, I&apos;ve become fascinated with server-side rendering frameworks like Next.js and Astro, exploring their capabilities for building performant web applications.
                      </p>
                      <p className="text-lg">
                        In my free time, I contribute to open-source projects and stay updated with the latest developments in web technologies.
                      </p>
                    </div>
                  </div>
                )}

                {activeSection === 'education' && (
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-[#FE5D26]">Education</h2>
                    <div className="space-y-4 text-gray-300">
                      <p className="text-lg">
                        I&apos;ve earned certifications in areas like JavaScript, React, Node.js, and database management, reflecting my commitment to learning and growth.
                      </p>
                      <p className="text-lg">
                        To keep my skills up to date, I regularly take part in online courses and workshops—most recently focusing on TypeScript, Go, and cloud deployment practices.
                      </p>
                      <p className="text-lg">
                        I&apos;m a strong believer in continuous learning and enjoy attending tech conferences and local meetups to stay connected with the latest trends in the industry.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tech Stack Section */}
            <div 
              className="bg-gradient-to-br from-[#111] to-[#1a1a1a] rounded-xl overflow-hidden border border-[#333] shadow-xl p-8 mb-12"
              style={{ 
                transitionDelay: '600ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <h2 className="text-2xl font-bold mb-6 text-[#FE5D26]">Tech Stack</h2>
              
              <div className={`transition-all duration-700 ${skillsVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* Frontend Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl mb-4 flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full"></span>
                    <span>Frontend</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {frontendTech.map((tech, index) => (
                      <div 
                        key={tech.name}
                        className={`p-3 border border-[#333] rounded-lg transition-all duration-300 ${
                          hoveredSkill === tech.name ? 'bg-[#FE5D2620] border-[#FE5D26] scale-105' : 'hover:border-[#444] hover:bg-[#222]'
                        }`}
                        style={{ 
                          transitionDelay: `${index * 50}ms`,
                          opacity: skillsVisible ? 1 : 0,
                          transform: skillsVisible ? 'none' : 'translateY(10px)'
                        }}
                        onMouseEnter={() => setHoveredSkill(tech.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <span className="text-orange-400">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Backend Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl mb-4 flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                    <span>Backend</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {backendTech.map((tech, index) => (
                      <div 
                        key={tech.name}
                        className={`p-3 border border-[#333] rounded-lg transition-all duration-300 ${
                          hoveredSkill === tech.name ? 'bg-[#FE5D2620] border-[#FE5D26] scale-105' : 'hover:border-[#444] hover:bg-[#222]'
                        }`}
                        style={{ 
                          transitionDelay: `${index * 50 + 700}ms`,
                          opacity: skillsVisible ? 1 : 0,
                          transform: skillsVisible ? 'none' : 'translateY(10px)'
                        }}
                        onMouseEnter={() => setHoveredSkill(tech.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <span className="text-green-400">{tech.name}</span>
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
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {toolsTech.map((tech, index) => (
                      <div 
                        key={tech.name}
                        className={`p-3 border border-[#333] rounded-lg transition-all duration-300 ${
                          hoveredSkill === tech.name ? 'bg-[#FE5D2620] border-[#FE5D26] scale-105' : 'hover:border-[#444] hover:bg-[#222]'
                        }`}
                        style={{ 
                          transitionDelay: `${index * 50 + 1200}ms`,
                          opacity: skillsVisible ? 1 : 0,
                          transform: skillsVisible ? 'none' : 'translateY(10px)'
                        }}
                        onMouseEnter={() => setHoveredSkill(tech.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <span className="text-blue-400">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 