'use client';

import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {ReadLanguageFile} from "@services/FileReader";
import huTranslation from "@/src/translations/hu/translation.json";
import {UserDeviceContext} from "@services/UserDeviceProvider";

// type RecursiveStringRecord = {
//     [key: string]: string | RecursiveStringRecord;
// }

type LanguageDataType = {
    site: {
        title: string;
        description: string;
    },
    navbar: {
        menu: string;
        contact: string;
    },
    sidebar: {
        gallery: string;
        about: string;
        booking: string;
        info: string;
    },
    aboutMe: {
        quote: string,
        phrase1: string,
        phrase2: string,
        phrase3: string,
        phrase4: string
    },
    info: Array<{
        id?: string
        title: string,
        summary?: string,
        text: string[],
        text2?: string[] | undefined,
        list?: Array<{
            title: string | null,
            items: string[]
        }> | undefined,
        colors: {
            background: {
                from: string
                to: string
            }
        }
    }>,
}

interface LanguageContextType {
    language: string;
    changeLanguage: (lang: string) => Promise<void>;
    languageData: LanguageDataType;
}

export const LanguageContext = createContext<LanguageContextType>({
    language: 'hu',
    changeLanguage: null as unknown as (lang: string) => Promise<void>,
    languageData: {} as LanguageDataType
});

const DEFAULT_LANGUAGE_DATA = huTranslation;

export const LanguageProvider = ({children}: { children: ReactNode }) => {
    const userDevice = useContext(UserDeviceContext);

    const [language, setLanguage] = useState(userDevice?.deviceLanguage ?? 'hu');
    const [languageData, setLanguageData] = useState(DEFAULT_LANGUAGE_DATA);

    useEffect(() => {
        const langInStorage = localStorage.getItem('language');
        if (langInStorage) {
            setLanguage(langInStorage);
        }

        ReadLanguageFile({lang: langInStorage ?? language}).then(setLanguageData);
    }, []);

    const changeLanguage = async (lang: string): Promise<void> => {
        setLanguage(lang);
        setLanguageData(await ReadLanguageFile({lang}));
        localStorage.setItem('language', lang);
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage, languageData}}>
            {children}
        </LanguageContext.Provider>
    )
}