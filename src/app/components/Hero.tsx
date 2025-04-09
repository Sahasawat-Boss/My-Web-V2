"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";

//details-comps
import FloatingTech from "./details-comps/FloatingTech";
import FloatingIconsBehindImage from "./details-comps/FloatingIconsBehindImage";

const Hero = () => {
    // 🔹 Detect when this section is in view
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.6 });

    // ✅ Scroll to Contact Section
    const handleScrollToProjects = () => {
        const projectSection = document.querySelector("#Project");
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <main id="hero" className="relative">
            <motion.section
                ref={ref}
                className="relative flex justify-center items-center w-full h-screen px-6 pt-32 pb-24 text-gray-200"
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
                        <h1 className="text-center">
                            <span className="text-gray-200/55 text-xl md:text-2xl xl:text-3xl font-semibold tracking-wider">
                                Transform Visions into
                            </span>
                            <br />
                            <span className="gradient-text-purple text-3xl md:text-4xl xl:text-5xl font-semibold tracking-wider">
                                Digital Experiences
                            </span>
                        </h1>
                    </motion.div>

                    {/* Animated Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {/* Profile Picture with Hover Effect */}
                        <div className="relative mt-8 w-fit">
                            {/* 🎯 Floating icons positioned behind the image */}
                            <FloatingIconsBehindImage />

                            <div className="relative z-10 rounded-full overflow-hidden group shadow-lg hover:shadow-purple-400/60">
                                <a href="https://github.com/Sahasawat-Boss" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        className="w-40 h-40 md:h-48 md:w-48 xl:h-52 xl:w-52 object-cover rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-5"
                                        src="/Images/Profiles/profile-pic.jpg"
                                        alt="Sahasawat Ruenkaew (Boss) - Full-Stack Developer Profile Picture"
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
                        </div>

                    </motion.div>

                    {/* Animated Subtitle */}
                    <motion.p
                        className="mt-6.5 mb-8 rounded-2xl bg-white/15 text-center text-sm sm:text-base xl:text-lg px-6 py-2.5 w-fit max-w-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Hi, I&apos;m <strong>Boss</strong>, a developer based in Chiang Mai, Thailand.
                        I build modern websites and digital solutions under the name <strong>BossBSynth</strong>.
                    </motion.p>


                    {/* ✅ Animated Contact Button with Scroll Function */}
                    <motion.button
                        className="flex w-fit items-center gap-2 rounded-full px-6 py-2 lg:text-lg border border-gray-500 shadow-md hover:shadow-purple-400 transition-all glowing-button cursor-pointer active:scale-75"
                        whileTap={{ scale: 0.85 }}
                        onClick={handleScrollToProjects} // Calls the scroll function
                    >
                        View my works
                        <FaLocationArrow className="mt-0.5 text-sm" />
                    </motion.button>

                    {/* ✅ Floating Tech Stack (Added at the Bottom) */}
                    <FloatingTech />
                </div>
            </motion.section>
        </main>
    );
};

export default Hero;
