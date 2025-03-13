'use client';

import React, {useContext} from "react";
import {FaEnvelope} from "react-icons/fa";
import {MenuStateContext} from "@services/MenuStateProvider";
import {LanguageContext} from "@services/LanguageProvider";
import logo from "public/assets/logo.png";
import Image from "next/image";
import {Globe} from "lucide-react";
import {Us, Hu, De} from "react-flags-select";

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

export default function Navbar() {
    const {navbarRef} = useContext(MenuStateContext);
    const {
        navbar: {
            contact,
            menu
        },
    } = useContext(LanguageContext).languageData;

    const {changeLanguage} = useContext(LanguageContext);

    const languages = [
        {code: 'en', name: 'English', Icon: Us},
        {code: 'hu', name: 'Magyar', Icon: Hu},
        {code: 'de', name: 'Deutsch', Icon: De},
    ]

    const LanguageSelector = () => {
        return (
            <div className={"relative group"}>
                <Globe/>
                <div
                    className={"hidden group-hover:flex gap-2 absolute top-10 right-0 bg-black p-2 rounded-md transform-gpu transition-all duration-200 before:absolute before:-top-5 before:left-0 before:right-0 before:h-5 before:content-['']"}>                    {languages.map((language) => (
                    <language.Icon
                        key={language.code} onClick={() => changeLanguage(language.code)}
                        className={"cursor-pointer hover:shadow-lg"}
                    />
                ))}
                </div>
            </div>
        )
    }

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
                                <Image src={logo} alt="logo" width={32} height={32} className="h-10 w-10"/>
                            </a>
                        </div>

                        <div onClick={() => setIsOpen(!isOpen)}
                             className="z-40 flex items-center order-2 font-extrabold gap-2 opacity-80 hover:opacity-100 cursor-pointer group">
                            <span className={"hidden sm:block"}>{menu}</span>
                            <HamburgerMenu className={"duration-300 group-hover:-rotate-90"}/>
                        </div>

                        {false && <div className="flex flex-shrink justify-between gap-x-4">
                            <div className="center">
                                <a className="hidden sm:flex justify-end min-w-28 items-center gap-2.5 no-underline"
                                   href={"/contact"}>
                                    {contact}
                                    <FaEnvelope/>
                                </a>
                            </div>

                            <LanguageSelector/>
                        </div>}
                    </div>
                </div>
            </div>
        </nav>
    )
}
