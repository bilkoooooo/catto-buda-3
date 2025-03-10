import Image from "next/image";
import React from "react";
import gsap from "gsap";

type Props = {
    images: HTMLImageElement[],
    galleryElem: HTMLDivElement | null
}

const onImageLoad = (event: React.SyntheticEvent, index: number, galleryElem: HTMLDivElement | null) => {
    if (!galleryElem) {
        return;
    }

    gsap.to(event.currentTarget, {
        opacity: 1,
        duration: 0.75,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: galleryElem,
            start: "-=100",
            end: "bottom bottom",
        }
    });
}

export const ImageList = ({images, galleryElem}: Props) => (
    <div id={"img-gallery"} className={"grid grid-cols-1 lg:grid-cols-2 gap-2"}>
        {images.map((image, index) => {
            const {src, id, height, width} = image;
            return (
                <Image
                    key={"gallery_" + id}
                    loading={"lazy"}
                    quality={100}
                    height={height}
                    width={width}
                    sizes="(max-width: 768px) 200px, (max-width: 1200px) 50vw, 33vw"
                    src={src}
                    id={"gallery_" + id}
                    alt={id}
                    onLoad={(event) => onImageLoad(event, index, galleryElem)}
                    className={"grayscale opacity-0 duration-300 image py-2"}/>
            )
        })}
    </div>);
