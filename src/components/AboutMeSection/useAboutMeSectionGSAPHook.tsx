import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {RefObject} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const useAboutMeSectionGSAPHook = (containerRef: RefObject<HTMLDivElement | null>) => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        if (!containerRef?.current) {
            throw new Error('Container ref is not set');
        }

        const aboutMeSection = containerRef.current;
        // const aboutMeText = containerRef.current.querySelector('#about-me-text');
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: aboutMeSection,
                start: '-=100 center',
                end: () => "center center",
                toggleActions: "play none none reverse",
            },
            ease: "none"
        });

        // const texts = gsap.utils.toArray('#about-me-text div') || [];

        // timeline.to('#about-me-image', {
        //     backgroundPosition: "+=10",
        // })


        timeline.to(containerRef.current.querySelector('.image-hider'), {
            xPercent: 200,
            ease: 'power3.in',
            duration: 1.5,
        });


        // false && texts.forEach((el: unknown, index) => {
        //     const element = el as Element;
        //     timeline.fromTo(element,
        //         {
        //             opacity: 0.6,
        //             xPercent: -100
        //         },
        //         {
        //             opacity: 1,
        //             xPercent: 0,
        //             duration: 1,
        //         }, index * 0.1);
        // });

        return () => {
            timeline.reverse();
        }
    }, [])
}