import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const useLogoSectionGSAPHook = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const scrollAnim = gsap.timeline({
            scrollTrigger: {
                trigger: '#header-section',
                scrub: 1,
                pin: false,
                start: "top top",
                endTrigger: "#top-section",
                end: "+=150",
            },
        });

        scrollAnim
            .to('#logo-section #text', {
                ease: 'power1.inOut',
                yPercent: 100,
                duration: 0.75,
                opacity: 0,
            }).to(
            '#logo-section',
            {
                filter: 'none',
                display: 'none',
            },
        );
    }, []);
}