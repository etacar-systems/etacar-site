import '../shared/styles/_all.scss'
import GetStarted from "../components/GetStarted/GetStarted";
import OurMission from "../components/OurMission/OurMission";

export default function HomePage() {
    return (
        <main className='home'>
            <GetStarted/>
            <OurMission/>

        </main>

    )

}
