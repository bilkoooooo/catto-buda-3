'use client';

import {AboutMeSection} from "@components/AboutMeSection/AboutMeSection";
import {HeaderSection} from "@components/HeaderSection";
import {InfoSection} from "@components/InfoSection/InfoSection";
import {LanguageContext} from "@services/LanguageProvider";
import {useContext} from "react";
import {LogoSection} from "@components/LogoSection";
import {VideoSection} from "@components/VideoSection";
import {GallerySection} from "@components/GallerySection";
import bgDark from "@assets/bg_dark.jpg";

export default function Home() {
    const {
        languageData: {
            site: {title}
        }
    } = useContext(LanguageContext);

    const Placeholder = () => <div className={"h-screen w-full flex items-center justify-center border-b border-red-400 "}> Placeholder </div>;

    return (
        <>
            <title>{title}</title>
            <meta name="title" content={title}/>
            <div id="container" className="w-full relative bg-fixed bg-center bg-contain"
                 style={{backgroundImage: `url(${bgDark.src})`}}>
                {/*<LogoSection/>*/}

                {/*<HeaderSection/>*/}

                {/*<VideoSection/>*/}
                <Placeholder/>

                <AboutMeSection/>

                <InfoSection/>
                {/*<Placeholder/>*/}
                {/*<GallerySection/>*/}
            </div>
        </>
    );
}
