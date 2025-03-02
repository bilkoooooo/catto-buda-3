// import Image from "next/image";

interface ImageViewerComponentProps {
    imgIndex: number;
    images: HTMLImageElement[];
    onClose: () => void;
}

export const ImageViewerComponent = ({imgIndex, images, onClose}: ImageViewerComponentProps) => {
    console.log(imgIndex, images, onClose);
    return (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-[100] flex justify-center items-center">
            <div className={"w-full lg:w-auto"}>
                <div className={"relative flex items-center justify-center"}>
                    {/*<Image*/}
                    {/*    src={images[imgIndex].src}*/}
                    {/*    fill={true}*/}
                    {/*/>*/}
                </div>

            </div>
            <h1>Image Viewer</h1>
        </div>
    )
}