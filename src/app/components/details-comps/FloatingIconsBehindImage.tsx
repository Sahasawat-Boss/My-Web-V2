"use client";

import { FaLaptopCode, FaSearch, FaDraftingCompass } from "react-icons/fa";
import { RiFlowChart } from "react-icons/ri";
import { motion } from "framer-motion";

export default function FloatingIconsBehindImage() {
    const floatingIcon = (delay: number) => ({
        opacity: 1,
        scale: 1,
        y: [0, -7, 0],
        transition: {
            delay,
            duration: 2.2,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut",
        },
    });

    return (
        <div className="absolute inset-0 z-0 scale-90">
            {/* Top */}
            <motion.div
                className="absolute top-[-20px] left-5 -translate-x-1/2 text-purple-500/60 text-xl"
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={floatingIcon(0.2)}
            >
                <FaLaptopCode />
            </motion.div>

            {/* Bottom Left */}
            <motion.div
                className="absolute bottom-[-20px] left-[-10px] text-purple-400/60 text-xl"
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={floatingIcon(0.4)}
            >
                <FaSearch />
            </motion.div>

            {/* Bottom Right */}
            <motion.div
                className="absolute bottom-[-20px] right-[-10px] text-purple-500/60 text-xl"
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={floatingIcon(0.6)}
            >
                <FaDraftingCompass />
            </motion.div>

            {/* Top Right */}
            <motion.div
                className="absolute top-[-10px] right-[-15px] text-purple-400/60 text-xl"
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={floatingIcon(0.8)}
            >
                <RiFlowChart />
            </motion.div>
        </div>
    );
}
