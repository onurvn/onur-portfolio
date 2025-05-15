import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onur Avan | Portfolio",
  description:
    "Portfolio showcasing my projects and skills as a front-end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-inter antialiased bg-[#0a0a0a] text-[#ededed] min-h-screen flex flex-col`}
      >
        <Navigation />

        {/* Main content with padding for fixed header */}
        <main className="flex-grow pt-24">{children}</main>

        {/* Modern Footer */}
        <footer className="border-t border-[#222] bg-[#0c0c0c]">
          <div className="container mx-auto max-w-7xl px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {/* Brand Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#FE5D26] to-[#f76e3d] bg-clip-text text-transparent">
                    Onur Portfolio
                  </span>
                </h3>
                <p className="text-gray-400 mb-6 max-w-md ">
                  Front-End developer with a focus on modern web technologies,
                  creating responsive and user-friendly <br /> web applications
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/onurvn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#333] transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 19.0001C4 20.5001 4 16.5001 2 16.0001M16 22.0001V18.1301C16.0375 17.6533 15.9731 17.1747 15.811 16.7239C15.6489 16.2731 15.3929 15.8605 15.06 15.5101C18.2 15.1701 21.5 13.9801 21.5 8.52006C21.4997 7.12389 20.9627 5.78126 20 4.77006C20.4559 3.54857 20.4236 2.19841 19.91 1.00006C19.91 1.00006 18.73 0.65006 16 2.48006C13.708 1.85888 11.292 1.85888 9 2.48006C6.27 0.65006 5.09 1.00006 5.09 1.00006C4.57638 2.19841 4.54414 3.54857 5 4.77006C4.03013 5.78876 3.49252 7.14352 3.5 8.55006C3.5 13.9701 6.8 15.1601 9.94 15.5501C9.611 15.8951 9.35726 16.3021 9.19531 16.7471C9.03335 17.1921 8.96681 17.6651 9 18.1301V22.0001"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="http://x.com/myaaxe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#333] transition-colors"
                  >
                    <span className="sr-only">X (Twitter)</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      {" "}
                      <path
                        d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{" "}
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/onuravan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#333] transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 9H2V21H6V9Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#FE5D26]">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#FE5D26]">
                  Contact
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-400">
                    <svg
                      width="20"
                      height="20"
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
                    <a
                      href="mailto:avanonur@hotmail.com"
                      className="hover:text-white transition-colors"
                    >
                      avanonur@hotmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <svg
                      width="20"
                      height="20"
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
                    <a
                      href="tel:+905510464031"
                      className="hover:text-white transition-colors"
                    >
                      +90 551 046 40 31
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-6 border-t border-[#222] flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 mb-4 md:mb-0">
                © {new Date().getFullYear()} Onur Avan. All rights reserved.
              </p>
              <div>
                <Link
                  href="/"
                  className="inline-block relative overflow-hidden group"
                >
                  <span className="relative z-10 text-sm text-gray-400 hover:text-[#FE5D26] transition-colors">
                    Made with ❤️ by Onur
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
