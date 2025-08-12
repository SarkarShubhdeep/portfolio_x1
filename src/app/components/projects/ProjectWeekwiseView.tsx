import React from "react";

export default function ProjectWeekwiseView() {
    return (
        <div className="h-full overflow-y-auto px-8 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-clash-grotesk-medium text-foreground">
                            Weekwise
                        </h1>
                        <p className="text-lg text-foreground/80 font-sofia-sans-regular">
                            A comprehensive weekly planning and tracking
                            application designed to help users organize their
                            schedules and monitor progress.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        <div className="bg-background-dark p-6 rounded-lg border border-accent/20">
                            <h3 className="text-xl font-clash-grotesk-medium text-accent mb-3">
                                Overview
                            </h3>
                            <p className="text-foreground/80 font-sofia-sans-regular">
                                Weekwise provides an intuitive interface for
                                planning weekly schedules, setting goals, and
                                tracking progress. Built with modern web
                                technologies to ensure a smooth and responsive
                                user experience.
                            </p>
                        </div>

                        <div className="bg-background-dark p-6 rounded-lg border border-accent/20">
                            <h3 className="text-xl font-clash-grotesk-medium text-accent mb-3">
                                Key Features
                            </h3>
                            <ul className="space-y-2 text-foreground/80 font-sofia-sans-regular">
                                <li>
                                    • Weekly calendar view with drag-and-drop
                                    functionality
                                </li>
                                <li>• Goal setting and progress tracking</li>
                                <li>
                                    • Task categorization and prioritization
                                </li>
                                <li>• Analytics and insights dashboard</li>
                                <li>• Cross-device synchronization</li>
                            </ul>
                        </div>

                        <div className="bg-background-dark p-6 rounded-lg border border-accent/20">
                            <h3 className="text-xl font-clash-grotesk-medium text-accent mb-3">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "React",
                                    "TypeScript",
                                    "Next.js",
                                    "Tailwind CSS",
                                    "Framer Motion",
                                    "Node.js",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-sofia-sans-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
