import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const useLogoSectionGSAPHook = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

            console.log(gsap.utils.toArray('#logo-section span'));

            const animatedTexts = gsap.utils.toArray('#logo-section .animated-text');
            const t1 = gsap.timeline();

            t1
                .from(animatedTexts,
                    {
                        xPercent: 0,
                        ease: 'power1.in'
                    },
                )
                .to(animatedTexts,
                    {
                        xPercent: 1 / 3 * -100,
                        duration: 1,
                        delay: 1,
                        ease: 'power1.in'
                    },
                )
                .to(animatedTexts, {
                    xPercent: 2 / 3 * -100,
                    duration: 1,
                    delay: 2,
                    ease: 'power1.in'
                })
                .set(animatedTexts, {
                    xPercent: 0
                });

            t1.repeat(-1);


            const scrollAnim = gsap.timeline({
                scrollTrigger: {
                    trigger: '#header-section',
                    scrub: 1,
                    pin: false,
                    start: "top top",
                    endTrigger: "#top-section",
                    end: "+=350",
                    onLeave: () => {
                        t1.pause();
                    },
                    onEnterBack: () => {
                        t1.play();
                    }
                }
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
        },
        []
    )
    ;
}