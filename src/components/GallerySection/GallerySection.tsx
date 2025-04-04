"use client";

import React, {useRef} from "react";
// import {ImageViewerComponent} from "@components/ImageViewerComponent";
import {UseGallerySectionGSAPHook} from "@components/GallerySection/useGallerySectionGSAPHook";
import {ImageList} from "@components/GallerySection/ImageList";

export const GallerySection = () => {
    const galleryRef = useRef<HTMLDivElement | null>(null);

    UseGallerySectionGSAPHook(galleryRef);

    const SelfPromo = () => (
        <div className={"flex flex-col items-center justify-center gap-5 font-bold"}>
            <a className={"self-promo self-center text-6xl uppercase text-stroke-white duration-300 hover:text-white"}
               href={"/gallery"}>Galléria</a>
            <a className={"text-3xl"} href={"https://www.instagram.com/kisbrigi"}>Instagram</a>
        </div>
    )

    return (
        <section id="gallery-section" ref={galleryRef}
                 className="w-screen min-h-screen relative flex flex-col py-20 content-center justify-between bg-gray-900/70">
            <ImageList additionalClasses={"lg:[&>*:nth-child(odd)]:mb-20 lg:[&>*:nth-child(even)]:mt-20"}/>
            <SelfPromo/>
            {/*{imageToShow && <ImageViewerComponent imgIndex={imageToShow} gallery={gallery} onClose={() => setImageToShow(null)}/>}*/}
        </section>
    );
}