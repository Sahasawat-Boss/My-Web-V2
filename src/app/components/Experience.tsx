"use client";

import { motion } from "framer-motion";
import { FaBusinessTime, FaLaptopCode } from "react-icons/fa";
import "../CSS/Experience.css";

const experiences = [
    {
        title: "Business Analyst",
        description: "Worked with stakeholders to define software requirements and optimize business processes.",
        icon: <FaBusinessTime className="text-blue-300 text-2xl" />,
        animation: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
    },
    {
        title: "Freelance Developer",
        description: "Designed and developed custom web applications for clients, focusing on modern design.",
        icon: <FaLaptopCode className="text-purple-400 text-2xl" />,
        animation: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
    },
];

const Experience = () => {
    return (
        <section id="experience" className="pt-24 px-6 text-white">
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    className="text-3xl md:text-4xl font-semibold text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ amount: 0.3, once: false }}
                >
                    <span className="gradient-text-purple">Career </span>
                    <span className="gradient-text-gray">Milestones</span>
                </motion.h2>

                {/* Experience Grid */}
                <div className="grid md:grid-cols-2 gap-4 mt-10 w-fit">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative flex items-center space-x-4 p-6 shadow-lg hover transition-all experience-card"
                            initial="hidden"
                            whileInView="visible"
                            variants={exp.animation}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ amount: 0.3, once: false }}
                        >
                            {/* Glowing Border Effect */}
                            <div className="absolute inset-0 rounded-xl border-2 border-transparent experience-border"></div>

                            {/* Icon */}
                            <div className="p-2 bg-white/15 rounded-full">{exp.icon}</div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-bold">{exp.title}</h3>
                                <p className="text-gray-400 text-sm">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
