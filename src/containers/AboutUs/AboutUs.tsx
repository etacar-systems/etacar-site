'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';
import { Location } from '../../components/Location';

const TeamHero = dynamic(() => import('./components/TeamHero'), { ssr: false, loading: () => <Loader /> });
const OurStory = dynamic(() => import('./components/OurStory'), { ssr: false });
const Introduction = dynamic(() => import('./components/Introduction'), { ssr: false });
const Expirience = dynamic(() => import('./components/Experience'), { ssr: false });
const LeadershipTeam = dynamic(() => import('./components/LeadershipTeam'), { ssr: false });
const WhoWeAre = dynamic(() => import('./components/WhoWeAre'), { ssr: false });
const NeuroscienceSection = dynamic(() => import('./components/NeuroscienceSection'), {
  ssr: false,
});
const AIPhilosophy = dynamic(() => import('./components/AIPhilosophy'), { ssr: false });
const BroaderTeam = dynamic(() => import('./components/BroaderTeam'), { ssr: false });
const ClientWork = dynamic(() => import('./components/ClientWork'), { ssr: false });
const Mission = dynamic(() => import('./components/Mission'), { ssr: false });
const Reviews = dynamic(() => import('../../commonSections/Reviews'), { ssr: false });
const Footer = dynamic(() => import('../../components/Footer'), { ssr: false });

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FadeInSection>
        <TeamHero />
      </FadeInSection>

      <FadeInSection>
        <OurStory />
      </FadeInSection>

      <FadeInSection>
        <Introduction />
        <Expirience />
      </FadeInSection>

      <FadeInSection>
        <LeadershipTeam />
      </FadeInSection>

      <FadeInSection>
        <WhoWeAre />
        <NeuroscienceSection />
      </FadeInSection>

      <FadeInSection>
        <AIPhilosophy />
      </FadeInSection>

      <FadeInSection>
        <BroaderTeam />
      </FadeInSection>

      <FadeInSection>
        <ClientWork />
      </FadeInSection>

      <FadeInSection>
        <Mission />
      </FadeInSection>

      <FadeInSection>
        <Location />
      </FadeInSection>

      <FadeInSection>
        <Reviews textColor='dark' theme='dark' />
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
};
