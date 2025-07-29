"use client";
import Navbar from "./components/Navbar";
import SkillLabel from "./components/SkillLabel";
import ViewportSize from "./components/ViewportSize";
import Paragraph from "./components/Paragraph";
import Spacer from "./components/Spacer";
import Image from "next/image";

import { skillGroups } from "./data/skills";
import FocusButton from "./components/FocusButton";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
    return (
        <div className="flex flex-col mx-0 md:mx-[80px] lg:mx-[240px] overflow-x-">
            {/* <ComponentLines /> */}
            <ViewportSize />
            <Navbar />
            {/* spacer  */}
            <div className="min-h-[120px] md:min-h-[272px] w-full bg-red-900/0" />
            <Paragraph>
                Frontend developer
                <span className="opacity-50 ml-2">
                    turning complex ideas into clean, responsive interfaces with
                    React, Next.js, and TypeScript. I love smooth UIs, smart
                    components, and the occasional well-timed animation.
                </span>
            </Paragraph>

            {/* spacer */}
            <Spacer />

            {/* horizontal scroll */}
            <div className="project-scroll flex flex-row w-screen overflow-x-scroll gap-[26px] -mx-0 md:-mx-[80px] lg:-mx-[240px] px-0 md:px-[80px] lg:px-[240px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Project card */}
                <ProjectCard
                    title="Weekwise"
                    description="Weekly planner with an intuitive interface and a focus on simplicity and ease of use."
                    imageUrl="/card-temp-bg-pattern.png"
                    liveUrl="https://www.google.com"
                    githubUrl="https://github.com/shubhdeep-sarkar/weekwise"
                    technologies={[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Supabase",
                        "Tailwind CSS",
                        "shadcn/ui",
                        "Radix UI",
                        "Motion",
                    ]}
                />

                <ProjectCard
                    title="Habitat"
                    description="UX/UI Independent Study Project for residential property management."
                    imageUrl="/card-temp-bg-pattern.png"
                    liveUrl="https://www.google.com"
                    technologies={[
                        "UI/UX Design",
                        "Figma",
                        "Adobe Illustrator",
                        "Wireframing",
                        "Prototyping",
                        "User Research",
                        "User Persona & Journey",
                    ]}
                />

                <ProjectCard
                    title="Momemtum"
                    description="Todo app with focus mode, and a dashboard to track your progress."
                    imageUrl="/card-temp-bg-pattern.png"
                    liveUrl="https://www.google.com"
                    githubUrl="https://github.com/shubhdeep-sarkar/momentum"
                    technologies={[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Supabase",
                        "Tailwind CSS",
                        "shadcn/ui",
                        "Radix UI",
                        "Motion",
                        "Visx Charts",
                    ]}
                />
            </div>
            {/* Project Carousel Buttons */}
            <div className="flex gap-[26px] mt-[26px]">
                <button
                    onClick={() => {
                        const scrollContainer =
                            document.querySelector(".project-scroll");
                        if (scrollContainer) {
                            scrollContainer.scrollBy({
                                left: -526,
                                behavior: "smooth",
                            });
                        }
                    }}
                    className="px-[26px] h-[60px] bg-foreground/10 transition-all duration-150 group cursor-pointer hover:bg-accent hover:text-background"
                >
                    <Image
                        src="/arrowleft-dark.svg"
                        alt="arrowleft"
                        width={20}
                        height={20}
                        className="group-hover:-translate-x-2 transition-all duration-150 group-hover:hidden"
                    />
                    <Image
                        src="/arrowleft-light.svg"
                        alt="arrowleft"
                        width={20}
                        height={20}
                        className="hidden group-hover:block group-hover:-translate-x-2 transition-all duration-150"
                    />
                </button>

                <button
                    onClick={() => {
                        const scrollContainer =
                            document.querySelector(".project-scroll");
                        if (scrollContainer) {
                            scrollContainer.scrollBy({
                                left: 526,
                                behavior: "smooth",
                            });
                        }
                    }}
                    className="px-[26px] h-[60px] bg-foreground/10 transition-all duration-150 group cursor-pointer hover:bg-accent hover:text-background"
                >
                    <Image
                        src="/arrowright-dark.svg"
                        alt="arrowright"
                        width={20}
                        height={20}
                        className="group-hover:translate-x-2 transition-all duration-150 group-hover:hidden"
                    />
                    <Image
                        src="/arrowright-light.svg"
                        alt="arrowright"
                        width={20}
                        height={20}
                        className="hidden group-hover:block group-hover:translate-x-2 transition-all duration-150"
                    />
                </button>
            </div>

            {/* about me */}
            <Spacer />
            <div id="about-section" />
            <Paragraph className="opacity-50">
                I&apos;ve always been drawn to visual design — it&apos;s been a
                consistent thread throughout my work. Most of my projects have
                involved shaping user-facing interfaces, where I blend aesthetic
                clarity with functional thinking. I&apos;m comfortable working
                across multiple languages and tools, and I&apos;m always
                learning something new to push my skills further.
            </Paragraph>

            {/* Tech stack */}
            <div className="grid lg:grid-cols-2 grid-cols-1 h-fit w-full mt-[128px] gap-[40px]">
                <div className="flex flex-col gap-[18px] w-full uppercase font-sofia-sans-medium h-fit">
                    <div className="flex-1 text-2xl px-[26px]">
                        {skillGroups[0].title}
                    </div>
                    <div className="flex flex-wrap">
                        {skillGroups[0].skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="px-[26px] py-[16px] transition-all duration-150"
                                style={{
                                    backgroundColor: `rgba(107, 114, 128, ${
                                        skill.bgTransparency / 100
                                    })`,
                                    color: "inherit",
                                }}
                            >
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-[18px] w-full uppercase font-sofia-sans-medium h-fit">
                    <div className="flex-1 text-2xl px-[26px]">
                        {skillGroups[1].title}
                    </div>
                    <div className="flex flex-wrap">
                        {skillGroups[1].skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="px-[26px] py-[16px] transition-all duration-150"
                                style={{
                                    backgroundColor: `rgba(107, 114, 128, ${
                                        skill.bgTransparency / 100
                                    })`,
                                    color: "inherit",
                                }}
                            >
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-[18px] w-full uppercase font-sofia-sans-medium h-fit">
                    <div className="flex-1 text-2xl px-[26px]">
                        {skillGroups[2].title}
                    </div>
                    <div className="flex flex-wrap">
                        {skillGroups[2].skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="px-[26px] py-[16px] transition-all duration-150"
                                style={{
                                    backgroundColor: `rgba(107, 114, 128, ${
                                        skill.bgTransparency / 100
                                    })`,
                                    color: "inherit",
                                }}
                            >
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-[18px] w-full uppercase font-sofia-sans-medium h-fit">
                    <div className="flex-1 text-2xl px-[26px]">
                        {skillGroups[3].title}
                    </div>
                    <div className="flex flex-wrap">
                        {skillGroups[3].skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="px-[26px] py-[16px] transition-all duration-150"
                                style={{
                                    backgroundColor: `rgba(107, 114, 128, ${
                                        skill.bgTransparency / 100
                                    })`,
                                    color: "inherit",
                                }}
                            >
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Idealogy of the work */}
            <div className="h-fit w-full px-[26px] text-3xl  mt-[128px] max-w-[800px] font-sofia-sans-regular ">
                <span className="opacity-50">
                    Creating the most stunning design or writing the perfect
                    piece of code has never been my goal. Over time,
                </span>
                <span className="ms-2 font-sofia-sans-medium">
                    I&apos;ve learned that being practical means writing code
                    that delivers robust functionality and designing visuals
                    that are meaningful
                </span>
                <span className="opacity-50">
                    —not just aesthetically pleasing. That&apos;s where the real
                    value lies.
                </span>
            </div>

            <Spacer />

            {/* Contact */}
            <div id="contact-section" />
            <div className="flex flex-col gap-[18px]">
                <Paragraph className="font-sofia-sans-medium">
                    LET&apos;S CONNECT{" "}
                </Paragraph>
                <Paragraph className="opacity-50">
                    I&apos;m always looking for new opportunities to collaborate
                    and learn. Feel free to reach out to me via email or connect
                    on LinkedIn.
                </Paragraph>
            </div>

            <div className="flex flex-wrap w-full sm:gap-[26px] mt-[26px]  text-lg font-clash-grotesk-medium">
                <FocusButton
                    href="mailto:sarkarshubhdeep2@gmail.com"
                    className="flex flex-row items-center justify-center gap-[26px] bg-foreground/10 px-[26px] py-[16px] h-[60px] hover:bg-accent hover:text-background transition-all duration-150"
                >
                    sarkarshubhdeep2@gmail.com
                </FocusButton>
                {/* linkedin */}
                <FocusButton
                    href="https://www.linkedin.com/in/shubhdeep-sarkar-0000000000/"
                    className="group flex flex-row items-center justify-center gap-[26px] bg-foreground/5 px-[26px] h-[60px] hover:bg-accent transition-all duration-150"
                >
                    <Image
                        src="/linkedinicon-dark.svg"
                        alt="linkedin"
                        width={30}
                        height={30}
                        className="group-hover:hidden"
                    />
                    <Image
                        src="/linkedinicon-light.svg"
                        alt="linkedin"
                        width={30}
                        height={30}
                        className="hidden group-hover:block"
                    />
                </FocusButton>
                {/* Github */}
                <FocusButton
                    href="https://github.com/shubhdeep-sarkar"
                    className="group flex flex-row items-center justify-center gap-[26px] bg-foreground/10 px-[26px] h-[60px] hover:bg-accent transition-all duration-150"
                >
                    <Image
                        src="/githubicon-dark.svg"
                        alt="linkedin"
                        width={30}
                        height={30}
                        className="group-hover:hidden"
                    />
                    <Image
                        src="/githubicon-light.svg"
                        alt="linkedin"
                        width={30}
                        height={30}
                        className="hidden group-hover:block"
                    />
                </FocusButton>
            </div>

            {/* Logo Image */}
            <div className="flex flex-row w-full gap-[26px] mt-[128px] ">
                <Image
                    src="/footer-graphic-dark.svg"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-full"
                />
            </div>

            {/* Footer */}
            <div className="h-[80px] flex items-center justify-center font-sofia-sans-regular opacity-50">
                Copyright © 2025 Shubhdeep Sarkar
            </div>
        </div>
    );
}
