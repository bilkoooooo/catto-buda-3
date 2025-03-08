import {AboutMeType} from "@services/LanguageDataTypes";

export const AboutMeText = ({languageData}: { languageData: AboutMeType }) => {
    const {quote, phrase1, phrase2, phrase3, phrase4} = languageData || {};

    return (
        <div id={"about-me-text"}
             className="flex lg:basis-1/3 m:basis-1/2 sm:basis-full flex-col gap-4 text-xl leading-[1.8] lg:max-w-[600px] sm:w-full tracking-widest self-stretch overflow-auto text-white text-justify justify-between">
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