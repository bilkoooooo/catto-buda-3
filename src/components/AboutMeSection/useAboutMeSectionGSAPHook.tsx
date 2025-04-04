import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {RefObject, useContext} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {UserDeviceContext} from "@services/UserDeviceProvider";

export const useAboutMeSectionGSAPHook = (containerRef: RefObject<HTMLDivElement | null>) => {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = useContext(UserDeviceContext)?.deviceType !== 'Desktop';

    useGSAP(() => {
        if (!containerRef?.current) {
            throw new Error('Container ref is not set');
        }

        const aboutMeSection = containerRef.current;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: aboutMeSection,
                start: 'top top',
                end: () => "bottom bottom",
            },
            ease: "none"
        });


        if (!isMobile) {
            timeline.fromTo('#about-me-text', {
                    opacity: 0.6,
                }, {
                    opacity: 1,
                    duration: 1.5,
                },
                "text"
            );

            const common = {
                duration: 0.5,
                ease: 'power1',
            };

            const image = aboutMeSection.querySelector('#about-me-image') as HTMLImageElement;

            ScrollTrigger.create({
                trigger: aboutMeSection,
                start: "-=100px top",
                end: "bottom center",
                scrub: 1,
                onUpdate: ({progress}) => {
                    gsap.to(image, {
                        objectPosition: `0 ${progress * 50}px`,
                        ...common
                    });

                    gsap.to(image, {
                        objectPosition: `0 0`,
                        ...common
                    });
                }
            });
        }

        return () => {
            timeline.reverse();
        }
    }, [])
}