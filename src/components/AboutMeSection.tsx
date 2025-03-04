"use client";

import Image from "next/image";
import {useContext, useRef} from "react";
import {LanguageContext} from "@services/LanguageProvider";
import AboutMePic from "@assets/rolam.jpg";
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

export const AboutMeSection = () => {
    gsap.registerPlugin(ScrollTrigger);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const {
        languageData: {
            aboutMe
        }
    } = useContext(LanguageContext);

    useGSAP(() => {
        if (!containerRef?.current || !(containerRef.current instanceof HTMLDivElement)) {
            return null;
        }

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: () => `+=${containerRef.current.offsetHeight}`,
                scrub: 1,
                pin: true,
                markers: true
            }
        });

        timeline.to('#about-me-text', {
            opacity: 1,
            yPercent: -100,
            duration: 1
        })
    }, [])

    const {
        quote,
        phrase1,
        phrase2,
        phrase3,
        phrase4
    } = aboutMe;

    return (
        <div id="about-me-section"
             ref={containerRef}
             className="bg-gradient-to-r from-[--darkRed] via-red-800 to-[--lightRed] h-screen w-full margin-auto p-12">
            <div
                className="flex bg-transparent justify-center items-start w-full relative">
                <div
                    id={"about-me-text"}
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