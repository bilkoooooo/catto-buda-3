'use client';

import React, {createContext, Dispatch, SetStateAction, useRef, useState} from "react";

interface MenuStateContextType {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    navbarRef: React.RefObject<HTMLDivElement> | null;
}

export const MenuStateContext = createContext<MenuStateContextType>({
    isOpen: false,
    setIsOpen: () => {
    },
    navbarRef: null
});

export const MenuStateProvider = ({children}: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    return (
        <MenuStateContext.Provider value={{isOpen, setIsOpen, navbarRef}}>
            {children}
        </MenuStateContext.Provider>
    );
};

export default MenuStateProvider;