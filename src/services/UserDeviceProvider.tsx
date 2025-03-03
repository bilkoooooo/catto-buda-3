"use client";

import {createContext, ReactNode} from "react";

type UserDeviceType = {
    deviceLanguage: string | null,
    deviceType: string
} | null

const getDeviceType = (userAgent: string): string => {
    if (userAgent.match(/Android/i)) {
        return 'Android';
    } else if (userAgent.match(/webOS/i)) {
        return 'webOS';
    } else if (userAgent.match(/iPhone/i)) {
        return 'iOS';
    } else if (userAgent.match(/iPad/i)) {
        return 'iOS';
    } else if (userAgent.match(/iPod/i)) {
        return 'iOS';
    } else if (userAgent.match(/BlackBerry/i)) {
        return 'BlackBerry';
    } else if (userAgent.match(/Windows Phone/i)) {
        return 'Windows Phone';
    } else {
        return 'Desktop';
    }
}
export const UserDeviceContext = createContext<UserDeviceType>(null)

export const UserDeviceProvider = ({children}: { children: ReactNode }) => {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

    return (
        <UserDeviceContext.Provider value={{
            deviceLanguage: navigator.language || 'hu',
            deviceType: getDeviceType(userAgent)
        }}>
            {children}
        </UserDeviceContext.Provider>
    )
}