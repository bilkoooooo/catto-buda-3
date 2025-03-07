import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {RefObject} from "react";
import {addClass, removeClass} from "@lib/utils";
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

            const sections = gsap.utils.toArray(".panel");
            const sectionCount = sections.length;

            const svgs = [...progressBarElem?.querySelectorAll('svg')];

            const onCompleteSnapCallback = ({progress}: { progress: number }) => {
                const activeIndex = Math.round(progress * (sectionCount - 1));
                // progressBarElem.value = progress * 100;
                // gsap.to('progress', {
                //     value: progress * 100,
                //     ease: 'none',
                // });
                svgs.forEach((icon, index) => {
                    removeClass(icon, 'active');

                    if (index <= activeIndex) {
                        addClass(icon, 'active');
                    }
                });
            };

            console.log(containerElem);

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#info-section',
                    start: "top top",
                    scrub: true,
                    pin: containerElem,
                    pinSpacing: true,
                    pinnedContainer: containerElem,
                    anticipatePin: 1,
                    // snap: {
                    //     // snapTo: (value) => {
                    //     //     return Math.round(value * (sectionCount - 1)) / (sectionCount - 1);
                    //     // },
                    //     // snapTo: 1 / (sectionCount - 1),
                    //     snapTo: "labels",
                    //     duration: {min: 0.5, max: 2},
                    //     delay: 0.2,
                    //     inertia: false,
                    //     ease: "power1.out"
                    // },
                    // snap: 1 / (sections.length - 1),
                    // snap: "labelsDirectional",
                    markers: true,
                    end: () => ("+=" + (firstPanel.offsetWidth) * (sectionCount - 1)),
                    onSnapComplete: (self) => {
                        onCompleteSnapCallback(self);
                    },
                    onEnter: () => progressBarElem.classList.remove('hidden'),
                    onLeave: () => progressBarElem.classList.add('hidden'),
                },
                ease: "none"
            });

            timeline.to(sections as gsap.TweenTarget[], {
                    xPercent: -100 * (sectionCount - 1),
                    ease: "none",
                    duration: 1,
                },
            );


            console.log(timeline.labels);
            timeline.to('progress', {
                value: 100,
                ease: 'none',
            });

            return () => {
                timeline.reverse();
            }
        }, []
    );
}