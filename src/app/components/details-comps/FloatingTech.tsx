"use client";

import { motion } from "framer-motion";
import { FaReact, FaVuejs, FaDatabase, FaNodeJs, FaCloud } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPrisma, SiVercel, SiOpenai } from "react-icons/si";

const techStack = [
    { name: "Next.js", icon: <SiNextdotjs size={20} />, color: "text-gray-200" },
    { name: "React", icon: <FaReact size={25} />, color: "text-blue-400" },
    { name: "Tailwind", icon: <SiTailwindcss size={25} />, color: "text-teal-400" },
    { name: "Vue.js", icon: <FaVuejs size={20} />, color: "text-green-400" },
    { name: "Prisma", icon: <SiPrisma size={25} />, color: "text-indigo-400" },
    { name: "Database", icon: <FaDatabase size={20} />, color: "text-yellow-400" },
    { name: "Node.js", icon: <FaNodeJs size={25} />, color: "text-green-500" },
    { name: "AI", icon: <SiOpenai size={25} />, color: "text-orange-400" },
    { name: "Cloud", icon: <FaCloud size={20} />, color: "text-blue-400" },
    { name: "Vercel", icon: <SiVercel size={20} />, color: "text-white" },
];

const FloatingTech = () => {
    return (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 hover md:scale-125">
            {techStack.map((tech, index) => (
                <motion.div
                    key={index}
                    className={`${tech.color}`}
                    animate={{
                        y: [-12, 12, -12], // Floating effect up/down/starting position(and loop)
                    }}
                    transition={{
                        duration: 2.5 + index * 0.5, // Asynchronous floating times base + index + delay
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
