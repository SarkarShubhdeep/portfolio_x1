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
            className="flex font-clash-grotesk-medium items-center justify-center h-[50px] px-[26px] transition-all duration-150"
            style={{
                backgroundColor: isHovered
                    ? "#f0754c"
                    : `rgba(107, 114, 128, ${bgTransparency / 100})`,
                color: isHovered ? "#1d1d1d" : "inherit",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {labelText}
        </div>
    );
}
