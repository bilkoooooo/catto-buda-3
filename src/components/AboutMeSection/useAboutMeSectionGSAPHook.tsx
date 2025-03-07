import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {RefObject} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
// import {ScrollSmoother} from "@gsap/ScrollSmoother";

export const useAboutMeSectionGSAPHook = (containerRef: RefObject<HTMLDivElement | null>) => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        if (!containerRef?.current) {
            throw new Error('Container ref is not set');
        }
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about-me-section',
                start: 'top top',
                end: () => "center center",
                toggleActions: "play none none reverse",
            },
            ease: "none"
        });

        const texts = gsap.utils.toArray('#about-me-text div') || [];

        texts.forEach((el: unknown, index) => {
            const element = el as Element;
            timeline.fromTo(element,
                {
                    opacity: 0.6,
                    xPercent: -100
                },
                {
                    opacity: 1,
                    xPercent: 0,
                    duration: 1,
                }, index * 0.1);
        });

        return () => {
            timeline.reverse();
        }
    }, [])
}