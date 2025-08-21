"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProjectsNav from "./ProjectsNav";
import WeekwiseContent from "./WeekwiseContent";
import HabitatContent from "./HabitatContent";

interface ProjectOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    currentProject?: string;
    onProjectChange: (project: string) => void;
    children?: React.ReactNode;
}

export default function ProjectOverlay({
    isOpen,
    onClose,
    currentProject,
    onProjectChange,
    children,
}: ProjectOverlayProps) {
    // Prevent background scroll when overlay is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        // Cleanup function to restore scroll when component unmounts
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Close overlay on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed top-0 left-0 w-screen h-screen z-40 backdrop-blur-2xl bg-background/50"
                    onClick={(e) => {
                        // Close overlay when clicking on backdrop
                        if (e.target === e.currentTarget) {
                            onClose();
                        }
                    }}
                >
                    {/* Navigation */}
                    <ProjectsNav
                        onClose={onClose}
                        currentProject={currentProject}
                        onProjectChange={onProjectChange}
                    />

                    {/* Scrollable Content */}
                    <div className="pt-20 h-full">
                        <ScrollArea className="h-full">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                    delay: 0.1,
                                }}
                                className="px-6 md:px-20 lg:px-60 py-10"
                            >
                                {children ||
                                    (currentProject === "weekwise" ? (
                                        <WeekwiseContent />
                                    ) : currentProject === "habitat" ? (
                                        <HabitatContent />
                                    ) : (
                                        <div className="min-h-[80vh] flex items-center justify-center">
                                            <div className="text-center">
                                                <h3 className="text-2xl font-clash-grotesk-medium mb-4">
                                                    {currentProject ||
                                                        "Project"}{" "}
                                                    Details
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    Project content will be
                                                    displayed here.
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </motion.div>
                        </ScrollArea>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
