"use client";

import Image from "next/image";
import {useContext} from "react";
import {LanguageContext} from "@services/LanguageProvider";
import AboutMePic from "@assets/rolam.jpg";

export const AboutMeSection = () => {
    const {
        languageData: {
            aboutMe
        }
    } = useContext(LanguageContext);

    const {
        quote,
        phrase1,
        phrase2,
        phrase3,
        phrase4
    } = aboutMe;

    return (
        <div id="about-me-section"
             className="bg-gradient-to-r from-[--darkRed] via-red-800 to-[--lightRed] w-full margin-auto p-12">
            <div
                className="flex bg-transparent justify-center items-start w-full relative">
                <div
                    className="flex flex-1 flex-col gap-4 text-xl leading-[1.8] lg:max-w-[600px] sm:w-full tracking-widest overflow-auto text-white">
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
                    <Image
                        src={AboutMePic}
                        alt="about me"

                        className="object-cotnain h-full"
                        loading={"lazy"}
                        sizes={"(max-width: 900px) 100vw, 600px"}
                    />
                </div>
            </div>
        </div>
    )
}