import { lazy, Suspense, useEffect } from 'react';
import { Location } from '../../components/Location';
import Loader from '../../components/Loader';

const Expirience = lazy(() => import('./components/Experience'));
const Introduction = lazy(() => import('./components/Introduction'));
const Footer = lazy(() => import('../../components/Footer'));
const Reviews = lazy(() => import('../../commonSections/Reviews'));
export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <Introduction />
      <Expirience />
      <Location />
      <Reviews textColor={'dark'} theme={'dark'} />
      <Footer />
    </Suspense>
  );
};
