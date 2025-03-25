"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiTailwindcss, SiNodedotjs, SiExpress, SiPrisma, SiMongodb, SiPostgresql,
    SiCloudinary, SiDocker, SiGithub, SiDbeaver, SiVercel, SiRailway, SiNetlify, SiNestjs, SiVuedotjs
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";

// Define Stack Categories
const stackCategories = [
    {
        title: "Frontend",
        stacks: [
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
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
            { name: "NestJS", icon: <SiNestjs className="text-[#ff5353]" /> },
            { name: "Prisma", icon: <SiPrisma className="text-white" /> },
        ],
    },
    {
        title: "Database, DevOps and Services",
        stacks: [
            { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
            { name: "Neon Cloud", icon: <SiPostgresql className="text-cyan-400" /> },
            { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> },
            { name: "TiDB", icon: <FaDatabase className="text-purple-500" /> },
            { name: "DBeaver", icon: <SiDbeaver className="text-blue-300" /> },
            { name: "GitHub", icon: <SiGithub className="text-white" /> },
            { name: "Docker", icon: <SiDocker className="text-blue-600" /> },
            { name: "Vercel", icon: <SiVercel className="text-white" /> },
            { name: "Railway", icon: <SiRailway className="text-gray-500" /> },
            { name: "Netlify", icon: <SiNetlify className="text-blue-500" /> },
        ],
    },
];

// Infinite Scroll Animation (Marquee Effect)
const getScrollAnimation = (speed: number) => ({
    animate: {
        x: ["15%", "-100%"], // Move left continuously
        transition: {
            repeat: Infinity,
            repeatType: "loop" as const,
            duration: speed, // Adjust speed for each category
            ease: "linear",
        },
    },
});

const Stack = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.20 });

    return (
        <div id="stack" className="w-full overflow-hidden flex justify-center pt-16 px-6 bg-black">
            <div ref={ref} className="border border-white/20 backdrop-blur-3xl rounded-3xl p-6 mx-auto text-white text-center max-w-5xl">
                {/* Section Title */}
                <motion.h2
                    className="text-3xl mb-6 font-semibold tracking-wide"
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
                        className="mb-7"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: catIndex * 0.3 }}
                    >
                        <h3 className="text-lg font-semibold mb-3">{category.title}</h3>

                        {/* Infinite Moving Stack (Seamless Scrolling) */}
                        <div className="w-full relative overflow-hidden">
                            <motion.div
                                className="flex w-max flex-nowrap"
                                {...getScrollAnimation(20 - catIndex * 0.5)} // Adjust speed per category
                            >
                                {/* Duplicate stacks to create infinite effect */}
                                {[...category.stacks, ...category.stacks, ...category.stacks].map((stack, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-white/20 transition-all duration-300 "
                                    >
                                        <div className="text-3xl">{stack.icon}</div>
                                        <span className="text-xs">{stack.name}</span>
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
