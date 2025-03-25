import heroinePic from '@assets/heroine_bg.jpg'
import {LogoSection} from "@components/HeaderSection/LogoSection";
import Image from "next/image";

export const HeaderSection = () => {
    return (
        <>
            <section id="header-section" className="h-screen w-full relative">
                <Image
                    src={heroinePic}
                    alt="heroine"
                    className={"object-cover lg:object-fill object-left w-full h-full"}
                    loading={"eager"}
                    quality={100}
                    priority={true}
                />
            </section>
            <LogoSection/>
        </>
    )
}