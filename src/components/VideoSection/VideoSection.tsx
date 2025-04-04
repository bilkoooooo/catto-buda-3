'use client';

import Image from "next/image";
import introPic from "@assets/intro_2.gif";
import {useRef} from "react";
import {useGsapVideoSection} from "@components/VideoSection/useGsapVideoSection";
import {VideoText} from "@components/VideoSection/VideoText";

export const VideoSection = () => {
    const sectionRef = useRef(null);

    useGsapVideoSection(sectionRef);

    return (
        <div id="video-section" ref={sectionRef} className="video-section h-screen w-full relative">
            <Image
                src={introPic.src}
                alt="heroine"
                fill={true}
                className={"scale-[100%] sm:scale-[50%] lg:scale-[25%] aspect-video"}
                loading={"lazy"}
            />
            <VideoText/>
        </div>
    )
}