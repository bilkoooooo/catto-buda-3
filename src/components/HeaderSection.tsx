import heroinePic from '@assets/heroine.webp'
import {LogoSection} from "@components/LogoSection";

export const HeaderSection = () => {
    return (
        <>
            <section id="header-section"
                     className="flex w-full h-screen bg-fixed bg-cover bg-left bg-no-repeat"
                     style={{
                         backgroundImage: `url(${heroinePic.src})`,
                     }}/>
            <LogoSection/>
        </>
    )
}