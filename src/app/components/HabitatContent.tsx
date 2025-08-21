"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HabitatContent() {
    const technologies = [
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Tailwind CSS",
        "shadcn/ui",
    ];

    const backgroundColors = [
        "bg-neutral-900/50",
        "bg-neutral-900/70",
        "bg-neutral-900/90",
    ];

    // Function to get a random background color
    const getRandomBgColor = () => {
        return backgroundColors[
            Math.floor(Math.random() * backgroundColors.length)
        ];
    };

    return (
        <div className="max-w-4xl mx-auto space-y-16">
            {/* Project Hero Section */}
            <div className="flex flex-row items-center justify-between px-2">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h1 className="text-6xl font-clash-grotesk-medium">
                        Habitat
                    </h1>
                </motion.div>
                <button className="bg-blue-500 items-center justify-center flex h-12 w-12 rounded-full">
                    <Image
                        src="/githubicon-light.svg"
                        alt="GitHub"
                        width={22}
                        height={22}
                    />
                </button>
            </div>

            {/* Project Image */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="relative -mx-6 md:-mx-20 lg:-mx-60 rounded-lg overflow-hidden"
            >
                <Image
                    src="/projects-images/habitat/habitat-thumbnail.png"
                    alt="Habitat Project Screenshot"
                    width={1000}
                    height={600}
                    className="w-full h-full object-cover mx-auto"
                />
            </motion.div>

            {/* Project Description */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="space-y-8"
            >
                <div className="space-y-4">
                    <h2 className="text-2xl font-clash-grotesk-medium">
                        About the Project
                    </h2>
                    <div className="text-foreground/80 font-sofia-sans-regular space-y-4 leading-relaxed">
                        <p>
                            Habitat is a comprehensive platform designed to help
                            users discover, track, and cultivate healthy
                            lifestyle habits. The application focuses on
                            creating sustainable behavioral changes through
                            data-driven insights and personalized
                            recommendations.
                        </p>
                        <p>
                            Built with a modern full-stack architecture, Habitat
                            combines an intuitive React frontend with a robust
                            Python backend, providing users with real-time habit
                            tracking and detailed analytics.
                        </p>
                    </div>
                </div>

                {/* Key Features */}
                <div className="space-y-4">
                    <h3 className="text-xl font-clash-grotesk-medium">
                        Key Features
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3 text-foreground/80 font-sofia-sans-regular">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            Personalized habit tracking dashboard
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            Data visualization and analytics
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            Goal setting and progress tracking
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            Social features and community support
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            RESTful API with comprehensive endpoints
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            Responsive design across all devices
                        </li>
                    </ul>
                </div>
            </motion.div>

            {/* Technologies Used */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                className="space-y-4"
            >
                <h3 className="text-xl font-clash-grotesk-medium">
                    Technologies Used
                </h3>
                <div className="flex flex-wrap">
                    {technologies.map((tech, index) => (
                        <motion.span
                            key={tech}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                                delay: 0.4 + index * 0.05,
                            }}
                            className=""
                        >
                            <div
                                className={`font-clash-grotesk-regular px-3 py-2 text-white ${getRandomBgColor()}`}
                            >
                                {tech}
                            </div>
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Additional Project Screenshot */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, ease: "easeOut", delay: 0.1 }}
                className="relative -mx-6 md:-mx-20 lg:-mx-60 rounded-lg overflow-hidden"
            >
                <Image
                    src="/projects-images/habitat/light.png"
                    alt="Habitat Project Light Mode"
                    width={1000}
                    height={600}
                    className="w-full h-full object-cover mx-auto"
                />
            </motion.div>

            {/* Bottom Spacing */}
            <div className="h-16" />
        </div>
    );
}
