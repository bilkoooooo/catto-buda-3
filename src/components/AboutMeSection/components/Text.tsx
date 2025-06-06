import {AboutMeType} from "@services/LanguageDataTypes";
import {cn} from "@lib/utils";

export const AboutMeText = ({languageData}: { languageData: AboutMeType }) => {
    const {quote, phrase1, phrase2, phrase3, phrase4} = languageData || {};

    return (
        <div id={"about-me-text"}
             className={cn(
                 "flex lg:basis-auto m:basis-1/2 sm:basis-full flex-col gap-4 text-2xl leading-[1.8] pt-8",
                 "lg:max-w-[500px] sm:w-full tracking-widest self-stretch overflow-auto text-white justify-start",
                 "text-justify md:text-left"
             )}>
            <div>“
                <strong>
                    {quote}
                </strong>”

                {phrase1}
            </div>

            {[phrase2, phrase3, phrase4].map((phrase, index) => (
                <div key={index}>
                    {phrase}
                </div>
            ))}
        </div>
    )
}