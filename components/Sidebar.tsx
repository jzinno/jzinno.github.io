import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const links = [
        { href: "/", text: "Home" },
        { href: "/experience", text: "Experience" },
        { href: "/edu", text: "Education" },
        { href: "/pubs", text: "Publications" },
        { href: "/gallery", text: "Gallery" },
      ];

    return (
        <>
            <button
                className="fixed top-0 left-0 p-6 text-4xl text-slate-900 opacity-70 rounded-r-md focus:outline-none hover:opacity-100 hover:scale-110 transition-all duration-200 ease-in-out"
                onClick={toggleSidebar}
            >
                <FiMenu />
            </button>
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-white/30 backdrop-blur-md shadow-lg transition-all duration-300 transform   ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex justify-end p-4">
                    <button
                        className="text-gray-700 hover:text-gray-900 text-2xl hover:scale-110 transition-all duration-200 ease-in-out focus:outline-none"
                        onClick={closeSidebar}
                    >
                        <FiX />
                    </button>
                </div>
                <ul className="py-4 ">
                    {links.map((link) => (
                        <li key={link.href} className="px-6 py-2 hover:scale-105 cursor-pointer select-none transition-all duration-200 ease-in-out">
                            <Link href={link.href} className="text-gray-700  text-xl hover:text-gray-900 transition-all duration-200 ease-in-out">
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