import {cn} from "@lib/utils";
import {Title} from "@components/InfoSection/components/Title";
import {Text} from "@components/InfoSection/components/Text";
import parse from "html-react-parser";

interface PanelsProps {
    info: {
        title: string,
        summary?: string
        id?: string
    },
}

export const Panels = ({info}: PanelsProps) => {
    const {title, summary, id} = info;
    return (
        <div id={id}
             className={cn(`panel flex py-2 md:py-8 px-2 md:px-8 snap-start relative overscroll-y-auto`)}>
            <div
                className={cn(
                    "panel-child max-w-[45%] bg-darkRed box-shadow-lg",
                    "self-center justify-center p-4 md:p-8 rounded-lg flex flex-col",
                    "items-start gap-2 md:gap-4 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_100%)]",
                )
                }>
                <Title title={title}/>
                {summary && <Text>
                    {parse(summary)}
                </Text>}
            </div>
        </div>
    )
}