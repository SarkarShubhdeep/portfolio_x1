"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface FocusButtonProps {
    href?: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit";
    disabled?: boolean;
}

export default function FocusButton({
    href,
    children,
    className = "",
    onClick,
    type = "button",
    disabled = false,
}: FocusButtonProps) {
    const baseClasses =
        "relative group transition-all duration-150 hover:bg-accent hover:text-background";
    const combinedClasses = `${baseClasses} ${className}`;

    const cornercapImages = [
        {
            src: "/cornercap-topleft-light.svg",
            className:
                "absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-150",
        },
        {
            src: "/cornercap-topright-light.svg",
            className:
                "absolute top-0 right-0 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-150",
        },
        {
            src: "/cornercap-bottomleft-light.svg",
            className:
                "absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-150",
        },
        {
            src: "/cornercap-bottomright-light.svg",
            className:
                "absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-150",
        },
    ];

    const renderCornercaps = () => (
        <>
            {cornercapImages.map((cornercap, index) => (
                <Image
                    key={index}
                    src={cornercap.src}
                    alt="cornercap"
                    width={20}
                    height={20}
                    className={cornercap.className}
                />
            ))}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={combinedClasses} onClick={onClick}>
                {renderCornercaps()}
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={combinedClasses}
            onClick={onClick}
            disabled={disabled}
        >
            {renderCornercaps()}
            {children}
        </button>
    );
}
