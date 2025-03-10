"use server";

import {readdirSync, existsSync} from "node:fs";
import path from "node:path";

let DIR_PATH = 'gallery';
let useStaticImages = false;

if (!existsSync(DIR_PATH)) {
    DIR_PATH = 'public/gallery';
}

if (!existsSync(DIR_PATH)) {
    useStaticImages = true;
}

export const getAllFiles = async () => {
    if (useStaticImages) {
        return {
            useStaticImages,
            images: JSON.parse('["https://kisbrigi.com/wp-content/uploads/2024/07/tukireklam-998x1024.jpg","https://kisbrigi.com/wp-content/uploads/2024/07/geraldc-1024x949.jpg","https://kisbrigi.com/wp-content/uploads/2024/07/ciric-1024x1012.jpg","https://kisbrigi.com/wp-content/uploads/2024/07/tacsic-942x1024.jpg","https://kisbrigi.com/wp-content/uploads/2024/07/nyulc-948x1024.jpg","https://kisbrigi.com/wp-content/uploads/2024/07/leguanc-1005x1024.jpg","https://kisbrigi.com/wp-content/uploads/2024/07/kazimirc-998x1024.jpg","https://kisbrigi.com/wp-content/uploads/2024/07/erdonepec-921x1024.jpg","https://kisbrigi.com/wp-content/uploads/2024/07/nflc-982x1024.jpg","https://kisbrigi.com/wp-content/uploads/2023/09/juhaszc-1-871x1024.jpg"]')
        }
    }

    return {
        useStaticImages,
        images: readdirSync(path.join(process.cwd(), DIR_PATH))
    }
};
