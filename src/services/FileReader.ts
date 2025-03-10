'use server'
import {readFileSync} from 'fs';
import path from "node:path";

export const ReadLanguageFile = async ({language = 'en'}: { language: string }) =>
    await JSON.parse(readFileSync(path.join(process.cwd(), `src/translations/${language}/translation.json`), 'utf8'));