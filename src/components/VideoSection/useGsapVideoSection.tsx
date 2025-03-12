'use client'

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {RefObject} from "react";

export const useGsapVideoSection = (sectionRef: RefObject<HTMLDivElement | null>) => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                pin: true,
                trigger: sectionRef.current,
                start: "top top",
                end: "+=1000",
                markers: true,
            },
        });

        timeline
            .add('start')
            .to(
                '#video-section img',
                {
                    duration: 0.5,
                    ease: 'power1.inOut',
                    scale: 1
                },
                'start'
            )
            .to(
                '#video-section .video-text', {
                    gap: 0,
                    justifyContent: 'center',
                    attr: {['data-active']: 1},
                    opacity: 1
                },
                'start'
            )
            .to('#video-section .video-text span',
                {
                    borderBottom: '2px solid white',
                    borderTop: '2px solid white',
                    duration: 0.5,
                    ease: 'power1.in'
                })
    });
}