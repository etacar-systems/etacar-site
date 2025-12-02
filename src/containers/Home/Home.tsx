import React, { lazy, Suspense, useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';

// Alphabetical order is REQUIRED!

const FinalCTA = lazy(() => import('./components/FinalCTA'));
const FlagshipServices = lazy(() => import('./components/FlagshipServices'));
const Footer = lazy(() => import('../../components/Footer'));
const GetEstimationForm = lazy(() => import('./components/GetEstimationForm'));
const Hero = lazy(() => import('./components/Welcome')); // Assuming Welcome is Hero
const HowWeWork = lazy(() => import('./components/HowWeWork'));
const Industries = lazy(() => import('../../commonSections/Industries'));
const ResultsYouCanMeasure = lazy(() => import('./components/ResultsYouCanMeasure'));
const Reviews = lazy(() => import('../../commonSections/Reviews'));
const TwentyYearsInAI = lazy(() => import('./components/TwentyYearsInAI'));
const WhatWeDo = lazy(() => import('./components/WhatWeDo'));
const WhoWeWorkWith = lazy(() => import('./components/WhoWeWorkWith'));

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>
          <WhoWeWorkWith />
        </FadeInSection>
        <FadeInSection>
          <WhatWeDo />
        </FadeInSection>
        <FadeInSection>
          <FlagshipServices />
        </FadeInSection>
        <FadeInSection>
          <ResultsYouCanMeasure />
        </FadeInSection>
        <FadeInSection>
          <HowWeWork />
        </FadeInSection>
        <FadeInSection>
          <TwentyYearsInAI />
        </FadeInSection>
        <FadeInSection>
          <FinalCTA />
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
