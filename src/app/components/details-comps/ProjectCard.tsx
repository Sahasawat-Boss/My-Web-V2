"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiOpenai, SiTypescript } from "react-icons/si";

// ✅ Map Tech Name to React Icons
const iconMapping: Record<string, React.ReactElement> = {
    React: <SiReact className="text-blue-400" size={22} />,
    Nextjs: <SiNextdotjs className="text-white" size={22} />,
    Tailwind: <SiTailwindcss className="text-teal-400" size={22} />,
    Nodejs: <SiNodedotjs className="text-green-400" size={22} />,
    OpenAI: <SiOpenai className="text-gray-300" size={22} />,
    TypeScript: <SiTypescript className="text-blue-500" size={22} />,
};

const ProjectCard: React.FC<{
    title: string;
    description: string;
    imageSrc: string;
    liveLink: string;
    techIcons: string[];
}> = ({ title, description, imageSrc, liveLink, techIcons }) => {
    return (
        <div className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 w-96 mx-auto shadow-lg hover:shadow-purple-500/50 transition-shadow">
            {/* ✅ Project Image */}
            <div className="relative w-full h-72 lg:h-64 overflow-hidden rounded shadow-md group">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover rounded transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* ✅ Project Details */}
            <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
            <p className="mt-2 text-gray-300 text-sm">{description}</p>

            <div className="flex justify-between items-center">
                {/* ✅ Tech Icons using React Icons */}
                <div className="flex items-center gap-3 mt-4">
                    {techIcons.map((tech, index) => (
                        <div key={index} className="p-1 border border-white/20 rounded-full bg-black">
                            {iconMapping[tech] || null}
                        </div>
                    ))}
                </div>

                {/* ✅ Check Live Site Button (Handles Private Projects) */}
                <div className="mt-6 flex justify-between items-center">
                    {liveLink ? (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg 
            bg-gradient-to-r from-purple-500  to-indigo-500 shadow-lg transition-all duration-300 
            hover:scale-105 hover:shadow-purple-500/50 active:scale-95"
                        >
                            View Demo
                            <FaLocationArrow className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    ) : (
                        <span className="text-gray-400 text-md italic hover">🔒 Private Project</span>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;
