"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiOpenai, SiClaude,
    SiTailwindcss, SiNodedotjs, SiExpress, SiPrisma, SiMongodb, SiPostgresql,
    SiCloudinary, SiDocker, SiGithub, SiDbeaver, SiVercel, SiRailway, SiNetlify, SiNestjs, SiVuedotjs
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaDatabase, FaServer } from "react-icons/fa6";
import { BsHexagonHalf } from "react-icons/bs";

// Define Stack Categories
const stackCategories = [
    {
        title: "Frontend",
        stacks: [
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300" /> },
            { name: "React", icon: <SiReact className="text-blue-400" /> },
            { name: "Vue.js", icon: <SiVuedotjs className="text-green-400" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
            { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
            { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        ],
    },
    {
        title: "Backend and ORM",
        stacks: [
            { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
            { name: "Express.js", icon: <SiExpress className="text-white" /> },
            { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
            { name: "Prisma", icon: <SiPrisma className="text-white" /> },
        ],
    },
    {
        title: "Database and Services",
        stacks: [
            { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
            { name: "Neon Cloud", icon: <SiPostgresql className="text-cyan-400" /> },
            { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> },
            { name: "TiDB", icon: <FaDatabase className="text-purple-500" /> },
            { name: "DBeaver", icon: <SiDbeaver className="text-blue-300" /> },
        ],
    },
    {
        title: "DevOps",
        stacks: [
            { name: "GitHub", icon: <SiGithub className="text-white" /> },
            { name: "Docker", icon: <SiDocker className="text-blue-600" /> },
            { name: "Vercel", icon: <SiVercel className="text-white" /> },
            { name: "Railway", icon: <SiRailway className="text-gray-500" /> },
            { name: "Netlify", icon: <SiNetlify className="text-blue-500" /> },
        ],
    },
    {
        title: "Code Editors & AI",
        stacks: [
            { name: "VS Code", icon: <VscVscodeInsiders className="text-blue-500" /> },
            { name: "Cursor AI", icon: <BsHexagonHalf className="text-gray-300" /> },
            { name: "GPT Plus", icon: <SiOpenai className="text-green-600" /> },
            { name: "Claude 3.7", icon: <SiClaude className="text-orange-600" /> },
        ],
    }
];

// Infinite Scroll Animation
const scrollAnimation = {
    animate: {
        x: ["0%", "-100%"], // Move from left to right
        transition: {
            repeat: Infinity,
            repeatType: "loop" as const,
            duration: 20, // Adjust speed
            ease: "linear",
        },
    },
};

const Stack = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.15 });

    return (
        <div id="stack" className="w-full flex justify-center pt-16 px-6 bg-black">
            <div ref={ref} className="border border-white/20 backdrop-blur-3xl rounded-3xl p-6 mx-auto text-white text-center max-w-5xl">
                {/* Section Title */}
                <motion.h2
                    className="text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Tech Stack
                </motion.h2>

                {/* Loop Through Categories */}
                {stackCategories.map((category, catIndex) => (
                    <motion.div
                        key={catIndex}
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>

                        {/* Infinite Moving Stack */}
                        <div className="overflow-hidden w-full relative">
                            <motion.div
                                className="flex space-x-8 w-[200%]"
                                {...scrollAnimation}
                            >
                                {[...category.stacks, ...category.stacks].map((stack, index) => (
                                    <div key={index} className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
                                        <div className="text-4xl">{stack.icon}</div>
                                        <span className="text-xs sm:text-sm md:text-lg">{stack.name}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Stack;