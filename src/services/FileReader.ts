'use server'
import {readFileSync} from 'fs';

export const ReadLanguageFile = async ({lang = 'en'}: { lang: string }) =>
    await JSON.parse(readFileSync(`src/translations/${lang}/translation.json`, 'utf8'));