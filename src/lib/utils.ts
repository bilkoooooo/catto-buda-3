import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const hasClass = (elem: Element, _class: string) => elem.classList.contains(_class);

export const addClass = (elem: Element, ...classes: string[]) => elem.classList.add(...classes);

export const removeClass = (elem: Element, _class: string) => elem.classList.remove(_class);

export const toggleClass = (elem: Element, _class: string) => elem.classList.toggle(_class);

export const shuffle = (array: string[]) => {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}