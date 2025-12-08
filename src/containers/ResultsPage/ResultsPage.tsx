'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';

// Динамический импорт компонентов
const HeroSection = dynamic(() => import('./components/HeroSection'), { ssr: false, loading: () => <Loader /> });
const SuccessDefinition = dynamic(() => import('./components/SuccessDefinition'), {
  ssr: false,
});
const ImpactAtAGlance = dynamic(() => import('./components/ImpactAtAGlance'), {
  ssr: false,
});
const CaseStudies = dynamic(() => import('./components/CaseStudies'), { ssr: false, loading: () => <Loader /> });
const MeasurementFramework = dynamic(() => import('./components/MeasurementFramework'), {
  ssr: false,
});
const DataIntegration = dynamic(() => import('./components/DataIntegration'), {
  ssr: false,
});
const Footer = dynamic(() => import('../../components/Footer'), { ssr: false });

export const ResultsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main style={{ flex: 1, boxSizing: 'border-box' }}>
        <FadeInSection>
          <HeroSection />
        </FadeInSection>

        <FadeInSection>
          <SuccessDefinition />
        </FadeInSection>

        <FadeInSection>
          <ImpactAtAGlance />
        </FadeInSection>

        <FadeInSection>
          <CaseStudies />
        </FadeInSection>

        <FadeInSection>
          <MeasurementFramework />
        </FadeInSection>

        <FadeInSection>
          <DataIntegration />
        </FadeInSection>
      </main>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
};
