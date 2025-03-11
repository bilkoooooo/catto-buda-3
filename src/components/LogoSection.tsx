'use client';

import {Bebas_Neue} from 'next/font/google'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {cn} from "@lib/utils";

const bebasNeue = Bebas_Neue({
    weight: ['400'],
    subsets: ['latin'],
});

gsap.registerPlugin(ScrollTrigger);

export const LogoSection = () => {
    useGSAP(() => {
        const scrollAnim = gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                pin: false,
                trigger: '#header-section',
                start: "top top",
                endTrigger: "#top-section",
                end: "+=150",
            },
        });

        scrollAnim
            .to('#logo-section #text', {
                ease: 'power1.inOut',
                yPercent: 100,
                duration: 0.75,
                opacity: 0,
            }).to(
            '#logo-section',
            {
                filter: 'none',
                display: 'none',
            },
        );
    });

    return (
        <section id="logo-section"
                 className={cn("flex center justify-center items-center text-center z-40 w-full min-h-0 h-screen fixed inset-0 m-0", bebasNeue.className)}>
            <div id={"text"} className="text-8xl uppercase min-h-0">
                Kis Brigi<br/>
                <strong>Tattoo</strong>
            </div>
        </section>
    )
}
