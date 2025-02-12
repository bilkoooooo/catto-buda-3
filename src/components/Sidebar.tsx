'use client';

import React, {useContext} from "react";
import {cn} from "@/lib/utils";
import {MenuStateContext} from "@/services/MenuStateProvider";

type SidebarLink = {
    name: string;
    href: string;
}

const Sidebar = () => {
    const {isOpen} = useContext(MenuStateContext);

    const sideBarLinks = [
        {
            name: "Gallery",
            href: "/gallery",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Booking",
            href: "/contact",
        },
        {
            name: "Info",
            href: "/info",
        },
    ];

    const SidebarLinkElement = ({name, href}: SidebarLink) => {

        return (
            <div className={"text-stroke-1-2 text-stroke-darkRed hover:text-[--darkRed] transition inline-block"}>
                <a href={href} className="text-inherit text-6xl font-bold duration-300 ">{name}</a>
            </div>
        );
    }

    const commonClasses = "inset-0 flex w-screen h-screen fixed z-50 transition duration-700 -translate-x-full";

    return (
        <div className={isOpen ? "side-bar-open" : "side-bar-closed"}>
            <div
                className={cn(commonClasses, "bg-[--darkRed]", isOpen ? 'translate-x-0' : 'delay-100')}>
            </div>

            <div className={cn(commonClasses, "bg-[--primaryDark]", isOpen ? 'translate-x-0 delay-300 ' : '')}>
                <div className="w-full flex flex-col justify-center gap-5 pl-[10%] sideBarLinContainerk">
                    {sideBarLinks.map((link) => <SidebarLinkElement key={link.name} name={link.name}
                                                                    href={link.href}/>)}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;