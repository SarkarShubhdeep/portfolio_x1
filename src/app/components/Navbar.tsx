// navbar component
"use client";

import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import { useState, useEffect } from "react";
import FocusButton from "./FocusButton";
import { motion, useScroll, useTransform } from "motion/react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const { scrollY } = useScroll();

    // Only apply scroll transform for medium screens and larger
    const y = useTransform(scrollY, [0, 100], [0, isLargeScreen ? -80 : 0]);

    // Get document height for bottom detection
    const [isAtBottom, setIsAtBottom] = useState(false);

    // Check if we're at the bottom of the page
    const checkIfAtBottom = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const isBottom = scrollTop + windowHeight >= documentHeight - 10; // 10px threshold
        setIsAtBottom(isBottom);
    };

    // Check screen size and add scroll listener
    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 768); // md breakpoint
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        window.addEventListener("scroll", checkIfAtBottom);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
            window.removeEventListener("scroll", checkIfAtBottom);
        };
    }, []);

    return (
        <>
            {/* Blur Overlay */}
            <div
                className={`fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-background/10 backdrop-blur-xl z-10 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                {/* Navigation Links */}
                <div className="flex flex-col items-center justify-center h-full relative">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={
                            isOpen
                                ? { y: 0, opacity: 1 }
                                : { y: 40, opacity: 0 }
                        }
                        transition={{
                            ease: "easeInOut",
                            duration: 0.4,
                            delay: 0.1,
                        }}
                        className="w-full overflow-hidden"
                    >
                        <FocusButton
                            href="#projects-section"
                            className="flex items-center justify-center uppercase text-xl font-clash-grotesk-medium px-[26px] py-[16px] h-[60px] hover:bg-accent hover:text-background transition-all duration-150 w-full"
                            onClick={() => setIsOpen(false)}
                        >
                            PROJECTS
                        </FocusButton>
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={
                            isOpen
                                ? { y: 0, opacity: 1 }
                                : { y: 40, opacity: 0 }
                        }
                        transition={{
                            ease: "easeInOut",
                            duration: 0.4,
                            delay: 0.2,
                        }}
                        className="w-full overflow-hidden"
                    >
                        <FocusButton
                            href="#about-section"
                            className="flex items-center justify-center uppercase text-xl font-clash-grotesk-medium px-[26px] py-[16px] h-[60px] hover:bg-accent hover:text-background transition-all duration-150 w-full"
                            onClick={() => setIsOpen(false)}
                        >
                            ABOUT
                        </FocusButton>
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={
                            isOpen
                                ? { y: 0, opacity: 1 }
                                : { y: 40, opacity: 0 }
                        }
                        transition={{
                            ease: "easeInOut",
                            duration: 0.4,
                            delay: 0.3,
                        }}
                        className="w-full overflow-hidden"
                    >
                        <FocusButton
                            href="#contact-section"
                            className="flex items-center justify-center uppercase text-xl font-clash-grotesk-medium px-[26px] py-[16px] h-[60px] hover:bg-accent hover:text-background transition-all duration-150 w-full"
                            onClick={() => setIsOpen(false)}
                        >
                            CONTACT
                        </FocusButton>
                    </motion.div>
                    <p className="text-sm py-[26px] text-center absolute bottom-0 w-full font-sofia-sans-regular">
                        Copyright © 2025 Shubhdeep Sarkar
                    </p>
                </div>
            </div>

            <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{ y }}
                transition={{
                    ease: "easeIn",
                    duration: 0.3,
                }}
                className={`backdrop-blur-lg flex justify-between items-center h-[80px] fixed z-20 font-clash-grotesk-medium w-full top-0 left-0 md:max-w-[800px] md:top-[120px] md:left-[80px] lg:left-[240px] overflow-hidden ${
                    isAtBottom ? "bg-background/60" : "bg-foreground/10"
                }`}
            >
                <motion.div
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        ease: "easeIn",
                        duration: 0.4,
                        delay: 0.4,
                    }}
                    className="group flex items-center flex-1 h-full pl-[26px] w-[160px] hover:bg-accent"
                >
                    <Image
                        src="/shubhdeep-sarkar-dark.svg"
                        alt="logo"
                        width={100}
                        height={100}
                        className="min-w-[100px] max-w-[100px] h-[100px] group-hover:invert"
                    />
                </motion.div>
                <div className="hidden lg:flex items-center justify-center w-[480px] h-full">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.4,
                            delay: 0.4,
                        }}
                    >
                        <FocusButton
                            href="#projects-section"
                            className="h-[80px] flex items-center justify-center w-[120px] uppercase"
                        >
                            Projects
                        </FocusButton>
                    </motion.div>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.4,
                            delay: 0.5,
                        }}
                    >
                        <FocusButton
                            href="#about-section"
                            className="h-[80px] flex items-center justify-center w-[120px] uppercase"
                        >
                            About
                        </FocusButton>
                    </motion.div>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.4,
                            delay: 0.6,
                        }}
                    >
                        <FocusButton
                            href="#contact-section"
                            className="h-[80px] flex items-center justify-center w-[120px] uppercase"
                        >
                            CONTACT
                        </FocusButton>
                    </motion.div>
                </div>
                {/* if the viewport is less than lg, show the hamburger menu */}
                <div className="flex items-center justify-end flex-1 gap-2 h-full w-[160px]">
                    <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.4,
                            delay: 0.7,
                        }}
                        className="h-full"
                    >
                        <Link
                            href="/Shubhdeep_Sarkar_Resume.pdf"
                            target="_blank"
                            className="group  flex items-center justify-end gap-2 h-full pr-[26px] w-[160px] hover:bg-accent hover:text-background transition-all duration-150 uppercase"
                        >
                            Resume
                            <Image
                                src="/arrowupright-dark.svg"
                                alt="resume"
                                width={18}
                                height={20}
                                className="group-hover:translate-y-[-20px] group-hover:translate-x-[16px] group-hover:brightness-0 hover:invert transition-all duration-150"
                            />
                        </Link>
                    </motion.div>
                    <div className="lg:hidden">
                        <HamburgerMenu
                            isOpen={isOpen}
                            onToggle={() => setIsOpen(!isOpen)}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}
