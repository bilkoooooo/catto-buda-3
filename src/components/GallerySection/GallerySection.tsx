"use client";

import React, {useEffect, useRef, useState} from "react";
// import {ImageViewerComponent} from "@components/ImageViewerComponent";
import {UseGallerySectionGSAPHook} from "@components/GallerySection/useGallerySectionGSAPHook";
import {ImageList} from "@components/GallerySection/ImageList";

export const GallerySection = () => {
    const [images, setImages] = useState<string[] | []>([]);
    // const [imageToShow, setImageToShow] = useState<number | null>(null)
    const galleryRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        fetch('/api/gallery')
            .then((response) => response.json())
            .then(({images}) => setImages(images))
    }, []);

    UseGallerySectionGSAPHook(images, galleryRef);

    const SelfPromo = () => (
        <div className={"self-promo flex justify-center items-center -translate-x-full"}>
            <div>
                További képekért látogass el a <a href={"/gallery"}>galériába</a>
            </div>
            <div>
                vagy kövess instán: <a
                href={"https://www.instagram.com/kisbrigitta_tattoo/"}>@kisbrigitta_tattoo</a>
            </div>
        </div>
    )

    return (
        <div id="gallery-section" ref={galleryRef} className="w-screen min-h-screen relative">
            <ImageList images={images}/>
            <SelfPromo/>
            {/*{imageToShow && <ImageViewerComponent imgIndex={imageToShow} gallery={gallery} onClose={() => setImageToShow(null)}/>}*/}
        </div>
    );
}