"use server";

import {readdirSync} from "node:fs";
import path from "node:path";

const DIR_PATH = 'public/gallery';

export const getAllFiles = async () => readdirSync(path.join(process.cwd(), DIR_PATH));
