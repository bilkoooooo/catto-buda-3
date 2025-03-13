const ContactPage = () => {


    return (
        <div className={"h-screen w-full flex items-start justify-center py-32 "}>
            <div className={"w-2/3 flex flex-col gap-8"}>
                <div className={"text-8xl text-stroke-1-2 text-stroke-lightRed hover:text-[--lightRed] transition"}>
                    Kapcsolat
                </div>
                <div className={"text-4xl font-extrabold"}>
                    Cattoo-Buda
                </div>

                <div className={"text-2xl underline"}>
                    <a target="_blank" href={"https://maps.app.goo.gl/MTQP3jjhjzpnUZWt7"}>1116. Budapest Temesvár utca
                        4.</a>
                </div>

                <div className={"text-4xl font-extrabold"}>
                    Bejelentkezés kizárólag e-mailben!
                </div>

                <div className={"text-2xl"}>
                    Időpont foglalások Augusztusban és Decemberben!
                    <br/>
                    Várom tetoválással kapcsolatos kérdéseitek és ötleteitek a következő címre:
                </div>

                <div className={"text-4xl font-extrabold underline"}>
                    <a href="mailto:kis.brigitte@gmail.com">kis.brigitte@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;