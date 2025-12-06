'use client';

import React, { lazy, Suspense, useEffect } from 'react';
import Reviews from '../../commonSections/Reviews';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';
import GetEstimationForm from './components/GetEstimationForm';

const HeroSection = lazy(() => import('./components/HeroSection'));
const WhoWeWorkWith = lazy(() => import('./components/WhoWeWorkWith'));
const WhatWeDo = lazy(() => import('./components/WhatWeDo'));
const FlagshipServices = lazy(() => import('./components/FlagshipServices'));
const Development = lazy(() => import('./components/Development'));
const ResultsMeasure = lazy(() => import('./components/ResultsMeasure'));
const HowWeWork = lazy(() => import('./components/HowWeWork'));
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const FinalCTA = lazy(() => import('./components/FinalCTA/FinalCTA'));
const Footer = lazy(() => import('../../components/Footer'));

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <FadeInSection>
          <HeroSection />
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
          <Development />
        </FadeInSection>
        <FadeInSection>
          <ResultsMeasure />
        </FadeInSection>
        <FadeInSection>
          <HowWeWork />
        </FadeInSection>
        <FadeInSection>
          <ExperienceSection />
        </FadeInSection>
        <FadeInSection>
          <FinalCTA />
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
