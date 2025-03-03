"use client";

import {getAllFiles} from "@services/GetAllImages";
import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ImageViewerComponent} from "@components/ImageViewerComponent";

gsap.registerPlugin(ScrollTrigger);

export const GallerySection = () => {
    const [images, setImage] = useState<HTMLImageElement[]>([]);
    const [imageToShow, setImageToShow] = useState<number | null>(null)
    const galleryRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        getAllFiles().then(images => {
            images.forEach((image) => {
                import (`public/gallery/${image}`).then((img) => setImage(images => [...images, {
                    ...img.default,
                    id: image
                }]))
            })
        });
    }, []);

    useGSAP(() => {
        const images: Array<HTMLImageElement> = gsap.utils.toArray("#img-gallery img");

        if (!images.length || !galleryRef.current) {
            return false;
        }

        gsap.to('.self-promo', {
            x: '0',
        });

        images.forEach((image: HTMLImageElement) => {
            image.style.opacity = '0';
            gsap.to(image, {
                opacity: 1,
                duration: 0.75,
            });
        });
    }, [images]);

    const onImageLoad = (event: React.SyntheticEvent, index: number) => {
        gsap.to(event.currentTarget, {
            opacity: 1,
            duration: 0.75,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: galleryRef.current,
                start: "-=100",
                end: "bottom bottom",
                // toggleActions: "play none none reverse",
                // markers: true
            }
        });
    }

    const ImageList = () => (
        <div id={"img-gallery"} className={"lg:columns-4 md:columns-3 sm:columns2"}>
            {images.map((image, index) => {
                const {src, id, height, width} = image;
                return (
                    <Image
                        key={"gallery_"+id}
                        loading={"lazy"}
                        quality={100}
                        height={height}
                        width={width}
                        sizes="(max-width: 768px) 200px, (max-width: 1200px) 50vw, 33vw"
                        src={src}
                        id={"gallery_"+ id}
                        alt={id}
                        onLoad={(event) => onImageLoad(event, index)}
                        className={"grayscale hover:grayscale-0 opacity-0 duration-300 image py-2"}/>
                )
            })}
        </div>);

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
            {false && <ImageList/>}
            <SelfPromo/>

            {imageToShow && <ImageViewerComponent imgIndex={imageToShow} images={images} onClose={() => setImageToShow(null)}/>}
        </div>
    );
}