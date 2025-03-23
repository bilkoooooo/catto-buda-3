import React, {useContext} from "react";
import {LanguageContext} from "@services/LanguageProvider";
import {usePathname, useRouter} from "next/navigation";
import {SidebarLinkElement} from "@components/Sidebar/components/SidebarLinkElement";

const ScrollToElem = (elem: Element | null) => elem?.scrollIntoView?.({behavior: "smooth"})

export const SidebarLinkList = ({setIsOpen}: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const pathname = usePathname();

    const router = useRouter()

    const {
        languageData: {
            sidebar
        }
    } = useContext(LanguageContext);

    const {
        gallery,
        about,
        booking,
        info,
    } = sidebar;

    const sideBarLinks = [
        {
            key: "About",
            href: "#about-me-section",
            text: about,
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

    return <>
        {sideBarLinks.map(({key, text, href}) => (
                <SidebarLinkElement key={key} text={text} href={href} onClick={onLinkClick}/>
            )
        )}
    </>
}