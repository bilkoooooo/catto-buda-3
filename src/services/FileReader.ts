'use server'
import {readFileSync} from 'fs';

export const ReadLanguageFile = async ({dir, lang = 'en'}: { dir: string, lang: string }) =>
    await JSON.parse(readFileSync(`src/components/${dir}/translations/${lang}/translation.json`, 'utf8'));