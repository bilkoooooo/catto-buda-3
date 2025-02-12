import {AboutMeSection} from "@/components/AboutMeSection";
import {TopSection} from "@/components/TopSection";
import {InfoSection} from "@/components/InfoSection";

export default function Home() {
    return (
        <div className="items-center justify-items-center gap-16 w-full">
            <TopSection/>

            <AboutMeSection/>

            <InfoSection/>
        </div>
    );
}
