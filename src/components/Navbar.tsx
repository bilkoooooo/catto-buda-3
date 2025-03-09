'use client';

import React, {useContext} from "react";
import {FaEnvelope} from "react-icons/fa";
import {MenuStateContext} from "@services/MenuStateProvider";
import {LanguageContext} from "@services/LanguageProvider";
import logo from "public/assets/logo.png";
import Image from "next/image";

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
        languageData: {
            navbar
        }
    } = useContext(LanguageContext);

    const {
        contact,
        menu
    } = navbar || {contact: "Contact", menu: "Menu"};

    const {isOpen, setIsOpen} = useContext(MenuStateContext);

    const HamburgerMenu = () => isOpen ? <MENU_OPEN/> : <MENU/>

    return (
        <nav id="navbar"
             ref={navbarRef}
             className="fixed max-w-full w-full top-0 z-[60] justify-between duration-500 text-white ">
            <div className="mx-auto py-3 px-6 sm:px-10  lg:px-14">
                <div className="relative flex items-center">
                    <div className="flex flex-1 h-full items-center justify-between">
                        <div onClick={() => setIsOpen(!isOpen)}
                             className="z-40 flex items-center order-2 lg:order-0 font-extrabold gap-2 opacity-80 duration-150 hover:opacity-100 cursor-pointer">
                            <HamburgerMenu/>
                            <span className={"hidden sm:block"}>{menu}</span>
                        </div>

                        <div>
                            <a href={"/"} className="flex items-center gap-2.5 no-underline">
                                <Image src={logo} alt="logo" width={32} height={32} className="h-10 w-10"/>
                            </a>
                        </div>

                        <div className="flex flex-shrink justify-between">
                            <div className="center">
                                <a className="hidden sm:flex items-center gap-2.5 no-underline" href={"/contact"}>
                                    {contact}
                                    <FaEnvelope/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// const HoverLink = ({children, onClick}: HoverLink) => {
//     return (
//         <div onClick={onClick}
//              className="items-center gap-2.5 group relative flex transition-all duration-200 cursor-pointer px-6">
//                 <span
//                     className="text-xl absolute left-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
//                     {'<'}
//                 </span>
//             {children}
//             <span
//                 className="text-xl absolute right-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
//                     {'>'}
//                 </span>
//         </div>
//     );
// };
