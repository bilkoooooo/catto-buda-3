'use client';

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const LogoSection = () => {
    useGSAP(() => {
        const scrollAnim = gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                pin: true,
                trigger: '#top-container',
                start: "top top",
                endTrigger: "#top-section",
                end: "+=100",
            },
        });

        scrollAnim
            .to('#logo-section #text', {
                ease: 'power1.inOut',
                y: '4rem',
                opacity: 0,
            });
    });

    return (
        <div id="logo-section" className="flex flex-col center justify-center text-center z-40 w-full">
            <div className="uppercase flex flex-col z-10 text-7xl basis-1/3">
                <div id={"text"}
                     className="text-transparent text-stroke-1-2 text-stroke-lightRed  line-clamp-1 whitespace-normal">Kis
                    Brigi Tattoo
                </div>
            </div>
        </div>
    )
}
