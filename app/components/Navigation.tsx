'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-inter ${
      scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xl font-bold relative group font-inter"
          >
            <span className="bg-gradient-to-r from-[#FE5D26] to-[#f76e3d] bg-clip-text text-transparent">
              Onur Avan
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FE5D26] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 rounded-md border border-[#333] hover:border-[#FE5D26] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 w-full bg-white transition-transform ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}></span>
              <span className={`block h-0.5 w-full bg-white transition-opacity ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block h-0.5 w-full bg-white transition-transform ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}></span>
            </div>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-4 py-2 relative transition-all duration-300 ${
                  pathname === item.path 
                    ? "text-[#FE5D26]" 
                    : "text-white hover:text-gray-300"
                }`}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Active indicator */}
                {pathname === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FE5D26]"></span>
                )}
                
                {/* Hover indicator */}
                <span 
                  className={`absolute inset-0 bg-[#FE5D2615] rounded-md transition-all duration-300 ${
                    hoveredItem === item.name && pathname !== item.path ? 'opacity-100' : 'opacity-0'
                  }`}
                ></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[#111] border border-[#333] rounded-md shadow-xl overflow-hidden">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block px-4 py-3 transition-all duration-300 ${
                  pathname === item.path 
                    ? "bg-[#FE5D2615] text-[#FE5D26] border-l-2 border-[#FE5D26]" 
                    : "hover:bg-[#1a1a1a] text-white hover:pl-6"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <a 
              href="https://github.com/onurvn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-white hover:bg-[#1a1a1a] border-t border-[#333]"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
              GitHub
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation; 
