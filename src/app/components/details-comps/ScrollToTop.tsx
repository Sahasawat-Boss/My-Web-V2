"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.button
            className="fixed z-[999] bottom-8 right-6 p-2 rounded-full border bg-black/65 border-purple-400/90 shadow-lg hover:bg-purple-800/65 transition-all hover110"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isVisible ? 0.75 : 0, scale: isVisible ? 1 : 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <FaArrowUp className="w-5 h-5 text-purple-500" />
        </motion.button>
    );
};

export default ScrollToTop;
