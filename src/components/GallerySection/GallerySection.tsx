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
        fetch('/api/gallery', {
            method: 'POST',
            body: JSON.stringify({limit: 10, offset: 0}),
        })
            .then((response) => response.json())
            .then(({images}) => setImages(images))
    }, []);

    UseGallerySectionGSAPHook(images, galleryRef);

    const SelfPromo = () => (
        <div className={"self-promo justify-center items-center -translate-x-full hidden"}>
            <div>
                További képekért látogass el a <a href={"/gallery"}>gallériába</a>
            </div>
            <div>
                vagy kövess instán: <a
                href={"https://www.instagram.com/kisbrigitta_tattoo/"}>@kisbrigitta_tattoo</a>
            </div>
        </div>
    )

    return (
        <section id="gallery-section" ref={galleryRef}
                 className="w-screen min-h-screen relative flex content-center justify-center bg-gray-900/50">
            <ImageList images={images}/>
            <SelfPromo/>
            {/*{imageToShow && <ImageViewerComponent imgIndex={imageToShow} gallery={gallery} onClose={() => setImageToShow(null)}/>}*/}
        </section>
    );
}