import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import FlagshipServices from './components/FlagshipServices';
import HeroSection from './components/HeroSection';
import WhatWeDo from './components/WhatWeDo';
import WhoWeWorkWith from './components/WhoWeWorkWith';

import ExperienceSection from './components/ExperienceSection';
import ResultsMeasure from './components/ResultsMeasure';

import Footer from '../../components/Footer';
import FinalCTA from './components/FinalCTA/FinalCTA';
import { QuickImpact } from '@/containers/Home/components/QuickImpact';

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <WhatWeDo />
      </FadeInSection>
      <FadeInSection>
        <FlagshipServices />
      </FadeInSection>
      <FadeInSection>
        <WhoWeWorkWith />
      </FadeInSection>
      <FadeInSection>
        <QuickImpact />
      </FadeInSection>
      <FadeInSection>
        <ResultsMeasure />
      </FadeInSection>
      <FadeInSection>
        <ExperienceSection />
      </FadeInSection>
      <FadeInSection>
        <FinalCTA />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
};
