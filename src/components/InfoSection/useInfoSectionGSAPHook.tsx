import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {RefObject} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

type RefType = RefObject<HTMLDivElement | null>;

export const useInfoSectionGSAPHook = (containerRef: RefType, progressBarRef: RefType) => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
            if (!containerRef?.current) {
                throw new Error('Container ref is not set');
            }

            const {current: containerElem} = containerRef;
            const firstPanel: HTMLDivElement | null = containerElem.querySelector('.panel');
            const {current: progressBarElem} = progressBarRef;

            if (!firstPanel || !progressBarElem) {
                throw new Error('First panel or progress bar ref is not set');
            }

            const sections: Element[] = gsap.utils.toArray(".panel");

            sections.forEach((section: Element) => {
                const childPanel = section.querySelector('.panel-child');
                if (childPanel) {
                    gsap.set(childPanel, {
                        opacity: 0,
                        x: 0
                    });
                    gsap
                        .to(childPanel, {
                            opacity: 1,
                            ease: "power1.in",
                            duration: 0.5,
                            immediateRender: true,
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "bottom bottom",
                            }
                        })
                }
            });
        }, []
    );
}