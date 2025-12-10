import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import GetEstimationForm from './components/GetEstimationForm';

import FlagshipServices from './components/FlagshipServices';
import HeroSection from './components/HeroSection';
import WhatWeDo from './components/WhatWeDo';
import WhoWeWorkWith from './components/WhoWeWorkWith';

import Development from './components/Development';
import ExperienceSection from './components/ExperienceSection';
import HowWeWork from './components/HowWeWork';
import ResultsMeasure from './components/ResultsMeasure';

import Reviews from '../../commonSections/Reviews';
import Footer from '../../components/Footer';
import FinalCTA from './components/FinalCTA/FinalCTA';

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
        <GetEstimationForm />
      </FadeInSection>
      <FadeInSection>
        <Reviews />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
};
