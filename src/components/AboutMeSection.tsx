export const AboutMeSection = () => {

    return (
        <div id="about-me" className="bg-gradient-to-r from-[--darkRed] via-red-400 to-[--lightRed] max-w-1/2 margin-auto">
            <div className={"flex pt-8 bg-transparent"}>
                <div
                    className="flex basis-[600px] flex-col gap-8 text-2xl whitespace-pre-wrap px-8 leading-[1.8] tracking-widest text-white">
                    <div>“
                        <strong>
                            Juj, de szépen rajzolsz!
                            Tudnál nekem is?
                        </strong>” – talán ez volt a legmotiválóbb mondat egész gyerekkoromtól kezdve. A suliban
                        mindig alig vártam a rajzórát, a szünetet, olyankor lehettem igazán az osztály fénypontja.
                        Valahogy
                        innen indult ez az egész, a fekete filctollal rajzolt tigrisektől.
                    </div>

                    <div>
                        Később elindultam a nehézkes, képzések nélküli kezdetleges hazai tetováló világban, rajzolt
                        mintás mappával és rendíthetetlen szándékkal, 17 évesen. Sokan elküldtek, páran segítettek, a
                        balatoni szezonokban már egész közel engedtek a tűzhöz. Először hivatalosan tetoválóként a
                        Celtic Moon Tattoo csapatában kezdhettem dolgozni, ekkor James mellett dolgozva, tőle
                        tanulhattam meg igazán ezt a csodás szakmát.
                    </div>

                    <div>
                        Művészeti iskolák híjján rengeteg mindent a tetováláson keresztül ismertem meg, de talán még
                        önmagamat is.
                    </div>
                </div>

                <div className={"relative bg-transparent p-8 overflow-hidden"}>
                    <div className={"red-bg w-100 h-1/4 bg-[--darkRed] absolute -right-3 -top-3"}/>
                    {<img src="/assets/rolam.jpg" alt="about me" className="object-cover h-full"/>}
                </div>
            </div>

            <div className="text-center px-8 text-2xl">
                Azóta eltelt sok év és már a saját stúdiómban dolgozom, néha külföldön vendégtetoválok és nagyon boldog
                vagyok, hogy tetováló lehetek. 😸
            </div>
        </div>
    )
}