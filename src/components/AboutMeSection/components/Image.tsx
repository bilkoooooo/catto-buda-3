import {ImageHider} from "@components/common/ImageHider";
import Image from "next/image";
import AboutMePic from "@assets/rolam.jpg";

export const AboutMeImage = () => (
    <div className={"relative lg:basis-auto grow-1 sm:basis-full"}>
        <ImageHider/>
        <Image
            id={"about-me-image"}
            src={AboutMePic}
            alt="about me"
            loading={"lazy"}
            quality={100}
            width={600}
        />
    </div>)