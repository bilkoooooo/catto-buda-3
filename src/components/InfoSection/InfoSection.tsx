'use client';

import {useContext, useRef} from "react";
import {LanguageContext} from "@services/LanguageProvider";
import {useInfoSectionGSAPHook} from "@components/InfoSection/useInfoSectionGSAPHook";
import {Panels} from "@components/InfoSection/components/Panels";
import {ProgressBar} from "@components/InfoSection/components/ProgressBar";
import {cn} from "@lib/utils";

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
                 className={cn(
                     "flex flex-col overflow-x-scroll sm:overflow-x-hidden relative",
                     "min-h-screen w-screen bg-gradient-to-b from-[--lightRed] to-[--darkRed] snap-x snap-proximity lg:snap-none",
                     "[&>*:nth-child(even)]:justify-end",
                 )}>
                {Object.values(languageData.info).slice(0, 10).map((info, index) =>
                    <Panels key={index} info={info}/>)}
                <ProgressBar progressBarRef={progressBarRef}/>
            </div>
        </section>
    )
}