'use client';

import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ReactNode, useContext, useEffect, useRef, useState} from "react";
import {cn} from "@lib/utils";
import {LanguageContext} from "@services/LanguageProvider";
import parse from 'html-react-parser';
// import {MenuStateContext} from "@services/MenuStateProvider";
import {
    Info,
    NotebookPen,
    PencilLine,
    UserRoundCheck,
    Bandage,
    MessageCircleQuestion,
    Coins,
    Hourglass,
    CalendarDays
} from 'lucide-react';
import {UserDeviceContext} from "@services/UserDeviceProvider";

gsap.registerPlugin(ScrollTrigger);

export const InfoSection = () => {
    // const {navbarRef} = useContext(MenuStateContext);
    const userDevice = useContext(UserDeviceContext);

    const containerRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement | null>(null);
    const [progressState, setProgress] = useState<number>(0);
    const [activePanelIndex, setActivePanelIndex] = useState<number>(0);

    const {
        languageData
    } = useContext(LanguageContext);

    const {info} = languageData;

    const updateProgressLine = (_progress: number, duration: number = 0.1) => {
        if (!progressBarRef?.current || !(progressBarRef.current instanceof HTMLElement)) {
            throw new Error('Progress bar ref is not set');
        }

        gsap.to('.progress-line', {
            left: -(100 - (_progress * 100)) + "%",
            duration,
        });
    }

    useEffect(() => {
        updateProgressLine(progressState, 0);
    }, [progressState]);

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

            const timeline = gsap.timeline(
                {
                    scrollTrigger: {
                        trigger: '#info-section',
                        start: "top top",
                        scrub: true,
                        markers: true,
                        pin: true,
                        snap:
                        // window.innerWidth > 1280 ? undefined :
                            {
                                snapTo: 1 / (sectionCount - 1),
                                duration: {min: 0.3, max: 2.5},
                                ease: "power1.inOut",
                            },
                        end: () => "+=" + firstPanel.offsetWidth * (sectionCount - 1),
                        onUpdate: (self) => {
                            // console.log(self.progress);
                            updateProgressLine(self.progress);
                        },
                        onSnapComplete: (self) => {
                            const activeIndex = Math.round(self.progress * (sectionCount - 1));
                            // setActivePanelIndex(activeIndex);
                            // console.log(Math.round(self.progress * (sections.length - 1)));
                            // setProgress(self.progress);
                            [...progressBarRef?.current?.querySelectorAll('.icons svg')].splice(0, activeIndex + 1).forEach((icon) => {
                                if (!icon.classList.contains('text-[--darkRed]')) {
                                    icon.classList.add('text-[--darkRed]', 'fill-[--lightRed]', 'bg-black');
                                }
                            });
                        },
                        onEnter: (self) => {
                            console.log(self.progress);
                            updateProgressLine(0.01);
                            progressBarElem.classList.remove('hidden');
                        },
                        onLeave: () => {
                            progressBarElem.classList.add('hidden');
                        },
                        // onLeaveBack: () => {
                        //     progressBarElem.classList.add('hidden');
                        // }
                    },
                    ease: "none"
                });

            gsap.set(sections, {xPercent: 0});

            timeline.to(sections as gsap.TweenTarget[], {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
            });

            return () => {
                timeline.reverse();
            }
        }, [containerRef?.current]
    );

    const Title = ({title}: { title: string }) => (
        <div className="stroked-text text-[2rem] font-bold">
            {title}
        </div>
    )

    const Text = ({children}: { children: ReactNode }) => (
        <div className="text-justify"> {children} </div>
    )

    const List = ({items, title}: { items: string[], title: string | null }) => {
        return (
            <div className="text-left py-4">
                {title && <h2 className="font-bold">{title}</h2>}
                <ol className="pl-4 list-disc">
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
        )
    }

    interface PanelsProps {
        id?: string,
        children: ReactNode
    }

    const Panels = ({children, id}: PanelsProps) => {
        return (
            <section
                id={id} className={cn(`panel grow-1 shrink-0 basis-full w-screen py-20 px-8 flex`)}>
                <div
                    className="basis-full h-fit min-h-64 bg-white bg-opacity-40 self-center justify-center backdrop-blur-lg p-8 rounded-lg drop-shadow-lg flex flex-col items-start gap-4 overflow-hidden [text-shadow:_2px_2px_10px_rgb(0_0_0_/_100%)]">
                    {children}
                </div>
            </section>
        )
    }

    // const Icon = ({children}: { children: ReactNode }) => (
    //     <div className="icon w-8 h-8 mr-2 text-white fill-white">
    //         {children}
    //     </div>
    // )

    const ProgressBar = () => (
        <div id="progress-bar"
             ref={progressBarRef}
             className="w-full fixed inset-x-0 bottom-0">
            <div className={"w-2/3 pb-8 m-auto relative flex overflow-hidden"}>
                <div className={"icons flex justify-between items-center w-full z-2 text-3xl"}>
                    <Info className={"text-[--darkRed] bg-black"}/>
                    <NotebookPen/>
                    <PencilLine/>
                    <UserRoundCheck/>
                    <Bandage/>
                    <Coins/>
                    <MessageCircleQuestion/>
                    <Hourglass/>
                    <CalendarDays/>
                </div>
                <ProgressLine/>
            </div>
        </div>
    )

    const ProgressLine = () => <div
        className={cn("progress-line h-1 bg-opacity-60 bg-black  w-full absolute bottom-0 -left-full")}/>;

    return (
        <section id="info-section" className={"relative"}>
            <div ref={containerRef}
                 className="flex flex-nowrap overscroll-none h-screen w-screen relative bg-gradient-to-r from-[--lightRed] to-[--darkRed]">
                {Object.values(info).slice(0, 10).map(({title, summary, id}, index) => (
                    <Panels key={index} id={id}>
                        <Title title={title}/>
                        {summary && <Text>
                            {parse(summary)}
                        </Text>}
                    </Panels>
                ))}
            </div>
            <ProgressBar/>
        </section>
    )
}