'use client';

import React, {createContext, Dispatch, SetStateAction, useMemo, useRef, useState} from "react";

interface MenuStateContextType {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    navbarRef: React.RefObject<HTMLDivElement | null> | null;
}

export const MenuStateContext = createContext<MenuStateContextType>({
    isOpen: false,
    setIsOpen: () => {},
    navbarRef: null
});

export const MenuStateProvider = ({children}: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef<HTMLDivElement | null>(null);

    const contextValue = useMemo(() => ({
        isOpen,
        setIsOpen,
        navbarRef
    }), [isOpen]);

    return (
        <MenuStateContext.Provider value={contextValue}>
            {children}
        </MenuStateContext.Provider>
    );
};

export default MenuStateProvider;