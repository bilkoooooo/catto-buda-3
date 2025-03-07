import "./globals.css";
import Navbar from "@components/Navbar";
import React from "react";
import MenuStateProvider from "@services/MenuStateProvider";
import Sidebar from "@components/Sidebar";
import {LanguageProvider} from "@services/LanguageProvider";
import {UserDeviceProvider} from "@services/UserDeviceProvider";
export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="hu">
        <body>
        <UserDeviceProvider>
            <LanguageProvider>
                <MenuStateProvider>
                    <Navbar/>
                    <Sidebar/>
                    {children}
                </MenuStateProvider>
            </LanguageProvider>
        </UserDeviceProvider>
        </body>
        </html>
    );
}
