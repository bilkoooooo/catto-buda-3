import {useGSAP} from "@gsap/react";
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

            const sections = gsap.utils.toArray(".panel");
            const sectionCount = sections.length;

            const svgs = [...progressBarElem?.querySelectorAll('svg')];

            const onCompleteSnapCallback = ({progress}: { progress: number }) => {
                const activeIndex = Math.round(progress * (sectionCount - 1));
                svgs.forEach((icon, index) => {
                    removeClass(icon, 'active');

                    if (index <= activeIndex) {
                        addClass(icon, 'active');
                    }
                });
            };

            const progressLine = progressBarElem.querySelector('progress');

            const timeline = !isMobile && gsap.timeline({
                scrollTrigger: {
                    trigger: '#info-section',
                    start: "top top",
                    scrub: true,
                    pin: containerElem,
                    pinSpacing: true,
                    pinnedContainer: containerElem,
                    anticipatePin: 1,
                    snap: {
                        snapTo: 1 / (sectionCount - 1),
                        duration: {min: 0.5, max: 2},
                        delay: 0.2,
                        inertia: false,
                        ease: "power1.out"
                    },
                    // snap: 1 / (sections.length - 1),
                    // snap: "labelsDirectional",
                    // markers: true,
                    end: () => ("+=" + (firstPanel.offsetWidth) * (sectionCount - 1)),
                    onSnapComplete: (self) => {
                        onCompleteSnapCallback(self);
                    },
                    onUpdate: ({progress}) => {
                        if (progressLine) {
                            progressLine.value = progress * 100;
                            gsap.to(progressLine, {
                                value: progress * 100,
                                ease: 'none',
                            });
                        }
                    }
                },
                ease: "none"
            });

            if (timeline) {
                timeline.to(sections as gsap.TweenTarget[], {
                        xPercent: -100 * (sectionCount - 1),
                        ease: "none",
                        duration: 1,
                    },
                );
            }

            return () => {
                timeline?.reverse?.();
            }
        }, []
    );
}