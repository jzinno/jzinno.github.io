import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FaHome,
  FaBriefcase,
  FaGraduationCap,
  FaBook,
  FaImages,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const links = [
    { href: "/", text: "Home", icon: <FaHome /> },
    { href: "/experience", text: "Experience", icon: <FaBriefcase /> },
    { href: "/edu", text: "Education", icon: <FaGraduationCap /> },
    { href: "/pubs", text: "Publications", icon: <FaBook /> },
    { href: "/gallery", text: "Gallery", icon: <FaImages /> },
  ];

  return (
    <>
      <button
        className="fixed bg-gray-100/30 backdrop-blur-md top-0 left-0 m-3 text-4xl text-slate-900 opacity-70 rounded-md focus:outline-none hover:opacity-100 hover:scale-110 transition-all duration-200 ease-in-out"
        onClick={toggleSidebar}
      >
        <FiMenu />
      </button>
      <div
        className={`fixed top-0 left-0 max-w-1/2 h-full bg-white/10 backdrop-blur-md shadow-2xl transition-all duration-300 transform   ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-center p-4">
          <div className="flex items-center mr-4">
            <a href="mailto:johnzinno14@gmail.com">
              <FiMail className="text-gray-700 hover:text-gray-900 text-2xl hover:scale-110 transition-all duration-200 ease-in-out" />
            </a>
            <a href="https://github.com/jzinno" target="_blank">
              <FaGithub className="text-gray-700 hover:text-gray-900 text-2xl hover:scale-110 transition-all duration-200 ease-in-out ml-4" />
            </a>
            <a href="https://www.linkedin.com/in/jzinno/" target="_blank">
              <FaLinkedin className="text-gray-700 hover:text-gray-900 text-2xl hover:scale-110 transition-all duration-200 ease-in-out ml-4" />
            </a>
          </div>
          <button
            className="text-gray-700 rounded-md hover:text-gray-900 text-2xl hover:scale-110 transition-all duration-200 ease-in-out focus:outline-none"
            onClick={closeSidebar}
          >
            <FiX />
          </button>
        </div>
        <ul className="py-4 ">
          {links.map((link) => (
            <li
              key={link.href}
              className="px-6 py-2 hover:scale-105 cursor-pointer text-slate-900 select-none transition-all duration-200 ease-in-out flex items-center"
            >
              {link.icon}
              <Link
                href={link.href}
                className="text-gray-700 ml-2 text-xl hover:text-gray-900 transition-all duration-200 ease-in-out"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
