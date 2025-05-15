'use client';

import { useState, useEffect } from 'react';
import AnimatedText from '../components/AnimatedText';
import ParticleBackground from '../components/ParticleBackground';
import Link from 'next/link';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      value: 'onur@example.com',
      icon: '✉️',
      link: 'mailto:onur@example.com'
    },
    {
      id: 'github',
      title: 'GitHub',
      value: 'github.com/onur-dev',
      icon: '💻',
      link: 'https://github.com/onur-dev'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/onur-dev',
      icon: '🔗',
      link: 'https://linkedin.com/in/onur-dev'
    },
    {
      id: 'twitter',
      title: 'Twitter',
      value: '@onur_dev',
      icon: '🐦',
      link: 'https://twitter.com/onur_dev'
    }
  ];

  return (
    <div className="py-12 px-4 relative min-h-screen flex flex-col items-center">
      <ParticleBackground count={50} color="#FE5D26" />
      
      <div className={`transition-all duration-500 w-full max-w-4xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <AnimatedText 
          text="// Connect With Me" 
          el="h1" 
          className="text-4xl font-bold mb-8 text-[#FE5D26]"
          animation="fade"
        />
        
        <p className="text-lg mb-12 max-w-2xl opacity-80">
          I&apos;m always open to new opportunities and collaborations. 
          Feel free to reach out through any of these channels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <Link 
              href={method.link} 
              target="_blank" 
              rel="noopener noreferrer"
              key={method.id}
            >
              <div
                className={`p-6 rounded-lg transition-all duration-300 cursor-pointer relative overflow-hidden bg-gradient-to-br from-[#111] to-[#222] border border-[#333] ${
                  hoveredCard === method.id ? 'shadow-lg shadow-[#FE5D2630] scale-[1.02] border-[#FE5D26]' : ''
                }`}
                style={{ 
                  transitionDelay: `${200 + index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start">
                  <span className="text-4xl mr-4 opacity-90">{method.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#FE5D26]">{method.title}</h3>
                    <p className="text-md opacity-80">{method.value}</p>
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 h-1 bg-[#FE5D26] transition-all duration-500 ${
                  hoveredCard === method.id ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            </Link>
          ))}
        </div>

        <div 
          className="mt-16 p-8 rounded-lg bg-gradient-to-r from-[#111] to-[#1a1a1a] border border-[#333] transition-all duration-500"
          style={{ 
            transitionDelay: '700ms',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-[#FE5D26]">Let&apos;s Build Something Amazing Together</h2>
          <p className="text-lg opacity-80">
            Whether you have a project in mind or just want to say hello, I&apos;m looking forward to hearing from you.
            I&apos;m currently available for freelance work, collaborations, and interesting projects.
          </p>
        </div>
      </div>
    </div>
  );
} 