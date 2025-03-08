import {ImageHider} from "@components/common/ImageHider";
import Image from "next/image";
import AboutMePic from "@assets/rolam.jpg";

export const AboutMeImage = () => (
    <div className={"relative lg:basis-2/3 sm:basis-full sm:self-center h-screen"}>
        <ImageHider/>
        <Image
            id={"about-me-image"}
            src={AboutMePic}
            alt="about me"
            className="object-cover self-center justify-self-center w-full h-full"
            loading={"lazy"}
            sizes={"(max-width: 900px) 100vw, 600px"}
        />
    </div>)