// navbar component
"use client";

import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import FocusButton from "./FocusButton";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
                    <FocusButton
                        href="#projects-section"
                        className="flex items-center justify-center uppercase text-xl font-clash-grotesk-medium px-[26px] py-[16px] h-[60px] hover:bg-accent hover:text-background transition-all duration-150 w-full"
                        onClick={() => setIsOpen(false)}
                    >
                        PROJECTS
                    </FocusButton>
                    <FocusButton
                        href="#about-section"
                        className="flex items-center justify-center uppercase text-xl font-clash-grotesk-medium px-[26px] py-[16px] h-[60px] hover:bg-accent hover:text-background transition-all duration-150 w-full"
                        onClick={() => setIsOpen(false)}
                    >
                        ABOUT
                    </FocusButton>
                    <FocusButton
                        href="#contact-section"
                        className="flex items-center justify-center uppercase text-xl font-clash-grotesk-medium px-[26px] py-[16px] h-[60px] hover:bg-accent hover:text-background transition-all duration-150 w-full"
                        onClick={() => setIsOpen(false)}
                    >
                        CONTACT
                    </FocusButton>
                    <p className="text-sm py-[26px] text-center absolute bottom-0 w-full font-sofia-sans-regular">
                        Copyright © 2025 Shubhdeep Sarkar
                    </p>
                </div>
            </div>

            <div className="backdrop-blur-lg flex justify-between items-center bg-foreground/10 h-[80px] fixed z-20 font-clash-grotesk-medium w-full top-0 left-0 md:max-w-[800px] md:top-[120px] md:left-[80px] lg:left-[240px]">
                <div className="group flex items-center flex-1 h-full pl-[26px] w-[160px] hover:bg-accent/80 transition-all duration-150">
                    <Image
                        src="/shubhdeep-sarkar-dark.svg"
                        alt="logo"
                        width={100}
                        height={100}
                        className="min-w-[100px] max-w-[100px] h-[100px] group-hover:hidden transition-transform"
                    />
                    <Image
                        src="/shubhdeep-sarkar-light.svg"
                        alt="logo"
                        width={100}
                        height={100}
                        className="min-w-[100px] max-w-[100px] h-[100px] hidden group-hover:block transition-transform"
                    />
                </div>
                <div className="hidden lg:flex items-center justify-center w-[480px] h-full">
                    <FocusButton
                        href="#projects-section"
                        className="h-full flex items-center justify-center w-[120px] uppercase"
                    >
                        PROJECTS
                    </FocusButton>
                    <FocusButton
                        href="#about-section"
                        className="h-full flex items-center justify-center w-[120px] uppercase"
                    >
                        ABOUT
                    </FocusButton>
                    <FocusButton
                        href="#contact-section"
                        className="h-full flex items-center justify-center w-[120px] uppercase"
                    >
                        CONTACT
                    </FocusButton>
                </div>
                {/* if the viewport is less than lg, show the hamburger menu */}
                <div className="flex items-center justify-end flex-1 gap-2 h-full w-[160px]">
                    <Link
                        href="/Shubhdeep_Sarkar_Resume.pdf"
                        className="group flex items-center justify-end gap-2 h-full pr-[26px] w-[160px] hover:bg-accent/80 hover:text-background transition-all duration-150 uppercase"
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
                    <div className="lg:hidden">
                        <HamburgerMenu
                            isOpen={isOpen}
                            onToggle={() => setIsOpen(!isOpen)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
