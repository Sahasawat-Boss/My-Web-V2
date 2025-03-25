"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { FaLaptopCode, FaProjectDiagram , FaEnvelope } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";

const navLinks = [
    { title: "About", path: "#hero", icon: <AiOutlineInfoCircle /> },
    { title: "Stack", path: "#stack", icon: <FaLaptopCode /> },
    { title: "Projects", path: "#Project", icon: <FaProjectDiagram /> },
    { title: "Services", path: "#services", icon: <RiServiceFill  /> },
    { title: "Contact", path: "#Contact", icon: <FaEnvelope /> },
];

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const closeNav = () => {
        setNavOpen(false);
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
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
                            <Link
                                href={link.path}
                                className="flex items-center space-x-1 hover:text-purple-400 hover:underline transition-all duration-300 hover"
                            >
                                <span className="text-sm opacity-80">{link.icon} </span><span>{link.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div
                onClick={toggleNav}
                className="sm:hidden fixed top-8 right-8 border border-white/70 rounded p-2 text-white hover:text-purple-400 hover:border-purple-400 cursor-pointer z-50 hover"
            >
                {navOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black/90 transition-transform duration-300 ${navOpen ? "translate-x-0" : "-translate-x-full"
                    } sm:hidden`}
            >
                <ul className="flex flex-col items-center justify-center h-full space-y-10 text-3xl ">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.path}
                                onClick={(e) => handleSmoothScroll(e, link.path)}
                                className="flex items-center space-x-2 hover:text-purple-400 transition-all duration-300 hover"
                            >
                                <span className="text-2xl pr-2">{link.icon}</span> 
                                <span>{link.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
