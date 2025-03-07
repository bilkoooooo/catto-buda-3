'use server'
import {readFileSync} from 'fs';

export const ReadLanguageFile = async ({language = 'en'}: { language: string }) =>
    await JSON.parse(readFileSync(`src/translations/${language}/translation.json`, 'utf8'));