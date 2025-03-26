"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.35 });

    return (
        <section
            id="Contact"
            ref={ref}
            className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-8 lg:px-24"
        >
            <div className="flex flex-col justify-center items-center text-center">
                {/* Title */}
                <motion.h2
                    className="text-2xl sm:text-3xl font-bold mb-6 hover"
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 0.8 }}
                >
                    Let's <span className="gradient-text-purple">Connect</span>
                    <p className="text-gray-400 text-base mb-2">
                        Reach out for collaborations, inquiries, or just to say hello!
                    </p>
                </motion.h2>


                {/* Contact Box */}
                <motion.div
                    className="bg-black/15 border border-white/15 w-fit px-8 py-6 rounded-2xl s text-left hover"
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Github */}
                    <div className="mb-6">
                        <p className="text-gray-400 text-left gradient-text-purple ">GitHub</p>
                        <a
                            href="https://github.com/Sahasawat-Boss "
                            target="_blank"
                            className="flex items-center justify-left font-bold text- gap-2 hover:text-blue-400 transition-all"
                        >
                            <FiExternalLink /> github.com/Sahasawat-Boss
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="mb-6">
                        <p className="text-gray-400 text-left gradient-text-purple ">Phone</p>
                        <a
                            href="tel:0868684466"
                            className="flex items-center justify-left font-bold text- gap-2 hover:text-blue-400 transition-all"
                        >
                            <FiPhone /> 086-868-4466
                        </a>
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <p className="text-gray-400 text-left gradient-text-purple ">Email</p>
                        <a
                            href="mailto:sahasawat.rk@gmail.com"
                            className="flex items-center justify-left font-bold text- gap-2 hover:text-blue-400 transition-all"
                        >
                            <FiMail /> sahasawat.rk@gmail.com
                        </a>
                    </div>

                    {/* Contact Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex justify-center mt-6"
                    >
                        <a
                            href="mailto:sahasawat.rk@gmail.com"
                            className="bg-blue-600 hover:bg-blue-500 text- px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-all hover"
                        >
                            Send a Message
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
