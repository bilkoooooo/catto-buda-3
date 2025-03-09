"use client";

import {useContext, useRef} from "react";
import {LanguageContext} from "@services/LanguageProvider";
import {useAboutMeSectionGSAPHook} from "@components/AboutMeSection/useAboutMeSectionGSAPHook";
import {AboutMeText} from "@components/AboutMeSection/components/Text";
import {AboutMeImage} from "@components/AboutMeSection/components/Image";

export const AboutMeSection = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const {languageData: {aboutMe}} = useContext(LanguageContext);

    useAboutMeSectionGSAPHook(containerRef);

    return (
        <section id="about-me-section" className="relative overflow-hidden bg-opacity-10 bg-pink-400">
            <div ref={containerRef}
                 className="bg-transparent min-h-screen gap-x-8 w-full margin-auto p-12 overscroll-none flex lg:flex-row sm:flex-col justify-center items-start content-start">
                <AboutMeText languageData={aboutMe}/>
                <AboutMeImage/>
            </div>
        </section>
    )
}