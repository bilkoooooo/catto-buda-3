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

    return (
        <section id="logo-section"
                 className={cn("flex center justify-center items-center text-center z-40 w-full min-h-0 h-screen fixed inset-0 m-0", bebasNeue.className)}>
            <div id={"text"} className="text-8xl uppercase min-h-0">
                Kis Brigi<br/>
                <strong>Tattoo</strong>
            </div>
        </section>
    )
}
