'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';
import GetEstimationForm from './components/GetEstimationForm';

const HeroSection = dynamic(() => import('./components/HeroSection'), { ssr: false, loading: () => <Loader /> });
const WhoWeWorkWith = dynamic(() => import('./components/WhoWeWorkWith'), { ssr: false });
const WhatWeDo = dynamic(() => import('./components/WhatWeDo'), { ssr: false });
const FlagshipServices = dynamic(() => import('./components/FlagshipServices'), {
  ssr: false,
});
const Development = dynamic(() => import('./components/Development'), { ssr: false });
const ResultsMeasure = dynamic(() => import('./components/ResultsMeasure'), { ssr: false });
const HowWeWork = dynamic(() => import('./components/HowWeWork'), { ssr: false });
const ExperienceSection = dynamic(() => import('./components/ExperienceSection'), {
  ssr: false,
});
const FinalCTA = dynamic(() => import('./components/FinalCTA/FinalCTA'), { ssr: false });
const Reviews = dynamic(() => import('../../commonSections/Reviews'), { ssr: false });
const Footer = dynamic(() => import('../../components/Footer'), { ssr: false });

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
        <Reviews arrowColor='dark' theme='blueLight' />
      </FadeInSection>

      <FadeInSection>
        <GetEstimationForm />
      </FadeInSection>

      <Footer />
    </div>
  );
};
