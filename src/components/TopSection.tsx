import {LogoSection} from "@/components/LogoSection";

export const TopSection = () => {
    return (
        <div id="top-container" className="flex flex-nowrap flex-col w-full max-h-[150vh]">
            <div id="top-section"
                 className="basis-64 py-[3.5rem!important] px-8 items-center justify-center center text-center text-white flex relative bg-fixed flex-col gap-8"
                 style={{
                     backgroundImage: `url("assets/bg_dark.jpg")`,
                 }}
            >
                <LogoSection/>
            </div>

            <div id="mid-section" className="basis-auto">
                <div
                    className="snap-start w-full min-h-lvh bg-fixed relative flex justify-center items-center flex-col gap-3 bg-no-repeat bg-cover hover:filter-none text-white"
                    style={{backgroundImage: `url("assets/intro_2.gif")`}}
                />
            </div>
        </div>
    )
}