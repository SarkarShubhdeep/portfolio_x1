// navbar component

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="backdrop-blur-lg flex justify-between items-center bg-foreground/10 h-[80px] fixed z-20 font-clash-grotesk-medium w-full top-0 left-0 md:w-[800px] md:top-[120px] md:left-[240px]">
            <div className="group flex items-center flex-1 h-full pl-[26px] w-[160px] hover:bg-accent/80 transition-all duration-150">
                <Image
                    src="/shubhdeep-sarkar-dark.svg"
                    alt="logo"
                    width={100}
                    height={100}
                    className="min-w-[100px] max-w-[100px] h-[100px] group-hover:hidden transition-transform"
                />
                <Image
                    src="/shubhdeep-sarkar-light.svg"
                    alt="logo"
                    width={100}
                    height={100}
                    className="min-w-[100px] max-w-[100px] h-[100px] hidden group-hover:block transition-transform"
                />
            </div>
            <div className="flex items-center justify-center w-[480px] h-full">
                <Link
                    href="#projects-section"
                    className="h-full flex items-center justify-center w-[120px] uppercase hover:bg-accent/80 hover:text-background transition-all duration-150"
                >
                    Projects
                </Link>
                <Link
                    href="#about-section"
                    className="h-full flex items-center justify-center w-[120px] uppercase hover:bg-accent/80 hover:text-background transition-all duration-150"
                >
                    About
                </Link>
                <Link
                    href="#contact-section"
                    className="h-full flex items-center justify-center w-[120px] uppercase hover:bg-accent/80 hover:text-background transition-all duration-150"
                >
                    Contact
                </Link>
            </div>
            <Link
                href="/Shubhdeep_Sarkar_Resume.pdf"
                className="group flex items-center justify-end flex-1 gap-2 h-full pr-[26px] w-[160px] hover:bg-accent/80 hover:text-background transition-all duration-150 uppercase"
            >
                Resume
                <Image
                    src="/arrowupright-dark.svg"
                    alt="resume"
                    width={18}
                    height={20}
                    className="group-hover:translate-y-[-20px] group-hover:translate-x-[16px] group-hover:brightness-0 hover:invert transition-all duration-150"
                />
            </Link>
        </div>
    );
}
