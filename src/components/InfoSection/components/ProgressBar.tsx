import {
    Bandage, CalendarDays,
    Coins,
    Hourglass,
    Info,
    MessageCircleQuestion,
    NotebookPen,
    PencilLine,
    UserRoundCheck
} from "lucide-react";
import {cn} from "@lib/utils";
import {RefObject} from "react";
import "../infosection.css";

export const ProgressBar = ({progressBarRef}: { progressBarRef: RefObject<HTMLDivElement | null> }) => (
    <div id="progress-bar"
         ref={progressBarRef}
         className="w-full fixed inset-x-0 bottom-0">
        <div className={"w-2/3 pb-8 m-auto relative flex overflow-hidden"}>
            <div className={cn("flex justify-between items-center w-full z-2 text-3xl")}>
                <Info className={"active"}/>
                <NotebookPen/>
                <PencilLine/>
                <UserRoundCheck/>
                <Bandage/>
                <Coins/>
                <MessageCircleQuestion/>
                <Hourglass/>
                <CalendarDays/>
            </div>
            <ProgressLine/>
        </div>
    </div>
)

const ProgressLine = () => <progress value={100} id={"progress-line"}
                                     className={cn("h-1 bg-opacity-60 bg-black w-full absolute bottom-0 left-0")}/>;