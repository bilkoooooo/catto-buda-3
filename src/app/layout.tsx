import "./globals.css";
import React from "react";
import {Navbar} from "@components/Navbar/Navbar";
import {Sidebar} from "@components/Sidebar/Sidebar";
import MenuStateProvider from "@services/MenuStateProvider";
import {LanguageProvider} from "@services/LanguageProvider";
import {UserDeviceProvider} from "@services/UserDeviceProvider";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Analytics} from "@vercel/analytics/react"
import bgDark from "@assets/bg_dark.jpg";
import {Footer} from "@components/Footer";
import {GalleryImagesProvider} from "@services/GalleryImagesProvider";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="hu">
        <body className={"bg-fixed bg-center bg-contain"} style={{backgroundImage: `url(${bgDark.src})`}}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <UserDeviceProvider>
            <LanguageProvider>
                <MenuStateProvider>
                    <GalleryImagesProvider>
                        <Navbar/>
                        <Sidebar/>
                        {children}
                        <Footer/>
                    </GalleryImagesProvider>
                </MenuStateProvider>
            </LanguageProvider>
        </UserDeviceProvider>
        <SpeedInsights/>
        <Analytics/>
        </body>
        </html>
    );
}
