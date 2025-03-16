'use client';

import {Globe} from "lucide-react";
import React, {useContext, useState} from "react";
import {LanguageContext} from "@services/LanguageProvider";
import {cn} from "@/src/lib/utils";
import {languages, onlanguagechange} from "@components/Sidebar/components/functions";

export const LanguageSelector = ({languageText}: { languageText: string }) => {
    const {changeLanguage} = useContext(LanguageContext);
    const [isLanguageSelectorOpen, setLanguageSelectorOpen] = useState(false);

    const LanguagesContainer = () => isLanguageSelectorOpen ? <div
        className={cn(
            "flex w-screen h-16 fixed bottom-0 left-0 bg-darkRed justify-center",
        )}> {
        languages.map(({Icon, code}) => (
            <div key={code}
                 onClick={() => onlanguagechange(code, changeLanguage, setLanguageSelectorOpen)}
                 className={"basis-1/3 border-x-2 border-[--primaryDark] hover:bg-lightRed content-center justify-items-center cursor-pointer duration-500"}>
                <Icon height={32} width={32}/>
            </div>
        ))
    }
    </div> : null;

    return (
        <div className={"relative"}>
            <div className={"flex items-center gap-2.5 cursor-pointer text-stroke-lightRed"}
                onClick={() => setLanguageSelectorOpen(!isLanguageSelectorOpen)}>
                <span >
                    {languageText}
                </span>
                <Globe height={30} width={30} className={"text-darkRed"}/>
            </div>
            <LanguagesContainer/>
        </div>
    )
}