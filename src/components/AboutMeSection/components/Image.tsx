import Image from "next/image";
import AboutMePic from "@assets/rolam.jpg";

export const AboutMeImage = () => (
    <div className={"lg:basis-auto grow-1 sm:basis-full order-last md:order-first sticky top-0 duration-300"}>
        <Image
            id={"about-me-image"}
            src={AboutMePic}
            alt="about me"
            loading={"lazy"}
            quality={100}
            width={600}
        />
    </div>)