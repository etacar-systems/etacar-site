import '../shared/styles/_all.scss';
import GetStarted from '../components/GetStarted/GetStarted';
import OurMission from '../components/OurMission/OurMission';
import Cycle from '../components/Cycle/Cycle';
import Techs from '../components/Techs/Techs';
import CaseStudies from '../components/CaseStudies/CaseStudies';
import Services from '../components/Services/Services';

export default function Home() {
  return (
    <main className='home'>
      <GetStarted/>
      <OurMission/>
      <Cycle/>
      <Techs/>
      <CaseStudies/>
      <Services/>

    </main>

  );

}
