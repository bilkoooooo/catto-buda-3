'use client';
import {createContext, ReactNode, useEffect, useState} from "react";

export const GalleryImagesContext = createContext({images: [] as string[]});

export const GalleryImagesProvider = ({children}: { children: ReactNode }) => {
    const [images, setImages] = useState<string[] | []>([]);

    useEffect(() => {
        fetch('/api/gallery', {
            method: 'POST',
            body: JSON.stringify({limit: 10, offset: 0}),
        })
            .then((response) => response.json())
            .then(({images}) => setImages(images))
    }, []);

    return (
        <GalleryImagesContext.Provider value={{images}}>
            {children}
        </GalleryImagesContext.Provider>
    )
}