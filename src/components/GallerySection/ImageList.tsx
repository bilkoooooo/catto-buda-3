'use client';

import Image from "next/image";
import React, {useContext} from "react";
import {cn} from "@lib/utils";
import {GalleryImagesContext} from "@services/GalleryImagesProvider";

export const ImageList = ({imgCount = 5, additionalClasses = '', imgSettings = {}}: {
    imgCount?: number,
    additionalClasses?: string,
    imgSettings?: {
        [key: string]: string | number | boolean
    }
}) => {
    const {images} = useContext(GalleryImagesContext);

    return (
        <div id={"img-gallery"}
             className={cn(
                 "grid grid-cols-1 justify-items-center items-center md:grid-cols-2 lg:grid-cols-5",
                 "gap-4 max-w-7xl mx-auto",
                 additionalClasses,
             )}>
            {images.slice(0, imgCount).map((image, index) => {
                return <Image
                    key={index}
                    loading={"lazy"}
                    quality={100}
                    width={400}
                    height={400}
                    src={image}
                    id={"gallery_" + index}
                    alt={image}
                    className={"p-4 duration-300 image snap-start aspect-square object-fill"}
                    {...imgSettings}
                />

            })}
        </div>)
};
