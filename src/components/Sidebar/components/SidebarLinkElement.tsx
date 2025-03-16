import React from "react";

type SidebarLink = {
    text: string;
    href: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const SidebarLinkElement = ({text, href = '', onClick}: SidebarLink) => {
    return (
        <div className={"inline-block"}>
            <a href={href}
               onClick={onClick}
               className={"text-inherit text-stroke-lightRed"}>
                {text}
            </a>
        </div>
    );
}