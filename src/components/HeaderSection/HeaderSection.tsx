import heroinePic from '@assets/heroine.webp'
import {LogoSection} from "@components/HeaderSection/LogoSection";
import Image from "next/image";

export const HeaderSection = () => {
    return (
        <>
            <section id="header-section" className="h-screen w-full relative">
                <Image
                    src={heroinePic}
                    alt="heroine"
                    fill={true}
                    className={"object-cover lg:object-fill object-left"}
                    loading={"eager"}
                    priority
                />
            </section>
            {/*<LogoSection/>*/}
        </>
    )
}