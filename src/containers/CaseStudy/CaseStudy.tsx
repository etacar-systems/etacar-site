import React, { lazy, Suspense, useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';

import { Location } from '../../components/Location';

const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Footer = lazy(() => import('../../components/Footer'));
const Reviews = lazy(() => import('../../commonSections/Reviews'));
const Welcome = lazy(() => import('./components/Welcome'));
export const CaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <FadeInSection>
          <Welcome />
        </FadeInSection>
        <FadeInSection>
          <CaseStudies />
        </FadeInSection>
        <FadeInSection>
          <Location />
        </FadeInSection>
        <FadeInSection>
          <Reviews textColor='dark' theme='dark' />
        </FadeInSection>
        <Footer />
      </div>
    </Suspense>
  );
};
