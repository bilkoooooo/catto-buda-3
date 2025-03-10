'use client';

import {useContext, useRef} from "react";
import {LanguageContext} from "@services/LanguageProvider";
import {useInfoSectionGSAPHook} from "@components/InfoSection/useInfoSectionGSAPHook";
import {Panels} from "@components/InfoSection/components/Panels";
import {ProgressBar} from "@components/InfoSection/components/ProgressBar";

export const InfoSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement | null>(null);

    const {
        languageData
    } = useContext(LanguageContext);

    useInfoSectionGSAPHook(containerRef, progressBarRef);

    return (
        <section id="info-section" className="relative">
            <div ref={containerRef}
                 className="flex flex-nowrap overflow-x-scroll sm:overflow-x-hidden overscroll-auto sm:overscroll-none h-screen w-screen relative bg-gradient-to-r from-[--lightRed] to-[--darkRed] snap-x snap-proximity lg:snap-none">
                {Object.values(languageData.info).slice(0, 10).map((info, index) =>
                    <Panels key={index} info={info}/>)}
                <ProgressBar progressBarRef={progressBarRef}/>
            </div>
        </section>
    )
}