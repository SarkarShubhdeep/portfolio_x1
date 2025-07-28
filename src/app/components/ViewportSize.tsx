"use client";

import { useState, useEffect } from "react";

export default function ViewportSize() {
    const [viewportSize, setViewportSize] = useState<string>("");

    useEffect(() => {
        const updateViewportSize = () => {
            const width = window.innerWidth;
            let size = "";

            if (width < 640) {
                size = "<sm";
            } else if (width >= 640 && width < 768) {
                size = "sm";
            } else if (width >= 768 && width < 1024) {
                size = "md";
            } else if (width >= 1024 && width < 1280) {
                size = "lg";
            } else {
                size = ">lg";
            }

            setViewportSize(size);
        };

        // Set initial size
        updateViewportSize();

        // Add event listener for window resize
        window.addEventListener("resize", updateViewportSize);

        // Cleanup event listener
        return () => window.removeEventListener("resize", updateViewportSize);
    }, []);

    return (
        <div className="fixed right-2 bottom-2 bg-red-500/80 backdrop-blur-sm text-white px-3 py-2 rounded-md font-mono text-sm z-50">
            {viewportSize}
        </div>
    );
}
