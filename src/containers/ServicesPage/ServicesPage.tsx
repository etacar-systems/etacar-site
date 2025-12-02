import React, { lazy, Suspense, useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';

const Introduction = lazy(() => import('./components/Introduction'));
const Services = lazy(() => import('./components/Services'));
const Models = lazy(() => import('./components/Models'));
const Footer = lazy(() => import('../../components/Footer'));

export const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <FadeInSection>
          <Introduction />
        </FadeInSection>
        <FadeInSection>
          <Services />
        </FadeInSection>
        <FadeInSection>
          <Models />
        </FadeInSection>
        <Footer />
      </div>
    </Suspense>
  );
};
