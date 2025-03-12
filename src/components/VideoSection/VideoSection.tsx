'use client';

import Image from "next/image";
import introPic from "@assets/intro_2.gif";
// import introPic from "@assets/intro.avif";
import {useRef} from "react";
import {useGsapVideoSection} from "@components/VideoSection/useGsapVideoSection";
import {cn} from "@lib/utils";


export const VideoSection = () => {
    const sectionRef = useRef(null);

    useGsapVideoSection(sectionRef);

    return (
        <div id="video-section" ref={sectionRef} className="video-section h-screen w-full relative ">
            <Image
                src={introPic.src}
                alt="heroine"
                fill={true}
                className={"scale-[25%]"}
                loading={"lazy"}
            />
            <div className="video-text flex flex-row absolute inset-y-0 text-6xl font-extrabold uppercase w-full z-40 my-auto justify-around items-center gap-[50%] opacity-35"
            onClick={() => {}}>
                <span className={"cursor-pointer "}>
                    Cattoo
                </span>
                <span className={"cursor-pointer "}>
                    Buda
                </span>
            </div>

        </div>
    )
}