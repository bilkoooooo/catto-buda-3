'use client';

import React, {useContext} from "react";
import {cn} from "@lib/utils";
import {MenuStateContext} from "@services/MenuStateProvider";
import {LanguageContext} from "@services/LanguageProvider";
import {usePathname, useRouter} from "next/navigation";
import {Globe} from "lucide-react";
import {Us, Hu, De} from "react-flags-select";

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

    const {changeLanguage} = useContext(LanguageContext);

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
                    className={"hidden group-hover:flex gap-2 absolute -top-13 right-0 bg-black p-2 rounded-md transform-gpu transition-all duration-200 before:absolute before:-top-5 before:left-0 before:right-0 before:h-5 before:content-['']"}>                    {languages.map((language) => (
                    <language.Icon
                        key={language.code} onClick={() => changeLanguage(language.code)}
                        className={"cursor-pointer hover:shadow-lg"}
                    />
                ))}
                </div>
            </div>
        )
    }

    const SidebarLinkElement = ({text, href}: SidebarLink) => {
        return (
            <div className={"inline-block"}>
                <a href={href}
                   onClick={onLinkClick}
                   className="text-inherit text-4xl md:text-5xl lg:text-6xl font-bold duration-300 text-stroke-1-2 text-stroke-lightRed  hover:text-[--lightRed] transition ">{text}</a>
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
                <div className={"absolute right-5 bottom-5 p-4 z-[55]"}>
                    <LanguageSelector/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;