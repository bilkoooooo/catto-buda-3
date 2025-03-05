import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {RefObject} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
// import {ScrollSmoother} from "@gsap/ScrollSmoother";

export const useGSAPCustomHook = (containerRef: RefObject<HTMLDivElement | null>) => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        if (!containerRef?.current || !(containerRef.current instanceof HTMLDivElement)) {
            return null;
        }
        const {current: container} = containerRef;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: () => `+=${container.offsetHeight}`,
                scrub: 1,
                pin: true,
                markers: true
            }
        });

        timeline.to('#about-me-text', {
            opacity: 1,
            yPercent: -100,
            duration: 1
        })
    }, [containerRef?.current])
}