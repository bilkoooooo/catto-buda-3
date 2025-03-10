"use client";

import {getAllFiles} from "@services/GetAllImages";
import React, {useEffect, useRef, useState} from "react";
// import {ImageViewerComponent} from "@components/ImageViewerComponent";
import {UseGallerySectionGSAPHook} from "@components/GallerySection/useGallerySectionGSAPHook";
import {ImageList} from "@components/GallerySection/ImageList";
import {nanoid} from "nanoid";


export const GallerySection = () => {
    const [images, setImage] = useState<HTMLImageElement[] | { src: string, alt: string, id: string }[]>([]);
    // const [imageToShow, setImageToShow] = useState<number | null>(null)
    const galleryRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        getAllFiles().then((response: { useStaticImages: boolean, images: string[] }) => {
            const {images, useStaticImages} = response;
            if (useStaticImages) {
                images.forEach((image) => {
                    setImage((images) =>
                        [
                            ...images,
                            {
                                src: image,
                                alt: image,
                                id: nanoid()
                            }
                        ]);
                })

                return;
            }

            images.forEach((image) => {
                import (`public/gallery/${image}`).then((img) => setImage(images => [...images, {
                    ...img.default,
                    id: image
                }]))
            })
        });
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
            <ImageList images={images} galleryElem={galleryRef.current}/>
            <SelfPromo/>
            {/*{imageToShow && <ImageViewerComponent imgIndex={imageToShow} images={images} onClose={() => setImageToShow(null)}/>}*/}
        </div>
    );
}