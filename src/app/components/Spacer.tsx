interface SpacerProps {
    className?: string;
}

export default function Spacer({ className = "" }: SpacerProps) {
    return (
        <div
            className={`min-h-[80px] md:min-h-[120px] w-full bg-red-900/0 ${className}`}
        />
    );
}
