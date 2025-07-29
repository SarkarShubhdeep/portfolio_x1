"use client";

interface HamburgerMenuProps {
    isOpen: boolean;
    onToggle: () => void;
    className?: string;
}

export default function HamburgerMenu({
    isOpen,
    onToggle,
    className = "",
}: HamburgerMenuProps) {
    return (
        <button
            onClick={onToggle}
            className={`flex flex-col justify-center items-center w-[80px] h-[80px] relative ${className} hover:bg-accent/80 hover:text-background transition-all duration-150`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            {/* Top line */}
            <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "rotate-45 translate-y-[4px]"
                        : "rotate-0 translate-y-0"
                }`}
            />

            {/* Bottom line */}
            <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out mt-1.5 ${
                    isOpen
                        ? "-rotate-45 -translate-y-[4px]"
                        : "rotate-0 translate-y-0"
                }`}
            />
        </button>
    );
}
