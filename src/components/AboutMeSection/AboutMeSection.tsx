"use client";

import {useContext, useRef} from "react";
import {LanguageContext} from "@services/LanguageProvider";
import {useAboutMeSectionGSAPHook} from "@components/AboutMeSection/useAboutMeSectionGSAPHook";
import {AboutMeText} from "@components/AboutMeSection/components/Text";
import {AboutMeImage} from "@components/AboutMeSection/components/Image";
import {cn} from "@lib/utils";

export const AboutMeSection = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const {languageData: {aboutMe}} = useContext(LanguageContext);

    useAboutMeSectionGSAPHook(containerRef);

    return (
        <section id="about-me-section" className="relative bg-opacity-80 bg-pink-700">
            <div ref={containerRef}
                 className={cn(
                     "bg-transparent min-h-screen gap-x-4 md:gap-x-8 w-full margin-auto p-12 overscroll-none",
                     "flex flex-col md:flex-row justify-evenly items-start content-start [text-shadow:_2px_2px_20px_rgb(0_0_0_/_100%)]")}>
                <AboutMeImage/>
                <AboutMeText languageData={aboutMe}/>
            </div>
        </section>
    )
}