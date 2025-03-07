import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const hasClass = (elem: Element, _class: string) => elem.classList.contains(_class);

export const addClass = (elem: Element, ...classes: string[]) => elem.classList.add(...classes);

export const removeClass = (elem: Element, _class: string) => elem.classList.remove(_class);

export const toggleClass = (elem: Element, _class: string) => elem.classList.toggle(_class);