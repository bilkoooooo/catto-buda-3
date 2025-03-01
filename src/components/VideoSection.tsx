'use client';

import Image from "next/image";
import introPic from "@assets/intro_2.gif";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef} from "react";

gsap.registerPlugin(ScrollTrigger);

export const VideoSection = () => {
    const sectionRef = useRef(null);
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

    return (
        <div id="video-section" ref={sectionRef} className="video-section h-screen w-full relative">
            <Image
                unoptimized={true}
                src={introPic.src}
                alt="heroine"
                fill={true}
                className={"object-cover blur-sm"}
                loading={"lazy"}
            />
        </div>
    )
}