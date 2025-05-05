import {cn} from "@lib/utils";
import {Title} from "@components/InfoSection/components/Title";
import {Text} from "@components/InfoSection/components/Text";
import parse from "html-react-parser";
import "../infosection.css";
import {LucideProps} from "lucide-react";
import {ForwardRefExoticComponent} from "react";
import {List} from "@components/InfoSection/components/List";

interface PanelsProps {
    info: {
        title: string,
        summary?: string
        id?: string
        Icon?: ForwardRefExoticComponent<LucideProps>
        list? : Array<{
            title: string | null
            items: string[]
        }> | null
    },
}

export const Panels = ({info}: PanelsProps) => {
    const {title, summary, id, Icon, list = null} = info;
    return (
        <div id={id}
             className={cn(`panel flex py-2 md:py-8 px-2 md:px-8 relative overscroll-y-auto`)}>
            <div
                className={cn(
                    "panel-child max-w-[100%] w-full md:w-auto lg:max-w-[45%] bg-darkRed shadow-2xl min-w-0 lg:min-w-[45%]",
                    "self-center justify-center px-4 py-8 md:p-8 rounded-lg flex flex-col relative",
                    "items-start gap-2 md:gap-4 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_100%)]",
                )}>
                <Title title={title}/>
                {summary && <Text>
                    {parse(summary)}
                </Text>}

                {list?.map(({title, items}, index) =>
                    <List title={title} items={items} key={index}/>)}

                {Icon && (
                    <div
                        className={"svg-container active h-12 w-12 absolute flex p-3 m-auto rounded-full bg-darkRed"}>
                        <Icon/>
                    </div>
                )}
            </div>
        </div>
    )
}