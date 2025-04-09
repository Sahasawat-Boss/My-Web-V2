"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const fadeInLeft = {
    hidden: { opacity: 0, x: -80, y: 45 }, // Moves from left & slightly below
    visible: {
        opacity: 1, x: 0, y: 0,
        transition: { duration: 1, ease: "easeOut" }
    }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 80, y: 45 }, // Moves from right & slightly above
    visible: {
        opacity: 1, x: 0, y: 0,
        transition: { duration: 1, ease: "easeOut" }
    }
};


const RecentProjects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.05 }); // Trigger when 5% is in view

    return (
        <section
            id="Project"
            ref={ref} className="pt-2 px-6 flex flex-col items-center bg-black/35">

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-5 w-fit">


                {/* Right Side (Fades in from Right) */}
                <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <ProjectCard
                        title="DailyDrip"
                        description="DailyDrip brings the warmth of a real coffee shop online — with beautiful design, animations, and smooth user experience."
                        imageSrc="/RecentProject/DD.png"
                        liveLink="https://daily-drip-coffee-cafe.vercel.app/"
                        techIcons={["Nextjs", "Tailwind", "TypeScript"]}
                    />
                </motion.div>

                {/* Left Side (Fades in from Left) */}
                <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <ProjectCard
                        title="SoulScroll"
                        description="SoulScroll is a fantasy story told through immersive visuals, music, and text. Discover a mythical world chapter by chapter."
                        imageSrc="/RecentProject/SS.png"
                        liveLink="https://soulscroll-bossbsynth.netlify.app/"
                        techIcons={["Nuxt", "Tailwind", "JavaScript"]}
                    />
                </motion.div>

                {/* Right Side (Fades in from Right) */}
                <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <ProjectCard
                        title="VueFlix"
                        description="VueFlix is a fun and interactive movie preview demo where you can scroll through categories, explore different titles, and watch smooth trailer previews."
                        imageSrc="/RecentProject/vf.png"
                        liveLink="https://vueflix-demo.netlify.app/"
                        techIcons={["Vue", "Tailwind", "JavaScript",]}
                    />
                </motion.div>

                {/* Left Side (Fades in from Left) */}
                <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <ProjectCard
                        title="PureSmile Clinic"
                        description="A modern, easy-to-use, and fully responsive dental clinic website with simple booking and all the info patients need."
                        imageSrc="/RecentProject/puresmile/psm.png"
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
                        techIcons={["Nextjs", "Tailwind", "TypeScript", "API",]}
                    />
                </motion.div>

                <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <ProjectCard
                        title="Process Inspection Request (PIR)"
                        description="PIR enables users to report issues with images, severity levels, and statuses, manage requests with real-time tracking, and generate reports in Excel and PDF.
"
                        imageSrc="/RecentProject/pir.png"
                        liveLink=""
                        techIcons={["Nextjs", "Tailwind", "JavaScript", "MongoDB", "Cloudinary"]}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default RecentProjects;
