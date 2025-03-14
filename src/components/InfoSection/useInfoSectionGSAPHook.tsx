import {useGSAP, useGSAPReturn} from "@gsap/react";
import gsap from "gsap";
import {RefObject, useContext} from "react";
import {addClass, removeClass} from "@lib/utils";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {UserDeviceContext} from "@services/UserDeviceProvider";

type RefType = RefObject<HTMLDivElement | null>;

export const useInfoSectionGSAPHook = (containerRef: RefType, progressBarRef: RefType) => {
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = useContext(UserDeviceContext)?.deviceType !== 'Desktop';

    useGSAP(() => {

            if (isMobile) {
                return false;
            }

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
            const sectionCount = sections.length;

            const svgs = [...progressBarElem?.querySelectorAll('svg')];

            sections.forEach((section: Element) => {
                const childPanel = section.querySelector('.panel-child');
                if (childPanel) {
                    gsap
                        .to(childPanel, {
                            x: 0,
                            ease: "power1.in",
                            duration: 1,
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "bottom bottom",
                                markers: true,
                            }
                        })
                }
            });
        }, []
    );
}