"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface ProjectsNavProps {
    onClose: () => void;
    currentProject?: string;
    onProjectChange: (project: string) => void;
}

export default function ProjectsNav({
    onClose,
    currentProject,
    onProjectChange,
}: ProjectsNavProps) {
    const projects = [
        { id: "weekwise", name: "Weekwise" },
        { id: "habitat", name: "Habitat" },
        { id: "momentum", name: "Momentum" },
    ];
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border h-16 flex items-center "
        >
            {/* Project title */}
            <button
                onClick={onClose}
                className="group flex items-center justify-center h-full bg-accent/5 px-6 hover:bg-accent/20  transition-all duration-150 text-sm font-clash-grotesk-medium gap-3 border-r"
            >
                <Image
                    src="/arrowleft-dark.svg"
                    alt="Close"
                    width={16}
                    height={16}
                />
                Back to Home
            </button>
            {projects.map((project) => (
                <button
                    key={project.id}
                    onClick={() => onProjectChange(project.id)}
                    className={`group flex items-center justify-center h-full bg-accent/5 px-6 hover:bg-accent/20 transition-all duration-150 text-sm font-clash-grotesk-medium gap-3 border-r ${
                        currentProject === project.id
                            ? "border-b-2 border-b-accent"
                            : ""
                    }`}
                >
                    {project.name}
                </button>
            ))}
        </motion.nav>
    );
}
