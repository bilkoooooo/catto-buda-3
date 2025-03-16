'use client';

import React, {ForwardRefExoticComponent, useContext, useRef} from "react";
import {LanguageContext} from "@services/LanguageProvider";
import {useInfoSectionGSAPHook} from "@components/InfoSection/useInfoSectionGSAPHook";
import {Panels} from "@components/InfoSection/components/Panels";
import {ProgressBar} from "@components/InfoSection/components/ProgressBar";
import {cn} from "@lib/utils";

import {
    Bandage, CalendarDays,
    Coins,
    Hourglass,
    Info,
    LucideProps,
    MessageCircleQuestion,
    NotebookPen,
    PencilLine,
    UserRoundCheck
} from 'lucide-react';

export const InfoSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement | null>(null);

    const {
        languageData
    } = useContext(LanguageContext);

    useInfoSectionGSAPHook(containerRef, progressBarRef);

    const icons = [
        Info,
        NotebookPen,
        PencilLine,
        UserRoundCheck,
        Bandage,
        Coins,
        MessageCircleQuestion,
        Hourglass,
        CalendarDays
    ] as ForwardRefExoticComponent<LucideProps>[];

    return (
        <section id="info-section" className="relative">
            <div ref={containerRef}
                 className={cn(
                     "flex flex-col gap-y-8 md:gap-4 lg:gap-2 overflow-x-hidden relative py-16",
                     "min-h-screen w-screen bg-red-900/30",
                     "[&>*:nth-child(even)]:justify-end",
                 )}>
                {Object.values(languageData.info).map((info, index) =>
                    <Panels key={index} info={{...info, Icon: icons[index] as ForwardRefExoticComponent<LucideProps>}}/>)}
            </div>
            <ProgressBar progressBarRef={progressBarRef}/>
        </section>
    )
}