 import Image from "next/image";
import React from "react";
import {cn, shuffle} from "@lib/utils";

export const ImageList = ({images}: { images: string[] }) => (
    <div id={"img-gallery"}
         className={cn(
             "grid grid-cols-1 justify-items-center items-center lg:grid-cols-4 ",
             "gap-4 max-w-7xl mx-auto snap-y snap-mandatory",
             "[&>*:nth-child(odd)]:mb-20",
             "[&>*:nth-child(even)]:mt-20",
         )}>
        {shuffle(images).slice(0, 4).map((image, index) => {
            return (
                // <div className={"relative"} key={index}>
                <Image
                    key={index}
                    loading={"lazy"}
                    quality={100}
                    // fill
                    width={400}
                    height={400}
                    // style={{width: 'auto', height: 'ato'}}
                    src={image}
                    id={"gallery_" + index}
                    alt={image}
                    className={"p-4 duration-300 image snap-start aspect-square object-fill"}/>
                // </div>

            )
        })}
    </div>);
