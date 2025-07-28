interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
}

export default function Paragraph({
    children,
    className = "",
}: ParagraphProps) {
    return (
        <div
            className={`flex flex-col h-fit w-full px-[26px] sm:px-[18px] max-w-[800px] sm:text-2xl text-lg font-sofia-sans-regular ${className}`}
        >
            {children}
        </div>
    );
}
