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
        <div id={id} className={cn(`panel grow-1 shrink-0 basis-full w-screen py-2 md:py-20 px-2 md:px-8 flex snap-start`)}>
            <div
                className="max-w-[720px] basis-full lg:basis-2/3 min-h-1/2 h-fit max-h-[70%] bg-white bg-opacity-40 self-center justify-center backdrop-blur-lg p-4 md:p-8 rounded-lg drop-shadow-lg flex flex-col items-start gap-2 md:gap-4 overflow-hidden [text-shadow:_2px_2px_10px_rgb(0_0_0_/_100%)]">
                <Title title={title}/>
                {summary && <Text>
                    {parse(summary)}
                </Text>}
            </div>
        </div>
    )
}