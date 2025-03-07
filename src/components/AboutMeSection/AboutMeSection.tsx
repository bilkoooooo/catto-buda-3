"use client";

import Image from "next/image";
import {useContext, useRef} from "react";
import {LanguageContext} from "@services/LanguageProvider";
import AboutMePic from "@assets/rolam.jpg";
import {useAboutMeSectionGSAPHook} from "@components/AboutMeSection/useAboutMeSectionGSAPHook";

export const AboutMeSection = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const {languageData} = useContext(LanguageContext);

    useAboutMeSectionGSAPHook(containerRef);

    const {quote, phrase1, phrase2, phrase3, phrase4} = languageData.aboutMe || {};

    return (
        <section id="about-me-section" className="relative overflow-hidden bg-opacity-10 bg-white">
            <div ref={containerRef}
                 className="bg-transparent h-screen w-full margin-auto p-12 overscroll-none flex justify-center items-start">
                <div
                    id={"about-me-text"}
                    className="flex flex-1 flex-col gap-4 text-xl leading-[1.8] lg:max-w-[600px] sm:w-full tracking-widest overflow-auto text-white text-justify">
                    <div>“
                        <strong>
                            {quote}
                        </strong>”

                        {phrase1}
                    </div>

                    {[phrase2, phrase3, phrase4].map((phrase, index) => (
                        <div key={index}>
                            {phrase}
                        </div>
                    ))}
                </div>

                <div className={"relative flex-1 px-8 self-center"}>
                    <div className={"red-bg w-100 h-40 bg-[--darkRed] absolute -right-12 -top-12"}/>
                    {false && <Image
                        src={AboutMePic}
                        alt="about me"

                        className="object-cotnain h-full"
                        loading={"lazy"}
                        sizes={"(max-width: 900px) 100vw, 600px"}
                    />}
                </div>
            </div>
        </section>
    )
}