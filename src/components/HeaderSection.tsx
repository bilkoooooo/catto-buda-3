import Image from 'next/image'
import bgPic from '@assets/bg_dark.avif'
import heroinePic from '@assets/heroine_bg.avif'

export const HeaderSection = () => {
    return (
        <div id="header-section"
             className="flex flex-col w-full h-[125vh] bg-fixed items-center justify-end"
             style={{
                 backgroundImage: `url(${bgPic.src})`,
             }}>

            <div className="relative basis-2/3 w-full">
                <Image
                    src={heroinePic}
                    priority={true}
                    // style={{filter: 'grayscale(100%)'}}
                    className={"object-contain z-30"}
                    fill={true}
                    alt={"intro"}
                    id={"mid-section"}
                />
            </div>
        </div>
    )
}