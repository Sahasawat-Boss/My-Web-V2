"use client";

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaNetworkWired , FaProjectDiagram, FaHome  } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";

const navLinks = [
    { title: "Home", path: "#hero", icon: <FaHome  /> },
    { title: "Services", path: "#services", icon: <RiServiceFill /> },
    { title: "Projects", path: "#Project", icon: <FaProjectDiagram /> },
    { title: "Experience", path: "#experience", icon: <FaNetworkWired  /> },
    { title: "Contact", path: "#Contact", icon: <MdOutlineContactSupport /> },
];

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const closeNav = () => {
        setNavOpen(false);
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement>, path: string) => {
        e.preventDefault();
        const target = document.querySelector(path);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        closeNav();
    };

    return (
        <nav className="fixed w-full top-0 z-50 flex justify-center py-4 px-6 text-white">
            {/* Desktop Navbar */}
            <div className="hidden sm:flex items-center justify-center backdrop-blur-lg bg-black/55 border border-white/50 rounded-xl px-8 py-3.5">
                <ul className="flex space-x-7">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <button
                                onClick={(e) => handleSmoothScroll(e, link.path)}
                                className="flex items-center space-x-1 hover:text-purple-400/90 hover:underline transition-all duration-300 hover"
                            >
                                <span className="text-sm opacity-80 text-purple-300">{link.icon} </span>
                                <span>{link.title}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div
                onClick={toggleNav}
                className="sm:hidden fixed top-8 right-8 p-2 border bg-black/50 border-white/50 rounded  text-white/90 hover:text-purple-400/90 hover:border-purple-400/90 z-50 hover"
            >
                {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black/90 transition-transform duration-300 ${navOpen ? "translate-x-0" : "translate-x-full"
                    } sm:hidden`}
            >
                <ul className="flex flex-col items-center justify-center h-full space-y-10 text-3xl">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <button
                                onClick={(e) => handleSmoothScroll(e, link.path)}
                                className="flex items-center space-x-2 hover:text-purple-400 transition-all duration-300 hover"
                            >
                                <span className="text-xl pr-1 text-purple-300 ">{link.icon}</span>
                                <span>{link.title}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
