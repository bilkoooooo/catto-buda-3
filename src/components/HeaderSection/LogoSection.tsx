'use client';

import {Bebas_Neue} from 'next/font/google'
import {cn} from "@lib/utils";
import {useLogoSectionGSAPHook} from "@components/HeaderSection/useLogoSectionGSAPHook";

const bebasNeue = Bebas_Neue({
    weight: ['400'],
    subsets: ['latin'],
});

export const LogoSection = () => {
    useLogoSectionGSAPHook();

    const AnimatedLogoDiv = ({text, classNames}: { text: string, classNames?: string }) => {
        return (
            <div className={"relative inline-block overflow-hidden w-fit"}>
                <div className={cn(classNames, "animated-text w-[300%] flex absolute z-[50] b-0")}>
                    <div className={"inline-block"}>{text}</div>
                    <div className={"inline-block text-stroke-white"}>{text}</div>
                    <div className={"inline-block"}>{text}</div>
                </div>
                <div className={"opacity-0 inline-block"}>{text}</div>
            </div>
        )
    }

    return (
        <section id="logo-section"
                 className={cn(
                     "flex center justify-center items-center text-center",
                     "z-40 w-full h-screen fixed inset-0 m-0",
                     bebasNeue.className)}
        >
            <div id={"text"} className="text-8xl uppercase min-h-0">
                <div className={"flex gap-1"}>
                    <AnimatedLogoDiv text={"Kis"}/>
                    <AnimatedLogoDiv text={"Brigi"}/>
                </div>
                <AnimatedLogoDiv text={"Tattoo"} classNames={"  "}/>
            </div>
        </section>
    )
}
