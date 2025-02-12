'use client';

import React, {createContext, Dispatch, SetStateAction, useState} from "react";

interface MenuStateContextType {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuStateContext = createContext<MenuStateContextType>({
    isOpen: true, setIsOpen: () => {
    }
});
export const MenuStateProvider = ({children}: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MenuStateContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </MenuStateContext.Provider>
    )
}
export default MenuStateProvider;