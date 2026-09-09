import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { FiMenu, FiX, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FaHome,
  FaBriefcase,
  FaGraduationCap,
  FaBook,
  FaFileAlt,
  FaImages,
  FaHandshake,
} from "react-icons/fa";

interface LinkItem {
  href: string;
  text: string;
  icon: React.ReactElement;
  external?: boolean;
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      });
      return;
    }

    window.location.href = `/${href}`;
  };

  const links: LinkItem[] = [
    { href: "#intro", text: "Home", icon: <FaHome /> },
    { href: "#pubs", text: "Publications", icon: <FaBook /> },
    { href: "#experience", text: "Experience", icon: <FaBriefcase /> },
    { href: "#education", text: "Education", icon: <FaGraduationCap /> },
    { href: "#gallery", text: "Gallery", icon: <FaImages /> },
    { href: "#affiliations", text: "Affiliations", icon: <FaHandshake /> },
    { href: "/jzinnoCV.pdf", text: "CV", icon: <FaFileAlt />, external: true },
  ];

  return (
    <>
      <button
        aria-label="Open navigation"
        aria-expanded={isOpen}
        aria-controls="sidebar-navigation"
        className="fixed bg-background/30 backdrop-blur-md top-0 left-0 m-3 text-4xl text-foreground opacity-70 rounded-md focus:outline-none hover:opacity-100 hover:scale-110 transition-all duration-200 ease-in-out"
        onClick={toggleSidebar}
      >
        <FiMenu />
      </button>
      <div
        id="sidebar-navigation"
        inert={!isOpen}
        className={`fixed top-0 left-0 max-w-full h-full overflow-y-auto bg-card/10 dark:bg-sidebar/40 backdrop-blur-md shadow-2xl transition-all duration-300 transform z-40  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-center p-4">
          <div className="flex items-center mr-4">
            <a href="mailto:johnzinno14@gmail.com">
              <FiMail className="text-muted-foreground hover:text-foreground text-2xl hover:scale-110 transition-all duration-200 ease-in-out" />
            </a>
            <a
              href="https://github.com/jzinno"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-muted-foreground hover:text-foreground text-2xl hover:scale-110 transition-all duration-200 ease-in-out ml-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/jzinno/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-muted-foreground hover:text-foreground text-2xl hover:scale-110 transition-all duration-200 ease-in-out ml-4" />
            </a>
          </div>
          <button
            aria-label="Close navigation"
            className="text-muted-foreground rounded-md hover:text-foreground text-2xl hover:scale-110 transition-all duration-200 ease-in-out focus:outline-none"
            onClick={closeSidebar}
          >
            <FiX />
          </button>
        </div>
        <ul className="py-4 ">
          {links.map((link) => (
            <li
              key={link.href}
              className="px-6 py-2 hover:scale-105 cursor-pointer text-foreground select-none transition-all duration-200 ease-in-out flex items-center"
            >
              {link.icon}
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground ml-2 text-xl hover:text-foreground transition-all duration-200 ease-in-out"
                  onClick={closeSidebar}
                >
                  {link.text}
                </a>
              ) : (
                <a
                  href={link.href}
                  className="text-muted-foreground ml-2 text-xl hover:text-foreground transition-all duration-200 ease-in-out"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(link.href);
                    closeSidebar();
                  }}
                >
                  {link.text}
                </a>
              )}
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </>
  );
};

export default Sidebar;
