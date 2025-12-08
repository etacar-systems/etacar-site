'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';

const ServicesHero = dynamic(() => import('./components/ServicesHero'), { ssr: false, loading: () => <Loader /> });
const AIStrategy = dynamic(() => import('./components/AIStrategy'), { ssr: false });
const AICopilots = dynamic(() => import('./components/AICopilots'), { ssr: false });
const ProcessAutomation = dynamic(() => import('./components/ProcessAutomation'), {
  ssr: false,
});
const DocumentIntelligence = dynamic(() => import('./components/DocumentIntelligence'), {
  ssr: false,
});
const SoftwareDelivery = dynamic(() => import('./components/SoftwareDelivery'), {
  ssr: false,
});
const AIGovernance = dynamic(() => import('./components/AIGovernance'), { ssr: false });
const Models = dynamic(() => import('./components/Models'), { ssr: false });
const Footer = dynamic(() => import('../../components/Footer'), { ssr: false });

export const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
};
