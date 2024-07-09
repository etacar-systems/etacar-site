import React, { lazy, Suspense, useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';

// Alplabetical order is REQUIRED!

const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Development = lazy(() => import('./components/Development'));
const Footer = lazy(() => import('../../components/Footer'));
const GetEstimationForm = lazy(() => import('./components/GetEstimationForm'));
const Industries = lazy(() => import('../../commonSections/Industries'));
const Mission = lazy(() => import('./components/Mission'));
const Reviews = lazy(() => import('../../commonSections/Reviews'));
const Services = lazy(() => import('./components/Services'));
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
          <Mission />
        </FadeInSection>
        <FadeInSection>
          <Development />
        </FadeInSection>
        <FadeInSection>
          <CaseStudies />
        </FadeInSection>
        <FadeInSection>
          <Services />
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
