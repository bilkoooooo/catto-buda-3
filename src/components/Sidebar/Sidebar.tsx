'use client';

import React, {useContext} from "react";
import {cn} from "@lib/utils";
import {MenuStateContext} from "@services/MenuStateProvider";
import {LanguageContext} from "@services/LanguageProvider";
import {LanguageSelector} from "@components/Sidebar/components/LanguageSelector";
import {SidebarLinkList} from "@components/Sidebar/components/SidebarLinkList";

export const Sidebar = () => {
    const {isOpen, setIsOpen} = useContext(MenuStateContext);

    const commonClasses = "inset-0 flex w-screen h-screen fixed z-50 transition duration-700 -translate-y-full";

    return (
        <div className={cn(isOpen ? "side-bar-open" : "side-bar-closed")}>
            <div
                className={cn(commonClasses, "bg-[--darkRed]", isOpen ? 'translate-y-0' : 'delay-100')}>
            </div>

            <div className={cn(commonClasses, "bg-[--primaryDark]", isOpen ? 'translate-y-0 delay-300 ' : '')}>
                <div className="flex flex-col justify-center gap-5 pl-[10%] ">
                    <SidebarLinkList setIsOpen={setIsOpen}/>
                    <LanguageSelector languageText={useContext(LanguageContext).languageData.sidebar.language}/>
                </div>
            </div>
        </div>
    )
};