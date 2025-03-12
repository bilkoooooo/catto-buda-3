import Image from "next/image";
import React from "react";

export const ImageList = ({images}: {images:string[]}) => (
    <div id={"img-gallery"} className={"grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-4 max-w-7xl mx-auto snap-y snap-mandatory"}>
        {images.map((image, index) => {
            return (
                <Image
                    key={"gallery_" + index}
                    loading={"lazy"}
                    quality={100}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{width: 'auto', height: '90vh'}}
                    src={image}
                    id={"gallery_" + index}
                    alt={image}
                    className={"p-4 duration-300 image snap-start"}/>
            )
        })}
    </div>);
