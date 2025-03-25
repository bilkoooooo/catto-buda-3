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

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: aboutMeSection,
                start: '-=100 center',
                end: () => "center center",
            },
            ease: "none"
        });


        timeline.fromTo('#about-me-text', {
                yPercent: -100,
                opacity: 0.6,
                scale: 0.4
            }, {
                yPercent: 0,
                opacity: 1,
                duration: 1.5,
                scale: 1,
            },
            "text"
        )
            .to(containerRef.current.querySelector('.image-hider'), {
                    xPercent: -200,
                    ease: 'power3.in',
                    duration: 0.5,
                },
                'img'
            );

        ScrollTrigger.create({
            trigger: aboutMeSection,
            start: "-=100px top",
            end: "bottom center",
            scrub: 1,
            onUpdate: self => {
                gsap.to(
                    '#about-me-image',
                    {
                        objectPosition: `0 ${self.progress * 100}px`,
                        duration: 0.5,
                        ease: 'power1'
                    },
                )
            }
        });

        return () => {
            timeline.reverse();
        }
    }, [])
}