'use client'

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {RefObject} from "react";

export const useGsapVideoSection = (sectionRef: RefObject<HTMLDivElement | null >) => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const scrollAnim = gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                pin: false,
                trigger: sectionRef.current,
                start: "-=100 top",
                end: "top",
            },
        });

        scrollAnim.to(
            '#video-section img',
            {
                filter: 'none',
            },
        )
    });
}