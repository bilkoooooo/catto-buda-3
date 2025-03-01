'use client';

import {AboutMeSection} from "@components/AboutMeSection";
import {HeaderSection} from "@components/HeaderSection";
import {InfoSection} from "@components/InfoSection";
import {LanguageContext} from "@services/LanguageProvider";
import {useContext} from "react";
import {LogoSection} from "@components/LogoSection";
import {VideoSection} from "@components/VideoSection";
import {GallerySection} from "@components/GallerySection";

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
                <LogoSection/>

                <HeaderSection/>

                <VideoSection/>

                <AboutMeSection/>

                <InfoSection/>

                <GallerySection/>
            </div>
        </>
    );
}
