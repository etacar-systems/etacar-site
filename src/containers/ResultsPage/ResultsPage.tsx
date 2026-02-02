import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import style from './ResultsPage.module.scss';

import Reviews from '@/commonSections/Reviews';
import { Location } from '@/components/Location';
import Footer from '../../components/Footer';
import CaseStudies from './components/CaseStudies';
import { CaseStudiesResult } from './components/CaseStudiesResult';
import DataIntegration from './components/DataIntegration';
import HeroSection from './components/HeroSection';
import ImpactAtAGlance from './components/ImpactAtAGlance';
import MeasurementFramework from './components/MeasurementFramework';
import SuccessDefinition from './components/SuccessDefinition';
import { Welcome } from './components/Welcome';

export const ResultsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <main style={{ flex: 1, boxSizing: 'border-box', backgroundColor: '#0b161c' }}>
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
        <FadeInSection>
          <Welcome />
        </FadeInSection>
        <FadeInSection>
          <CaseStudiesResult />
        </FadeInSection>
        <FadeInSection>
          <Location />
        </FadeInSection>
        <FadeInSection>
          <Reviews />
        </FadeInSection>
      </main>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
};
