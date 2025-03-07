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
        <div id={id} className={cn(`panel grow-1 shrink-0 basis-full w-screen py-20 px-8 flex`)}>
            <div
                className="max-w-[720px] basis-full h-fit min-h-64 bg-white bg-opacity-40 self-center justify-center backdrop-blur-lg p-8 rounded-lg drop-shadow-lg flex flex-col items-start gap-4 overflow-hidden [text-shadow:_2px_2px_10px_rgb(0_0_0_/_100%)]">
                <Title title={title}/>
                {summary && <Text>
                    {parse(summary)}
                </Text>}
            </div>
        </div>
    )
}