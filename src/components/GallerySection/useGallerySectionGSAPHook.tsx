import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {RefObject} from "react";

export const UseGallerySectionGSAPHook = (images: HTMLImageElement[], galleryRef: RefObject<HTMLDivElement | null>) => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const images: Array<HTMLImageElement> = gsap.utils.toArray("#img-gallery img");

        if (!images.length || !galleryRef.current) {
            return false;
        }

        gsap.to('.self-promo', {
            x: '0',
        });

        images.forEach((image: HTMLImageElement) => {
            image.style.opacity = '0';
            gsap.to(image, {
                duration: 0.75,
                filter: 'grayScale(0)',
                scrollTrigger: {
                    trigger: image,
                    start: "-=100",
                    end: "center ",
                    toggleActions: "play reverse play reset",
                    // markers: true
                },
            });
        });
    }, [images]);
}