"use client";

import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;

    githubUrl?: string;
    className?: string;
    primaryButtonText?: string;
    primaryOnClick?: () => void;
    secondaryButtonText?: string;
    secondaryOnClick?: () => void;
    onClick?: () => void;
}

export default function ProjectCard({
    title,
    description,
    primaryButtonText = "Live Demo",
    technologies,
    imageUrl,

    githubUrl,
    className = "",
    primaryOnClick,
    secondaryButtonText,
    secondaryOnClick,
    onClick,
}: ProjectCardProps) {
    return (
        <div
            className={`min-w-[500px] h-[500px] bg-foreground/10 relative overflow-hidden group cursor-pointer ${className}`}
            onClick={onClick}
        >
            {/* Project Image - Full Cover */}
            <div className="absolute inset-0 w-full h-full">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-foreground/5 flex items-center justify-center">
                        <div className="text-foreground/30 text-lg">
                            Project Image
                        </div>
                    </div>
                )}
            </div>

            {/* Overlay Background */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-background/10 transition-all duration-300" />

            {/* Project Content - Hidden until hover */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 bg-background/50 transition-all duration-300 backdrop-blur-xl">
                {/* Title */}
                <h3 className="text-2xl font-clash-grotesk-medium mb-3 text-white">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-white/90 font-sofia-sans-regular mb-4 flex-1">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm font-clash-grotesk-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    {primaryOnClick && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                primaryOnClick();
                            }}
                            className="px-4 py-2 bg-accent text-foreground font-clash-grotesk-semibold text-sm hover:bg-accent/80 transition-all duration-150 flex items-center"
                        >
                            {primaryButtonText}
                            <Image
                                src="/arrowupright-dark.svg"
                                alt="arrowupright"
                                width={16}
                                height={20}
                                className="ml-2"
                            />
                        </button>
                    )}
                    {secondaryOnClick && secondaryButtonText && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                secondaryOnClick();
                            }}
                            className="px-4 py-2 bg-white/20 text-white text-sm hover:bg-blue-600 transition-all duration-150 backdrop-blur-sm"
                        >
                            {secondaryButtonText}
                        </button>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-white/20 text-white text-sm hover:bg-blue-600 transition-all duration-150 backdrop-blur-sm"
                        >
                            Github
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
