import {cn} from "@lib/utils";

export const ImageHider = ({additionalClass = ''}) => <div
    className={cn("image-hider z-[100] absolute h-full w-full bg-[--darkRed]", additionalClass)}/>