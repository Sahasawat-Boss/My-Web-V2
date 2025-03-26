"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
    SiNodedotjs, SiExpress, SiPrisma, SiMongodb, SiPostgresql, SiCloudinary,
    SiDocker, SiGithub, SiDbeaver, SiVercel, SiRailway, SiNetlify, SiNestjs, SiVuedotjs
} from "react-icons/si";

// Stack Data (Now Includes HTML, CSS, JavaScript)
const techStacks = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-lg" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500 text-lg" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-lg" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "React", icon: <SiReact className="text-blue-500" /> },
    { name: "Vue.js", icon: <SiVuedotjs className="text-green-400 text-lg" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "NestJS", icon: <SiNestjs className="text-[#ff4040]" /> },
    { name: "Prisma", icon: <SiPrisma className="text-indigo-400" /> },
    { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-600" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "DBeaver", icon: <SiDbeaver className="text-blue-400" /> },
    { name: "Vercel", icon: <SiVercel className="text-white text-lg" /> },
    { name: "Railway", icon: <SiRailway className="text-gray-200" /> },
    { name: "Netlify", icon: <SiNetlify className="text-blue-500" /> },
];

const Stack = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.35 });
    const [tooltip, setTooltip] = useState<string | null>(null);

    return (
        <div id="stack" className="w-full py-12 px-4 flex flex-col items-center relative">
            {/* Section Title with Fade-in Animation */}
            <motion.h2
                className="text-3xl md:text-4xl font-bold bg-gradient-to-tl from-white to-gray-600 bg-clip-text text-transparent tracking-wide mb-8 transition-all duration-500 ease-in-out"
                initial={{ opacity: 0, y: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Tech Stack
            </motion.h2>

            {/* Stack Section with Floating Effect */}
            <motion.div
                ref={ref}
                className="flex flex-wrap justify-center gap-4 px-6 max-w-xl relative"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
            >
                {techStacks.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        className="relative w-10 h-10 flex flex-col items-center justify-center rounded-full shadow-lg backdrop-blur-md border border-white/30 hover:bg-[#3f3f3f] transition-all hover110"
                        animate={{ y: [-9, 9, -9] }}
                        transition={{ duration: 2.5 + index * 0.5, repeat: Infinity, repeatType: "reverse" }}
                        onMouseEnter={() => setTooltip(tech.name)}
                        onMouseLeave={() => setTimeout(() => setTooltip(null), 1500)} // show tooltip 1.5s after hover
                        onClick={() => setTooltip(tooltip === tech.name ? null : tech.name)}
                    >
                        <div className="text-2xl hover125">{tech.icon}</div>

                        {/* Tooltip on Hover and Click */}
                        {tooltip === tech.name && (
                            <motion.div
                                className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-base rounded-md shadow-md"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                {tech.name}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Stack;
