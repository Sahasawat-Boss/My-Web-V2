"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./details-comps/ProjectCard";
import SelectProject from "./details-comps/SelectProject";

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


const ShowcaseProject = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.15 }); // Trigger when 15% is in view

    return (
        <section
            id="Project"
            ref={ref} className="pt-24 pb-10 px-6 flex flex-col items-center bg-black/35">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-white  text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="gradient-text-gray"><span className="text-4xl md:text-[43px] ">Projects</span> fueled by {" "}</span>
                <span className="gradient-text-purple">passion and skill</span>
            </motion.h2>

            {/* Underline Animation */}
            <motion.div
                className="mt-4 w-[300px] md:w-[530px] h-0.5 bg-gradient-to-r from-gray-300 via-purple-400 to-purple-600 shadow-[0px_0px_10px_rgba(168,85,247,0.8)] mb-10 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            />

            <SelectProject/>
        </section>
    );
};

export default ShowcaseProject;
