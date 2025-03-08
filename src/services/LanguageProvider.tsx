'use client';

import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import huTranslation from "@/src/translations/hu/translation.json";
import {UserDeviceContext} from "@services/UserDeviceProvider";
import {ReadLanguageFile} from "@services/FileReader";
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

export const LanguageProvider = ({children}: { children: ReactNode }) => {
    const userDevice = useContext(UserDeviceContext);

    const [language, setLanguage] = useState(userDevice?.deviceLanguage ?? 'hu');
    const [languageData, setLanguageData] = useState<LanguageDataType>(huTranslation);

    const changeLanguage = async (lang: string): Promise<void> => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    }

    useEffect(() => {
        ReadLanguageFile({language}).then(setLanguageData);
    }, [language]);

    return (
        <LanguageContext.Provider value={{language, changeLanguage, languageData}}>
            {children}
        </LanguageContext.Provider>
    )
}