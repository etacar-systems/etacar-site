import '../shared/styles/_all.scss';
import {GetStarted} from '../components/GetStarted/GetStarted';
import {OurMission} from '../components/OurMission/OurMission';
import {Cycle} from '../components/Cycle/Cycle';
import {Services} from '../components/Services/Services';
import {Industries} from '../components/Industries/Industries';
import {Techs} from '../components/Techs/Techs';
import {Reviews} from '../components/Reviews/Reviews';
import {GetEstimation} from '../components/GetEstimation/GetEstimation';
import {HomeCaseStudies} from '../components/HomeCaseStudies/HomeCaseStudies';


export default function Home() {
  return (
    <main className='home'>
      <GetStarted/>
      <OurMission/>
      <Cycle/>
      <Techs/>
      <HomeCaseStudies/>
      <Services/>
      <Industries/>
      <Reviews/>
      <GetEstimation/>
    </main>

  );

}
