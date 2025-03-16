'use client';

import {HeaderSection} from "@components/HeaderSection/HeaderSection";
import {VideoSection} from "@components/VideoSection/VideoSection";
import {AboutMeSection} from "@components/AboutMeSection/AboutMeSection";
import {InfoSection} from "@components/InfoSection/InfoSection";
import {GallerySection} from "@components/GallerySection/GallerySection";
import {LanguageContext} from "@services/LanguageProvider";
import {useContext} from "react";

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
            <div id="container" className="w-full relative">
                <HeaderSection/>

                <AboutMeSection/>

                <VideoSection/>

                <InfoSection/>

                <GallerySection/>
            </div>
        </>
    );
}
