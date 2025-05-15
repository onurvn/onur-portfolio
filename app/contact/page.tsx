"use client";

import { useState, useEffect } from "react";
import AnimatedText from "../components/AnimatedText";
import ParticleBackground from "../components/ParticleBackground";
import Link from "next/link";

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
      link: "mailto:avanonur@hotmail.com",
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
      link: "https://github.com/onurvn",
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
      link: "https://linkedin.com/in/onuravan",
    },
    {
      id: "twitter",
      title: "X",
      value: "@myaaxe",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
            stroke="#FE5D26"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      link: "https://twitter.com/myaaxe",
    },
  ];

  return (
    <div className="py-12 px-4 relative min-h-screen flex flex-col items-center">
      <ParticleBackground count={50} color="#FE5D26" />

      <div
        className={`transition-all duration-500 w-full max-w-4xl ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <AnimatedText
          text="// Connect With Me"
          el="h1"
          className="text-4xl font-bold mb-8 text-[#FE5D26]"
          animation="fade"
        />

        <p className="text-lg mb-12 max-w-2xl opacity-80">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out through any of these channels.
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
                  hoveredCard === method.id
                    ? "shadow-lg shadow-[#FE5D2630] scale-[1.02] border-[#FE5D26]"
                    : ""
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                }}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start">
                  <div className="flex justify-center items-center w-12 h-12 mr-4 bg-[#FE5D2610] rounded-full">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#FE5D26]">
                      {method.title}
                    </h3>
                    <p className="text-md opacity-80">{method.value}</p>
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-[#FE5D26] transition-all duration-500 ${
                    hoveredCard === method.id ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            </Link>
          ))}
        </div>

        <div
          className="mt-16 p-8 rounded-lg bg-gradient-to-r from-[#111] to-[#1a1a1a] border border-[#333] transition-all duration-500"
          style={{
            transitionDelay: "700ms",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-[#FE5D26]">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-lg opacity-80">
            Whether you have a project in mind or just want to say hello,
            I&apos;m looking forward to hearing from you. I&apos;m currently
            available for freelance work, collaborations, and interesting
            projects.
          </p>
        </div>
      </div>
    </div>
  );
}
