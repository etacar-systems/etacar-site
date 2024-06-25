import { Footer } from '../../components/Footer';
import { Expirience } from './components/Experience';
import { Introduction } from './components/Introduction';
import { Location } from '../../components/Location';
import { Reviews } from '../../commonSections/Reviews';
import { aboutUsGeographyData } from './data';
import { useEffect } from 'react';

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Introduction />
      <Expirience />
      <Location geographyData={aboutUsGeographyData} />
      <Reviews textColor={'dark'} theme={'dark'} />
      <Footer />
    </>
  );
};
