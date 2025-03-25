import {ImageList} from "@components/GallerySection/ImageList";

const GalleryPage = () => {
    return (
        <div className={"min-h-screen w-screen content-center py-20 bg-emerald-950/50"}>
            <ImageList imgCount={10} additionalClasses={"lg:grid-cols-3"} imgSettings={{height: 400, width: 400, loading: 'eager'}}/>
        </div>
    )
}

export default GalleryPage;