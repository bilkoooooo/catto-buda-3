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
                pin: false,
                trigger: '#container',
                start: "top top",
                endTrigger: "#top-section",
                end: "+=150",
            },
        });

        scrollAnim
            .to('#logo-section #text', {
                ease: 'power1.inOut',
                y: '8rem',
                duration: 0.5,
                opacity: 0,
            }).to(
            '#logo-section',
            {
                ease: 'power1.inOut',
                duration: 0.5,
                display: 'none',
            },
        );
    });

    return (
        <section id="logo-section"
             className="flex center justify-center items-center text-center z-40 w-full min-h-0 h-screen fixed inset-0 m-0">
            <div id={"text"} className="text-8xl uppercase min-h-0">
                Kis Brigi
                <br/>
                <strong>Tattoo</strong>
            </div>
        </section>
    )
}
