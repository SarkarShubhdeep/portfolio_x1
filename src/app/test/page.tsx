"use client";

import Navbar from "../components/Navbar";
import ViewportSize from "../components/ViewportSize";
import HamburgerMenu from "../components/HamburgerMenu";
import { useState } from "react";

function HamburgerMenuTest() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-center gap-4">
            <HamburgerMenu
                isOpen={isOpen}
                onToggle={() => setIsOpen(!isOpen)}
            />
            <p className="text-white text-sm">
                Click to toggle: {isOpen ? "Open (X)" : "Closed (Hamburger)"}
            </p>
        </div>
    );
}

export default function TestPage() {
    return (
        <div className="min-h-screen bg-background">
            <ViewportSize />
            {/* <Navbar /> */}

            {/* Testing area */}
            <div className="pt-[120px] px-8">
                <h1 className="text-4xl font-bold mb-8">
                    Testing & Experimentation Space
                </h1>
                <p className="text-lg mb-6">
                    This page is for testing and experimenting with new
                    components. Use this space to develop the mobile menu button
                    and other components.
                </p>

                {/* Component testing area */}
                <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 min-h-[400px]">
                    <h2 className="text-2xl font-semibold mb-4">
                        Component Testing Area
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Add your mobile menu button and other components here
                        for testing.
                    </p>

                    {/* Hamburger Menu Test */}
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-white text-lg mb-4">
                            Hamburger Menu Button
                        </h3>
                        <HamburgerMenuTest />
                    </div>
                </div>
            </div>
        </div>
    );
}
