"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "react-modal";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

export default function Port() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const images = [
        "/Images/project/Sone3.png", "/Images/project/Sone.png", "/Images/mocks/mock1.png", "/Images/mocks/mock2.png",
        "/Images/project/EC02.png", "/Images/project/aichat2.png", "/Images/project/bp1.png", "/Images/project/bp2.png",
        "/RecentProject/PIR/pir4.png", "/Images/project/Store1.png", "/Images/project/scrollgall.png"
    ];

    const openModal = (imageSrc: string) => {
        setModalImage(imageSrc);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    // Scroll Functions
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    // Auto-scroll with infinite loop
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollContainerRef.current) {
                const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;

                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    setTimeout(() => {
                        if (scrollContainerRef.current) {
                            scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
                        }
                    }, 350);
                } else {
                    scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
                }
            }
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full flex flex-col items-center justify-center text-white px-6 py-16">

            {/* Title with Animation */}
            <motion.div
                className="w-full text-center mb-5"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ amount: 0.3, once: false }} // Runs every time when 20% is in viewport
            >
                <h3
                    className="gradient-text-gray font-semibold tracking-wider transition-all duration-500 ease-in-out"
                >
                    <span className="text-2xl md:text-3xl">Featured </span>
                    <span className="text-3xl md:text-4xl "> Projects</span>
                </h3>
            </motion.div>

            {/* Scrollable Image Section with Animation */}
            <motion.div
                className="relative w-full max-w-5xl flex items-center justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.2, once: false }} // Runs every time when 20% is in viewport
            >
                {/* Left Arrow */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 z-20 bg-black/50 hover:bg-blue-600/60 p-1.5 rounded-full hover:bg-opacity-80 transition duration-300 shadow-md hover110"
                >
                    <AiOutlineLeft className="w-8 h-8 text-white" />
                </button>

                {/* Scrollable Container */}
                <div
                    ref={scrollContainerRef}
                    className="w-full overflow-x-scroll overflow-y-hidden flex space-x-2 py-4 scrollbar-hide snap-x snap-mandatory"
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openModal(src)}
                            className="cursor-pointer flex-shrink-0 transition-transform duration-300"
                        >
                            <div className="relative group">
                                <Image
                                    src={src}
                                    alt={`Project ${index + 1}`}
                                    width={280}
                                    height={180}
                                    className="shadow-xl group-hover:shadow-purple-500/40"
                                />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center text-lg font-bold text-white opacity-0 group-hover:opacity-100">
                                    Click to View
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 z-20 bg-black/50 p-1.5  hover:bg-blue-600/60 rounded-full hover:bg-opacity-80 transition duration-300 shadow-md  hover110"
                >
                    <AiOutlineRight className="w-8 h-8 text-white" />
                </button>
            </motion.div>

            {/* Modal for Enlarged Image */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-lg z-50"
                overlayClassName="fixed inset-0 z-50"
                ariaHideApp={false}
            >
                {/* Click anywhere to close */}
                <div className="absolute inset-0" onClick={closeModal}></div>

                <div className="relative bg-gray-900 p-2 shadow-lg">
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-4 bg-black p-1.5 rounded-full border  border-white/60 hover110 hover:bg-blue-500/70 transition floating"
                    >
                        <AiOutlineClose className="w-6 h-6 text-white" />
                    </button>

                    <Image
                        src={modalImage}
                        alt="Enlarged Project Preview"
                        width={1000}
                        height={600}
                        className="shadow-xl"
                    />
                </div>
            </Modal>
        </section>
    );
}
