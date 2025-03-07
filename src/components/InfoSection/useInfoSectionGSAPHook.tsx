import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {RefObject} from "react";
import {addClass, hasClass, removeClass} from "@lib/utils";

type RefType = RefObject<HTMLDivElement | null>;

export const useInfoSectionGSAPHook = (containerRef: RefType, progressBarRef: RefType) => {

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

            containerElem.scrollIntoView();

            const sections = gsap.utils.toArray(".panel");
            const sectionCount = sections.length;

            const svgs = [...progressBarElem?.querySelectorAll('.icons svg')];

            const onCompleteSnapCallback = ({progress}: { progress: number }) => {
                const activeIndex = Math.round(progress * (sectionCount - 1));
                // progressBarElem.value = progress * 100;

                svgs.forEach((icon, index) => {
                    removeClass(icon, 'active');

                    if (index <= activeIndex) {
                        addClass(icon, 'active');
                    }
                });
            };

            console.log(firstPanel.offsetWidth * (sectionCount - 1));

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#info-section',
                    start: "top top",
                    scrub: true,
                    pin: true,
                    snap: {
                        snapTo: 1 / (sectionCount - 1),
                        duration: {min: 0.3, max: 2.5},
                        ease: "power1.inOut",
                    },
                    markers: true,
                    end: () => "+=" + firstPanel.offsetWidth * (sectionCount - 1),
                    onSnapComplete: onCompleteSnapCallback,
                    onEnter: () => progressBarElem.classList.remove('hidden'),
                    onLeave: () => progressBarElem.classList.add('hidden'),
                },
                ease: "none"
            });

            // gsap.set(sections, {xPercent: 0});

            timeline.to(sections as gsap.TweenTarget[], {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
            });

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