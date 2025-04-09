"use client";

import "../CSS/Experience.css";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaBusinessTime, FaLaptopCode } from "react-icons/fa";



// Define the type for an experience item
interface ExperienceItem {
    title: string;
    description: string;
    icon: React.ReactNode; // ✅ Use React.ReactNode instead of JSX.Element
}

// Define experiences list
const experiences: ExperienceItem[] = [
    {
        title: "Business Analyst",
        description: "Partnered with stakeholders to gather and refine software requirements, design workflows and mockups, conduct thorough testing, and provide user training for a successful implementation.",
        icon: <FaBusinessTime className="text-blue-400 text-2xl" />,
    },
    {
        title: "Freelance Developer",
        description: "Designed and developed custom web apps for clients, prioritizing modern, user-friendly designs with responsiveness across devices.",
        icon: <FaLaptopCode className="text-purple-400 text-2xl" />,
    },
];

// Experience Component
const Experience: React.FC = () => {
    const [modalContent, setModalContent] = useState<ExperienceItem | null>(null);
    const modalRef = useRef<HTMLDialogElement>(null);

    // Open modal
    const openModal = (exp: ExperienceItem) => {
        setModalContent(exp);
        modalRef.current?.showModal();
    };

    // Close modal
    const closeModal = () => {
        modalRef.current?.close();
        setModalContent(null);
    };

    return (
        <section id="experience" className="pt-24 px-6 text-white">
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    className="text-3xl md:text-4xl font-semibold text-center"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="gradient-text-purple">Career </span>
                    <span className="gradient-text-gray">Milestones</span>
                </motion.h2>

                {/* Experience Grid */}
                <div className="grid md:grid-cols-2 gap-4 mt-10 w-fit">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative flex items-center space-x-4 p-6 shadow-lg hover transition-all experience-card cursor-pointer"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -85 : 85 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            onClick={() => openModal(exp)}
                        >
                            <div className="p-2 bg-white/15 rounded-full floating">{exp.icon}</div>
                            <div>
                                <h3 className="text-lg font-bold gradient-text-purple">{exp.title}</h3>
                                <p className="text-gray-300 text-sm">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal for Detailed View */}
            <dialog ref={modalRef} className="modal">
                {modalContent && (
                    <div className="text-center">
                        <div className="flex justify-center items-center space-x-4">
                            {modalContent.icon}
                            <h3 className="text-xl font-bold gradient-text-purple">{modalContent.title}</h3>
                        </div>
                        <p className="text-gray-300 mt-2">{modalContent.description}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                )}
            </dialog>

        </section>
    );
};

export default Experience;
