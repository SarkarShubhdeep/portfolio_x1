import React from "react";
import ProjectsNav from "./components/ProjectsNav";

export default function ProjectWeekwise() {
    return (
        <div className="fixed h-screen w-screen bg-background-dark/90 backdrop-blur-xl z-100 top-0 left-0">
            <div className="bg-blue-500/20">
                <ProjectsNav />
            </div>
        </div>
    );
}
