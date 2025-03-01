"use server";

import {readdirSync} from "node:fs";

const DIR_PATH = 'public/gallery';

export const getAllFiles = async () => readdirSync(DIR_PATH);
