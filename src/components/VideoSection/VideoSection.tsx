'use client';

import Image from "next/image";
import introPic from "@assets/intro_2.gif";
// import introPic from "@assets/intro.avif";
import {useRef} from "react";
import {useGsapVideoSection} from "@components/VideoSection/useGsapVideoSection";


export const VideoSection = () => {
    const sectionRef = useRef(null);

    useGsapVideoSection(sectionRef);

    return (
        <div id="video-section" ref={sectionRef} className="video-section h-screen w-full relative">
            <Image
                src={introPic.src}
                alt="heroine"
                fill={true}
                className={"object-cover blur-sm"}
                loading={"lazy"}
            />
        </div>
    )
}