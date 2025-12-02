import React, { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import { HeroSection } from './components/HeroSection';
import { SuccessDefinition } from './components/SuccessDefinition';
import { ImpactAtAGlance } from './components/ImpactAtAGlance';
import { CaseStudies } from './components/CaseStudies';
import { MeasurementFramework } from './components/MeasurementFramework';
import { Footer } from '../../components/Footer/Footer';
import DataIntegration from './components/DataIntegration';

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
      <Footer />
    </div>
  );
};
