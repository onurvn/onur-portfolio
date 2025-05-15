"use client";

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
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SASS",
    "LESS",
    "Tailwind CSS",
    "React.js",
    "Next.js",
    "React Native",
    "Remix",
    "Astro",
    "shadcn/ui",
    "Expo",
  ];

  const backendTech = [
    "Node.js",
    "Express.js",
    "JWT",
    "MongoDB",
    "Supabase",
    "Prisma",
    "Firebase",
    "MySQL",
    "PostgreSQL",
  ];

  const toolsTech = [
    "Git",
    "Vercel",
    "Figma",
    "Vite",
    "Postman",
    "Visual Studio Code",
    "RestAPI",
    "Swagger",
    "npm",
    "yarn",
  ];

  // Social media links with icons
  const socialLinks = [
    {
      id: "phone",
      title: "Phone",
      value: "+90 551 046 40 31",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27097 2.12 4.18C2.09501 3.90347 2.12787 3.62476 2.2165 3.36163C2.30513 3.09849 2.44757 2.85669 2.63477 2.65172C2.82196 2.44675 3.0498 2.28281 3.30379 2.17062C3.55777 2.05843 3.83233 2.00036 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23654 4.68007 9.47149 5.62273 9.81 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5285 19.3199 14.7635 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
            stroke="#FE5D26"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      href: "tel:+905510464031",
    },
    {
      id: "email",
      title: "Email",
      value: "avanonur@hotmail.com",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.875 4.5H4.125C3.08947 4.5 2.25 5.33947 2.25 6.375V17.625C2.25 18.6605 3.08947 19.5 4.125 19.5H19.875C20.9105 19.5 21.75 18.6605 21.75 17.625V6.375C21.75 5.33947 20.9105 4.5 19.875 4.5Z"
            stroke="#FE5D26"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.25 7.5L12 12.75L18.75 7.5"
            stroke="#FE5D26"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      href: "mailto:avanonur@hotmail.com",
    },
    {
      id: "github",
      title: "GitHub",
      value: "github.com/onurvn",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 19.0001C4 20.5001 4 16.5001 2 16.0001M16 22.0001V18.1301C16.0375 17.6533 15.9731 17.1747 15.811 16.7239C15.6489 16.2731 15.3929 15.8605 15.06 15.5101C18.2 15.1701 21.5 13.9801 21.5 8.52006C21.4997 7.12389 20.9627 5.78126 20 4.77006C20.4559 3.54857 20.4236 2.19841 19.91 1.00006C19.91 1.00006 18.73 0.65006 16 2.48006C13.708 1.85888 11.292 1.85888 9 2.48006C6.27 0.65006 5.09 1.00006 5.09 1.00006C4.57638 2.19841 4.54414 3.54857 5 4.77006C4.03013 5.78876 3.49252 7.14352 3.5 8.55006C3.5 13.9701 6.8 15.1601 9.94 15.5501C9.611 15.8951 9.35726 16.3021 9.19531 16.7471C9.03335 17.1921 8.96681 17.6651 9 18.1301V22.0001"
            stroke="#FE5D26"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      href: "https://github.com/onurvn",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/onuravan",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
            stroke="#FE5D26"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 9H2V21H6V9Z"
            stroke="#FE5D26"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
            stroke="#FE5D26"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      href: "https://www.linkedin.com/in/onuravan",
    },
  ];

  return (
    <div className="py-12 px-4 relative min-h-screen flex flex-col items-center">
      <ParticleBackground count={60} color="#FE5D26" />

      <div
        className={`transition-all duration-500 w-full max-w-6xl ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Hero Section */}
        <div className="mb-20">
          <div
            className="transition-all duration-700"
            style={{
              transitionDelay: "300ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <p className="text-lg text-[#FE5D26] mb-3">Hello, I&apos;m</p>

            <AnimatedText
              text="Onur"
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
              I create responsive and user-friendly web applications using
              modern technologies, with a focus on the React, Next.js, and
              Node.js ecosystems.
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
            transitionDelay: "600ms",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {socialLinks.map((link, index) => (
            <Link
              key={link.id}
              href={link.href}
              target={
                link.id !== "phone" && link.id !== "email"
                  ? "_blank"
                  : undefined
              }
              rel={
                link.id !== "phone" && link.id !== "email"
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`p-4 rounded-lg transition-all duration-300 flex items-center gap-4 ${
                socialHovered === link.id
                  ? "bg-gradient-to-r from-[#FE5D2615] to-[#1a1a1a] border border-[#FE5D26] shadow-lg"
                  : "bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-[#333]"
              }`}
              onMouseEnter={() => setSocialHovered(link.id)}
              onMouseLeave={() => setSocialHovered(null)}
              style={{
                transitionDelay: `${600 + index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="flex justify-center items-center w-12 h-12 bg-[#FE5D2610] rounded-full">
                <span className="text-[#FE5D26]">{link.icon}</span>
              </div>
              <div>
                <h3 className="text-[#FE5D26] font-medium">{link.title}</h3>
                <p className="text-sm opacity-80">{link.value}</p>
              </div>
              <div
                className={`ml-auto transition-all duration-300 opacity-80 ${
                  socialHovered === link.id
                    ? "translate-x-0"
                    : "translate-x-2 opacity-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div
          className="bg-gradient-to-br from-[#111] to-[#1a1a1a] rounded-xl overflow-hidden border border-[#333] shadow-xl p-8 mb-12"
          style={{
            transitionDelay: "900ms",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h2 className="text-2xl font-bold mb-8 text-[#FE5D26]">
            {"// Tech Stack"}
          </h2>

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
                        ? "border-[#FE5D26] bg-[#FE5D2615] scale-105 shadow-md"
                        : "border-[#333] bg-[#1d1d1d] hover:border-[#444]"
                    }`}
                    onMouseEnter={() => setTechHovered(tech)}
                    onMouseLeave={() => setTechHovered(null)}
                    style={{
                      transitionDelay: `${index * 50 + 1000}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "none" : "translateY(10px)",
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
                        ? "border-[#FE5D26] bg-[#FE5D2615] scale-105 shadow-md"
                        : "border-[#333] bg-[#1d1d1d] hover:border-[#444]"
                    }`}
                    onMouseEnter={() => setTechHovered(tech)}
                    onMouseLeave={() => setTechHovered(null)}
                    style={{
                      transitionDelay: `${index * 50 + 1500}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "none" : "translateY(10px)",
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
                        ? "border-[#FE5D26] bg-[#FE5D2615] scale-105 shadow-md"
                        : "border-[#333] bg-[#1d1d1d] hover:border-[#444]"
                    }`}
                    onMouseEnter={() => setTechHovered(tech)}
                    onMouseLeave={() => setTechHovered(null)}
                    style={{
                      transitionDelay: `${index * 50 + 2000}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "none" : "translateY(10px)",
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
