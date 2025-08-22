"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HabitatContent() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isMediumScreen, setIsMediumScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMediumScreen(window.innerWidth >= 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const technologies = [
        "Figma",
        "Rive",
        "UI/UX",
        "User Research",
        "Prototyping",
        "Design System",
    ];

    const backgroundColors = [
        "bg-neutral-900/50",
        "bg-neutral-900/70",
        "bg-neutral-900/90",
    ];

    const videos = [
        "onboarding_ready.mp4",
        "onboarding_ready.mp4", // Placeholder - replace with actual video names
        "onboarding_ready.mp4", // Placeholder - replace with actual video names
        "onboarding_ready.mp4", // Placeholder - replace with actual video names
        "onboarding_ready.mp4", // Placeholder - replace with actual video names
        "onboarding_ready.mp4", // Placeholder - replace with actual video names
    ];

    // Function to get a random background color
    const getRandomBgColor = () => {
        return backgroundColors[
            Math.floor(Math.random() * backgroundColors.length)
        ];
    };

    const nextVideo = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    };

    const prevVideo = () => {
        setCurrentVideoIndex(
            (prev) => (prev - 1 + videos.length) % videos.length
        );
    };

    return (
        <div className="max-w-4xl mx-auto">
            {/* Top Section: Project Logo and Description */}
            <div className="flex flex-row items-center justify-between ps-2">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <Image
                        src="/projects-images/habitat/habitat-logo.svg"
                        alt="Habitat Project Screenshot"
                        width={100}
                        height={100}
                        className="w-60 object-contain "
                    />
                </motion.div>
                <div className="text-foreground/80 font-clash-grotesk-medium text-right">
                    UX/UI Independent Study Project <br />
                    for residential property management
                </div>
            </div>

            {/* Project Image and Description */}
            <div className="flex w-full mt-16">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    className="flex max-w-1/2 min-w-1/2 h-full object-cover overflow-visible"
                >
                    <Image
                        src="/projects-images/habitat/habitat-home.png"
                        alt="Habitat Home Page"
                        width={1000}
                        height={1000}
                    />
                </motion.div>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                    <div className="text-foreground/80 font-sofia-sans-regular flex flex-col justify-end items-end text-lg  pt-16 gap-8 w-full">
                        <p className="text-right max-w-6/7 ">
                            Habitat is a UI/UX design study created to explore
                            how user-first design can make apartment living
                            simpler and more intuitive. The project focuses on
                            everyday resident needs—onboarding, maintenance
                            requests, rent payments, and community
                            connections—translating them into clear, seamless
                            flows. By emphasizing usability and consistency,
                            Habitat demonstrates how thoughtful design can turn
                            complex property management tasks into effortless
                            experiences.
                        </p>

                        <div className="flex flex-wrap items-center justify-end">
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
                                        className={`font-clash-grotesk-regular px-3 text-base py-2 text-white ${getRandomBgColor()}`}
                                    >
                                        {tech}
                                    </div>
                                </motion.span>
                            ))}
                        </div>
                        <button
                            className="bg-accent text-base text-light hover:text-background font-clash-grotesk-regular px-4 py-2 cursor-pointer flex items-center gap-2 group duration-150"
                            onClick={() => {
                                console.log("scroll to gallery");
                            }}
                        >
                            <Image
                                src="/arrowleft-dark.svg"
                                alt="Arrow down"
                                width={16}
                                height={16}
                                className="rotate-270 group-hover:invert transition-all duration-150"
                            />
                            View Gallery
                        </button>
                    </div>
                </motion.div>
            </div>
            {/* Problem Statement and The Goal */}
            <div className="flex flex-row gap-2 mt-48 items-start">
                <div className="flex flex-col gap-6 bg-background/80 p-6 flex-1">
                    <div className="flex flex-col gap-2 min-w-full">
                        <h2 className="text-foreground/60 text-xl font-clash-grotesk-medium">
                            Problem Statement
                        </h2>
                        <h1 className=" text-2xl font-clash-grotesk-medium">
                            Why Habitat?
                        </h1>
                    </div>
                    <div className="text-base text-foreground/80 font-sofia-sans-regular">
                        <p>
                            Apartment living often requires residents to juggle
                            multiple platforms, deal with unclear communication
                            from management, and manage inconvenient payment
                            methods. These fragmented experiences create
                            unnecessary stress in everyday routines.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 bg-background/80 p-6 flex-1">
                    <div className="flex flex-col gap-2 ">
                        <h2 className="text-foreground/60 text-xl font-clash-grotesk-medium">
                            The Goal
                        </h2>
                        <h1 className="text-2xl font-clash-grotesk-medium bg-gradient-to-r from-[#ffa500] to-[#ae58fa] bg-clip-text text-transparent">
                            Mindful Design
                        </h1>
                    </div>
                    <div className="text-base text-foreground font-sofia-sans-regular">
                        <p>
                            Habitat was designed to streamline these essential
                            tasks into one intuitive platform—making
                            maintenance, payments, and community connections
                            simple, transparent, and accessible.
                        </p>
                    </div>
                </div>
            </div>

            {/* Research & Insights */}
            <div className="w-full text-center mt-48">
                <h2 className="text-foreground/60 text-xl font-clash-grotesk-medium">
                    Research & Insights
                </h2>
                <h1 className=" text-2xl font-clash-grotesk-medium mt-2">
                    Understanding comes first <br /> Figma can follow
                </h1>
                <p className="text-base text-foreground/80 font-sofia-sans-regular mt-6">
                    The first step was to understand residents' everyday needs
                    and frustrations. I shared{" "}
                    <button
                        className="border border-foreground/20 px-3 mx-2 py-1 rounded-full  hover:bg-foreground/10 transition-colors inline-flex items-center gap-2"
                        onClick={() => {
                            window.open(
                                "https://www.notion.so/Survey-Questionnaire-fa0253d04313481dbb450a814d239ce5?source=copy_link",
                                "_blank"
                            );
                        }}
                    >
                        survey
                        <Image
                            src="/arrowupright-dark.svg"
                            alt="Arrow down"
                            width={16}
                            height={16}
                            className=""
                        />
                    </button>{" "}
                    with members of my housing community and a few other people
                    I know, and also conducted short interviews to gather deeper
                    insights. <br />
                    <br /> From this, three recurring frustrations stood out.
                </p>
            </div>
            <div className="flex flex-row gap-2 w-full text-center items-start mt-6">
                <div className="flex flex-col text-left gap-2 bg-background/80 p-6 flex-1">
                    <h2 className="text-foreground/60 text-xl font-clash-grotesk-medium">
                        User #1 says
                    </h2>
                    <h1 className=" text-xl font-clash-grotesk-medium">
                        “Submitting maintenance requests through apps never
                        feels reliable to me.. ”
                    </h1>
                </div>
                <div className="flex flex-col text-left gap-2 bg-background/80 p-6 flex-1">
                    <h2 className="text-foreground/60 text-xl font-clash-grotesk-medium">
                        User #1 says
                    </h2>
                    <h1 className=" text-xl font-clash-grotesk-medium">
                        “I use one app for payments, another portal for
                        maintenance, and then emails for community notices. Why
                        do I need so many different tools?”
                    </h1>
                </div>
                <div className="flex flex-col text-left gap-2 bg-background/80 p-6 flex-1">
                    <h2 className="text-foreground/60 text-xl font-clash-grotesk-medium">
                        User #1 says
                    </h2>
                    <h1 className=" text-xl font-clash-grotesk-medium">
                        “I just end up calling for everything—why bother using
                        the app?”
                    </h1>
                </div>
            </div>

            <div className="w-full text-center mt-24">
                <h2 className="text-foreground/60 text-xl  text-center font-clash-grotesk-medium mb-8">
                    User Flow <br />
                    Keeping it Simple
                </h2>
            </div>

            {/* User Flow Image */}
            <div className="relative -mx-6 md:-mx-20 lg:-mx-60 overflow-hidden flex justify-center ">
                <Image
                    src="/projects-images/habitat/habitat-userflow.png"
                    alt="Habitat User Flow"
                    width={2500}
                    height={1000}
                    className="max-w-full h-auto object-contain"
                />
            </div>

            <div className="w-full text-center mt-32">
                <h2 className="text-foreground/60 text-xl font-clash-grotesk-medium">
                    Design
                </h2>
                <h1 className=" text-2xl font-clash-grotesk-medium mt-2">
                    The Fun (& equally exhausting) Part{" "}
                </h1>
            </div>

            {/* Design Screens - Responsive Carousel */}
            <div className="-mx-[calc(50vw-50%)] w-screen relative overflow-hidden mt-16">
                {/* Large screens: Show all videos in a row */}
                <div className="hidden lg:flex justify-start w-full">
                    <motion.div className="flex gap-3 w-fit justify-start mx-auto">
                        {videos.map((videoFile, index) => (
                            <motion.div
                                key={`${videoFile}-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: index * 0.1,
                                }}
                                className="flex-shrink-0 w-[280px] xl:w-[320px] 2xl:w-[360px] h-auto rounded-[54px] xl:rounded-[64px] overflow-hidden shadow-lg"
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source
                                        src={`/projects-images/habitat/animated-screens/${videoFile}`}
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Medium and smaller screens: Horizontal scroll */}
                <div className="lg:hidden w-full overflow-x-auto scrollbar-hide">
                    <motion.div className="flex gap-4 px-6 w-max">
                        {videos.map((videoFile, index) => (
                            <motion.div
                                key={`${videoFile}-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: index * 0.1,
                                }}
                                className="flex-shrink-0 w-[280px] md:w-[320px] h-auto rounded-[54px] overflow-hidden shadow-lg"
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source
                                        src={`/projects-images/habitat/animated-screens/${videoFile}`}
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Design System and Components */}
            <div className="w-full text-center mt-24">
                <h2 className="text-foreground/60 text-xl  text-center font-clash-grotesk-medium mb-8">
                    Design System
                </h2>
            </div>
            <Image
                src="/projects-images/habitat/habitat-colors.png"
                alt="Habitat colors"
                width={2500}
                height={1000}
                className="w-full h-auto object-contain"
            />

            <div className="w-full h-auto object-contain mt-16 flex flex-wrap gap-4 justify-center">
                {[
                    { image: "big-button.png", width: 240 },
                    { image: "big-icon-button.png", width: 102 },
                    { image: "avatars.png", width: 150 },
                    { image: "dashboard-card-large.png", width: 500 },
                    { image: "dashboard-card-small.png", width: 250 },
                    {
                        image: "Greetings and Notification card.png",
                        width: 500,
                    },
                    { image: "social-signin-buttons.png", width: 180 },
                    { image: "searchbar.png", width: 340 },
                    { image: "textfields.png", width: 340 },
                ].map((component, index) => (
                    <motion.div
                        key={component.image}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                            delay: index * 0.05,
                        }}
                        className="flex-shrink-0"
                    >
                        <Image
                            src={`/projects-images/habitat/components/${component.image}`}
                            alt={`Habitat ${component.image
                                .replace(".png", "")
                                .replace(/[-_]/g, " ")}`}
                            width={component.width}
                            height={200}
                            className="h-auto object-contain "
                        />
                    </motion.div>
                ))}
            </div>

            {/* Bottom Spacing */}
            <div className="h-16" />
        </div>
    );
}
