import '../../shared/styles/_all.scss';
import {GetStarted} from './components/GetStarted/GetStarted';
import {OurMission} from './components/OurMission/OurMission';
import {Services} from '../../components/Services/Services';
import {Industries} from '../../components/Industries/Industries';
import {Reviews} from '../../components/Reviews/Reviews';
import {GetEstimation} from './components/GetEstimation/GetEstimation';
import {Development} from './components/Development';
import {Scroller} from './components/Development/Scroller/Scroller';
import {CaseStudies} from './components/CaseStudies';


export const Home = () => {
  return (
    <div>
      <GetStarted/>
      <OurMission/>
      <Development/>
      <Scroller/>
      <CaseStudies/>
      <Services/>
      <Industries/>
      <Reviews/>
      <GetEstimation/>
    </div>

  );

};
