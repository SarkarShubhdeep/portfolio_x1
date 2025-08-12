import React from "react";

export default function ProjectMomentumView() {
    return (
        <div className="h-full overflow-y-auto px-8 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-clash-grotesk-medium text-foreground">
                            Momentum
                        </h1>
                        <p className="text-lg text-foreground/80 font-sofia-sans-regular">
                            A productivity and habit-building application that
                            helps users build consistent routines and maintain
                            motivation over time.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        <div className="bg-background-dark p-6 rounded-lg border border-accent/20">
                            <h3 className="text-xl font-clash-grotesk-medium text-accent mb-3">
                                Overview
                            </h3>
                            <p className="text-foreground/80 font-sofia-sans-regular">
                                Momentum focuses on building lasting habits
                                through science-backed techniques and
                                gamification. The app provides personalized
                                coaching, streak tracking, and social
                                accountability features to help users achieve
                                their long-term goals.
                            </p>
                        </div>

                        <div className="bg-background-dark p-6 rounded-lg border border-accent/20">
                            <h3 className="text-xl font-clash-grotesk-medium text-accent mb-3">
                                Key Features
                            </h3>
                            <ul className="space-y-2 text-foreground/80 font-sofia-sans-regular">
                                <li>
                                    • Habit tracking with streak visualization
                                </li>
                                <li>
                                    • AI-powered coaching and recommendations
                                </li>
                                <li>
                                    • Social accountability and buddy system
                                </li>
                                <li>
                                    • Gamification with points and achievements
                                </li>
                                <li>• Data-driven insights and analytics</li>
                            </ul>
                        </div>

                        <div className="bg-background-dark p-6 rounded-lg border border-accent/20">
                            <h3 className="text-xl font-clash-grotesk-medium text-accent mb-3">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "React Native",
                                    "TypeScript",
                                    "Expo",
                                    "Firebase",
                                    "Redux",
                                    "Chart.js",
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
