"use client";

import React, {useRef} from "react";
// import {ImageViewerComponent} from "@components/ImageViewerComponent";
import {UseGallerySectionGSAPHook} from "@components/GallerySection/useGallerySectionGSAPHook";
import {ImageList} from "@components/GallerySection/ImageList";

export const GallerySection = () => {
    const galleryRef = useRef<HTMLDivElement | null>(null);

    UseGallerySectionGSAPHook(galleryRef);

    const SelfPromo = () => (
        <a className={"self-promo self-center text-4xl text-stroke-white duration-300 hover:text-white"}
           href={"/gallery"}>Galléria</a>
    )

    return (
        <section id="gallery-section" ref={galleryRef}
                 className="w-screen min-h-screen relative flex flex-col content-center justify-center bg-gray-900/50">
            <ImageList additionalClasses={"lg:[&>*:nth-child(odd)]:mb-20 lg:[&>*:nth-child(even)]:mt-20"}/>
            <SelfPromo/>
            {/*{imageToShow && <ImageViewerComponent imgIndex={imageToShow} gallery={gallery} onClose={() => setImageToShow(null)}/>}*/}
        </section>
    );
}