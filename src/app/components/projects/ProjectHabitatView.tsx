import React from "react";

export default function ProjectHabitatView() {
    return (
        <div className="h-full overflow-y-auto px-8 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-clash-grotesk-medium text-foreground">
                            Habitat
                        </h1>
                        <p className="text-lg text-foreground/80 font-sofia-sans-regular">
                            A sustainable living platform that connects
                            environmentally conscious individuals with
                            eco-friendly practices and communities.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        <div className="bg-background-dark p-6 rounded-lg border border-accent/20">
                            <h3 className="text-xl font-clash-grotesk-medium text-accent mb-3">
                                Overview
                            </h3>
                            <p className="text-foreground/80 font-sofia-sans-regular">
                                Habitat empowers users to adopt sustainable
                                lifestyles through personalized recommendations,
                                community challenges, and educational resources.
                                The platform tracks environmental impact and
                                provides actionable insights for reducing carbon
                                footprint.
                            </p>
                        </div>

                        <div className="bg-background-dark p-6 rounded-lg border border-accent/20">
                            <h3 className="text-xl font-clash-grotesk-medium text-accent mb-3">
                                Key Features
                            </h3>
                            <ul className="space-y-2 text-foreground/80 font-sofia-sans-regular">
                                <li>
                                    • Carbon footprint tracking and analysis
                                </li>
                                <li>
                                    • Sustainable living challenges and rewards
                                </li>
                                <li>• Community forums and local groups</li>
                                <li>• Eco-friendly product recommendations</li>
                                <li>• Educational content and resources</li>
                            </ul>
                        </div>

                        <div className="bg-background-dark p-6 rounded-lg border border-accent/20">
                            <h3 className="text-xl font-clash-grotesk-medium text-accent mb-3">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Vue.js",
                                    "TypeScript",
                                    "Nuxt.js",
                                    "SCSS",
                                    "Node.js",
                                    "MongoDB",
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
