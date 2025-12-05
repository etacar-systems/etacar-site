'use client';

import { lazy, Suspense, useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';

const ServicesHero = lazy(() => import('./components/ServicesHero'));
const AIStrategy = lazy(() => import('./components/AIStrategy'));
const AICopilots = lazy(() => import('./components/AICopilots'));
const ProcessAutomation = lazy(() => import('./components/ProcessAutomation'));
const DocumentIntelligence = lazy(() => import('./components/DocumentIntelligence'));
const SoftwareDelivery = lazy(() => import('./components/SoftwareDelivery'));
const AIGovernance = lazy(() => import('./components/AIGovernance'));
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
          <ServicesHero />
        </FadeInSection>
        <FadeInSection>
          <AIStrategy />
        </FadeInSection>
        <FadeInSection>
          <AICopilots />
        </FadeInSection>
        <FadeInSection>
          <ProcessAutomation />
        </FadeInSection>
        <FadeInSection>
          <DocumentIntelligence />
        </FadeInSection>
        <FadeInSection>
          <SoftwareDelivery />
        </FadeInSection>
        <FadeInSection>
          <AIGovernance />
        </FadeInSection>
        <FadeInSection>
          <Models />
        </FadeInSection>
        <Footer />
      </div>
    </Suspense>
  );
};
