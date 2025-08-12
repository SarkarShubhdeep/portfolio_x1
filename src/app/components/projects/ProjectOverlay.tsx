import React from "react";
import { motion } from "motion/react";
import ProjectsNav from "./components/ProjectsNav";
import ProjectWeekwiseView from "./ProjectWeekwiseView";
import ProjectHabitatView from "./ProjectHabitatView";
import ProjectMomentumView from "./ProjectMomentumView";

export type ProjectType = "weekwise" | "habitat" | "momentum";

interface ProjectOverlayProps {
    onClose: () => void;
    activeProject: ProjectType;
    onProjectChange: (project: ProjectType) => void;
}

export default function ProjectOverlay({
    onClose,
    activeProject,
    onProjectChange,
}: ProjectOverlayProps) {
    const renderProjectView = () => {
        switch (activeProject) {
            case "weekwise":
                return <ProjectWeekwiseView />;
            case "habitat":
                return <ProjectHabitatView />;
            case "momentum":
                return <ProjectMomentumView />;
            default:
                return <ProjectWeekwiseView />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.4,
            }}
            className="fixed h-screen w-screen bg-background-dark/90 backdrop-blur-xl z-[100] top-0 left-0"
        >
            <ProjectsNav
                onClose={onClose}
                activeProject={activeProject}
                onProjectChange={onProjectChange}
            />
            <div className="pt-16 h-full overflow-hidden">
                {renderProjectView()}
            </div>
        </motion.div>
    );
}
