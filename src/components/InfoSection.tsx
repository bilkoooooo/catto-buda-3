'use client';

import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ReactNode} from "react";
import {cn} from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export const InfoSection = () => {
    useGSAP(() => {
        const sections = gsap.utils.toArray(".panel");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".panel-container",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: "+=3500",
            }
        });
    });

    const Title = ({title}: { title: string }) => (
        <div className="stroked-text text-6xl font-bold">
            {title}
        </div>
    )

    const Panels = ({children, additionalClasses = ''}: { children: ReactNode, additionalClasses?: string }) => {
        return (
            <div
                className={cn("basis-full shrink-0 panel w-screen h-screen flex flex-col gap-4 items-start justify-center p-16 text-justify", additionalClasses)}>
                {children}
            </div>
        )
    }

    return (
        <div className="panel-container flex flex-nowrap overscroll-none w-full">

            <Panels additionalClasses="">
                <Title title="Tudnivalók"/>

                <div>
                    Egy nap egy vendég
                    -Hogy néz ki nálam egy munkafolyamat?
                </div>

            </Panels>

            <Panels>
                <Title title="Tervezés."/>

                <div>
                    1 órakor találkozunk az üzletben, leülünk és kicsit beszélgetünk. Megkérdezem mit szeretnél
                    tetováltatni, mi az elképzelés, van-e konkrét kép, vagy csak példák, esetleg egyik sem. Megesik
                    hogy a hozott képek nem a legjobb minőségűek, vagy nem annyira kifejezőek a kért témához,
                    ilyenkor segítek, ajánlok jobb ötleteket.
                    <br/>
                    -Egy szép kép lehet mutatós a falon, de nem feltétlen
                    áll jól tetoválásként.
                    <br/>
                    Beszélgetés közben elkészítem a tervet (kézzel rajzolok, vagy számítógépen szerkesztek) Ez akár
                    1-2 órát is igénybe vehet, de addig kicsit megismerlek és jobban személyre szabott lesz a
                    végeredmény.
                    <br/>
                    Amikor elkészül a terv és mindketten elégedettek vagyunk vele, nekikezdünk a tetoválásnak.
                </div>
            </Panels>
            <Panels>
                <Title title="Tetoválás."/>

                <div>
                    Nagyjából óránként szünetet tartunk, tudunk enni, inni (az üzletemben konyha is van, hűtővel,
                    mikróval) tehát lehet hozni, de rendelni is ételt. Ez fontos, mert általában 4-6 órát nálam
                    töltesz, nem érdemes éhesen maradni, mert rosszul lehetsz!

                    Fájdalomcsillapításra hozhatsz magaddal gyógyszert amit ismersz, ha van ami bevált (Flector,
                    Advil, Cataflam stb.) Lidocain tartalmú érzéstelenítőket nem használok, ha ilyesmivel készülsz
                    kérlek beszéljük meg.

                    Ami sokkal fontosabb, hogy kipihenve, lelkileg felkészülve gyere!
                </div>
            </Panels>

        </div>
    )
}