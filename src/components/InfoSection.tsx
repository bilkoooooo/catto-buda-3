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

gsap.registerPlugin(ScrollTrigger);

export const InfoSection = () => {
    // const {navbarRef} = useContext(MenuStateContext);

    const containerRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
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

    useEffect(() => {
        if (!progressBarRef?.current || !(progressBarRef.current instanceof HTMLElement)) {
            throw new Error('Progress bar ref is not set');
        }

        [...progressBarRef?.current?.querySelectorAll('.icons svg')].splice(0, activePanelIndex + 1).forEach((icon) => {
            if (!icon.classList.contains('text-[--lightRed]')) {
                icon.classList.add('text-[--lightRed]');
            }
        });

    }, [activePanelIndex]);

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

            const scrollAnim = gsap.timeline(
                {
                    scrollTrigger: {
                        trigger: containerElem,
                        pin: true,
                        start: "top top",
                        scrub: true,
                        snap: {
                            snapTo: 1 / (sections.length - 1),
                            duration: {min: 0.1, max: 1.5},
                            ease: "power1.inOut",
                        },
                        end: () => "+=" + firstPanel.offsetWidth * (sections.length - 1),
                        onUpdate: (self) => {
                            updateProgressLine(self.progress);
                        },
                        onSnapComplete: (self) => {
                            setActivePanelIndex(Math.round(self.progress * (sections.length - 1)));
                            console.log(Math.round(self.progress * (sections.length - 1)));
                            setProgress(self.progress);
                        },
                        onEnter: () => {
                            updateProgressLine(0.01);
                            progressBarElem.classList.remove('hidden');
                        },
                        onLeave: () => {
                            progressBarElem.classList.add('hidden');
                        },
                        onLeaveBack: () => {
                            progressBarElem.classList.add('hidden');
                        }
                    },
                });

            scrollAnim.to(containerElem, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
            });

        }, [containerRef]
    );

    const Title = ({title}: { title: string }) => (
        <div className="stroked-text text-[2.5rem] font-bold mb-4">
            {title}
        </div>
    )

    const Text = ({children}: { children: ReactNode }) => (
        children
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
        id? : string,
        children: ReactNode,
        colors: { background: { from: string, to: string } }
    }

    const Panels = ({children, colors, id}: PanelsProps) => {
        const {background: {from, to}} = colors || {background: {from: 'black', to: 'black'}};

        return (
            <section
                id={id}
                style={{backgroundImage: `linear-gradient(to right, ${from}, ${to})`}}
                className={cn(`panel grow-1 shrink-0 basis-full w-screen py-20 px-8 flex`)}>
                <div
                    className="basis-full h-fit bg-white bg-opacity-40 self-center backdrop-blur-lg p-8 rounded-lg drop-shadow-lg flex flex-col justify-start items-start gap-4 overflow-hidden [text-shadow:_2px_2px_10px_rgb(0_0_0_/_100%)]">
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
             className="w-full fixed inset-x-0 bottom-0 hidden">
            <div className={"w-2/3 pb-8 m-auto relative flex overflow-hidden"}>
                <div className={"icons flex justify-between items-center w-full z-2"}>
                    <Info className={"text-[--lightRed]"}/>
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
        className={cn("progress-line h-2 bg-opacity-60 bg-[--lightRed] w-full absolute bottom-0 -left-full")}/>;

    return (
        <section id="info-section" className={"relative"}>
            <div ref={containerRef}
                 className="info-section flex flex-nowrap overscroll-none relative h-screen w-screen">
                {Object.values(info).slice(6,7).map(({title, text, text2, list, colors, id}, index) => (
                    <Panels key={index} colors={colors} id={id}>
                        <Title title={title}/>

                        <div className="text-container">
                            {text.map((text, index) => (
                                <Text key={index}>
                                    {parse(text)}
                                </Text>
                            ))}

                            {list?.length && list.map(({title, items}, index) => (
                                <List key={index} title={title} items={items}/>)
                            )}

                            {text2?.length && text2.map((text, index) => (
                                <Text key={index}>
                                    {parse(text)}
                                </Text>
                            ))}
                        </div>
                    </Panels>
                ))}
            </div>
            <ProgressBar/>
        </section>
    )
}