"use client";

import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";

const socialLinks = [
    { href: "https://github.com/Sahasawat-Boss", Icon: AiFillGithub, label: "GitHub" },
];

const Footer = () => {
    return (
        <motion.footer
            className="py-8 mx-auto px-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="w-full text-lg my-8 flex flex-col justify-center items-center gap-6">

                {/* Social Links */}
                <motion.ul
                    className="flex gap-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                >
                    {socialLinks.map(({ href, Icon, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            aria-label={label}
                            className="text-gray-200 flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 border border-gray-600 hover:bg-gray-700 transition-all duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Icon size={35} className="hover:text-purple-400 transition-colors" />
                        </motion.a>
                    ))}
                </motion.ul>

                {/* Footer Text */}
                <motion.p
                    className="text-gray-300 text-sm md:text-base tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                >
                    Created by BossBSynth © 2025. All rights reserved.
                </motion.p>
            </div>
        </motion.footer>
    );
}

export default Footer;
