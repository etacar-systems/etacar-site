import { Footer } from '../../components/Footer';
import { Expirience } from './components/Experience';
import { Introduction } from './components/Introduction';
import { Location } from '../../components/Location';

import { aboutUsGeographyData } from './data';


export const AboutUs = () => {
  return (
    <>
      <Introduction />
      <Expirience />
      <Location geographyData={aboutUsGeographyData}/>
      <Footer/>
    </>
  );
};
