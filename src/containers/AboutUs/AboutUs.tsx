import { lazy, Suspense, useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';
import { Location } from '../../components/Location';

const Expirience = lazy(() => import('./components/Experience'));
const Introduction = lazy(() => import('./components/Introduction'));
const Mission = lazy(() => import('./components/Mission'));
const Footer = lazy(() => import('../../components/Footer'));
const Reviews = lazy(() => import('../../commonSections/Reviews'));
export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <FadeInSection>
        <Introduction />
        <Expirience />
      </FadeInSection>
      <FadeInSection>
        <Mission />
      </FadeInSection>
      <FadeInSection>
        <Location />
      </FadeInSection>
      <FadeInSection>
        <Reviews textColor={'dark'} theme={'dark'} />
      </FadeInSection>
      <Footer />
    </Suspense>
  );
};
