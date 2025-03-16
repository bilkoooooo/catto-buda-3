export type SiteType = {
    title: string;
    description: string;
};

export type NavbarType = {
    menu: string;
    contact: string;
}

export type SidebarType = {
    gallery: string;
    about: string;
    booking: string;
    info: string;
    language: string;
}

export type AboutMeType = {
    quote: string,
    phrase1: string,
    phrase2: string,
    phrase3: string,
    phrase4: string
}

export type InfoType = Array<{
    id?: string
    title: string,
    summary?: string,
    text: string[],
    text2?: string[] | undefined,
    list?: Array<{
        title: string | null,
        items: string[]
    }> | undefined,
}>;

export type LanguageDataType = {
    site: SiteType,
    navbar: NavbarType,
    sidebar: SidebarType,
    aboutMe: AboutMeType,
    info: InfoType
}