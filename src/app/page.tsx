'use client';

import {AboutMeSection} from "@components/AboutMeSection/AboutMeSection";
import {HeaderSection} from "@components/HeaderSection";
import {InfoSection} from "@components/InfoSection/InfoSection";
import {LanguageContext} from "@services/LanguageProvider";
import {useContext} from "react";
import bgDark from "@assets/bg_dark.jpg";
import {Placeholder} from "@components/common/Placeholder";
import {VideoSection} from "@components/VideoSection/VideoSection";
import {GallerySection} from "@components/GallerySection/GallerySection";

export default function Home() {
    const {
        languageData: {
            site: {title}
        }
    } = useContext(LanguageContext);

    return (
        <>
            <title>{title}</title>
            <meta name="title" content={title}/>
            <div id="container" className="w-full relative bg-fixed bg-center bg-contain"
                 style={{backgroundImage: `url(${bgDark.src})`}}>
                <HeaderSection/>

                <VideoSection/>

                <AboutMeSection/>

                <InfoSection/>

                <GallerySection/>

                <Placeholder/>
            </div>
        </>
    );
}
