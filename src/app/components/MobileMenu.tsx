"use client";

import Link from "next/link";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
            />

            {/* Menu Container */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-background/80 backdrop-blur-lg border-l border-foreground/10 z-40 transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close button area */}
                <div className="flex justify-end p-6">
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center hover:bg-accent/80 rounded-md transition-colors duration-150"
                    >
                        <span className="text-2xl text-foreground">×</span>
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col px-6 py-8">
                    <Link
                        href="#projects-section"
                        onClick={onClose}
                        className="py-4 px-4 text-xl font-clash-grotesk-medium uppercase hover:bg-accent/80 hover:text-background transition-all duration-150 rounded-md"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#about-section"
                        onClick={onClose}
                        className="py-4 px-4 text-xl font-clash-grotesk-medium uppercase hover:bg-accent/80 hover:text-background transition-all duration-150 rounded-md"
                    >
                        About
                    </Link>
                    <Link
                        href="#contact-section"
                        onClick={onClose}
                        className="py-4 px-4 text-xl font-clash-grotesk-medium uppercase hover:bg-accent/80 hover:text-background transition-all duration-150 rounded-md"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Resume Link */}
                <div className="absolute bottom-8 left-6 right-6">
                    <Link
                        href="/Shubhdeep_Sarkar_Resume.pdf"
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 py-4 px-4 bg-foreground/10 hover:bg-accent hover:text-background transition-all duration-150 rounded-md uppercase font-clash-grotesk-medium"
                    >
                        Resume
                        <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            className="group-hover:translate-y-[-20px] group-hover:translate-x-[16px] transition-all duration-150"
                        >
                            <path
                                d="M3.5 16.5L14.5 3.5M14.5 3.5H5M14.5 3.5V13"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    );
}
