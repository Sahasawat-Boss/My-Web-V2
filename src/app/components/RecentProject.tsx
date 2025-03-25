"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./details-comps/ProjectCard";

const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const RecentProjects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.25 }); // Trigger when 20% is in view

    return (
        <section id="Project" ref={ref} className="py-10 px-6 flex flex-col items-center">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-white  text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="gradient-text-gray">Projects fueled by {" "}</span>
                <span className="gradient-text-purple">passion and skill.</span>
            </motion.h2>

            {/* Underline Animation */}
            <motion.div
                className="mt-4 w-[510px] h-0.5 bg-gradient-to-r from-gray-300 via-purple-400 to-purple-600 shadow-[0px_0px_10px_rgba(168,85,247,0.8)] mb-10 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
            />

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                {/* Left Side (Fades in from Left) */}
                <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <ProjectCard
                        title="PureSmile Clinic"
                        description="A modern, fully responsive, and user-friendly dental clinic website."
                        imageSrc="/RecentProject/puresmile/puresmile1.png"
                        liveLink="https://puresmile-clinic-bsynth-demo.vercel.app/"
                        techIcons={["React", "Tailwind", "TypeScript"]}
                    />
                </motion.div>

                {/* Right Side (Fades in from Right) */}
                <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <ProjectCard
                        title="BSlip-Checker"
                        description="BSlip Checker verifies transaction details from Thai bank transfer slips by comparing uploaded slips with actual bank transaction records."
                        imageSrc="/RecentProject/bslip/bslip3.png"
                        liveLink="https://www.youtube.com/shorts/ylGrFObM-uw"
                        techIcons={["Nextjs", "Tailwind", "TypeScript"]}
                    />
                </motion.div>

                <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <ProjectCard
                        title="Process Inspection Request System (PIR)"
                        description="PIR enables users to report issues with images, severity levels, and statuses, manage requests with real-time tracking, and generate reports in Excel and PDF.
"
                        imageSrc="/RecentProject/PIR/pir5.png"
                        liveLink=""
                        techIcons={["Nextjs", "Tailwind", "JavaScript", "MongoDB", "Cloudinary"]}
                    />
                </motion.div>

                {/* Right Side (Fades in from Right) */}
                <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <ProjectCard
                        title="AI-Summarizer"
                        description="AI-Summarizer is a web application that extracts and summarizes web articles into concise, easy-to-read summaries using AI."
                        imageSrc="/RecentProject/ai-sum/aisum3.png"
                        liveLink="https://www.youtube.com/shorts/ylGrFObM-uw"
                        techIcons={["React", "Tailwind", "TypeScript"]}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default RecentProjects;
