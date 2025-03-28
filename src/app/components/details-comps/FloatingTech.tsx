"use client";

import { motion } from "framer-motion";
import { FaReact, FaVuejs, FaDatabase, FaNodeJs, FaCloud } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPrisma, SiVercel, SiOpenai, SiExpress, SiNuxtdotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr"; // For SQL (MySQL-style icon)

const techStack = [
    { name: "Next.js", icon: <SiNextdotjs size={20} />, color: "text-gray-200" },
    { name: "React", icon: <FaReact size={20} />, color: "text-blue-400" },
    { name: "Tailwind", icon: <SiTailwindcss size={22} />, color: "text-teal-400" },
    { name: "Vue.js", icon: <FaVuejs size={20} />, color: "text-green-400" },
    { name: "Nuxt.js", icon: <SiNuxtdotjs size={22} />, color: "text-green-300" },
    { name: "Prisma", icon: <SiPrisma size={22} />, color: "text-indigo-400" },
    { name: "SQL", icon: <GrMysql size={20} />, color: "text-yellow-300" },
    { name: "Database", icon: <FaDatabase size={20} />, color: "text-yellow-400" },
    { name: "Node.js", icon: <FaNodeJs size={22} />, color: "text-green-500" },
    { name: "Express", icon: <SiExpress size={22} />, color: "text-gray-300" },
    { name: "AI", icon: <SiOpenai size={20} />, color: "text-orange-400" },
    { name: "Cloud", icon: <FaCloud size={20} />, color: "text-blue-400" },
    { name: "Vercel", icon: <SiVercel size={20} />, color: "text-white" },
];


// Function to handle smooth scrolling
const handleScrollToServices = () => {
    const target = document.getElementById("stack");
    if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

const FloatingTech = () => {
    return (
        <div
            className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2.5 md:space-x-3.5 hover110"
            onClick={handleScrollToServices} // Scroll to #services when clicked
        >
            {techStack.map((tech, index) => (
                <motion.div
                    key={index}
                    className={`${tech.color}`}
                    animate={{
                        y: [-16, 16, -16], // Floating effect up/down/starting position(and loop)
                    }}
                    transition={{
                        duration: 2.8 + index * 0.4, // Asynchronous floating times base + index + delay
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    {tech.icon}
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingTech;
