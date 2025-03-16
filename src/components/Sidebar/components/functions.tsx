import {De, Hu, Us} from "react-flags-select";

export const languages = [
    {code: 'hu', name: 'Magyar', Icon: Hu},
    {code: 'en', name: 'English', Icon: Us},
    {code: 'de', name: 'Deutsch', Icon: De},
];

export const onlanguagechange = (code: string, changeLanguage: (lang: string) => void, setLanguageSelectorOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    changeLanguage(code);
    setLanguageSelectorOpen(false);
}