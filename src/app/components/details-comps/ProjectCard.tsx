"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiOpenai, SiTypescript, SiJavascript,
    SiMongodb, SiCloudinary, SiVuedotjs 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

// ✅ Map Tech Name to React Icons
const iconMapping: Record<string, React.ReactElement> = {
    React: <SiReact className="text-blue-400" size={20} />,
    Nextjs: <SiNextdotjs className="text-white" size={20} />,
    Tailwind: <SiTailwindcss className="text-teal-400" size={20} />,
    Nodejs: <SiNodedotjs className="text-green-400" size={20} />,
    OpenAI: <SiOpenai className="text-gray-300" size={20} />,
    TypeScript: <SiTypescript className="text-blue-400" size={19} />,
    JavaScript: <SiJavascript className="text-yellow-500" size={19} />,
    MongoDB: <SiMongodb className="text-green-500" size={20} />,
    Cloudinary: <SiCloudinary className="text-blue-400" size={20} />,
    API: <TbApi className="text-[#d4d370]" size={21} />,
    Vue: <SiVuedotjs className="text-green-400" size={19} />,
};

const ProjectCard: React.FC<{
    title: string;
    description: string;
    imageSrc: string;
    liveLink: string;
    techIcons: string[];
}> = ({ title, description, imageSrc, liveLink, techIcons }) => {
    return (
        <div className="relative bg-white/15 border border-white/20 rounded-xl px-4 py-6 w-[345px] sm:w-[360px] shadow-lg hover:shadow-purple-500/50 transition-shadow">
            {/* ✅ Project Image with Overlay and Title on Hover */}
            <div className="relative w-full h-72 overflow-hidden rounded shadow-md group">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover rounded transition-transform duration-300 group-hover:scale-110"
                />

                {/* 🟣 Overlay Effect */}
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* 🟣 Centered Title on Hover */}
                <span className="absolute inset-0 flex items-center justify-center text-black text-md font-sans font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                    <span className="bg-white/75 rounded-lg p-1.5">{title}</span>
                </span>
            </div>

            {/* ✅ Project Details */}
            <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
            <p className="mt-2 text-gray-300 text-sm">{description}</p>

            <div className="flex justify-between items-center">
                {/* ✅ Tech Icons using React Icons */}
                <div className="flex items-center mt-4">
                    {techIcons.map((tech, index) => (
                        <div
                            key={index}
                            className={`p-1.5 border border-white/30 rounded-full bg-black 
                            ${index !== 0 ? "-ml-2" : ""} transition-all hover:scale-110`}
                        >
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
                        <span className="flex items-center justify-center text-gray-400 text-[13.5px] font-semibold italic hover">
                            <span className="text-[17px] mr-1 mb-0.5">🔒</span>
                            Private Project</span>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;
