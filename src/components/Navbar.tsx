'use client';

import React, {ReactNode, useContext} from "react";
import {FaEnvelope} from "react-icons/fa";
import {MenuStateContext} from "@/services/MenuStateProvider";
import {cn} from "@/lib/utils";

interface HoverLink {
    children: ReactNode;
    onClick?: () => void;
}

export default function Navbar() {
    const {isOpen, setIsOpen} = useContext(MenuStateContext);

    const HamburgerIcon = () => {
        const spanClasses = 'bg-white block h-0.5 w-6 rounded-sm transition-transform';

        return (
            <div className="flex flex-col justify-center items-center">
                <span
                    className={cn(spanClasses, isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5')}></span>
                <span
                    className={cn(spanClasses, isOpen ? 'opacity-0' : 'opacity-100')}></span>
                <span
                    className={cn(spanClasses, isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5')}></span>
            </div>
        )
    };

    const HoverLink = ({children, onClick}: HoverLink) => {
        return (
            <div onClick={onClick}
                 className="items-center gap-2.5 group relative flex transition-all duration-200 cursor-pointer px-6">
                <span
                    className="text-xl absolute left-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {'<'}
                </span>
                {children}
                <span
                    className="text-xl absolute right-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {'>'}
                </span>
            </div>
        );
    };

    return (
        <nav id="navbar" className="fixed max-w-full w-full top-0 z-[60] justify-between duration-500 text-white backdrop-blur">
            <div className="mx-auto py-3 sm:px-6 lg:px-14">
                <div className="relative flex items-center">
                    <div className="flex flex-1 h-full items-center justify-between">
                        <div onClick={() => setIsOpen(!isOpen)}
                             className="z-40 flex items-center font-extrabold gap-2 opacity-80 duration-150 hover:opacity-100 cursor-pointer">
                            <HamburgerIcon/>
                            Menu
                        </div>

                        <div>
                            <a href={"/"} className="flex items-center gap-2.5 no-underline">
                                <img src="/assets/logo.png" alt="logo" className="h-10 w-10"/>
                            </a>
                        </div>

                        <div className="flex flex-shrink justify-between">
                            <div className="center">
                                <a className="flex items-center gap-2.5 no-underline" href={"/contact"}>
                                    contact
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