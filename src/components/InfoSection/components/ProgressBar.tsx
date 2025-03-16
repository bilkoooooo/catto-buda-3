import {cn} from "@lib/utils";
import {RefObject} from "react";
import "../infosection.css";

export const ProgressBar = ({progressBarRef}: { progressBarRef: RefObject<HTMLDivElement | null> }) => (
    <div id="progress-bar"
         ref={progressBarRef}
        className={"hidden"}
    >
        <ProgressLine/>
    </div>
)

const ProgressLine = () => <progress value={0} max={100} id={"progress-line"}
                                     className={cn("h-1 bg-opacity-60")}/>;