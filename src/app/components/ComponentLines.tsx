// component lines component

// styles
const verticalLineColor = "border-neutral-900/50 border-l";
const verticalDashedLineColor = "border-neutral-900/50 border-dashed border-l";
const horizontalLineColor = "border-neutral-900/50 border-t";
const horizontalDashedLineColor =
    "border-neutral-900/50 border-dashed border-t";

export default function ComponentLines() {
    return (
        <div className="flex flex-col absolute top-0 left-0 w-full h-[100vw] z-[30] pointer-events-none">
            <div
                className={`${horizontalLineColor} w-full h-[1px] absolute top-[120px] left-0`}
            />
            <div
                className={`${horizontalLineColor} w-full h-[1px] absolute top-[200px] left-0`}
            />
            <div
                className={`${verticalLineColor} w-[1px] h-full absolute top-0 left-[240px]`}
            />
            <div
                className={`${verticalLineColor} w-[1px] h-full absolute top-0 right-[240px]`}
            />
            <div
                className={`${verticalDashedLineColor} w-[1px] h-full absolute top-0 right-[266px]`}
            />
            <div
                className={`${verticalLineColor} w-[1px] h-[200px] absolute top-0 left-[1040px]`}
            />
            <div
                className={`w-[1px] ${verticalDashedLineColor} h-full absolute top-0 left-[266px]`}
            />
            {/* <div
                className={`${horizontalLineColor} w-full h-[1px] absolute top-[272px] left-0`}
            /> */}
            {/* <div
                className={`${horizontalLineColor} w-full h-[1px] absolute top-[500px] left-0`}
            /> */}
        </div>
    );
}
