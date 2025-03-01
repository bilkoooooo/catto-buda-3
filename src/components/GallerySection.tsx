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

    useGSAP(() => {
        const images: Array<HTMLImageElement> = gsap.utils.toArray("#img-gallery img");

        if (!images.length && !galleryRef.current) {
            return;
        }

        const {current: gallery} = galleryRef;

        const scrollAnim = gsap.timeline({
            scrollTrigger: {
                trigger: gallery,
                start: "top top",
                end: "+=200",
                scrub: 1,
                // markers: true,
                pin: true,
                onUpdate: () => {
                    // console.log(self);
                },
            }
        });

        scrollAnim.to('.self-promo', {
            x: '0',
        });

        images.forEach((image: HTMLImageElement, index: number) => {
            scrollAnim.to(image, {
                opacity: 1,
                duration: 0.5,
                delay: index * 0.1,
            });
        });
    }, [files]);

    useEffect(() => {
        getAllFiles().then(files => setFiles(files));
    }, []);

    const ImageList = () => <div id={"img-gallery"}
                                 className={"flex basis-full flex-shrink-0 items-center justify-center gap-2"}>
        {files.slice(0, 4).map((file, index) => (
            <div key={index} className={"relative w-1/4 h-1/4"}>
                <Image
                    style={{opacity: 0}}
                    loading={"lazy"}
                    fill={true}
                    quality={100}
                    sizes="(max-width: 768px) 200px, (max-width: 1200px) 50vw, 33vw"
                    src={`/gallery/${file}`}
                    alt={file}
                    className={"grayscale hover:grayscale-0 duration-300"}/>
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