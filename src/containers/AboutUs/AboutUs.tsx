'use client';

import { lazy, Suspense, useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';
import { Location } from '../../components/Location';

const Expirience = lazy(() => import('./components/Experience'));
const Introduction = lazy(() => import('./components/Introduction'));
const Mission = lazy(() => import('./components/Mission'));
const Footer = lazy(() => import('../../components/Footer'));
const Reviews = lazy(() => import('../../commonSections/Reviews'));

const TeamHero = lazy(() => import('./components/TeamHero'));
const OurStory = lazy(() => import('./components/OurStory'));
const WhoWeAre = lazy(() => import('./components/WhoWeAre'));
const NeuroscienceSection = lazy(() => import('./components/NeuroscienceSection'));
const AIPhilosophy = lazy(() => import('./components/AIPhilosophy'));
const LeadershipTeam = lazy(() => import('./components/LeadershipTeam'));
const BroaderTeam = lazy(() => import('./components/BroaderTeam'));
const ClientWork = lazy(() => import('./components/ClientWork'));

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
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

      {/* <FadeInSection>
        <TeamGrid members={sampleMembers} columns={3} />
      </FadeInSection> */}

      <FadeInSection>
        <Mission />
      </FadeInSection>

      <FadeInSection>
        <Location />
      </FadeInSection>

      <FadeInSection>
        <Reviews textColor={'dark'} theme={'dark'} />
      </FadeInSection>

      <Footer />
    </Suspense>
  );
};
