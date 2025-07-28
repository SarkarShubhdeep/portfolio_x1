"use client";

import { useState } from "react";

interface SkillLabelProps {
    bgTransparency: number;
    labelText: string;
}

export default function SkillLabel({
    bgTransparency,
    labelText,
}: SkillLabelProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`flex font-clash-grotesk-medium items-center justify-center h-[50px] px-[26px] ${
                isHovered
                    ? "bg-accent text-background"
                    : `bg-foreground/${bgTransparency}`
            } transition-all ${isHovered ? "duration-150" : "duration-500"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {labelText}
        </div>
    );
}
