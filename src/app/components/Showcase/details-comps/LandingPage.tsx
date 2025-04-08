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


const LandingPage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.15 }); // Trigger when 15% is in view

    return (
        <section
            id="Project"
            ref={ref} className="pt-2 px-6 flex flex-col items-center bg-black/35">

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2  gap-x-10 gap-y-5 w-fit"> {/*  xl:grid-cols-3  */}


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
                        title="PureSmile Clinic"
                        description="A modern, easy-to-use, and fully responsive dental clinic website with simple booking and all the info patients need."
                        imageSrc="/RecentProject/puresmile/psm.png"
                        liveLink="https://puresmile-clinic-bsynth-demo.vercel.app/"
                        techIcons={["React", "Tailwind", "TypeScript"]}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default LandingPage;
