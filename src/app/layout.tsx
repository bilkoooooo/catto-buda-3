import "./globals.css";
import Navbar from "@components/Navbar";
import React from "react";
import MenuStateProvider from "@services/MenuStateProvider";
import Sidebar from "@components/Sidebar";
import {LanguageProvider} from "@services/LanguageProvider";
import {UserDeviceProvider} from "@services/UserDeviceProvider";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Analytics} from "@vercel/analytics/react"

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="hu">
        <body>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <UserDeviceProvider>
            <LanguageProvider>
                <MenuStateProvider>
                    <Navbar/>
                    <Sidebar/>
                    {children}
                </MenuStateProvider>
            </LanguageProvider>
        </UserDeviceProvider>
        <SpeedInsights/>
        <Analytics/>
        </body>
        </html>
    );
}
