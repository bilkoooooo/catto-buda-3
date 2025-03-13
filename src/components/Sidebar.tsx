'use client';

import React, {useContext} from "react";
import {cn} from "@lib/utils";
import {MenuStateContext} from "@services/MenuStateProvider";
import {LanguageContext} from "@services/LanguageProvider";
import {usePathname, useRouter} from "next/navigation";

type SidebarLink = {
    key: string;
    text: string;
    href: string;
}

const Sidebar = () => {
    const {isOpen, setIsOpen} = useContext(MenuStateContext);
    const {
        languageData: {
            sidebar
        }
    } = useContext(LanguageContext);

    const pathname = usePathname();

    const router = useRouter()

    const {
        gallery,
        about,
        booking,
        info
    } = sidebar;

    const sideBarLinks = [
        {
            key: "About",
            href: "#about-me-section",
            text: about
        },
        {
            key: "Info",
            href: "#info-section",
            text: info
        },
        {
            key: "Booking",
            href: "/contact",
            text: booking
        },
        {
            key: "Gallery",
            href: "#gallery-section",
            text: gallery
        }
    ];

    const ScrollToElem = (elem: Element | null) => elem?.scrollIntoView?.({behavior: "smooth"})

    const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");

        if (!href) {
            return;
        }

        setIsOpen(false);

        if (href?.includes('#')) {
            if (pathname === '/') {
                ScrollToElem(document.querySelector(href))
            }
            router.push(`/${href}`);
        } else {
            router.push(href);
        }
    }

    const SidebarLinkElement = ({text, href}: SidebarLink) => {
        return (
            <div className={"inline-block"}>
                <a href={href}
                   onClick={onLinkClick}
                   className="text-inherit text-4xl md:text-5xl lg:text-6xl font-bold duration-300 text-stroke-1-2  text-stroke-lightRed  hover:text-[--lightRed] transition ">{text}</a>
            </div>
        );
    }

    const commonClasses = "inset-0 flex w-screen h-screen fixed z-50 transition duration-700 -translate-y-full";

    return (
        <div className={isOpen ? "side-bar-open" : "side-bar-closed"}>
            <div
                className={cn(commonClasses, "bg-[--darkRed]", isOpen ? 'translate-y-0' : 'delay-100')}>
            </div>

            <div className={cn(commonClasses, "bg-[--primaryDark]", isOpen ? 'translate-y-0 delay-300 ' : '')}>
                <div className="w-full flex flex-col justify-center gap-5 pl-[10%] ">
                    {sideBarLinks.map(({key, text, href}) =>
                        <SidebarLinkElement key={key} text={text} href={href}/>)}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;