'use client';

import React, {useContext} from "react";
import {MenuStateContext} from "@services/MenuStateProvider";
import {LanguageContext} from "@services/LanguageProvider";
import logo from "public/assets/logo.png";
import Image from "next/image";

//authoer
const svgAttr = {
    width: 24,
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
}

const MENU = () => (
    <svg {...svgAttr}>
        <path d="M3 12h18"/>
        <path d="M3 18h18"/>
        <path d="M3 6h18"/>
    </svg>
);
const MENU_OPEN = () => (
    <svg {...svgAttr} className="transform rotate-90 delay-500 transition duration-500">
        <path d="M18 6 6 18"/>
        <path d="m6 6 12 12"/>
    </svg>
);

export const IconSvg =  () => <Image src={logo} alt="logo" width={32} height={32} className="h-10 w-10"/>


export function Navbar() {
    const {navbarRef} = useContext(MenuStateContext);
    const {
        navbar: {
            menu
        },
    } = useContext(LanguageContext).languageData;

    const {isOpen, setIsOpen} = useContext(MenuStateContext);

    const HamburgerMenu = ({className}: { className: string }) => <div className={className}>
        {isOpen ? <MENU_OPEN/> : <MENU/>}
    </div>

    return (
        <nav id="navbar"
             ref={navbarRef}
             className="fixed max-w-full w-full top-0 z-[60] justify-between duration-500 text-white ">
            <div className="mx-auto py-3 px-6 sm:px-10  lg:px-14">
                <div className="relative flex items-center">
                    <div className="flex flex-1 h-full items-center justify-between">
                        <div>
                            <a href={"/"} className="flex items-center gap-2.5 no-underline">
                                <IconSvg/>
                            </a>
                        </div>

                        <div onClick={() => setIsOpen(!isOpen)}
                             className="z-40 flex items-center order-2 font-extrabold gap-2 opacity-80 hover:opacity-100 cursor-pointer group">
                            <span className={"hidden sm:block"}>{menu}</span>
                            <HamburgerMenu className={"duration-300 group-hover:-rotate-90"}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
