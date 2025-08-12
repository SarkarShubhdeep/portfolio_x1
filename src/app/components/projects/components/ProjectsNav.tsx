import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjectType } from "../ProjectOverlay";

interface ProjectsNavProps {
    onClose: () => void;
    activeProject: ProjectType;
    onProjectChange: (project: ProjectType) => void;
}

export default function ProjectsNav({
    onClose,
    activeProject,
    onProjectChange,
}: ProjectsNavProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`
                fixed top-0 left-0 right-0 z-50 
                flex bg-background border-b border-accent/20 
                font-clash-grotesk-medium
                transform transition-transform duration-500 ease-out
                ${isVisible ? "translate-y-0" : "-translate-y-full"}
            `}
        >
            <button
                onClick={onClose}
                className="flex items-center gap-2 px-6 py-3 hover:bg-accent hover:text-background transition-all duration-150 group"
            >
                <Image
                    src="/arrowleft-dark.svg"
                    alt="Back to Home"
                    width={18}
                    height={18}
                    className="group-hover:invert group-hover:-translate-x-3 transition-all duration-150"
                />
                Back to Home
            </button>
            <button
                onClick={() => onProjectChange("weekwise")}
                className={`flex items-center px-6 py-3 border-l border-accent/20 transition-all duration-150 ${
                    activeProject === "weekwise"
                        ? "text-accent bg-accent/10"
                        : "hover:bg-accent/10 cursor-pointer"
                }`}
            >
                Weekwise
            </button>
            <button
                onClick={() => onProjectChange("habitat")}
                className={`flex items-center px-6 py-3 border-l border-accent/20 transition-all duration-150 ${
                    activeProject === "habitat"
                        ? "text-accent bg-accent/10"
                        : "hover:bg-accent/10 cursor-pointer"
                }`}
            >
                Habitat
            </button>
            <button
                onClick={() => onProjectChange("momentum")}
                className={`flex items-center px-6 py-3 border-l border-accent/20 transition-all duration-150 ${
                    activeProject === "momentum"
                        ? "text-accent bg-accent/10"
                        : "hover:bg-accent/10 cursor-pointer"
                }`}
            >
                Momentum
            </button>
        </div>
    );
}
