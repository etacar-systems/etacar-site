import { lazy, useEffect } from 'react';
import { Expirience } from './components/Experience';
import { Introduction } from './components/Introduction';
import { Location } from '../../components/Location';

const Footer = lazy(() => import('../../components/Footer'));
const Reviews = lazy(() => import('../../commonSections/Reviews'));
export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Introduction />
      <Expirience />
      <Location />
      <Reviews textColor={'dark'} theme={'dark'} />
      <Footer />
    </>
  );
};
