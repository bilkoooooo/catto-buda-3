"use client";

import {getAllFiles} from "@services/GetAllImages";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GallerySection = () => {
    const [files, setFiles] = useState<string[]>([]);

    const galleryRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        getAllFiles().then(files => setFiles(files));
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
    }, [files]);

    const onImageLoad = (image, index) => {
        gsap.to(image, {
            opacity: 1,
            duration: 0.75,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: galleryRef.current,
                start: "top top",
                // toggleActions: "play none none reverse",
                markers: true
            }
        });
    }

    const ImageList = () => <div id={"img-gallery"}
                                 className={"flex basis-full flex-shrink-0 items-center justify-center gap-2"}>
        {files.slice(0, 4).map((file, index) => (
            <div key={index} className={"relative w-1/4 h-1/4 image"}>
                {file}
                <Image
                    loading={"lazy"}
                    fill={true}
                    quality={100}
                    sizes="(max-width: 768px) 200px, (max-width: 1200px) 50vw, 33vw"
                    src={`/gallery/${file}`}
                    alt={file}
                    onLoad={(e) => onImageLoad(e.target, index)}
                    className={"grayscale hover:grayscale-0 duration-300 opacity-0"}/>
            </div>
        ))}
    </div>;

    const SelfPromo = () => (
        <div className={"self-promo flex absolute inset-x-0 top-[10%] justify-center items-center -translate-x-full"}>
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
        <div id="gallery-section" ref={galleryRef} className=" flex flex-col w-screen h-screen gap-2 relative">
            {<ImageList/>}
            <SelfPromo/>
        </div>
    );
}