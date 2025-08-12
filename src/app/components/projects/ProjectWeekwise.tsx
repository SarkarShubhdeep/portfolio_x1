import React from "react";
import { motion } from "motion/react";
import ProjectsNav from "./components/ProjectsNav";

interface ProjectWeekwiseProps {
    onClose: () => void;
}

export default function ProjectWeekwise({ onClose }: ProjectWeekwiseProps) {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.4,
            }}
            className="fixed h-screen w-screen bg-background-dark/90 backdrop-blur-xl z-[100] top-0 left-0"
        >
            <div className="bg-blue-500/20">
                <ProjectsNav onClose={onClose} />
            </div>
        </motion.div>
    );
}
