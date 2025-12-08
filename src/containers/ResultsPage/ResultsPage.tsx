import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';

import Footer from '../../components/Footer';
import CaseStudies from './components/CaseStudies';
import DataIntegration from './components/DataIntegration';
import HeroSection from './components/HeroSection';
import ImpactAtAGlance from './components/ImpactAtAGlance';
import MeasurementFramework from './components/MeasurementFramework';
import SuccessDefinition from './components/SuccessDefinition';

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
