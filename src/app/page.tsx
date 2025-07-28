import Navbar from "./components/Navbar";
import SkillLabel from "./components/SkillLabel";
import ViewportSize from "./components/ViewportSize";
import Paragraph from "./components/Paragraph";
import Spacer from "./components/Spacer";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col mx-0 md:mx-[80px] lg:mx-[240px] overflow-x-hidden">
            {/* <ComponentLines /> */}
            <ViewportSize />
            <Navbar />
            {/* spacer  */}
            <div className="min-h-[120px] md:min-h-[272px] w-full bg-red-900/0" />
            <Paragraph>
                Frontend developer turning complex ideas into clean, responsive
                interfaces with React, Next.js, and TypeScript. I love smooth
                UIs, smart components, and the occasional well-timed animation.
            </Paragraph>

            {/* spacer */}
            <Spacer />

            {/* horizontal scroll */}
            <div className="flex flex-row w-screen overflow-x-scroll -mx-[240px] px-[240px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Project card */}
                <div className="min-w-[500px] h-[500px] bg-foreground/10" />
                <div className="min-h-full min-w-[26px]" />
                <div className="min-w-[500px] h-[500px] bg-foreground/10" />
                <div className="min-h-full min-w-[26px]" />
                <div className="min-w-[500px] h-[500px] bg-foreground/10" />
                <div className="min-h-full min-w-[26px]" />
                <div className="min-w-[500px] h-[500px] bg-foreground/10" />
            </div>
            <div className="flex gap-[26px] mt-[26px]">
                <button className="px-[26px] h-[60px] bg-foreground/10 hover:bg-accent transition-all duration-150 group">
                    <Image
                        src="/arrowleft-dark.svg"
                        alt="arrowleft"
                        width={20}
                        height={20}
                        className="group-hover:hidden"
                    />
                    <Image
                        src="/arrowleft-light.svg"
                        alt="arrowleft"
                        width={20}
                        height={20}
                        className="hidden group-hover:block"
                    />
                </button>

                <button className="px-[26px] h-[60px] bg-foreground/10 hover:bg-accent transition-all duration-150 group">
                    <Image
                        src="/arrowright-dark.svg"
                        alt="arrowright"
                        width={20}
                        height={20}
                        className="group-hover:hidden"
                    />
                    <Image
                        src="/arrowright-light.svg"
                        alt="arrowright"
                        width={20}
                        height={20}
                        className="hidden group-hover:block"
                    />
                </button>
            </div>

            {/* about me */}
            <Spacer />
            <Paragraph>
                I&apos;ve always been drawn to visual design — it&apos;s been a
                consistent thread throughout my work. Most of my projects have
                involved shaping user-facing interfaces, where I blend aesthetic
                clarity with functional thinking. I&apos;m comfortable working
                across multiple languages and tools, and I&apos;m always
                learning something new to push my skills further.
            </Paragraph>

            {/* Tech stack */}
            <div className="flex flex-col h-fit w-full mt-[128px]">
                <div className="flex gap-[26px] w-full uppercase font-sofia-sans-medium">
                    <div className="flex-1 text-2xl px-[26px]">
                        Techinical Skills
                    </div>
                    <div className="flex-1 text-2xl px-[26px] font-sofia-sans-medium">
                        Tools, Practices, & workflows
                    </div>
                </div>
                <div className="flex flex-row gap-[26px] w-full mt-[26px]">
                    <div className="flex-1 flex flex-wrap text-lg">
                        <SkillLabel bgTransparency={10} labelText="Next.js" />
                        <SkillLabel bgTransparency={15} labelText="React.js" />
                        <SkillLabel
                            bgTransparency={20}
                            labelText="Tailwind CSS"
                        />
                        <SkillLabel
                            bgTransparency={10}
                            labelText="React Native"
                        />
                        <SkillLabel bgTransparency={10} labelText="Node.js" />

                        <SkillLabel bgTransparency={20} labelText="Python" />
                        <SkillLabel bgTransparency={10} labelText="Next.js" />
                        <SkillLabel bgTransparency={15} labelText="React.js" />
                        <SkillLabel
                            bgTransparency={20}
                            labelText="Tailwind CSS"
                        />
                        <SkillLabel
                            bgTransparency={10}
                            labelText="React Native"
                        />
                        <SkillLabel bgTransparency={10} labelText="Node.js" />

                        <SkillLabel bgTransparency={20} labelText="Python" />
                        <SkillLabel bgTransparency={10} labelText="Next.js" />
                        <SkillLabel bgTransparency={15} labelText="React.js" />
                        <SkillLabel
                            bgTransparency={20}
                            labelText="Tailwind CSS"
                        />
                        <SkillLabel
                            bgTransparency={10}
                            labelText="React Native"
                        />
                        <SkillLabel bgTransparency={10} labelText="Node.js" />

                        <SkillLabel bgTransparency={20} labelText="Python" />
                    </div>
                    <div className="flex-1 flex flex-wrap  -l text-lg">
                        <SkillLabel bgTransparency={10} labelText="Next.js" />
                        <SkillLabel bgTransparency={15} labelText="React.js" />
                        <SkillLabel
                            bgTransparency={20}
                            labelText="Tailwind CSS"
                        />
                        <SkillLabel
                            bgTransparency={10}
                            labelText="React Native"
                        />
                        <SkillLabel bgTransparency={10} labelText="Node.js" />

                        <SkillLabel bgTransparency={20} labelText="Python" />
                        <SkillLabel bgTransparency={10} labelText="Next.js" />
                        <SkillLabel bgTransparency={15} labelText="React.js" />
                        <SkillLabel
                            bgTransparency={20}
                            labelText="Tailwind CSS"
                        />
                        <SkillLabel
                            bgTransparency={10}
                            labelText="React Native"
                        />
                        <SkillLabel
                            bgTransparency={20}
                            labelText="Tailwind CSS"
                        />
                        <SkillLabel
                            bgTransparency={10}
                            labelText="React Native"
                        />
                        <SkillLabel bgTransparency={10} labelText="Node.js" />

                        <SkillLabel bgTransparency={20} labelText="Python" />
                        <SkillLabel bgTransparency={10} labelText="Next.js" />
                        <SkillLabel bgTransparency={15} labelText="React.js" />
                        <SkillLabel
                            bgTransparency={20}
                            labelText="Tailwind CSS"
                        />
                        <SkillLabel
                            bgTransparency={10}
                            labelText="React Native"
                        />
                        <SkillLabel bgTransparency={10} labelText="Node.js" />

                        <SkillLabel bgTransparency={20} labelText="Python" />
                    </div>
                </div>
            </div>

            {/* Idealogy of the work */}
            <div className="h-fit w-full px-[26px] text-3xl  mt-[128px] max-w-[1000px] font-sofia-sans-regular">
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

            {/* Contact */}
            <div className="flex flex-col h-fit w-full px-[26px] text-2xl mt-[128px] uppercase font-sofia-sans-medium">
                Let&apos;s Connect
            </div>
            <Paragraph>
                I&apos;m always looking for new opportunities to collaborate and
                learn. Feel free to reach out to me via email or connect on
                LinkedIn.
            </Paragraph>

            <div className="flex flex-row w-full gap-[26px] mt-[26px]  text-lg font-clash-grotesk-medium">
                <button className="flex flex-row items-center justify-center gap-[26px] bg-foreground/10 px-[26px] py-[16px] h-[60px] hover:bg-accent hover:text-background transition-all duration-150">
                    sarkarshubhdeep2@gmail.com
                </button>
                {/* linkedin */}
                <button className="group flex flex-row items-center justify-center gap-[26px] bg-foreground/10 px-[26px] py-[16px] hover:bg-accent transition-all duration-150">
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
                </button>
                {/* Github */}
                <button className="group flex flex-row items-center justify-center gap-[26px] bg-foreground/10 px-[26px] py-[16px] hover:bg-accent transition-all duration-150">
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
                </button>
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
            <div className="h-[80px] flex items-center justify-center">
                Copyright © 2025 Shubhdeep Sarkar
            </div>
        </div>
    );
}
