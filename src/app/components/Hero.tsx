"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useMotionValue, useMotionTemplate, motion, animate, useInView } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";

//details-comps
import FloatingTech from "./details-comps/FloatingTech";

const COLORS_TOP = ["#1E67C6", "#CE84CF", "#DD335C"];

const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 4.5,
            repeat: Infinity,
            repeatType: "mirror"
        });
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    // 🔹 Detect when this section is in view
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });

    // ✅ Scroll to Contact Section
    const handleScrollToProjects = () => {
        const projectSection = document.querySelector("#Project4");
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <main id="hero" className="relative">
            <motion.section
                ref={ref}
                style={{ backgroundImage }}
                className="relative flex justify-center items-center h-screen px-6 pt-32 pb-24 text-gray-200"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="z-10 flex flex-col items-center">
                    {/* Animated Heading */}
                    <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex flex-col gap-2 justify-center items-center hover">
                            <span className="text-gray-200/55 text-xl md:text-2xl xl:text-3xl font-semibold tracking-wide">
                                Transform Visions into
                            </span>
                            <span className="bg-gradient-to-br from-white to-gray-600 bg-clip-text text-transparent text-3xl md:text-4xl xl:text-5xl font-semibold tracking-wide">
                                Digital Experiences
                            </span>
                        </div>
                    </motion.div>

                    {/* Animated Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {/* Profile Picture with Hover Effect */}
                        <div className="relative mt-8 rounded-full overflow-hidden group">
                            <a href="https://github.com/Sahasawat-Boss" target="_blank" rel="noopener noreferrer">
                                {/* Profile Image */}
                                <Image
                                    className="w-40 h-40 md:h-52 md:w-52 xl:h-60 xl:w-60 object-cover rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-5"
                                    src="/Images/Profiles/profile-pic.jpg"
                                    alt="profile pic"
                                    width={150}
                                    height={150}
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span className="text-white text-center font-semibold text-sm sm:text-lg">
                                        View My GitHub
                                    </span>
                                </div>
                            </a>
                        </div>

                    </motion.div>

                    {/* Animated Subtitle */}
                    <motion.span
                        className="mt-4 mb-14 rounded-lg bg-gray-600/50 text-center text-sm sm:text-base xl:text-lg px-3.5 py-1.5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Hi, I&apos;m Boss - a Developer based in Thailand.
                    </motion.span>

                    {/* ✅ Animated Contact Button with Scroll Function */}
                    <motion.button
                        className="flex w-fit items-center gap-2 rounded-full px-6 py-2 lg:text-lg hover:cursor-pointer"
                        style={{
                            border,
                            boxShadow
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.85 }}
                        onClick={handleScrollToProjects} // Calls the scroll function
                    >
                        View my works
                        <FaLocationArrow className="mt-0.5 text-xs" />
                    </motion.button>

                    {/* ✅ Floating Tech Stack (Added at the Bottom) */}
                    <FloatingTech />
                </div>
            </motion.section>

        </main>
    );
}

export default Hero;