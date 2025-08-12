import Image from "next/image";

export default function ProjectsNav() {
    return (
        <div className="flex">
            <button className="flex items-center gap-2 px-6 py-2 hover:bg-accent hover:text-background transition-all duration-150 group">
                <Image
                    src="/arrowleft-dark.svg"
                    alt="Back to Home"
                    width={18}
                    height={18}
                    className="group-hover:invert"
                />
                Back to Home
            </button>
            <div className="flex px-6 py-2 text-accent">Weekwise</div>
            <div className="flex px-6 py-2">Habitat</div>
            <div className="flex px-6 py-2">Momentum</div>
        </div>
    );
}
