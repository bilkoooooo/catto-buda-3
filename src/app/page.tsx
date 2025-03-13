'use client';

import {HeaderSection} from "@components/HeaderSection/HeaderSection";
import {VideoSection} from "@components/VideoSection/VideoSection";
import {AboutMeSection} from "@components/AboutMeSection/AboutMeSection";
import {InfoSection} from "@components/InfoSection/InfoSection";
import {GallerySection} from "@components/GallerySection/GallerySection";
import {LanguageContext} from "@services/LanguageProvider";
import {useContext} from "react";
import bgDark from "@assets/bg_dark.jpg";
import {Placeholder} from "@components/common/Placeholder";

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
