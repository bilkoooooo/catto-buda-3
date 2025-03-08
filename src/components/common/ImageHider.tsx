import {cn} from "@lib/utils";

export const ImageHider = ({additionalClass = ''}) => <div
    className={cn("image-hider absolute h-full w-full bg-[--darkRed]", additionalClass)}/>