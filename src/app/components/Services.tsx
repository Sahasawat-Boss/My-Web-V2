"use client";
import ResponsiveMockup from "./details-comps/ResponsiveMockup";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLaptopCode, FaSearch , FaDraftingCompass } from "react-icons/fa"; // Import icons
import { RiFlowChart } from "react-icons/ri";

const servicesList = [
    { id: "01", title: "Workflow Design", description: "Streamline business processes for efficiency and productivity.", icon: <RiFlowChart  size={26} /> },
    { id: "02", title: "Product Design & Prototyping", description: "Create interactive mockups to validate ideas before development.", icon: <FaDraftingCompass  size={26} /> },
    { id: "03", title: "Web Development", description: "Build fast, scalable web apps that align with your brand vision.", icon: <FaLaptopCode  size={26} /> },
    { id: "04", title: "SEO Optimization", description: "Boost your website traffic and visibility with proven SEO strategies.", icon: <FaSearch  size={24} /> }
];

const Services: FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: false });

    return (
        <section id="services" className="text-white pt-22 sm:pt-24 px-12 mx-auto max-w-3xl" ref={ref}>
            <div className="max-w-3xl mx-auto">

                {/* Section Title with Scroll Animation */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-gray-800 bg-clip-text text-transparent uppercase"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <span>Services</span>
                </motion.h2>

                {/* Underline Animation */}
                <motion.div
                    className="mt-2 w-[220px] h-0.5 bg-gradient-to-br from-gray-300 to-purple-700 shadow-[0px_0px_10px_rgba(168,85,247,0.8)] mb-10 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.15, ease: "easeOut" }}
                />

                {/* Services Grid with Alternating Animations */}
                <div className="grid md:grid-cols-2 gap-6 ">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }} // Slide left for odd, right for even
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.35, ease: "easeInOut" }}
                        >
                            <div className="flex items-start hover110 gap-3 hover:bg-white/15 p-2 rounded-lg">
                                <span className="text-3xl text-purple-400 pt-2 floating">
                                    {service.icon} {/* 🆕 Icon instead of number */}
                                </span>
                                <div>
                                    <h3 className="text-lg font-bold mb-0.5 gradient-text-purple ">{service.title}</h3>
                                    <p className="text-gray-200 pl-1.5 pt-1">{service.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Section Title with Scroll Animation */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-gray-800 bg-clip-text text-transparent uppercase"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 2.2, ease: "easeInOut" }}
                >
                    <ResponsiveMockup />
                </motion.h2>
            </div>
        </section>
    );
};

export default Services;
