"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const servicesList = [
    { id: "01", title: "Workflow Design", description: "Streamline business processes for efficiency and productivity." },
    { id: "02", title: "Product Design & Prototyping", description: "Create interactive mockups to validate ideas before development." },
    { id: "03", title: "Web Development", description: "Build fast, scalable web apps that align with your brand vision." },
    { id: "04", title: "AI-Powered Solutions", description: "Enhance business with AI-driven automation and chatbots." },
];

const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } }
};

const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } }
};

const Services: FC = () => {
    return (
        <section id="services" className="text-white py-24 px-12 mx-auto max-w-3xl">
            <div className="max-w-3xl mx-auto">

                {/* Section Title with Scroll Animation */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-purple-400 to-gray-800 bg-clip-text text-transparent uppercase mb-8 "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeInVariants}
                >
                    <span>Service</span>
                </motion.h2>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="flex items-start gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={slideInVariants}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <span className="text-3xl text-purple-400 pt-2 floating">
                                {service.id}
                            </span>
                            <div>
                                <h3 className="text-lg font-bold mb-0.5">{service.title}</h3>
                                <p className="text-gray-200 text-base pl-1.5 pt-1">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
