'use client';

import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from "react";
import huTranslation from "@/src/translations/hu/translation.json";
import enTranslation from "@/src/translations/en/translation.json";
import deTranslation from "@/src/translations/de/translation.json";
import {UserDeviceContext} from "@services/UserDeviceProvider";
import {LanguageDataType} from "@services/LanguageDataTypes";

interface LanguageContextType {
    language: string;
    changeLanguage: (lang: string) => void;
    languageData: LanguageDataType
}

export const LanguageContext = createContext<LanguageContextType>({
    language: 'hu',
    changeLanguage: null as unknown as (lang: string) => void,
    languageData: huTranslation,
});

const Languages = {
    hu: huTranslation,
    en: enTranslation,
    de: deTranslation
} as { [key: string]: LanguageDataType };

export const LanguageProvider = ({children}: { children: ReactNode }) => {
    const userDevice = useContext(UserDeviceContext);

    const defaultLang = userDevice?.deviceLanguage ?? 'hu';

    const [language, setLanguage] = useState(defaultLang);
    const [languageData, setLanguageData] = useState<LanguageDataType>(Languages[defaultLang]);

    const changeLanguage = (useCallback(async (lang: string): Promise<void> => {
        if (lang === language) return;
        setLanguage(lang);
        setLanguageData(Languages[lang]);
        localStorage.setItem('language', lang);
    }, [language]))

    useEffect(() => {
        const langInLocalStorage: string | null = localStorage.getItem('language');
        if (typeof window !== 'undefined' && langInLocalStorage && langInLocalStorage !== language) {
            changeLanguage?.(langInLocalStorage);
        }
    }, [changeLanguage, language]);

    return (
        <LanguageContext.Provider value={{language, changeLanguage, languageData}}>
            {children}
        </LanguageContext.Provider>
    )
}