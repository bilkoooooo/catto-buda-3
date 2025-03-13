"use server";

import {readdirSync, existsSync} from "node:fs";
import path from "node:path";

const GALLERY_DIR = path.join(process.cwd(), "public/gallery");
let useStaticImages = false;

if (!existsSync(GALLERY_DIR)) {
    useStaticImages = true;
}

export const getAllFiles = async ({limit = 10, offset = 0}: { limit: number, offset?: number }) => {
    if (useStaticImages) {
        return {
            useStaticImages,
            images: [
                "https://kisbrigi.com/wp-content/uploads/2024/07/tukireklam-998x1024.jpg",
                "https://kisbrigi.com/wp-content/uploads/2024/07/geraldc-1024x949.jpg",
                "https://kisbrigi.com/wp-content/uploads/2024/07/ciric-1024x1012.jpg",
                "https://kisbrigi.com/wp-content/uploads/2024/07/tacsic-942x1024.jpg",
                "https://kisbrigi.com/wp-content/uploads/2024/07/nyulc-948x1024.jpg",
                "https://kisbrigi.com/wp-content/uploads/2024/07/leguanc-1005x1024.jpg",
                "https://kisbrigi.com/wp-content/uploads/2024/07/kazimirc-998x1024.jpg",
                "https://kisbrigi.com/wp-content/uploads/2024/07/erdonepec-921x1024.jpg",
                "https://kisbrigi.com/wp-content/uploads/2024/07/nflc-982x1024.jpg",
                "https://kisbrigi.com/wp-content/uploads/2023/09/juhaszc-1-871x1024.jpg"
            ].slice(offset, limit)
        }
    }

    return {
        useStaticImages,
        images: readdirSync(GALLERY_DIR).map((file) => `/gallery/${file}`).slice(offset, limit)
    }
};
