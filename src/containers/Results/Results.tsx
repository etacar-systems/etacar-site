import React, { lazy, Suspense, useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';

const Hero = lazy(() => import('./components/Hero'));
const HowWeDefineSuccess = lazy(() => import('./components/HowWeDefineSuccess'));
const ImpactAtGlance = lazy(() => import('./components/ImpactAtGlance'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const WhatWeMeasure = lazy(() => import('./components/WhatWeMeasure'));
const WorkingWithData = lazy(() => import('./components/WorkingWithData'));
const Footer = lazy(() => import('../../components/Footer'));

export const Results: React.FC = () => {
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
          <HowWeDefineSuccess />
        </FadeInSection>
        <FadeInSection>
          <ImpactAtGlance />
        </FadeInSection>
        <FadeInSection>
          <CaseStudies />
        </FadeInSection>
        <FadeInSection>
          <WhatWeMeasure />
        </FadeInSection>
        <FadeInSection>
          <WorkingWithData />
        </FadeInSection>
        <Footer />
      </div>
    </Suspense>
  );
};
