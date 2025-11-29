import React, { lazy, Suspense, useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';

// Alplabetical order is REQUIRED!

const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Development = lazy(() => import('./components/Development'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Footer = lazy(() => import('../../components/Footer'));
const GetEstimationForm = lazy(() => import('./components/GetEstimationForm'));
const Industries = lazy(() => import('../../commonSections/Industries'));
const Reviews = lazy(() => import('../../commonSections/Reviews'));
const WhatWeDo = lazy(() => import('./components/WhatWeDo'));
const Welcome = lazy(() => import('./components/Welcome'));

export const Home: React.FC = () => {
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
          <WhatWeDo />
        </FadeInSection>
        <FadeInSection>
          <Development />
        </FadeInSection>
        <FadeInSection>
          <HowItWorks />
        </FadeInSection>
        <FadeInSection>
          <CaseStudies />
        </FadeInSection>
        <FadeInSection>
          <Industries />
        </FadeInSection>
        <FadeInSection>
          <Reviews arrowColor='dark' theme='blueLight' />
        </FadeInSection>
        <FadeInSection>
          <GetEstimationForm />
        </FadeInSection>
        <Footer />
      </div>
    </Suspense>
  );
};
