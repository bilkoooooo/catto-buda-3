import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {RefObject} from "react";

export const UseGallerySectionGSAPHook = (galleryRef: RefObject<HTMLDivElement | null>) => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const images: Array<HTMLImageElement> = gsap.utils.toArray("#img-gallery img");

        if (!images.length || !galleryRef.current) {
            return false;
        }

        images.forEach((image: HTMLImageElement) => {
            gsap.to(image, {
                duration: 0.5,
                filter: 'grayScale(0)',
                scrollTrigger: {
                    trigger: image,
                    start: "-=50",
                    end: '55% center',
                    toggleActions: "play reverse play reset",
                },
            });
        });
    }, []);
}